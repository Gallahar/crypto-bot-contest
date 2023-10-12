import { ComponentPropsWithoutRef, FC } from 'react'
import s from './card.module.css'

export const Card: FC<ComponentPropsWithoutRef<'div'>> = ({
	className,
	children,
}) => {
	return <div className={`${s.card} ${className}`}>{children}</div>
}
