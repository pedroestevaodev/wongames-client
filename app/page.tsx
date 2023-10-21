import React from 'react';
import Main from '@/components/Main';
import ThemeToggle from '@/components/ThemeToggle';
import Logo from '@/components/Logo';
import Heading from '@/components/Heading';
import Button from '@/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import Menu from '@/components/Menu';
import Ribbon from '@/components/Ribbon';

const Home = () => {
	return (
		<>
			<Main />
			<ThemeToggle />
			<Logo hideOnMobile color="black" />
			<Heading color="black" lineLeft>
				Won Games
			</Heading>
			<Button size="large" icon={<FontAwesomeIcon icon={faCartArrowDown} />}>
				Buy now
			</Button>
			<Menu />
			<div className="relative h-[5rem] w-[10rem] bg-black">
				<Ribbon color="primary" size="small">
					Teste
				</Ribbon>
			</div>
		</>
	);
};

export default Home;
