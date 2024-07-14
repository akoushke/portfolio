import { base } from '$app/paths';
import { MY_EDUCATIONS } from './educations.params';
import MY_EXPERIENCES from './experiences.params';
import MY_PROJECTS from './projects.params';
import MY_SKILLS from './skills.params';
import {
	Platform,
	type HomePageParams,
	type ProjectPageParams,
	type ExperiencePageParams,
	type SkillsPageParams,
	type ResumePageParams,
	type SearchPageParams,
	type EducationPageParams
} from './types';
import { Icons } from './utils';

export const TITLE_SUFFIX = 'Arash.K Portfolio';

export const NavBar = {
	home: 'Home',
	personal: 'Projects',
	career: 'Experiences',
	resume: 'Resume',
	skills: 'Skills',
	Education: 'Education'
};

export const getPlatfromIcon = (platform: Platform): Icons => {
	switch (platform) {
		case Platform.GitHub:
			return Icons.GitHub;
		case Platform.Linkedin:
			return Icons.LinkedIn;
		case Platform.StackOverflow:
			return Icons.StackOverflow;
		case Platform.Facebook:
			return Icons.Facebook;
		case Platform.Email:
			return Icons.Email;
		case Platform.Twitter:
			return Icons.Twitter;
		case Platform.Youtube:
			return Icons.Youtube;
	}
};

export const HOME: HomePageParams = {
	title: 'Home',
	name: 'Arash',
	lastName: 'K. Baghi',
	description: `Experienced full-stack developer with expertise in scalable web apps, specializing in ReactJs, Svelte, and Node.js with keen interest in DevOps engineering. 
		Led key projects for Cisco's major products such as Webex Browser client and SDK. 
		Outside of work, I enjoy nature, fitness and riding a motorcycle!`,
	links: [
		{ platform: Platform.GitHub, link: 'https://github.com/akoushke' },
		{
			platform: Platform.Linkedin,
			link: 'https://www.linkedin.com/in/akoushke'
		},
		{
			platform: Platform.Twitter,
			link: 'https://twitter.com/akoushke'
		},
		{
			platform: Platform.Email,
			link: 'arash.koush@gmail.com'
		},
		{
			platform: Platform.Youtube,
			link: 'https://www.youtube.com/@arashkoushkebaghi1432/'
		},
		{
			platform: Platform.Facebook,
			link: 'https://www.facebook.com/akoushke/'
		}
	]
};

export const PROJECTS: ProjectPageParams = {
	title: 'Projects',
	items: MY_PROJECTS
};

export const EXPERIENCES: ExperiencePageParams = {
	title: 'Experiences',
	items: MY_EXPERIENCES
};

export const SKILLS: SkillsPageParams = {
	title: 'Skills',
	items: MY_SKILLS
};

export const RESUME: ResumePageParams = {
	title: 'Resumé',
	item: `${base}/resume.pdf`
};

export const SEARCH: SearchPageParams = {
	title: 'Search'
};

export const EDUCATION: EducationPageParams = {
	items: MY_EDUCATIONS,
	title: 'Education'
};
