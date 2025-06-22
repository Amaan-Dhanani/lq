import type { PageServerLoad, Actions } from './$types';
import { redirect, error } from '@sveltejs/kit';
import { tempquest_pass, wrong_question_access } from '$lib/server/create_a_quest';

export const load: PageServerLoad = async ({ url, cookies }) => {
  const pageName = Number(url.pathname.slice(-1)) || -9;
  console.log(pageName);
  if (pageName != -9) {
  	const email = cookies.get("email");
 	if (!email) throw error(400, "Missing email cookie");
	await wrong_question_access(email, pageName);
  }

  

};


export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const email = cookies.get("email");
		if (!email) throw error(400, "Missing email cookie");
		const formData = await request.formData();

		//CHANGE
		const info = Object.fromEntries(formData) as { quest_type: string; quest_title: string; access: string; };
		//CHANGE


		await tempquest_pass(email, info);
		
		throw redirect(303, '/create_a_quest/quest_storage');
	}
};
