"use server";

export async function signIn(_prev: unknown, formData: FormData) {
    try {
        console.log(formData);
    } catch (error) {
        return error;
    }
}
