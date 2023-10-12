import { FC, SVGProps } from 'react'

export const IconTabSvg: FC<SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg
			{...props}
			width='46'
			height='47'
			viewBox='0 0 46 47'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<rect
				x='0.103027'
				y='0.985352'
				width='45.2647'
				height='45.2647'
				rx='12.4256'
				fill='url(#paint0_linear_955_4706)'
			/>
			<ellipse
				cx='22.9516'
				cy='13.4892'
				rx='2.74116'
				ry='2.74116'
				fill='white'
			/>
			<ellipse
				cx='22.9516'
				cy='22.104'
				rx='2.74116'
				ry='2.74116'
				fill='white'
			/>
			<path
				d='M24.3415 35.8337C23.6849 36.8464 22.2049 36.8464 21.5483 35.8337L18.1257 30.5551C17.4061 29.4453 18.2012 27.9782 19.5223 27.9782L26.3675 27.9782C27.6886 27.9782 28.4838 29.4453 27.7642 30.5551L24.3415 35.8337Z'
				fill='white'
			/>
			<defs>
				<linearGradient
					id='paint0_linear_955_4706'
					x1='41.6334'
					y1='-25.6797'
					x2='-18.1734'
					y2='19.0193'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#9FCCFA' />
					<stop offset='1' stopColor='#0974F1' />
				</linearGradient>
			</defs>
		</svg>
	)
}
