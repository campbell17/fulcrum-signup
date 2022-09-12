import { PlusIcon } from "@heroicons/react/20/solid";

export default function AppsContent() {
  return (
    <div className="grid grid-cols-1 gap-8">
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h1 className="text-xl font-bold tracking-tight text-gray-900">Apps</h1>        
        </div>
        <div className="mt-4 flex md:mt-0 md:ml-4">
          {/* <button
            type="button"
            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Edit
          </button> */}
          <button
            type="button"
            className="ml-3 inline-flex items-center rounded-md border border-transparent bg-sky-400 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
          >
            <PlusIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
            New
          </button>
        </div>
      </div>      
    </div>

  )
}