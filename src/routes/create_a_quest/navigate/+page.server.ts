import type { PageServerLoad, Actions } from './$types';
import { redirect, error } from '@sveltejs/kit';
import { submit, wrong_question_access, return_tempquest_data } from '$lib/server/create_a_quest';
export const load: PageServerLoad = async ({ url, cookies }) => {
  const email = cookies.get("email");
  if (!email) throw error(400, "Missing email cookie");

  const tempquest = await return_tempquest_data(email);

  if (!tempquest.question) {
    throw redirect(303, '/create_a_quest/main');
  }

  if (tempquest.question == 0) {
    throw redirect(303, '/create_a_quest/quest_storage');
  }

  return { tempquest: tempquest}
};
