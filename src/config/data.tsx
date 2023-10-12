import bot1 from '@/assets/hero/Ellipse 1.png'
import bot2 from '@/assets/hero/Ellipse 2.png'
import bot3 from '@/assets/hero/Ellipse 3.png'
import bot4 from '@/assets/hero/Ellipse 4.png'
import bot5 from '@/assets/hero/Ellipse 5.png'
import pinkImgTop from '@/assets/useCases/pink1.png'
import pinkImgBot from '@/assets/useCases/pink2.png'
import yellowImgTop from '@/assets/useCases/yellow1.png'
import yellowImgBot from '@/assets/useCases/yellow2.svg'
import blueImgTop from '@/assets/useCases/blue1.png'
import blueImgBot from '@/assets/useCases/blue2.png'

export const links = [
	{ title: 'Use cases', href: '#use-cases' },
	{ title: 'Features', href: '#features' },
	{ title: 'How to start', href: '#instructions' },
]

export const bots = [bot2, bot1, bot4, bot5, bot3]

export const useCasesInfo = [
	{
		titleAccent: 'Instant\nAuto Sales:',
		titleDefault: '\nBoost convention',
		description:
			'Immediately deliver digital products and services to your users.',
		buttonText: 'Open API Docs',
	},
	{
		titleAccent: 'Channels\nintegration:',
		titleDefault: '\nSeamless access',
		description: 'Automatically unlock exclusive content to your users.',
		buttonText: 'Open API Docs',
	},
	{
		titleAccent: 'Endless\ncustomization:',
		titleDefault: '\nwith Webhooks',
		description:
			'Receive successful payment notifications in real-time. Integrate to any scenario of your service.',
		buttonText: 'Open API Docs',
	},
]

export const useCasesCards = [
	{
		isFillImg: true,
		variant: 'pink',
		imgTop: pinkImgTop,
		imgBot: pinkImgBot,
	},
	{
		variant: 'yellow',
		imgTop: yellowImgTop,
		imgBot: yellowImgBot,
	},
	{
		variant: 'blue',
		imgTop: blueImgTop,
		imgBot: blueImgBot,
	},
]
