import { useTheme } from 'mantra-theme-switcher';
import type { FC } from 'react';

import styles from './App.module.scss';
import trpc from './app/lib/trpc';

const App: FC = () => {
	const { toggleTheme, isDark, theme } = useTheme();

	const testTRPC = async (): Promise<void> => {
		const data = await trpc.todos.getUser.query('the input');
		console.log(data);
	};

	return (
		<div className={styles.appWrapper}>
			<h2>
				{isDark ? 'dark' : 'light'} here: {theme}
			</h2>
			<button
				className={styles.button}
				onClick={(): void => toggleTheme('dark')}
			>
				Toggle theme dark
			</button>
			<button
				className={styles.button}
				onClick={(): void => toggleTheme('light')}
			>
				Toggle theme light
			</button>
			<button className={styles.button} onClick={(): void => toggleTheme()}>
				Toggle
			</button>
			<button onClick={testTRPC}>Trigger trpc</button>
			<h1>Counter</h1>
		</div>
	);
};

export default App;
