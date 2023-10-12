/* eslint-disable react/prop-types */
import { FC, ReactNode, createElement } from 'react'
import s from './instruction-card.module.css'
import { SliderCard, SliderCardProps } from '../SliderCard'
import { BaseText, Heading } from '@/ui'

interface InstructionCardProps extends SliderCardProps {
	listStyle: string
	instructionsList: ReactNode[]
	title: string
	subtitle?: string
	index: number
}

export const InstructionCard: FC<InstructionCardProps> = ({
	listStyle,
	variant,
	className,
	imgBot,
	imgTop,
	index,
	title,
	subtitle,
	instructionsList,
}) => {
	const list = createElement(listStyle, {
		className: [s[listStyle]],
		instructionsList,
	})

	return (
		<div className={`${s.instructionCard} ${className}`}>
			<div className={s.instructionInfo}>
				<div className={s.numberWrapper}>
					<Heading as='h3' className={s.number}>
						{index}
					</Heading>
				</div>
				<div className={s.textWrapper}>
					<Heading as='h3'>{title}</Heading>
					{subtitle && <BaseText variant='secondary'>{subtitle}</BaseText>}
					{list}
				</div>
			</div>
			<SliderCard
				className={s.sliderCard}
				variant={variant}
				imgBot={imgBot}
				imgTop={imgTop}
			/>
		</div>
	)
}
