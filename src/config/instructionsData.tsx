import instrImg1 from '@/assets/instructions/instructionImg1.png'
import instrSvg1 from '@/assets/instructions/instructionSvg1.svg'
import instrImg2 from '@/assets/instructions/instructionImg2.png'
import instrImg3 from '@/assets/instructions/instructionImg3.png'
import { BaseText, ExternalLink } from '@/ui'

export const instructionsData = [
	{
		listStyle: 'ol',
		title: 'Authorizing your app',
		variant: 'purple',
		imgTop: instrImg1,
		imgBot: instrSvg1,
		instructionsList: [
			<li key='@CryptoBot'>
				<BaseText variant='secondary'>
					Open <ExternalLink>@CryptoBot</ExternalLink>
				</BaseText>
			</li>,
			<li key='@CryptoPay'>
				<BaseText variant='secondary'>
					Go to <ExternalLink>Crypto Pay</ExternalLink>
				</BaseText>
			</li>,
			<li key='createApp'>
				<BaseText variant='secondary'>
					Tap <ExternalLink>Create App</ExternalLink>
				</BaseText>
			</li>,
			<li key='getApiToken'>
				<BaseText variant='secondary'>
					<ExternalLink>Get API Token</ExternalLink>
				</BaseText>
			</li>,
		],
	},
	{
		listStyle: 'ul',
		title: 'Crypto Pay API Request',
		subtitle: 'Requests are only served over HTTPS To pass parameters use:',
		variant: 'yellow',
		imgTop: instrImg2,
		instructionsList: [
			<li key='url'>
				<ExternalLink>URL query string</ExternalLink>
			</li>,
			<li key='application'>
				<ExternalLink>application/json</ExternalLink>
			</li>,
			<li key='x-www'>
				<ExternalLink>application/x-www-form-urlencoded</ExternalLink>
			</li>,
			<li key='form'>
				<ExternalLink>multipart/form-data</ExternalLink>
			</li>,
		],
	},
	{
		listStyle: 'ul',
		title: 'Getting updates',
		subtitle: 'There are two ways of receiving updates for your app:',
		variant: 'blue',
		imgBot: instrImg3,
		instructionsList: [
			<li key='getInvoices'>
				<BaseText variant='secondary'>
					<ExternalLink>getInvoices</ExternalLink> method to get a list of
					created invoices.
				</BaseText>
			</li>,
			<li key='webHooks'>
				<BaseText variant='secondary'>
					<ExternalLink>Webhooks</ExternalLink> to receive updates in realtime.
				</BaseText>
			</li>,
		],
	},
]
