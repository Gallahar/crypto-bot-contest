import { ComponentPropsWithoutRef, FC } from 'react'
import s from './info-card.module.css'
import { BaseText, Button, Heading } from '@/ui'

interface InfoCardProps extends ComponentPropsWithoutRef<'div'> {
	titleAccent: string
	titleDefault: string
	description: string
	buttonText: string
	isActive: boolean
}

export const InfoCard: FC<InfoCardProps> = ({
	className,
	titleAccent,
	titleDefault,
	description,
	buttonText,
	isActive,
	...rest
}) => {
	return (
		<div
			{...rest}
			className={`${s.card} ${isActive ? s.active : ''} ${className}`}
		>
			<div className={s.cardInfo}>
				<Heading className={s.textColor} as='h2'>
					<span className={'accent'}>{titleAccent}</span>
					{titleDefault}
				</Heading>
				<BaseText className={s.textColor}>{description}</BaseText>
				<Button variant='general'>{buttonText}</Button>
			</div>
		</div>
	)
}
