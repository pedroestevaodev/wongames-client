'use client';

import { useTheme } from 'next-themes';
import { Switch } from '@nextui-org/react';
import { MoonIcon } from './MoonIcon';
import { SunIcon } from './SunIcon';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
	const { theme, setTheme } = useTheme();
	const [active, setActive] = useState(false);

	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	useEffect(() => {
		setActive(theme === 'dark' ? true : false);
	}, [theme]);

	return (
		<Switch
			defaultChecked
			size="lg"
			color="secondary"
			isSelected={active}
			thumbIcon={({ isSelected, className }) =>
				isSelected ? (
					<SunIcon className={className} />
				) : (
					<MoonIcon className={className} />
				)
			}
			className="teste-switch"
			onClick={toggleTheme}
		/>
	);
};

export default ThemeToggle;
