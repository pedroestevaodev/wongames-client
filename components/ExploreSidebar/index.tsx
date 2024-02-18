'use client';

import React, { useState } from 'react';
import * as S from './styles';
import { RiCloseLine, RiFilter2Line } from '@remixicon/react';
import Heading from '../Heading';
import Checkbox from '../Checkbox';
import Radio from '../Radio';
import Button from '../Button';

type FieldProps = {
	label: string;
	name: string;
};

type ValuesProps = {
	[field: string]: boolean | string;
};

export type ItemProps = {
	title: string;
	name: string;
	type: string;
	fields: FieldProps[];
};

export type ExploreSidebarProps = {
	items: ItemProps[];
	initialValues?: ValuesProps;
	onFilter: (values: ValuesProps) => void;
};

const ExploreSidebar = ({
	items,
	onFilter,
	initialValues = {}
}: ExploreSidebarProps) => {
	const [values, setValues] = useState(initialValues);
	const [isOpen, setIsOpen] = useState(false);

	const handleChange = (name: string, value: string | boolean) => {
		setValues((s) => ({ ...s, [name]: value }));
	};

	const handleFilter = () => {
		onFilter(values);
		setIsOpen(false);
	};

	return (
		<S.ExploreSidebarContainer isOpen={isOpen}>
			<S.Overlay aria-hidden={isOpen} />
			<S.IconContainer>
				<RiFilter2Line
					aria-label="open filters"
					onClick={() => setIsOpen(true)}
				/>
				<RiCloseLine
					aria-label="close filters"
					onClick={() => setIsOpen(false)}
				/>
			</S.IconContainer>

			<S.Content>
				{items.map((item) => (
					<S.Items key={item.title}>
						<Heading lineBottom lineColor="secondary" size="small">
							{item.title}
						</Heading>

						{item.type === 'checkbox' &&
							item.fields.map((field) => (
								<Checkbox
									key={field.name}
									name={field.name}
									label={field.label}
									labelFor={field.name}
									checked={!!values[field.name]}
									onCheck={(v) => handleChange(field.name, v)}
								/>
							))}

						{item.type === 'radio' &&
							item.fields.map((field) => (
								<Radio
									key={field.name}
									id={field.name}
									value={field.name}
									name={item.name}
									label={field.label}
									labelFor={field.name}
									defaultChecked={field.name === values[item.name]}
									onChange={() => handleChange(item.name, field.name)}
								/>
							))}
					</S.Items>
				))}
			</S.Content>

			<S.Footer>
				<Button fullWidth size="medium" onClick={handleFilter}>
					Filter
				</Button>
			</S.Footer>
		</S.ExploreSidebarContainer>
	);
};

export default ExploreSidebar;
