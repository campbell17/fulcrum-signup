import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import { StarIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const projects = [
  { name: 'GeoBooze', initials: 'GB', href: '#', records: '3,288', bgColor: 'bg-gray-50' },
  { name: 'Parcels', initials: 'P', href: '#', records: '6,873', bgColor: 'bg-gray-50' },
  { name: 'Property Appraisal', initials: 'PA', href: '#', records: '2,968', bgColor: 'bg-gray-50' },
  { name: 'Building Inspection', initials: 'BI', href: '#', records: '1,628', bgColor: 'bg-gray-50' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DashboardFavorites() {
  return (
    <div>
      <h2 className="text-sm font-medium text-gray-500">Favorites</h2>
      <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
        {projects.map((project) => (
          <li key={project.name} className="col-span-1 flex rounded-md shadow-sm">
            <div
              className={classNames(
                project.bgColor,
                'flex-shrink-0 flex items-center justify-center w-16 border border-color-gray-200 text-white text-sm font-medium rounded-l-md'
              )}
            >
              <StarIcon className="h-5 w-5 fill-yellow-100 text-yellow-400" aria-hidden="true" />
            </div>
            <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white">
              <div className="flex-1 truncate px-4 py-2 text-sm">
                <Link href={project.href} >
                  <a className="font-medium text-gray-900 hover:text-gray-600">
                    {project.name}
                  </a>
                </Link>
                <p className="text-gray-500">{project.records} Records</p>
              </div>
              <div className="flex-shrink-0 pr-2">
                <button
                  type="button"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white bg-transparent text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-50 focus:ring-offset-2"
                >
                  <span className="sr-only">Open options</span>
                  <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
