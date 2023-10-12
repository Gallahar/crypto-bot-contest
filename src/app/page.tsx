import { Community } from '@/modules/Community'
import { CryptoPay } from '@/modules/CryptoPay'
import { Features } from '@/modules/Features'
import { Footer } from '@/modules/Footer'
import { Header } from '@/modules/Header'
import { Hero } from '@/modules/Hero'
import { Instructions } from '@/modules/Instructions'
import { UseCases } from '@/modules/UseCases'

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<UseCases />
				<Features />
				<Instructions />
				<CryptoPay/>
				<Community />
			</main>
			<Footer />
		</>
	)
}
