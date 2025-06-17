"use server";

export async function signInFormAction(_prev: unknown, formData: FormData) {
	try {
		console.log(formData);
	} catch (error) {
		return error;
	}
}
