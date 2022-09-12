import { ArrowRightIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import Image from 'next/image'

export default function SignupForm() {
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
              Welcome to Fulcrum!
            </h2>
            <p className="mt-2 text-sm text-gray-500 text-center">
              Tell us a little about yourself.
            </p>
          </div>
          <form className="mt-8 space-y-6" action="/signup2" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="first-name" className="sr-only">First name</label>
                <input placeholder="First name" type="text" name="first-name" id="first-name" autoComplete="given-name" className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-sky-400 focus:outline-none focus:ring-sky-400 sm:text-sm" />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="last-name" className="sr-only">Last name</label>
                <input placeholder="Last name" type="text" name="last-name" id="last-name" autoComplete="family-name" className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-sky-400 focus:outline-none focus:ring-sky-400 sm:text-sm" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="company-name" className="sr-only">
                  Phone number
                </label>
                <input
                  type="tel"
                  name="company-name"
                  id="company-name"
                  autoComplete="phone-number"
                  placeholder="Phone number"
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-sky-400 focus:outline-none focus:ring-sky-400 sm:text-sm"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="company-name" className="sr-only">
                  Company name
                </label>
                <input
                  type="text"
                  name="company-name"
                  id="company-name"
                  autoComplete="company-name"
                  placeholder="Company name"
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-sky-400 focus:outline-none focus:ring-sky-400 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <Link href="/signup-industry">
                <a                  
                  type="submit"
                  className="mt-8 group relative flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                >
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <ArrowRightIcon className="h-5 w-5 text-sky-200 group-hover:text-sky-50" aria-hidden="true" />
                  </span>
                  Next
                </a>
              </Link>
            </div>
          </form>
          <p className="mt-2 text-xs text-gray-500 text-center">
            Step 1 of 3
          </p>
        </div>
      </div>
    </>
  )
}
