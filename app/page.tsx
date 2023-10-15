import React from 'react';
import Main from '@/components/Main';
import ThemeToggle from '@/components/ThemeToggle';
import Heading from '@/components/Heading';
import Logo from '@/components/Logo';

const Home = () => {
	return (
		<>
			<Main />
			<ThemeToggle />
			<Logo hideOnMobile color="black" />
			<Heading color="black">
				<span>Teste</span>
			</Heading>
		</>
	);
};

export default Home;
