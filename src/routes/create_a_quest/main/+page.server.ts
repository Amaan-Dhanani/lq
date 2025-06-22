import type { Actions } from './$types';
import { redirect, error } from '@sveltejs/kit';
import { tempquest_pass } from '$lib/server/create_a_quest';
export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const email = cookies.get("email");
		if (!email) throw error(400, "Missing email cookie");
		const formData = await request.formData();
		const info = Object.fromEntries(formData) as { quest_type: string; quest_title: string; access: string; };
		await tempquest_pass(email, info);
		throw redirect(303, '/create_a_quest/quest_storage');
	}
};
