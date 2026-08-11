'use client';

import React, { useEffect, useState } from 'react';
import * as S from './styles';

export type DropdownProps = {
	title: React.ReactNode;
	children: React.ReactNode;
	/** Controlled open state. When set, `onOpenChange` should also be provided. */
	isOpen?: boolean;
	onOpenChange?: (open: boolean) => void;
};

const Dropdown = ({
	title,
	children,
	isOpen: controlledOpen,
	onOpenChange,
}: DropdownProps) => {
	const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
	const isControlled = controlledOpen !== undefined;
	const isOpen = isControlled ? controlledOpen : uncontrolledOpen;

	const setIsOpen = (open: boolean) => {
		if (!isControlled) {
			setUncontrolledOpen(open);
		}
		onOpenChange?.(open);
	};

	useEffect(() => {
		document.body.style.overflow = isOpen ? 'hidden' : 'initial';

		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isOpen]);

	return (
		<S.DropdownContainer $isOpen={isOpen}>
			<S.Title
				role="button"
				tabIndex={0}
				aria-expanded={isOpen}
				onClick={() => setIsOpen(!isOpen)}
				onKeyDown={(event) => {
					if (event.key === 'Enter' || event.key === ' ') {
						event.preventDefault();
						setIsOpen(!isOpen);
					}
				}}
			>
				{title}
			</S.Title>

			<S.Content aria-hidden={!isOpen}>{children}</S.Content>
			<S.Overlay
				aria-hidden={!isOpen}
				onClick={() => setIsOpen(false)}
			/>
		</S.DropdownContainer>
	);
};

export default Dropdown;
