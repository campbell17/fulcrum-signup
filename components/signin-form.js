import { LockClosedIcon } from '@heroicons/react/20/solid'
import TrialModal from '../components/modal';
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import PasswordField from './password-field';

export default function SigninForm() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <Link href="/">
              <a>
                <Image
                  className="mx-auto h-12 w-12"
                  src="/fulcrumicon.svg"
                  alt="Fulcrum"
                  height={48}
                  width={48}
                />
              </a>
            </Link>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <Link href="#" >
                <a onClick={() => setOpen(!open)} className="font-medium text-sky-400 hover:text-sky-500">
                  start your 14-day free trial
                </a>
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-1 relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-sky-400 focus:outline-none focus:ring-sky-400 sm:text-sm"
                  placeholder="you@company.com"
                />
              </div>
              <PasswordField />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-sky-400"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link href="#">
                  <a className="font-medium text-sky-400 hover:text-sky-500">
                    Forgot your password?
                  </a>
                </Link>
              </div>
            </div>

            <div>
              <Link href="/app/dashboard-loading">
                <a 
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <LockClosedIcon className="h-5 w-5 text-sky-200 group-hover:text-sky-50" aria-hidden="true" />
                  </span>
                  Sign in
                </a>
              </Link>
            </div>
          </form>
        </div>
      </div>
      {open && (<TrialModal />)}
    </>
  )
}

// const Modal = () => {
//   return (
//     <TrialModal open />
//   );
// }
