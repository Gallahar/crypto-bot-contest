'use client'
import Image from 'next/image'
import phoneScreenLight from '@/assets/hero/phoneScreenLight.webp'
import phoneScreenDark from '@/assets/hero/phoneScreenDark.webp'
import s from './Iphone.module.css'
import { useTheme } from 'next-themes'
import { MockupSvg } from './Mockup'

export const Iphone = () => {
	const { theme } = useTheme()

	return (
		<div className={s.iphoneWrapper}>
			<Image
				className={s.phoneScreen}
				alt='phone-screen'
				priority
				src={theme === 'light' ? phoneScreenLight : phoneScreenDark}
			/>
			<MockupSvg className={s.mockup} />
		</div>
	)
}
