import { CheckIcon } from '@heroicons/react/20/solid'
import { EyeSlashIcon } from '@heroicons/react/24/outline';
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import CreatePasswordField from './create-password-field';

export default function TrialForm() {
  const router = useRouter();

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
              Start your free trial
            </h2>
            <p className="mt-2 text-sm text-gray-500 text-center">
              Get up and running in minutes. No credit card required.
            </p>
          </div>
          <form className="mt-8 space-y-6" action="/signup-name" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  className="mt-1 relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-sky-400 focus:outline-none focus:ring-sky-400 sm:text-sm"
                />
              </div>
              <CreatePasswordField />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="tos"
                  name="tos"
                  type="checkbox"
                  required
                  className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-sky-400 cursor-pointer"
                />
                <label htmlFor="tos" className="ml-2 block text-sm text-gray-900 cursor-pointer">
                  I agree to the <Link href="#"><a className="font-medium text-sky-400 hover:text-sky-500">Terms of Service</a></Link> and <Link href="#"><a className="font-medium text-sky-400 hover:text-sky-500">Privacy Policy</a></Link>
                </label>
              </div>
            </div>

            <div>
              <Link href="/signup-name">
              <button
                type="submit"
                className="mt-8 group relative flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <CheckIcon className="h-5 w-5 text-sky-200 group-hover:text-sky-50" aria-hidden="true" />
                </span>
                Get started
              </button>
              </Link>
            </div>
          </form>          
          <div className={router.pathname.includes("/signin") ? "hidden" : "relative"}>
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-gray-50 px-2 text-sm text-gray-500">Or</span>
            </div>
          </div>          
          <p className={router.pathname.includes("/signin") ? "hidden" : "mt-2 text-center text-sm text-gray-600"}>
            Already have an account?{' '}
            <Link href="/signin" >
              <a className="font-medium text-sky-400 hover:text-sky-500">
                Sign in.
              </a>
            </Link>
          </p>
        </div>        
      </div>
    </>
  )
}
