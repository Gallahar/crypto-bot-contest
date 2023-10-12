import { ComponentPropsWithoutRef, FC } from 'react'
import s from './container.module.css'

export const Container: FC<ComponentPropsWithoutRef<'div'>> = ({
	children,
	className,
	...rest
}) => {
	return (
		<div className={`${s.container} ${className}`} {...rest}>
			{children}
		</div>
	)
}
