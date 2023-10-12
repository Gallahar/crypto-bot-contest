'use client'

import { ComponentPropsWithoutRef, FC } from 'react'
import Image from 'next/image'
import logoImg from '@/assets/Logo_img.png'
import { Button } from '@/ui'
import s from './nav.module.css'
import { links } from '@/config/data'
import { ThemeSwitcher } from '../ThemeSwitcher'
import { useTheme } from 'next-themes'

interface NavProps extends ComponentPropsWithoutRef<'nav'> {
	isFooter?: boolean
}

export const Nav: FC<NavProps> = ({ isFooter, className, ...rest }) => {
	const { theme } = useTheme()
	return (
		<nav className={`${s.nav} ${className}`} {...rest}>
			<Image  src={logoImg} alt='logo' />
			<div className={s.navList}>
				{links.map(({ title, href }) => (
					<a key={title} href={href}>
						<button className={`${s.listItem} ${isFooter ? s.dark : s.light}`}>
							{title}
						</button>
					</a>
				))}
			</div>
			<div className={s.buttonsWrapper}>
				{!isFooter && <ThemeSwitcher />}
				<Button
					variant={isFooter || theme === 'dark' ? 'secondary' : 'primary'}
				>
					Get started
				</Button>
			</div>
		</nav>
	)
}
