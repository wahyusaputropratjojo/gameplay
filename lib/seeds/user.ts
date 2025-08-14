import { payload } from '@/lib/payload';

export async function userSeed() {
  await payload.create({
    collection: 'user',
    data: {
      email: process.env.FIRST_USER_EMAIL as string,
      password: process.env.FIRST_USER_PASSWORD as string,
    },
  });
}
