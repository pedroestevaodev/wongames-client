'use client';

import React from 'react';

const Index = ({ params }: { params: { slug: string } }) => {
	return (
		<div>
			<h1>{params.slug}</h1>
		</div>
	);
};

export default Index;
