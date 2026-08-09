'use client';

import React, { useState, useTransition } from 'react';
import * as z from "zod";
import Link from 'next/link';
import TextField from '../TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser, faCircleExclamation, faCheck } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';
import { useMutation } from "@apollo/client";
import { MUTATION_REGISTER } from "@/graphql/mutations/register";
import { FormError, FormLink, FormLoading, FormSuccess, FormWrapper } from "../Form";
import { RegisterSchema } from "@/schemas/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { login } from "@/actions/login";
import { useSession, signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

const getErrorMessage = (error: unknown): string => {
	if (typeof error === "string") return error;
	if (error instanceof Error) return error.message;
	if (
		error &&
		typeof error === "object" &&
		"graphQLErrors" in error &&
		Array.isArray(error.graphQLErrors) &&
		error.graphQLErrors[0]?.message
	) {
		return String(error.graphQLErrors[0].message);
	}
	if (error && typeof error === "object" && "message" in error) {
		return String(error.message);
	}
	return "Something went wrong!";
};

const FormSignUp = () => {
	const { update } = useSession();

	const [error, setError] = useState<string | undefined>("");
	const [success, setSuccess] = useState<string | undefined>("");
	const [isPending, startTransition] = useTransition();

	const form = useForm<z.infer<typeof RegisterSchema>>({
		resolver: zodResolver(RegisterSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const [createUser] = useMutation(MUTATION_REGISTER);

	const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
		setError("");
        setSuccess("");

		const validatedFields = RegisterSchema.safeParse(values);

		if (!validatedFields.success) {
			return;
		}

		startTransition(() => {
			createUser({
				variables: {
					input: {
						username: values.username,
						email: values.email,
						password: values.password,
					},
				},
			})
				.then(async (data) => {
					if (data.errors?.length) {
						setError(data.errors[0].message);
						return;
					}

					if (!data.data?.register) {
						return;
					}

					const result = await login({
						email: values.email,
						password: values.password,
					});

					if (result?.error) {
						setError(result.error);
						return;
					}

					form.reset();
					setSuccess("Success to create user!");
					await signIn("credentials", { redirectTo: DEFAULT_LOGIN_REDIRECT });
					await update();
				})
				.catch((error) => {
					console.log("Error in sign up", error);
					setError(getErrorMessage(error));
				});
		});

	};

	return (
		<FormWrapper>
			{!!error && (
				<FormError>
					<FontAwesomeIcon icon={faCircleExclamation} />
					{error}
				</FormError>
			)}
			{!!success && (
				<FormSuccess>
					<FontAwesomeIcon icon={faCheck} />
					{success}
				</FormSuccess>
			)}

			<form
				method="POST"
				onSubmit={form.handleSubmit(onSubmit)}
			>
				<Controller
					control={form.control}
					name="username"
					render={({ field, fieldState }) => (
						<TextField
							{...field}
							type="text"
							placeholder="Username"
							icon={<FontAwesomeIcon icon={faUser} />}
							error={fieldState.error?.message}
							disabled={isPending}
						/>
					)}
				/>
				<Controller
					control={form.control}
					name="email"
					render={({ field, fieldState }) => (
						<TextField
							{...field}
							type="email"
							placeholder="Email"
							icon={<FontAwesomeIcon icon={faEnvelope} />}
							error={fieldState.error?.message}
							disabled={isPending}
						/>
					)}
				/>
				<Controller
					control={form.control}
					name="password"
					render={({ field, fieldState }) => (
						<TextField
							{...field}
							type="password"
							placeholder="Password"
							icon={<FontAwesomeIcon icon={faLock} />}
							error={fieldState.error?.message}
							disabled={isPending}
						/>
					)}
				/>

				<Button
					type="submit"
					size="large"
					fullWidth
					disabled={isPending}
				>
					{isPending ? (
						<FormLoading src="/img/dots.svg" alt="Loading" />
					) : (
						<span>Sign up now</span>
					)}
				</Button>

				<FormLink>
					Already have an account? <Link href="/sign-in">Sign in</Link>
				</FormLink>
			</form>
		</FormWrapper>
	);
};

export default FormSignUp;
