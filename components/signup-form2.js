import { ArrowRightIcon } from '@heroicons/react/20/solid'
import { 
  BuildingOffice2Icon, 
  BoltIcon, 
  GlobeAmericasIcon, 
  FireIcon, 
  BuildingStorefrontIcon, 
  PhoneIcon, 
  QuestionMarkCircleIcon,
  TruckIcon,
  RectangleStackIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'

export default function SignupForm2() {
  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-full space-y-8">
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
                What&rsquo;s your industry?
              </h2>
              <p className="mt-2 text-sm text-gray-500 text-center">
                What kind of work do you do at Spatial Networks? This helps us set you up with sample data relevant to your industry.
              </p>
            </div>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
          {/* <div className="mx-auto w-full max-w-md space-y-8">

            <div className="-space-y-px">
              <div className="col-span-2 sm:col-span-3">
                <label htmlFor="industry" className="sr-only">
                  Industry
                </label>
                <select
                  id="industry"
                  name="industry"
                  autoComplete="country-name"
                  defaultValue={'default'}
                  className="mt-1 block w-full rounded-md border cursor-pointer border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-sky-400 focus:outline-none focus:ring-sky-400 sm:text-sm"
                >
                  <option disabled value="default">Select Industry</option>
                  <option>Construction</option>
                  <option>Energy</option>
                  <option>Enviromental Services</option>
                  <option>Manufacturing</option>
                  <option>Retail</option>
                  <option>Telecommunications</option>
                  <option>Transportation & Storage</option>
                  <option>Utilities</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            </div> */}
            <div className="mx-auto w-full max-w-4xl space-y-8">            
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-white p-4 border border-solid rounded-md hover:bg-gray-50">
                  <label htmlFor="industry-construction" className="flex cursor-pointer items-center text-lg font-medium leading-6 text-gray-900">
                    <input
                      id="industry-construction"
                      name="industry"
                      type="radio"
                      className="h-4 w-4 mr-2 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-yellow-100 sm:mx-0 sm:h-10 sm:w-10">
                      <BuildingOffice2Icon className="h-6 w-6 text-black-600" aria-hidden="true" />
                    </div>
                    <div className="mt-0 ml-2 text-left">
                        Construction
                    </div>
                  </label>
                </div>            
                <div className="bg-white p-4 border border-solid rounded-md hover:bg-gray-50">
                  <label htmlFor="industry-energy" className="flex cursor-pointer items-center text-lg font-medium leading-6 text-gray-900">
                    <input
                      id="industry-energy"
                      name="industry"
                      type="radio"
                      className="h-4 w-4 mr-2 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 sm:mx-0 sm:h-10 sm:w-10">
                      <BoltIcon className="h-6 w-6 text-orange-600" aria-hidden="true" />
                    </div>
                    <div className="mt-0 ml-2 text-left">
                        Energy
                    </div>
                  </label>
                </div>            
                <div className="bg-white p-4 border border-solid rounded-md hover:bg-gray-50">
                  <label htmlFor="industry-environmental" className="flex cursor-pointer items-center text-lg font-medium leading-6 text-gray-900">
                    <input
                      id="industry-environmental"
                      name="industry"
                      type="radio"
                      className="h-4 w-4 mr-2 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                      <GlobeAmericasIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                    </div>
                    <div className="mt-0 ml-2 text-left">
                        Enviromental
                    </div>
                  </label>
                </div>            
                <div className="bg-white p-4 border border-solid rounded-md hover:bg-gray-50">
                  <label htmlFor="industry-manufacturing" className="flex cursor-pointer items-center text-lg font-medium leading-6 text-gray-900">
                    <input
                      id="industry-manufacturing"
                      name="industry"
                      type="radio"
                      className="h-4 w-4 mr-2 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 sm:mx-0 sm:h-10 sm:w-10">
                      <RectangleStackIcon className="h-6 w-6 text-gray-600" aria-hidden="true" />
                    </div>
                    <div className="mt-0 ml-2 text-left">
                        Manufacturing
                    </div>
                  </label>
                </div>            
                <div className="bg-white p-4 border border-solid rounded-md hover:bg-gray-50">
                  <label htmlFor="industry-retail" className="flex cursor-pointer items-center text-lg font-medium leading-6 text-gray-900">
                    <input
                      id="industry-retail"
                      name="industry"
                      type="radio"
                      className="h-4 w-4 mr-2 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-pink-100 sm:mx-0 sm:h-10 sm:w-10">
                      <BuildingStorefrontIcon className="h-6 w-6 text-pink-600" aria-hidden="true" />
                    </div>
                    <div className="mt-0 ml-2 text-left">
                        Retail
                    </div>
                  </label>
                </div>            
                <div className="bg-white p-4 border border-solid rounded-md hover:bg-gray-50">
                  <label htmlFor="industry-telecom" className="flex cursor-pointer items-center text-lg font-medium leading-6 text-gray-900">
                    <input
                      id="industry-telecom"
                      name="industry"
                      type="radio"
                      className="h-4 w-4 mr-2 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                      <PhoneIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                    </div>
                    <div className="mt-0 ml-2 text-left">
                        Telecommunications
                    </div>
                  </label>
                </div>            
                <div className="bg-white p-4 border border-solid rounded-md hover:bg-gray-50">
                  <label htmlFor="industry-transportation" className="flex cursor-pointer items-center text-lg font-medium leading-6 text-gray-900">
                    <input
                      id="industry-transportation"
                      name="industry"
                      type="radio"
                      className="h-4 w-4 mr-2 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <TruckIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                    </div>
                    <div className="mt-0 ml-2 text-left">
                        Transportation
                    </div>
                  </label>
                </div>            
                <div className="bg-white p-4 border border-solid rounded-md hover:bg-gray-50">
                  <label htmlFor="industry-utilities" className="flex cursor-pointer items-center text-lg font-medium leading-6 text-gray-900">
                    <input
                      id="industry-utilities"
                      name="industry"
                      type="radio"
                      className="h-4 w-4 mr-2 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-cyan-100 sm:mx-0 sm:h-10 sm:w-10">
                      <FireIcon className="h-6 w-6 text-cyan-600" aria-hidden="true" />
                    </div>
                    <div className="mt-0 ml-2 text-left">
                        Utilities
                    </div>
                  </label>
                </div>            
                <div className="bg-white p-4 border border-solid rounded-md hover:bg-gray-50">
                  <label htmlFor="industry-other" className="flex cursor-pointer items-center text-lg font-medium leading-6 text-gray-900">
                    <input
                      id="industry-other"
                      name="industry"
                      type="radio"
                      className="h-4 w-4 mr-2 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-stone-100 sm:mx-0 sm:h-10 sm:w-10">
                      <QuestionMarkCircleIcon className="h-6 w-6 text-stone-600" aria-hidden="true" />
                    </div>
                    <div className="mt-0 ml-2 text-left">
                        Other
                    </div>
                  </label>
                </div>            
              </div>
            </div>
            <div className="mx-auto w-full max-w-md space-y-8">
              <div className="mt-8 flex items-center justify-between">
                <Link href="/signup-name">
                  <a                  
                    className="inline-flex justify-center flex-1 rounded-md border border-gray-300 py-2 px-4 text-sm font-medium text-gray-400 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-100 focus:ring-offset-2"
                  >
                    back
                  </a>
                </Link>
                <Link href="/signup-size">
                  <a                  
                    type="submit"
                    className="group relative flex pr-10 ml-6 w-80 justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
                  >
                    <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <ArrowRightIcon className="h-5 w-5 text-sky-200 group-hover:text-sky-50" aria-hidden="true" />
                    </span>
                    Next
                  </a>
                </Link>
              </div>
            </div>
          </form>
          <p className="mt-2 text-xs text-gray-500 text-center">
            Step 2 of 3
          </p>
        </div>
      </div>
    </>
  )
}
