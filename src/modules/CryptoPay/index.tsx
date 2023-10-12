import { BaseText, Button, Container, Heading } from '@/ui'


import s from './crypto-pay.module.css'
export const CryptoPay = () => {
	return (
		<section className={s.cryptoPay}>
			<Container>
				<div className={s.containerInner}>
					<div className={s.textWrapper}>
						<Heading as='h2'>Crypto Pay API</Heading>
						<BaseText>
							Explore available methods and types and integrate them in any
							programming language.
						</BaseText>
						<Button variant='secondary'>Open API Docs</Button>
					</div>
				</div>
			</Container>
		</section>
	)
}
