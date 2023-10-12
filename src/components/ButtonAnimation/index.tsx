'use client'

import s from './button-animation.module.css'
import Image from 'next/image'
import treeLight from '@/assets/features/treeLight.png'
import treeDark from '@/assets/features/treeDark.png'
import { IconCursor } from '@/assets/icons/IconCursor'
import { useTheme } from 'next-themes'

export const ButtonAnimation = () => {
	const { theme } = useTheme()

	return (
		<div className={s.container}>
			<button className={s.button}>
				<Image alt='treeImg' src={theme === 'light' ? treeLight : treeDark} />
				Create App
			</button>
			<IconCursor className={s.cursor} />
		</div>
	)
}
