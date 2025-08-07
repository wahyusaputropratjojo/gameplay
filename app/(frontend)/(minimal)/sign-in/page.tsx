import Link from 'next/link';
import { GameplayLogo } from '@/components/logo/gameplay-logo';
import { SignInForm } from './sign-in-form';

export default function SignInPage() {
  return (
    <main className="flex min-h-dvh justify-center">
      <section className="grid w-full max-w-120 grid-cols-1 grid-rows-[1fr_5fr] flex-col gap-6 justify-self-center p-6 xl:col-start-2">
        <GameplayLogo />
        <div className="flex flex-col gap-6">
          <div>
            <h3>Welcome back</h3>
            <p className="label">Sign in to your account</p>
          </div>
          <SignInForm />
          <div className="space-x-1">
            <p className="inline text-sm">Don&apos;t have an account?</p>
            <Link
              className="font-bold text-sm hover:underline hover:underline-offset-4 focus-visible:underline focus-visible:underline-offset-4 focus-visible:outline-none"
              href="/sign-up"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
