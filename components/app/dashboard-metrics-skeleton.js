/* This example requires Tailwind CSS v2.0+ */
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import { CursorArrowRaysIcon, EnvelopeOpenIcon, UsersIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const stats = [
  { id: 1, name: 'Total Subscribers', stat: '71,897', icon: UsersIcon, change: '122', changeType: 'increase' },
  { id: 2, name: 'Avg. Open Rate', stat: '58.16%', icon: EnvelopeOpenIcon, change: '5.4%', changeType: 'increase' },
  { id: 3, name: 'Avg. Click Rate', stat: '24.57%', icon: CursorArrowRaysIcon, change: '3.2%', changeType: 'decrease' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DashboardMetricsSkeleton() {
  return (
    <div>
      <h2 className="animate-pulse w-24 h-3 mt-6 mb-2 block font-medium bg-gray-200 rounded-xl text-sm font-medium text-gray-500">&nbsp;</h2>

      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6"
          >
            <dt>
              <div className="animate-pulse absolute rounded-md border bg-gray-200 p-3">
                <div className="h-6 w-6 text-sky-400" aria-hidden="true"></div>
              </div>
              <p className="ml-16 text-gray-500 w-28 bg-gray-200 h-4 rounded-xl animate-pulse">&nbsp;</p>
            </dt>
            <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
              <p className="text-gray-500 w-32 mt-2 bg-gray-200 h-7 rounded-3xl animate-pulse">&nbsp;</p>
              <p
                className={classNames(
                  item.changeType === 'increase' ? 'text-green-600' : 'text-red-600',
                  'ml-2 flex items-baseline text-sm font-semibold'
                )}
              >
              </p>
              <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
                <div className="text-sm">
                  <Link href="#">
                    <a className="text-gray-500 w-32 block bg-gray-200 h-4 rounded-xl animate-pulse">
                      {' '}
                      &nbsp;
                    </a>
                  </Link>
                </div>
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
