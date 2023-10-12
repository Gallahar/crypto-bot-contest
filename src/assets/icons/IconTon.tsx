import { FC, SVGProps } from 'react'

export const IconTon: FC<SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg
			{...props}
			width='113'
			height='112'
			viewBox='0 0 113 112'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g filter='url(#filter0_dd_955_3976)'>
				<rect
					x='8.42871'
					y='8'
					width='96'
					height='96'
					rx='48'
					fill='url(#paint0_linear_955_3976)'
				/>
				<path
					d='M72.8175 34.7903H40.0374C34.0103 34.7903 30.1904 41.2917 33.2225 46.5475L53.4531 81.6129C54.7733 83.9025 58.0817 83.9025 59.4018 81.6129L79.6366 46.5475C82.6647 41.3001 78.8446 34.7903 72.8216 34.7903H72.8175ZM53.4366 71.0973L49.0307 62.5703L38.3998 43.5566C37.6985 42.3397 38.5647 40.7802 40.0333 40.7802H53.4325V71.1014L53.4366 71.0973ZM74.4469 43.5525L63.8201 62.5744L59.4142 71.0973V40.7761H72.8134C74.282 40.7761 75.1482 42.3355 74.4469 43.5525Z'
					fill='white'
				/>
			</g>
			<defs>
				<filter
					id='filter0_dd_955_3976'
					x='0.428711'
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
						result='effect1_dropShadow_955_3976'
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
						in2='effect1_dropShadow_955_3976'
						result='effect2_dropShadow_955_3976'
					/>
					<feBlend
						mode='normal'
						in='SourceGraphic'
						in2='effect2_dropShadow_955_3976'
						result='shape'
					/>
				</filter>
				<linearGradient
					id='paint0_linear_955_3976'
					x1='97.8833'
					y1='0.58182'
					x2='22.3923'
					y2='125.382'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#04BEFE' />
					<stop offset='1' stopColor='#4481EB' />
				</linearGradient>
			</defs>
		</svg>
	)
}
