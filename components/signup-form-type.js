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
import IndustrySelect from './industry-select'

export default function SignupFormType() {
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
                What kind of work do you do at Spatial Networks?
              </h2>
              <p className="mt-2 text-sm text-gray-500 text-center">
                Select any use cases you might work on. Choose all that apply. 
              </p>
            </div>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div className="block md:hidden max-w-md mx-auto -space-y-px">
              <label htmlFor="company-size" className="block text-sm font-medium text-gray-700">
                Use cases
              </label>
              <div className="mt-1 col-span-2 sm:col-span-3">
                <IndustrySelect />
              </div>
            </div>
            <div className="hidden md:block mx-auto w-full max-w-4xl space-y-8">            
              <div className="grid gap-2 md:grid-cols-2 content-center">
                <div className="bg-white p-4 border border-solid border-l-8 border-l-yellow-500 rounded-md hover:bg-gray-50">
                  <label htmlFor="industry-construction" className="flex cursor-pointer items-center text-lg font-medium leading-6 text-gray-900">
                    <input
                      id="industry-construction"
                      name="industry"
                      type="radio"
                      className="h-4 w-4 mr-2 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10">
                      <BuildingOffice2Icon className="h-8 w-8 text-yellow-500 aria-hidden-true" />
                    </div>
                    <div className="mt-0 ml-2 text-left">
                        Asset management
                    </div>
                  </label>
                </div>            
                <div className="bg-white p-4 border border-solid border-l-8 border-l-orange-600 rounded-md hover:bg-gray-50">
                  <label htmlFor="industry-energy" className="flex cursor-pointer items-center text-lg font-medium leading-6 text-gray-900">
                    <input
                      id="industry-energy"
                      name="industry"
                      type="radio"
                      className="h-4 w-4 mr-2 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10">
                      <BoltIcon className="h-8 w-8 text-orange-600 aria-hidden-true" />
                    </div>
                    <div className="mt-0 ml-2 text-left">
                        Safety audits
                    </div>
                  </label>
                </div>            
                <div className="bg-white p-4 border border-solid border-l-8 border-l-green-500 rounded-md hover:bg-gray-50">
                  <label htmlFor="industry-environmental" className="flex cursor-pointer items-center text-lg font-medium leading-6 text-gray-900">
                    <input
                      id="industry-environmental"
                      name="industry"
                      type="radio"
                      className="h-4 w-4 mr-2 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10">
                      <GlobeAmericasIcon className="h-8 w-8 text-green-500 aria-hidden-true" />
                    </div>
                    <div className="mt-0 ml-2 text-left">
                        Inspections
                    </div>
                  </label>
                </div>            
                <div className="bg-white p-4 border border-solid border-l-8 border-l-sky-800 rounded-md hover:bg-gray-50">
                  <label htmlFor="industry-manufacturing" className="flex cursor-pointer items-center text-lg font-medium leading-6 text-gray-900">
                    <input
                      id="industry-manufacturing"
                      name="industry"
                      type="radio"
                      className="h-4 w-4 mr-2 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10">
                      <RectangleStackIcon className="h-8 w-8 text-sky-800 aria-hidden-true" />
                    </div>
                    <div className="mt-0 ml-2 text-left">
                        Compliance
                    </div>
                  </label>
                </div>            
                <div className="bg-white p-4 border border-solid border-l-8 border-l-pink-500 rounded-md hover:bg-gray-50">
                  <label htmlFor="industry-retail" className="flex cursor-pointer items-center text-lg font-medium leading-6 text-gray-900">
                    <input
                      id="industry-retail"
                      name="industry"
                      type="radio"
                      className="h-4 w-4 mr-2 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10">
                      <BuildingStorefrontIcon className="h-8 w-8 text-pink-500 aria-hidden-true" />
                    </div>
                    <div className="mt-0 ml-2 text-left">
                        Facility management
                    </div>
                  </label>
                </div>            
                <div className="bg-white p-4 border border-solid border-l-8 border-l-blue-500 rounded-md hover:bg-gray-50">
                  <label htmlFor="industry-telecom" className="flex cursor-pointer items-center text-lg font-medium leading-6 text-gray-900">
                    <input
                      id="industry-telecom"
                      name="industry"
                      type="radio"
                      className="h-4 w-4 mr-2 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10">
                      <PhoneIcon className="h-8 w-8 text-blue-500 aria-hidden-true" />
                    </div>
                    <div className="mt-0 ml-2 text-left">
                        Surveying + mapping
                    </div>
                  </label>
                </div>            
                <div className="bg-white p-4 border border-solid border-l-8 border-l-amber-800 rounded-md hover:bg-gray-50">
                  <label htmlFor="industry-transportation" className="flex cursor-pointer items-center text-lg font-medium leading-6 text-gray-900">
                    <input
                      id="industry-transportation"
                      name="industry"
                      type="radio"
                      className="h-4 w-4 mr-2 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10">
                      <TruckIcon className="h-8 w-8 text-amber-800 aria-hidden-true" />
                    </div>
                    <div className="mt-0 ml-2 text-left">
                        Damage reports
                    </div>
                  </label>
                </div>            

              </div>
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
                <Link href="/signup-size">
                  <button                  
                    type="submit"
                    className="group relative flex pr-10 ml-6 w-80 justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
                  >
                    <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <ArrowRightIcon className="h-5 w-5 text-sky-200 group-hover:text-sky-50" />
                    </span>
                    Next
                  </button>
                </Link>
              </div>
            </div>
          </form>
          <p className="mt-2 text-xs text-gray-500 text-center">
            Step 3 of 4
          </p>
        </div>
      </div>
    </>
  )
}
