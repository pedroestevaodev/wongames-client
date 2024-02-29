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
