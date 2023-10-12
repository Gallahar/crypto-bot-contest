'use client'

import { Container } from '@/ui'
import s from './useCases.module.css'
import { Pagination } from '@/components/Pagination'
import { MouseEvent, useEffect, useRef, useState } from 'react'
import { useCasesCards, useCasesInfo } from '@/config/data'
import { SliderCard } from '@/components/SliderCard'
import { InfoCard } from '@/components/InfoCard'

export const UseCases = () => {
	const [currentIdx, setCurrentIdx] = useState(0)
	const directionRef = useRef('backward')
	const intervalRef = useRef<ReturnType<typeof setInterval>>()

	const onClickPagination = (
		e: MouseEvent<HTMLButtonElement>,
		index: number
	) => {
		e.stopPropagation()
		setCurrentIdx(index)
	}

	useEffect(() => {
		const handleAutoPlay = () => {
			intervalRef.current = setInterval(() => {
				if (!directionRef.current) return
				if (currentIdx === useCasesInfo.length - 1) {
					directionRef.current = 'forward'
				}
				if (currentIdx === 0) {
					directionRef.current = 'backward'
				}

				if (directionRef.current === 'forward') {
					setCurrentIdx((prev) => prev - 1)
				} else {
					setCurrentIdx((prev) => prev + 1)
				}
			}, 3000)
		}

		handleAutoPlay()

		return () => clearInterval(intervalRef.current)
	}, [currentIdx])

	return (
		<section id='use-cases' className={s.useCases}>
			<Container className={s.useCasesContainer}>
				<div
					onMouseEnter={() => clearInterval(intervalRef.current)}
					className={s.cardsContainer}
				>
					{useCasesCards.map((card) => (
						<SliderCard
							key={card.variant}
							{...card}
							TYMultiplier={currentIdx}
						/>
					))}
				</div>
				{useCasesInfo.map((info, i) => (
					<InfoCard
						key={info.description}
						isActive={i === currentIdx}
						{...info}
					/>
				))}
				<Pagination
					onMouseEnter={() => console.log('entered')}
					onMouseLeave={() => console.log('leaved')}
					dataLength={useCasesInfo.length}
					onClickButton={onClickPagination}
					currentActive={currentIdx}
				/>
			</Container>
		</section>
	)
}
