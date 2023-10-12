import { FC } from 'react'
import s from './slider-card.module.css'
import { StaticImageData } from 'next/image'
import Image from 'next/image'
import { IconTabSvg } from '@/assets/icons/IconTabSvg'

export interface SliderCardProps {
	variant: string
	isFillImg?: boolean
	imgTop?: StaticImageData
	imgBot?: StaticImageData
	TYMultiplier?: number
	className?: string
}

export const SliderCard: FC<SliderCardProps> = ({
	variant,
	imgBot,
	imgTop,
	TYMultiplier,
	className,
	isFillImg,
}) => {
	return (
		<div
			style={{ transform: `translateY(${-100 * (TYMultiplier ?? 0)}%)` }}
			className={`${s.cardContent} ${s[variant]} ${className}`}
		>
			{imgTop && (
				<Image
					className={isFillImg ? s.fillImg : ''}
					alt={imgTop.src}
					src={imgTop}
				/>
			)}
			{imgBot && (
				<Image
					alt={imgBot.src}
					src={imgBot}
					className={`${
						variant === 'yellow' || variant === 'purple' ? s.svgBackground : ''
					} ${isFillImg ? s.fillImg : ''}`}
				/>
			)}
			{variant === 'blue' && imgBot && imgTop && (
				<IconTabSvg className={s.cardSvg} />
			)}
		</div>
	)
}
