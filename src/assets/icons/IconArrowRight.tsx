import { FC, SVGProps } from 'react'

export const IconArrowRight: FC<SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg
			{...props}
			width='21'
			height='11'
			viewBox='0 0 21 11'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M1 5.45438H20.01M20.01 5.45438L15.5556 1M20.01 5.45438L15.5556 9.90876'
				stroke='#29313D'
				strokeOpacity='0.92'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='bevel'
			/>
		</svg>
	)
}
