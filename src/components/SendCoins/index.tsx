'use client'

import sendCoinsLight from '@/assets/features/sendCoinsLight.webp'
import sendCoinsDark from '@/assets/features/sendCoinsDark.webp'
import Image from 'next/image'

import { Heading, BaseText, ExternalLink } from '@/ui'
import { Card } from '@/ui/Card'
import s from './send-coins.module.css'
import { useTheme } from 'next-themes'

export const SendCoins = () => {
	const { theme } = useTheme()

	return (
		<Card className={s.sendCoins}>
			<Image
				alt='bot_Mockup'
				src={theme === 'light' ? sendCoinsLight : sendCoinsDark}
			/>
			<Heading as='h3'>Send coins to users</Heading>
			<BaseText variant='secondary'>
				Automate payouts to users with <ExternalLink>transfer</ExternalLink> API
				method
			</BaseText>
		</Card>
	)
}
