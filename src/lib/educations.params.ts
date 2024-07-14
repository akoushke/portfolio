import Assets from './data/assets';
import type { Education } from './types';

export const MY_EDUCATIONS: Array<Education> = [
	{
		degree: 'Bachelor Degree of Computer Science',
		description: '',
		location: 'San Luis Obispo, CA',
		logo: Assets.CalPoly,
		name: '',
		organization: 'California Public University',
		period: { from: new Date(2012, 9, 1), to: new Date(2016, 12, 15) },
		shortDescription: 'Learn by Doing',
		slug: 'dummy-education-item',
		subjects: ['Node.js', 'Algorithm', 'System Programming', 'Operating Systems', 'C++', 'Java', 'English', ]
	}
];
