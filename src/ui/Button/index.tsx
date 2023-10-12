import { ComponentPropsWithoutRef, FC } from 'react'
import s from './button.module.css'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
	variant?: 'general' | 'primary' | 'secondary'
}

export const Button: FC<ButtonProps> = ({
	variant = 'general',
	className,
	children,
	...rest
}) => {
	return (
		<button className={[s.button, s[variant], className].join(' ')} {...rest}>
			{children}
		</button>
	)
}
