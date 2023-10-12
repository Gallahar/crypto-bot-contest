import { FC, SVGProps } from 'react'

export const IconUsdt: FC<SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg
			{...props}
			width='113'
			height='112'
			viewBox='0 0 113 112'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g filter='url(#filter0_dd_955_3970)'>
				<rect
					x='8.71436'
					y='8'
					width='96'
					height='96'
					rx='48'
					fill='url(#paint0_linear_955_3970)'
				/>
				<path
					d='M79.5022 30.6909H33.3081V41.8431H50.8291V58.2347H61.9812V41.8431H79.5022V30.6909Z'
					fill='white'
				/>
				<path
					d='M56.5113 59.9808C42.0174 59.9808 30.2666 57.6869 30.2666 54.8569C30.2666 52.0274 42.0169 49.7331 56.5113 49.7331C71.0051 49.7331 82.7554 52.0274 82.7554 54.8569C82.7554 57.6869 71.0051 59.9808 56.5113 59.9808ZM85.9795 55.7111C85.9795 52.0621 72.7863 49.1042 56.5113 49.1042C40.2367 49.1042 27.0425 52.0621 27.0425 55.7111C27.0425 58.9246 37.2731 61.6019 50.8298 62.1951V85.7258H61.981V62.2044C75.6421 61.6297 85.9795 58.9412 85.9795 55.7111Z'
					fill='white'
				/>
			</g>
			<defs>
				<filter
					id='filter0_dd_955_3970'
					x='0.714355'
					y='0'
					width='112'
					height='112'
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'
				>
					<feFlood floodOpacity='0' result='BackgroundImageFix' />
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset />
					<feGaussianBlur stdDeviation='4' />
					<feComposite in2='hardAlpha' operator='out' />
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0.715625 0 0 0 0 0.728516 0 0 0 0 0.75 0 0 0 0.04 0'
					/>
					<feBlend
						mode='normal'
						in2='BackgroundImageFix'
						result='effect1_dropShadow_955_3970'
					/>
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset dy='2' />
					<feGaussianBlur stdDeviation='1.5' />
					<feComposite in2='hardAlpha' operator='out' />
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0'
					/>
					<feBlend
						mode='normal'
						in2='effect1_dropShadow_955_3970'
						result='effect2_dropShadow_955_3970'
					/>
					<feBlend
						mode='normal'
						in='SourceGraphic'
						in2='effect2_dropShadow_955_3970'
						result='shape'
					/>
				</filter>
				<linearGradient
					id='paint0_linear_955_3970'
					x1='17.878'
					y1='139.782'
					x2='65.4416'
					y2='38.5454'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#8DDAD5' />
					<stop offset='1' stopColor='#1BA27A' />
				</linearGradient>
			</defs>
		</svg>
	)
}



