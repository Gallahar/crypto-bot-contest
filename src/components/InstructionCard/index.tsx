import { FC, ReactElement, createElement } from 'react'
import s from './instruction-card.module.css'
import { SliderCard, SliderCardProps } from '../SliderCard'
import { BaseText, Heading } from '@/ui'

interface InstructionCardProps extends SliderCardProps {
	listStyle: string
	instructionList: ReactElement[]
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
	instructionList,
}) => {
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
					{listStyle === 'ul' ? (
						<ul className={s[listStyle]}>{instructionList}</ul>
					) : (
						<ol className={s[listStyle]}>{instructionList}</ol>
					)}
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
