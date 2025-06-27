import type { PageServerLoad, Actions } from './$types';
import { redirect, error } from '@sveltejs/kit';
import { tempquest_pass, wrong_question_access, return_tempquest_data } from '$lib/server/create_a_quest';

export const load: PageServerLoad = async ({ url, cookies }) => {
  const pageName = Number(url.pathname.slice(-1)) || -9;
  const email = cookies.get("email");
  if (!email) throw error(400, "Missing email cookie");
  if (pageName != -9) {
    await wrong_question_access(email, pageName);
  }

  const tempquest = await return_tempquest_data(email);
  return { tempquest: tempquest}
};