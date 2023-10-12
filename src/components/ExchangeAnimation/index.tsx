'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import s from './exchange-animation.module.css'
import { IconBtc, IconTon, IconUsdt } from '@/assets/icons'
import { stack } from '@/utils/stack'
import { IconArrowRight } from '@/assets/icons/IconArrowRight'
import { IconArrowLeft } from '@/assets/icons/IconArrowLeft'

const transition = {
	type: 'spring',
	damping: 25,
	stiffness: 120,
}

interface CurrencyItem {
	id: string
	svg: JSX.Element
}

const valutas = ['$', '€', '£']

const initialCurrencies = [
	{ id: 'usdt', svg: <IconUsdt /> },
	{ id: 'btc', svg: <IconBtc /> },
	{ id: 'ton', svg: <IconTon /> },
]

export const ExchangeAnimation = () => {
	const [activeIndex, setActiveIndex] = useState(0)

	const [currencies, setCurrencies] =
		useState<CurrencyItem[]>(initialCurrencies)

	useEffect(() => {
		let timeoutId = setTimeout(() => {
			setCurrencies((currencies) => stack(currencies))
		}, 1000)

		return () => clearTimeout(timeoutId)
	}, [currencies])

	useEffect(() => {
		let intervalId = setInterval(() => {
			if (activeIndex === valutas.length - 1) {
				setActiveIndex(0)
			} else {
				setActiveIndex((index) => index + 1)
			}
		}, 1000)

		return () => clearInterval(intervalId)
	}, [activeIndex])

	return (
		<div className={s.animationWrapper}>
			<div className={s.cryptoCurrencies}>
				{currencies.map(({ id, svg }, i) => (
					<motion.div
						transition={transition}
						className={`${s.currencyItem} ${
							i === currencies.length - 1 ? s.active : ''
						}`}
						layout
						key={id}
					>
						{svg}
					</motion.div>
				))}
			</div>
			<div className={s.currencyBackground}>
				{valutas.map((valuta, i) => (
					<p
						key={valuta}
						className={`${s.currency} ${
							activeIndex === i ? s.activeCurrency : ''
						}`}
					>
						{valuta}
					</p>
				))}
				<button className={s.btnSwap}>
					<IconArrowRight className={s.btnSwapIcon} />
					<IconArrowLeft className={s.btnSwapIcon} />
				</button>
			</div>
		</div>
	)
}
