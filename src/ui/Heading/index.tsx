import { FC, HTMLProps, ReactNode, createElement } from 'react'
import s from './heading.module.css'

interface HeadingProps extends HTMLProps<HTMLElement> {
	as: 'h1' | 'h2' | 'h3' | 'h4'
	children: ReactNode
}

export const Heading: FC<HeadingProps> = ({
	as,
	children,
	className,
	...rest
}) => {
	const element = createElement(
		as,
		{ className: [s.heading, s[as], className].join(' '), ...rest },
		children
	)

	return element
}
