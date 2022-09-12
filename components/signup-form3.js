import { ArrowRightIcon } from '@heroicons/react/20/solid'
import Link from 'next/link';
import Image from 'next/image'
import CompanySizeSelect from './company-size-select';

export default function SignupForm3() {
  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-md space-y-8">
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
              Finally, how many team members does your company have?
            </h2>
            {/* <p className="mt-2 text-sm text-gray-500 text-center">
              What kind of work do you do at Spatial Networks?
            </p> */}
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div className="-space-y-px">
              <div className="col-span-2 sm:col-span-3">
                <CompanySizeSelect />
              </div>
              {/* <div className="col-span-2 sm:col-span-3">
                <label htmlFor="company-size" className="sr-only">
                  Company size
                </label>
                <select
                  id="company-size"
                  name="company-size"
                  autoComplete="company-size"
                  defaultValue={'default'}
                  className="mt-1 block w-full rounded-md border cursor-pointer border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-sky-400 focus:outline-none focus:ring-sky-400 sm:text-sm"
                >
                  <option disabled value="default">Company size</option>
                  <option>1-10</option>
                  <option>11-50</option>
                  <option>51-200</option>
                  <option>201-500</option>
                  <option>501-1,000</option>
                  <option>1,001-5000</option>
                  <option>5,001-10,000</option>
                  <option>10,000+</option>
                  <option>Personal use</option>
                </select>
              </div> */}
            </div>
            <div className="mx-auto w-full max-w-md space-y-8">
              <div className="mt-8 flex items-center justify-between">
                <Link href="/signup-industry">
                  <a
                    
                    className="inline-flex justify-center flex-1 rounded-md border border-gray-300 py-2 px-4 text-sm font-medium text-gray-400 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-100 focus:ring-offset-2"
                  >
                    back
                  </a>
                </Link>
                <Link href="/app/dashboard">
                  <a 
                    type="submit"
                    className="group relative flex pr-10 ml-6 w-80 justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
                  >
                    <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <ArrowRightIcon className="h-5 w-5 text-sky-200 group-hover:text-sky-50" aria-hidden="true" />
                    </span>
                    Take me to Fulcrum
                  </a>
                </Link>
              </div>
            </div>
          </form>
          <p className="mt-2 text-xs text-gray-500 text-center">
            Step 3 of 3
          </p>
        </div>
      </div>
    </>
  )
}
