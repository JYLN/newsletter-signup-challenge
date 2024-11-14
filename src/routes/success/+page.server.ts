import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
	const userEmail = cookies.get('user_email');

	if (!userEmail) {
		redirect(302, '/');
	}

	cookies.delete('user_email', { path: '/' });

	return { userEmail };
};
