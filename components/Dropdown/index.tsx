'use client';

import React, { useState } from 'react';
import * as S from './styles';

export type DropdownProps = {
	title: React.ReactNode;
	children: React.ReactNode;
};

const Dropdown = ({ title, children }: DropdownProps) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<S.DropdownContainer isOpen={isOpen}>
			<S.Title onClick={() => setIsOpen(!isOpen)}>{title}</S.Title>

			{/* {isOpen && <S.Content>{children}</S.Content>} */}
			<S.Content aria-hidden={!isOpen}>{children}</S.Content>
		</S.DropdownContainer>
	);
};

export default Dropdown;
