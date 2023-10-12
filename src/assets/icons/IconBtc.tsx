import { FC, SVGProps } from 'react'

export const IconBtc: FC<SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg
			{...props}
			width='113'
			height='112'
			viewBox='0 0 113 112'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g filter='url(#filter0_dd_955_3980)'>
				<rect
					x='8.14307'
					y='8'
					width='96'
					height='96'
					rx='48'
					fill='url(#paint0_linear_955_3980)'
				/>
				<path
					d='M79.2642 49.0905C80.3168 42.0423 74.9489 38.2551 67.6033 35.7264L69.9828 26.1746L64.1718 24.7269L61.8558 34.0239C60.33 33.6438 58.7601 33.2832 57.2015 32.9299L59.5329 23.5713L53.7219 22.1236L51.3403 31.6663C50.0757 31.3774 48.8317 31.0937 47.6267 30.7936L47.6339 30.7648L39.6196 28.7639L38.0728 34.9728C38.0728 34.9728 42.3868 35.9602 42.2933 36.0199C44.6498 36.6069 45.0746 38.1626 45.0027 39.398L42.2923 50.2781C42.4568 50.319 42.6645 50.3795 42.8948 50.4718L42.282 50.3192L38.4807 65.5609C38.1935 66.2754 37.4635 67.3469 35.8175 66.9412C35.8751 67.0254 31.5939 65.889 31.5939 65.889L28.7092 72.542L36.2763 74.4271C37.6828 74.7775 39.0625 75.1474 40.4176 75.4937L38.0155 85.1535L43.8224 86.6002L46.203 77.0442C47.7864 77.4735 49.3255 77.8701 50.8348 78.2461L48.4614 87.7558L54.2724 89.2034L56.6734 79.5652C66.5841 81.4402 74.0451 80.683 77.1786 71.7164C79.7062 64.4984 77.0536 60.3309 71.8377 57.6166C75.6402 56.7472 78.5028 54.2505 79.2642 49.0905ZM65.9853 67.7139C64.1876 74.9302 52.0333 71.0333 48.0893 70.0508L51.2781 57.2505C55.22 58.2412 67.8599 60.1891 65.9853 67.7139ZM67.7772 48.9845C66.1413 55.5512 56.0186 52.2128 52.7358 51.3993L55.6265 39.7956C58.9124 40.6142 69.4868 42.1392 67.7772 48.9845Z'
					fill='white'
				/>
				<path
					d='M42.3657 50.0254L43.2294 50.2405L43.0706 50.8779L42.2069 50.6627L42.3657 50.0254Z'
					fill='white'
				/>
			</g>
			<defs>
				<filter
					id='filter0_dd_955_3980'
					x='0.143066'
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
						result='effect1_dropShadow_955_3980'
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
						in2='effect1_dropShadow_955_3980'
						result='effect2_dropShadow_955_3980'
					/>
					<feBlend
						mode='normal'
						in='SourceGraphic'
						in2='effect2_dropShadow_955_3980'
						result='shape'
					/>
				</filter>
				<linearGradient
					id='paint0_linear_955_3980'
					x1='-8.43876'
					y1='171.2'
					x2='86.6885'
					y2='8'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#FF930F' />
					<stop offset='1' stopColor='#FBC411' />
				</linearGradient>
			</defs>
		</svg>
	)
}
