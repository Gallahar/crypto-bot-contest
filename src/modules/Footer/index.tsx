import { Container } from '@/ui'
import s from './footer.module.css'
import { Nav } from '@/components/Nav'

export const Footer = () => {
	return (
		<footer className={s.footer}>
			<Container className={s.footerContainer}>
				<Nav isFooter />
				<small className={s.copyright}>
					©2023 <a>Crypto Bot</a>
				</small>
			</Container>
		</footer>
	)
}
