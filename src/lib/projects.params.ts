import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';
import { PROJECTS_DESCRIPTIONS } from './md';
import { page } from '$app/stores';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'video-call',
		color: 'purple',
		description: PROJECTS_DESCRIPTIONS.vcq,
		shortDescription:
			'Manage and deploy customer-focused UI solutions for utilizing the Webex calling video queue on Cisco cloud-registered devices.',
		links: [{ to: 'https://call-queue.wbx.ninja/auth', label: 'Demo Builder' }],
		logo: Assets.Cisco,
		name: 'Cisco Device Video Queue',
		period: { from: new Date(2022, 1, 1), to: new Date() },
		skills: getSkills('svelte', 'ts', 'nodejs', 'sass', 'aws', 'docker', 'kubernetes'),
		type: 'Website'
	},
	{
		slug: 'webex-developer-portal',
		color: '#5e95e3',
		description: PROJECTS_DESCRIPTIONS.devPortal,
		shortDescription:
			'The Webex developer portal to actively engage and support developers in seamlessly integrating with the Webex ecosystem, offering features like an API playground and card designers.',
		links: [{ to: 'https://developer.webex.com', label: 'Webex Dev Portal' }],
		logo: Assets.WebexDev,
		name: 'Webex Developer Portal',
		period: { from: new Date(2018, 12, 1), to: new Date(2022, 1, 1) },
		skills: getSkills('reactjs', 'js', 'nodejs', 'webpack', 'reduxjs'),
		type: 'Website'
	},
	{
		slug: 'webex-web-browser',
		color: '#ff3e00',
		description: PROJECTS_DESCRIPTIONS.webClient,
		shortDescription:
			'The official Webex browser client to offer all the features available on the desktop client, encompassing calling, meeting, and messaging capabilities.',
		links: [{ to: 'https://web.webex.com', label: 'Webex Web Browser' }],
		logo: Assets.Webex,
		name: 'Webex Browser Client',
		period: { from: new Date(2018, 12, 1), to: new Date(2022, 1, 1) },
		skills: getSkills('reactjs', 'js', 'nodejs', 'webpack', 'reduxjs'),
		type: 'Website',
		screenshots: []
	},
	{
		slug: 'webex-browser-sdk',
		color: 'yellow',
		description: PROJECTS_DESCRIPTIONS.sdk,
		shortDescription:
			'The official Webex Browser SDK to deliver the latest Webex features in a browser environment, providing various browser capabilities, including WebRTC features.',
		links: [{ to: 'https://github.com/webex/webex-js-sdk', label: 'Github' }],
		logo: Assets.WebexDev,
		name: 'Webex Browser SDK',
		period: { from: new Date(2018, 12, 1), to: new Date(2022, 1, 1) },
		skills: getSkills('ts', 'nodejs', 'webpack'),
		type: 'JavaScript Library',
		screenshots: []
	},
	{
		slug: 'webex-office-addin',
		color: 'green',
		description: PROJECTS_DESCRIPTIONS.officeAddin,
		shortDescription:
			"The Official Webex Office 365 Add-in to enhances user's office suite products, providing a seamless experience.",
		links: [
			{
				to: 'https://appsource.microsoft.com/en-us/product/office/WA200000068?tab=Overview',
				label: 'Webex Add-in'
			}
		],
		logo: Assets.Office,
		name: 'Office365 Webex Add-in',
		period: { from: new Date(2017, 1, 1), to: new Date(2018, 11, 1) },
		skills: getSkills('reactjs', 'js', 'nodejs', 'webpack', 'reduxjs'),
		type: 'Office365 Add-in'
	}
	// {
	// 	slug: undefined,
	// 	color: 'pink',
	// 	description:'',
	// 	shortDescription:
	// 		'To establish connections and enable third-party service certificates on devices in bulk using this desktop application.',
	// 	links: [{ to: 'https://github.com/wxsd-sales/roomos-device-manager', label: 'Github' }],
	// 	logo: Assets.Cisco,
	// 	name: 'Device Certs Manager',
	// 	period: { from: new Date(2017, 1, 1), to: new Date(2018, 11, 1) },
	// 	skills: getSkills('reactjs', 'js', 'nodejs', 'webpack', 'electron'),
	// 	type: 'Office365 Add-in'
	// }
];

export default MY_PROJECTS;
