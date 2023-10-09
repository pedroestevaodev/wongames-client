'use client';

import { useTheme } from 'next-themes';
import { Switch } from '@nextui-org/react';
import { MoonIcon } from './MoonIcon';
import { SunIcon } from './SunIcon';

const ThemeToggle = () => {
	// const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	return (
		<Switch
			defaultChecked
			size="lg"
			color="secondary"
			thumbIcon={({ isSelected, className }) =>
				isSelected ? (
					<SunIcon className={className} />
				) : (
					<MoonIcon className={className} />
				)
			}
			onClick={toggleTheme}
		/>
	);
};

export default ThemeToggle;
