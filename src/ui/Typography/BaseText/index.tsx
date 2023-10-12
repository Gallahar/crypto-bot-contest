import { ComponentPropsWithoutRef, FC } from 'react'
import s from './base-text.module.css'

interface BaseTextProps extends ComponentPropsWithoutRef<'p'> {
	variant?: 'primary' | 'secondary'
}

export const BaseText: FC<BaseTextProps> = ({
	children,
	className,
	variant = 'primary',
	...rest
}) => {
	return (
		<p className={[s.text, s[variant], className].join(' ')} {...rest}>
			{children}
		</p>
	)
}
