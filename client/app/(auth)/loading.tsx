import React from 'react';

const AuthLoading = () => {
	return (
		<div
			className="flex min-h-screen w-full items-center justify-center bg-[#06092B]"
			aria-busy="true"
			aria-label="Loading"
		>
			<div className="h-10 w-10 animate-pulse rounded-full bg-[#F231A5]/60" />
		</div>
	);
};

export default AuthLoading;
