import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';
import { EXPERIENCE_DESCRIPTIONS } from './md';
import { base } from '$app/paths';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'global-specialist',
		company: 'Cisco Webex',
		description: EXPERIENCE_DESCRIPTIONS.globalTech,
		contract: ContractType.FullTime,
		type: 'Software Sales Engineering',
		location: 'Seattle, WA',
		period: { from: new Date(2022, 1, 1), to: new Date() },
		skills: getSkills(
			'ts',
			'js',
			'svelte',
			'react',
			'electronjs',
			'nodejs',
			'kubernetes',
			'aws',
			'sass',
			'docker'
		),
		name: 'Global Technical Specialist',
		color: 'blue',
		links: [{ to: `${base}/projects/video-call`, label: 'Video Call Queue Demo Builder' }],
		logo: Assets.Webex,
		shortDescription:
			'Designed and implemented innovative UI solutions to optimize user experience across 100+ use cases'
	},
	{
		slug: 'senior-front-end-developer',
		company: 'Cisco Webex',
		description: EXPERIENCE_DESCRIPTIONS.fullStack,
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'San Francisco, CA',
		period: { from: new Date(2018, 12, 1), to: new Date(2022, 1, 1) },
		skills: getSkills('js', 'reactjs', 'nodejs', 'sass', 'webpack', 'rollup', 'circleci'),
		name: 'Senior Front-end Developer',
		color: 'red',
		links: [
			{ to: `${base}/projects/webex-developer-portal`, label: 'Webex Developer Portal' },
			{ to: `${base}/projects/webex-web-browser`, label: 'Webex Web Browser Client' },
			{ to: `${base}/projects/webex-browser-sdk`, label: 'Webex Browser SDK' }
		],
		logo: Assets.Webex,
		shortDescription:
			"Engineered major UI features on Webex's primary platforms and contributed to the browser SDK, showcasing enthusiasm for DevOps practices."
	},
	{
		slug: 'front-end-developer',
		company: 'Cisco',
		description: EXPERIENCE_DESCRIPTIONS.frontEnd,
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'San Francisco, CA',
		period: { from: new Date(2017, 1, 1), to: new Date(2018, 11, 1) },
		skills: getSkills('js', 'ts', 'angularjs', 'reactjs', 'nodejs', 'webpack'),
		name: 'Front-end Developer',
		color: 'green',
		links: [
			{ to: `${base}/projects/webex-developer-portal`, label: 'Webex Developer Portal' },
			{ to: `${base}/projects/webex-web-browser`, label: 'Webex Web Browser Client' },
			{ to: `${base}/projects/webex-browser-sdk`, label: 'Webex Browser SDK' }
		],
		logo: Assets.Cisco,
		shortDescription:
			'Designed and deployed a library of reusable Angular UI components following Cisco Style Standards. Additionally, implemented and released a Webex Office365 add-in, leveraging Webex React widgets.'
	}
];

export default MY_EXPERIENCES;
