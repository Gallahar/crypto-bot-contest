import { ComponentPropsWithoutRef, FC } from 'react'
import s from './externalLink.module.css'

export const ExternalLink: FC<ComponentPropsWithoutRef<'a'>> = ({
	children,
	className,
	...rest
}) => {
	return (
		<a className={`${s.externalLink} ${className}`} {...rest}>
			{children}
		</a>
	)
}
