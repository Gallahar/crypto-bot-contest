import { Container } from '@/ui'
import s from './header.module.css'
import { Nav } from '../../components/Nav'

export const Header = () => {
	return (
		<header className={s.header}>
			<Container>
				<Nav />
			</Container>
		</header>
	)
}
