import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
	const userEmail = cookies.get('user_email');
	cookies.delete('user_email', { path: '/' });

	return { userEmail };
};
