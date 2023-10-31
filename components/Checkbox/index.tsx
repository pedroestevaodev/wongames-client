'use client';

import React, { InputHTMLAttributes, useState } from 'react';
import * as S from './styles';

export type CheckboxProps = {
	label?: string;
	labelFor?: string;
	labelColor?: 'white' | 'black';
	onCheck?: (status: boolean) => void;
} & InputHTMLAttributes<HTMLElement>;

const Checkbox = ({
	label,
	labelFor = '',
	labelColor = 'white',
	onCheck
}: CheckboxProps) => {
	const [checked, setChecked] = useState(false);

	const onChange = () => {
		const status = !checked;

		setChecked(status);

		!!onCheck && onCheck(status);
	};

	return (
		<S.CheckboxContainer className="flex items-center">
			<S.Input
				id={label}
				type="checkbox"
				onChange={onChange}
				checked={checked}
			/>
			{!!label && (
				<S.Label htmlFor={labelFor} labelColor={labelColor}>
					{label}
				</S.Label>
			)}
		</S.CheckboxContainer>
	);
};

export default Checkbox;
