import { CheckIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'

export default function TrialForm() {
  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <Image
              className="mx-auto h-12 w-12"
              src="/fulcrumicon.svg"
              alt="Fulcrum"
              height={48}
              width={48}
            />
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
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  placeholder="Email address"
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-sky-400 focus:outline-none focus:ring-sky-400 sm:text-sm"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="password" className="sr-only">
                  Create password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="given-name"
                  placeholder="Create password"
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-sky-400 focus:outline-none focus:ring-sky-400 sm:text-sm"
                />
              </div>

            </div>
            <div>
              <Link href="/signup-name">
              <a
                type="submit"
                className="mt-8 group relative flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <CheckIcon className="h-5 w-5 text-sky-200 group-hover:text-sky-50" aria-hidden="true" />
                </span>
                Get started
              </a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
