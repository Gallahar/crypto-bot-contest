'use client'

import { useTheme } from 'next-themes'
import s from './theme-switcher.module.css'
import { motion } from 'framer-motion'
import { IconThemeDark, IconThemeLight } from '@/assets/icons'

export const ThemeSwitcher = () => {
	const { theme, setTheme } = useTheme()

	

	return (
		<motion.button
			className={s.switchBtn}
			whileHover={{
				scale: 1.2,
				transition: { duration: 0.2 },
			}}
			whileTap={{ scale: 0.9 }}
			onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
		>
			{theme === 'dark' ? <IconThemeDark /> : <IconThemeLight />}
		</motion.button>
	)
}
