import Assets from './data/assets';
import type { Skill } from './types';
import {SKILLS_DESCRIPTIONS} from './md';

const s = (skill: Skill) => skill;

export type ArrayElementType<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const MY_SKILLS = [
	s({
		slug: 'js',
		color: 'yellow',
		description: SKILLS_DESCRIPTIONS.js,
		logo: Assets.JavaScript,
		name: 'Javascript'
	}),
	s({
		slug: 'ts',
		color: 'blue',
		description: SKILLS_DESCRIPTIONS.ts,
		logo: Assets.TypeScript,
		name: 'Typescript'
	}),
	s({
		slug: 'css',
		color: 'blue',
		description: SKILLS_DESCRIPTIONS.css,
		logo: Assets.CSS,
		name: 'CSS'
	}),
	s({
		slug: 'electronjs',
		color: 'green',
		description: SKILLS_DESCRIPTIONS.electronjs,
		logo: Assets.Electron,
		name: 'Electron Js'
	}),
	s({
		slug: 'html',
		color: 'orange',
		description: SKILLS_DESCRIPTIONS.html,
		logo: Assets.HTML,
		name: 'HTML'
	}),
	s({
		slug: 'sass',
		color: 'pink',
		description: SKILLS_DESCRIPTIONS.sass,
		logo: Assets.Sass,
		name: 'Sass'
	}),
	s({
		slug: 'reactjs',
		color: 'cyan',
		description: SKILLS_DESCRIPTIONS.reactjs,
		logo: Assets.ReactJs,
		name: 'React Js'
	}),
	s({
		slug: 'svelte',
		color: 'orange',
		description: SKILLS_DESCRIPTIONS.svelte,
		logo: Assets.Svelte,
		name: 'Svelte'
	}),
		s({
		slug: 'nodejs',
		color: 'green',
		description: SKILLS_DESCRIPTIONS.nodejs,
		logo: Assets.NodeJs,
		name: 'Node Js'
	}),
		s({
		slug: 'kubernetes',
		color: 'green',
		description: SKILLS_DESCRIPTIONS.kubernetes,
		logo: Assets.Kubernetes,
		name: 'Kubernetes'
	}),
		s({
		slug: 'aws',
		color: 'green',
		description: SKILLS_DESCRIPTIONS.aws,
		logo: Assets.AWS,
		name: 'AWS'
	}),
	s({
		slug: 'docker',
		color: 'blue',
		description: SKILLS_DESCRIPTIONS.docker,
		logo: Assets.Docker,
		name: 'Docker'
	}),
		s({
		slug: 'webpack',
		color: 'red',
		description: SKILLS_DESCRIPTIONS.webpack,
		logo: Assets.Webpack,
		name: 'Webpack'
	}),
	s({
		slug: 'rollup',
		color: 'red',
		description: SKILLS_DESCRIPTIONS.rollup,
		logo: Assets.Rollup,
		name: 'Rollup'
	}),
	s({
		slug: 'circleci',
		color: 'red',
		description: SKILLS_DESCRIPTIONS.circleci,
		logo: Assets.CircleCI,
		name: 'Circle CI'
	}),
	s({
		slug: 'angularjs',
		color: 'orange',
		description: SKILLS_DESCRIPTIONS.angularjs,
		logo: Assets.Angular,
		name: 'Angular Js'
	}),
	s({
		slug: 'reduxjs',
		color: 'white',
		description: SKILLS_DESCRIPTIONS.reducxjs,
		logo: Assets.Redux,
		name: 'Redux Js'
	}),
	
];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
	MY_SKILLS.filter((it) => slugs.includes(it.slug));
