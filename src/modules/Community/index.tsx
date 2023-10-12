import { BaseText, Button, Container, Heading } from '@/ui'
import s from './community.module.css'
import { langList } from '@/config/communityData'
import Image from 'next/image'

export const Community = () => {
	return (
		<section className={s.community}>
			<Container className={s.container}>
				<div className={s.titleWrapper}>
					<Heading as='h2'>Join dev community</Heading>
					<BaseText variant='secondary'>
						Connect with bot developers and explore the possibilities our crypto
						payments service unlocks.
					</BaseText>
				</div>
				<div className={s.langList}>
					{langList.map(({ description, icon }) => (
						<div className={s.listItem} key={description}>
							<Image src={icon} alt={description} />
							<BaseText>{description}</BaseText>
						</div>
					))}
				</div>
				<Button variant='general'>Open Devs Chat</Button>
			</Container>
		</section>
	)
}
