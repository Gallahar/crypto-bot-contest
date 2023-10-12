import { Container, Heading } from '@/ui'
import s from './instructions.module.css'
import { instructionsData } from '@/config/instructionsData'
import { InstructionCard } from '@/components/InstructionCard'

export const Instructions = () => {
	return (
		<section id='instructions' className={s.instructions}>
			<Container className={s.container}>
				<Heading className={s.heading} as='h2'>
					Quick start using <span className={'accent'}>Crypto Pay</span>
				</Heading>
				{instructionsData.map((instruction, index) => (
					<InstructionCard
						key={instruction.title}
						{...instruction}
						index={index + 1}
					/>
				))}
			</Container>
		</section>
	)
}
