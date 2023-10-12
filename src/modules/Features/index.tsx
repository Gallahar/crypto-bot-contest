import { BaseText, Container, Description, ExternalLink, Heading } from '@/ui'
import imgPayment from '@/assets/features/img_commission.png'
import s from './features.module.css'
import { Card } from '@/ui/Card'
import { currenciesList } from '@/config/featuresData'
import anonymousPayments from '@/assets/features/anonimoysPayments.webp'
import Image from 'next/image'
import { ExchangeAnimation } from '@/components/ExchangeAnimation'
import { ButtonAnimation } from '@/components/ButtonAnimation'
import { SendCoins } from '@/components/SendCoins'

export const Features = () => {
	return (
		<section id='features' className={s.features}>
			<Container className={s.container}>
				<Card className={s.currencies}>
					<div className={s.currenciesText}>
						<Heading as='h3'>Accept a wide range of cryptocurrencies</Heading>
						<BaseText variant='secondary'>
							Bill any supported cryptocurrencies with asset parameter in{' '}
							<ExternalLink href='/'>GetInvoice</ExternalLink> method
						</BaseText>
					</div>
					<div className={s.currenciesList}>
						{currenciesList.map(({ title, icon }, i) => (
							<div key={title} className={s.listItem}>
								<Image
									style={{ animationDelay: `${500 * i}ms` }}
									src={icon}
									alt='title'
								/>
								<Description>{title}</Description>
							</div>
						))}
					</div>
				</Card>
				<div className={s.featuresTop}>
					<div className={s.innerLeft}>
						<Card className={s.startCard}>
							<ButtonAnimation />
							<div className={s.startCardTextContainer}>
								<Heading as='h3'>One click to start</Heading>
								<BaseText variant='secondary'>
									Open <ExternalLink>@CryptoBot</ExternalLink>, go to{' '}
									<ExternalLink>Crypto Pay</ExternalLink> and tap Create App to
									get API Token
								</BaseText>
							</div>
						</Card>
						<Card className={s.exchangeCard}>
							<ExchangeAnimation />
							<div className={s.exchangeTextWrapper}>
								<Heading as='h3'>Real-time exchange rates</Heading>
								<BaseText variant='secondary'>
									Request up to date currency rate with the{' '}
									<ExternalLink>getExchangeRates</ExternalLink> API method
								</BaseText>
							</div>
						</Card>
					</div>
					<Card className={s.paymentCard}>
						<Image src={imgPayment} alt='imgPayment' />
						<div className={s.paymentCardTextWrapper}>
							<Heading as='h3'>Payment Statistics</Heading>
							<BaseText variant='secondary'>
								Open <ExternalLink>@CryptoBot</ExternalLink>, go to{' '}
								<ExternalLink>Crypto Pay</ExternalLink> and{' '}
								<ExternalLink>My Apps</ExternalLink>, App Name to get Statistics
							</BaseText>
						</div>
					</Card>
				</div>
				<div className={s.featuresBot}>
					<SendCoins />
					<Card className={s.anonymousPayments}>
						<Image src={anonymousPayments} alt='message' />
						<Heading as='h3'>Anonymous payments</Heading>
						<BaseText variant='secondary'>
							Use allow_anonymous parameter in{' '}
							<ExternalLink>createInvoice</ExternalLink> method to give user an
							option to remain private
						</BaseText>
					</Card>
				</div>
			</Container>
		</section>
	)
}
