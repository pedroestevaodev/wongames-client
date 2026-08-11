'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import * as S from './styles';

export type SearchFilterBadgeProps = {
	term: string;
	onClear: () => void;
};

const SearchFilterBadge = ({ term, onClear }: SearchFilterBadgeProps) => {
	return (
		<S.Badge role="status" aria-label={`Searching for ${term}`}>
			<S.Label>
				Search: <strong>{term}</strong>
			</S.Label>
			<S.ClearButton
				type="button"
				aria-label="Clear search filter"
				onClick={onClear}
			>
				<FontAwesomeIcon icon={faXmark} className="!size-[12px]" />
			</S.ClearButton>
		</S.Badge>
	);
};

export default SearchFilterBadge;
