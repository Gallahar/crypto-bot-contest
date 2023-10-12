import { Container } from '@/ui/Container'
import s from './hero.module.css'
import { BaseText, Button, Heading } from '@/ui'
import { bots } from '@/config/data'
import { StackedImage } from '@/ui/StackedImage'
import { Iphone } from '@/components/Iphone'

export const Hero = () => {
	return (
		<section className={s.section}>
			<Container className={s.container}>
				<div className={s.heroWrapper}>
					<Heading as='h1'>
						Crypto payments for <span className='accent'>telegram bots</span>
					</Heading>
					<BaseText>
						{`Seamlessly accept crypto payments\nin your Telegram bots and
						services.`}
					</BaseText>
					<Button variant='general'>Get started</Button>
					<div className={s.botsContainer}>
						<div className={s.bots}>
							{bots.map((bot, i) => (
								<StackedImage
									key={i}
									negatedMargin={-32}
									src={bot}
									alt={`bot-${i}`}
								/>
							))}
						</div>
						<BaseText>Popular bots use Crypto Pay</BaseText>
					</div>
				</div>
				<Iphone />
			</Container>
		</section>
	)
}
