import { ComponentPropsWithoutRef, FC } from 'react'
import s from './description.module.css'

export const Description: FC<ComponentPropsWithoutRef<'span'>> = ({
	children,
	className,
	...rest
}) => {
	return (
		<span className={`${s.description} ${className}`} {...rest}>
			{children}
		</span>
	)
}
