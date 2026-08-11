'use client';

import React, { FormEvent, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';
import { buildGamesSearchHref } from '@/helpers/build-games-search-href';
import { startProgress } from '@/components/NextProgressbar';
import * as S from './styles';

export type MenuSearchProps = {
	/** Called when the search panel opens so sibling menus can close. */
	onOpen?: () => void;
};

const MenuSearch = ({ onOpen }: MenuSearchProps) => {
	const router = useRouter();
	const inputRef = useRef<HTMLInputElement>(null);
	const [isOpen, setIsOpen] = useState(false);
	const [term, setTerm] = useState('');

	useEffect(() => {
		if (isOpen) {
			inputRef.current?.focus();
		}
	}, [isOpen]);

	const openSearch = () => {
		onOpen?.();
		setIsOpen(true);
	};

	const closeSearch = () => {
		setIsOpen(false);
		setTerm('');
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const href = buildGamesSearchHref(term);
		closeSearch();
		startProgress();
		router.push(href);
	};

	if (!isOpen) {
		return (
			<S.IconButton
				type="button"
				aria-label="Search"
				onClick={openSearch}
			>
				<FontAwesomeIcon icon={faMagnifyingGlass} className="!size-[16px]" />
			</S.IconButton>
		);
	}

	return (
		<S.SearchForm onSubmit={handleSubmit} role="search">
			<FontAwesomeIcon
				icon={faMagnifyingGlass}
				className="!size-[14px] shrink-0 text-white/70"
				aria-hidden
			/>
			<S.SearchInput
				ref={inputRef}
				type="search"
				name="name"
				value={term}
				placeholder="Search games"
				aria-label="Search games"
				autoComplete="off"
				onChange={(event) => setTerm(event.target.value)}
				onKeyDown={(event) => {
					if (event.key === 'Escape') {
						event.preventDefault();
						closeSearch();
					}
				}}
			/>
			<S.IconButton
				type="button"
				aria-label="Close search"
				onClick={closeSearch}
			>
				<FontAwesomeIcon icon={faXmark} className="!size-[14px]" />
			</S.IconButton>
		</S.SearchForm>
	);
};

export default MenuSearch;
