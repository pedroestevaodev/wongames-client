import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const formatPrice = (price: number | bigint) => {
	return new Intl.NumberFormat('en', {
		style: 'currency',
		currency: 'USD'
	}).format(price);
};

export const formatDate = (date: string) => {
	return new Intl.DateTimeFormat('en-US', {
		day: 'numeric',
		month: 'short',
		year: 'numeric'
	}).format(new Date(date));
};

const DEFAULT_IMAGE_URL = '/img/empty.svg';

/**
 * Normalize Strapi/media URLs for next/image.
 * Missing covers must never become the string "null".
 */
export const formatImageUrl = (url: string | null | undefined): string => {
	if (typeof url === 'string' && url.length > 0 && url !== 'null') {
		return url;
	}

	return DEFAULT_IMAGE_URL;
};

export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs));
};
