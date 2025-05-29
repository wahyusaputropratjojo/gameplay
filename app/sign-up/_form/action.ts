"use server";

export async function signUpFormAction(_prev: unknown, formData: FormData) {
	try {
		console.log(formData);
	} catch (error) {
		return error;
	}
}
