import { CSSProperties, ComponentPropsWithoutRef, FC } from 'react'
import Image from 'next/image'
import s from './stacked-image.module.css'

interface StackedImageProps extends ComponentPropsWithoutRef<typeof Image> {
	negatedMargin?: number
}

export const StackedImage: FC<StackedImageProps> = ({
	className,
	negatedMargin,
	...rest
}) => {
	return (
		<div
			style={{ '--negated-margin': `${negatedMargin}px` } as CSSProperties}
			className={`${s.stackedWrapper} ${className}`}
		>
			<Image fill {...rest} />
		</div>
	)
}
