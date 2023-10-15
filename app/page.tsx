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
			<Heading color="black" lineLeft>
				Won Games
			</Heading>
		</>
	);
};

export default Home;
