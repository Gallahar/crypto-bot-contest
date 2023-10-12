import { Description } from '@/ui'
import s from './pagination.module.css'
import { ComponentPropsWithoutRef, FC, MouseEvent } from 'react'

interface PaginationProps extends ComponentPropsWithoutRef<'div'> {
	currentActive: number
	dataLength: number
	onClickButton: (e:MouseEvent<HTMLButtonElement>, v: number) => void
}

export const Pagination: FC<PaginationProps> = ({
	currentActive,
	dataLength,
	onClickButton,
}) => {
	return (
		<div className={s.pagination}>
			<Description className={s.white}>{`0${currentActive + 1}`}</Description>
			{Array(dataLength).fill(undefined).map((_, i) => (
				<button
					key={i}
					onClick={(e) => onClickButton(e,i)}
					className={`${s.paginationButton} ${
						currentActive === i ? s.active : ''
					}`}
				></button>
			))}
			<Description className={s.white}>{`0${dataLength}`}</Description>
		</div>
	)
}
