import { FC, SVGProps } from 'react'

export const IconEth: FC<SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg
			{...props}
			width='112'
			height='112'
			viewBox='0 0 112 112'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g filter='url(#filter0_dd_955_3960)'>
				<rect
					x='8'
					y='8'
					width='96'
					height='96'
					rx='48'
					fill='url(#paint0_linear_955_3960)'
				/>
				<rect
					x='8'
					y='8'
					width='96'
					height='96'
					rx='48'
					fill='url(#paint1_linear_955_3960)'
				/>
				<path
					d='M55.7656 24.582L55.332 26.0186V67.6998L55.7656 68.1217L75.6018 56.6852L55.7656 24.582Z'
					fill='#343434'
				/>
				<path
					d='M55.7624 24.582L35.9258 56.6852L55.7624 68.1217V47.8908V24.582Z'
					fill='#8C8C8C'
				/>
				<path
					d='M55.7639 71.7846L55.5195 72.0753V86.9227L55.7639 87.6186L75.6122 60.354L55.7639 71.7846Z'
					fill='#3C3C3B'
				/>
				<path
					d='M55.7624 87.6186V71.7846L35.9258 60.354L55.7624 87.6186Z'
					fill='#8C8C8C'
				/>
				<path
					d='M55.7617 68.1206L75.5979 56.684L55.7617 47.8896V68.1206Z'
					fill='#141414'
				/>
				<path
					d='M35.9258 56.6842L55.7624 68.1207V47.8898L35.9258 56.6842Z'
					fill='#393939'
				/>
			</g>
			<defs>
				<filter
					id='filter0_dd_955_3960'
					x='0'
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
						result='effect1_dropShadow_955_3960'
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
						in2='effect1_dropShadow_955_3960'
						result='effect2_dropShadow_955_3960'
					/>
					<feBlend
						mode='normal'
						in='SourceGraphic'
						in2='effect2_dropShadow_955_3960'
						result='shape'
					/>
				</filter>
				<linearGradient
					id='paint0_linear_955_3960'
					x1='155.491'
					y1='-31.2727'
					x2='-29.5273'
					y2='153.745'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#E9E9E7' />
					<stop offset='0.271524' stopColor='#EFEEEC' />
					<stop offset='0.608677' stopColor='#EEEEEC' />
					<stop offset='1' stopColor='#D5D4D0' />
				</linearGradient>
				<linearGradient
					id='paint1_linear_955_3960'
					x1='6.17242'
					y1='186.969'
					x2='119.061'
					y2='162.577'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#EEEDF1' />
					<stop offset='1' stopColor='white' />
				</linearGradient>
			</defs>
		</svg>
	)
}
