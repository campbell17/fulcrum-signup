import { Fragment, useState, useRef } from 'react'
import LayoutAppSidebar from '../../components/layout-appsidebar';
import { PlusIcon, Bars4Icon } from '@heroicons/react/20/solid';
import { CheckIcon, MapPinIcon, ShieldExclamationIcon, TrashIcon, CameraIcon, CheckCircleIcon, Squares2X2Icon } from '@heroicons/react/24/outline'
import { Dialog, Transition, Listbox, Popover } from '@headlessui/react'
import Image from 'next/image';
import Link from 'next/link';

const assignees = [
  { name: 'Unresolved', value: 'unresolved', resolved: false },
  { name: 'Resolved', value: 'resolved', resolved: true },
]
const priorities = [
  // { name: 'Priority:', value: null, unavailable: true },
  { name: 'Critical', value: 'critical', unavailable: false },
  { name: 'High', value: 'high', unavailable: false },
  { name: 'Medium', value: 'medium', unavailable: false },
  { name: 'Low', value: 'low', unavailable: false },
]
const dueDates = [
  // { name: 'Type:', value: null, unavailable: true },
  { name: 'Observation', value: 'observation', unavailable: false },
  { name: 'Maintenance', value: 'maintenance', unavailable: false },
  { name: 'Near Miss', value: 'near-miss', unavailable: false },
  { name: 'Hazard', value: 'hazard', unavailable: false },
  { name: 'Incident', value: 'incident', unavailable: false },
]
const location = [
  { name: 'Located', value: 'located', hasLocation: false },
]

const tabs = [
  { name: 'Issue', href: '#', count: 3, current: true },
  { name: 'Resolution', href: '#', count: 1, current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Issues() {
  const [open, setOpen] = useState(false)
  const [assigned, setAssigned] = useState(assignees[0])
  const [priority, setPriority] = useState(priorities[3])
  const [dated, setDated] = useState(dueDates[0])
  const [located, setLocated] = useState(location[0])
  const [serviceList, setServiceList] = useState([]);
  const [photoList, setPhotoList] = useState([]);

  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list);
  };

  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  };

  const handleServiceAdd = () => {
    setServiceList([...serviceList, { service: "" }]);
  };

  const files = [
    { name: 'IMG_4985.HEIC', size: '3.9 MB', source: 'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80', current: true, },
    { name: 'IMG_4986.HEIC', size: '3.9 MB', source: 'https://images.unsplash.com/photo-1614926857083-7be149266cda?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=512&q=80', current: true, },
    { name: 'IMG_4987.HEIC', size: '3.9 MB', source: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80', current: true, },
  ]

  let titleRef = useRef(null)

  return (
    <LayoutAppSidebar>
      <div className="px-4 py-6 sm:px-6 lg:px-8">      
        <div className="grid grid-cols-1 gap-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="min-w-0 flex-1">
              <h1 className="text-xl font-bold tracking-tight text-gray-900">Issues</h1>        
            </div>
            <div className="mt-4 flex md:mt-0 md:ml-4">
              <button
                type="button"
                className="ml-3 inline-flex items-center rounded-md border border-transparent bg-sky-400 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                onClick={() => setOpen(true)}
              >
                <PlusIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                New
              </button>
            </div>
          </div>    
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-white p-8 mt-12 rounded-lg shadow">
          <button
            type="button"      
            className="relative block sm:w-1/2 mx-auto rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            onClick={() => setOpen(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-auto h-12 w-12 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
            <span className="mt-2 block text-sm font-medium text-gray-900">Report an Issue</span>
          </button>
        </div>        


        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={()=>{}} initialFocus={titleRef}>
            <div className="fixed inset-0" />

            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-y-0 bottom-[33px] right-0 flex max-w-full pl-10 sm:pl-16">
                  <Transition.Child
                    
                    as={Fragment}
                    enter="transform transition ease-in-out duration-200 sm:duration-300"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-200 sm:duration-300"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                  >
                    <Dialog.Panel className="pointer-events-auto w-screen max-w-xl">
                      <div className="bg-gray-50 border-b text-xs border-gray-100 py-2 px-6 flex justify-between">
                        <span className="font-medium text-gray-400">
                          ISS-123456789
                        </span>
                        <span className="font-medium text-gray-400">
                          by <Link href={'#'}><a className="hover:text-gray-600 border-b-2 border-dotted border-gray-400">Tim Campbell</a></Link> on Sep. 26, 2022
                        </span>
                      </div>
                      <form className="flex h-full flex-col bg-white shadow-xl divide-y divide-gray-200">
                        <div className="h-0 pb-4 flex-1 overflow-y-auto">
                          <div className="bg-white py-4 px-4 pb-0 sm:px-6">
                            <div className="flex items-center justify-between relative">
                              <input
                                ref={titleRef}
                                id="title"
                                name="title"
                                type="text"
                                autoComplete="title"
                                required
                                className="mt-1 pr-20 truncate block w-full appearance-none border-b border-gray-200 text-gray-900 py-1 placeholder-gray-400 focus:border-sky-400 focus:outline-none focus:ring-sky-400 sm:text-xl"
                                placeholder='Issue Title'                                
                              />
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col justify-between">
                            <div className="px-4 sm:px-6">
                              <div className="space-y-6 pt-6 pb-2">

                                <div className="flex flex-nowrap justify-between space-x-2 py-0 px-0">
                                  <div className="flex space-x-2">
                                  <Listbox as="div" value={assigned} onChange={setAssigned} className="flex-shrink-0">
                                    {({ open }) => (
                                      <>
                                        <Listbox.Label className="sr-only"> Assign </Listbox.Label>
                                        <div className="relative">
                                          <Listbox.Button className="relative inline-flex items-center whitespace-nowrap rounded-full bg-gray-50 py-2 px-2 text-sm font-medium text-gray-500 hover:bg-gray-100 sm:px-3">
                                            <span
                                              className={classNames(
                                                assigned.resolved ? 'bg-green-400' : 'bg-yellow-400',
                                                'inline-block h-2 w-2 flex-shrink-0 rounded-full'
                                              )}
                                              aria-hidden="true"
                                            />
                                            <span className="text-gray-900 hidden truncate sm:ml-2 sm:block">
                                              {assigned.name}
                                            </span>
                                          </Listbox.Button>

                                          <Transition
                                            show={open}
                                            as={Fragment}
                                            leave="transition ease-in duration-100"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                          >
                                            <Listbox.Options className="absolute left-0 z-10 mt-1 max-h-56 w-52 overflow-visible rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                              {assignees.map((assignee) => (
                                                <Listbox.Option
                                                  key={assignee.value}
                                                  className={({ active }) =>
                                                    classNames(
                                                      active ? 'bg-gray-100' : 'bg-white',
                                                      'relative cursor-default select-none py-2 px-3'
                                                    )
                                                  }
                                                  value={assignee}
                                                >
                                                  {({ selected, assigned, active }) => (
                                                    <>
                                                      <div className="flex items-center">
                                                        <span
                                                          className={classNames(
                                                            assignee.resolved ? 'bg-green-400' : 'bg-yellow-400',
                                                            'inline-block h-2 w-2 flex-shrink-0 rounded-full'
                                                          )}
                                                          aria-hidden="true"
                                                        />
                                                        <span className="ml-3 block truncate font-medium">{assignee.name}</span>
                                                      </div>

                                                      {selected ? (
                                                        <span
                                                          className={classNames(
                                                            active ? 'text-gray-700' : 'text-gray-400',
                                                            'absolute inset-y-0 right-0 flex items-center pr-4'
                                                          )}
                                                        >
                                                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                        </span>
                                                      ) : null}
                                                    </>
                                                  )}                                                  
                                                </Listbox.Option>
                                              ))}
                                            </Listbox.Options>
                                          </Transition>
                                        </div>
                                      </>
                                    )}
                                  </Listbox>

                                  <Listbox as="div" value={priority} onChange={setPriority} className="flex-shrink-0">
                                    {({ open }) => (
                                      <>
                                        <Listbox.Label className="sr-only"> Add a label </Listbox.Label>
                                        <div className="relative">
                                          <Listbox.Button className="relative inline-flex items-center whitespace-nowrap rounded-full bg-gray-50 py-2 px-2 text-sm font-medium text-gray-500 hover:bg-gray-100 sm:px-3">
                                            <ShieldExclamationIcon
                                              className={classNames(
                                                priority.value === null ? 'hidden' : 
                                                priority.value === 'critical' ? 'text-purple-500' : 
                                                priority.value === 'high' ? 'text-red-500' : 
                                                priority.value === 'medium' ? 'text-orange-500' : 
                                                priority.value === 'low' ? 'text-gray-500' : 'text-gray-500',
                                                'h-5 w-5 flex-shrink-0 sm:-ml-1'                                                        
                                              )}
                                              aria-hidden="true"
                                            />
                                            <span
                                              className={classNames(
                                                priority.value === null ? '' : 'text-gray-900',
                                                'hidden truncate sm:ml-1 sm:block'
                                              )}
                                            >
                                              {priority.value === null ? 'Priority' : priority.name}
                                            </span>
                                          </Listbox.Button>

                                          <Transition
                                            show={open}
                                            as={Fragment}
                                            leave="transition ease-in duration-100"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                          >
                                            <Listbox.Options className="absolute left-0 z-10 mt-1 max-h-56 w-52 overflow-auto rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                              {priorities.map((priority) => (
                                                <Listbox.Option
                                                  key={priority.value}
                                                  disabled={priority.unavailable}
                                                  className={({ active, disabled }) =>
                                                    classNames(
                                                      active ? 'bg-gray-100' : 'bg-white',
                                                      'relative cursor-default select-none py-2 px-3',
                                                      disabled ? 'text-gray-400' : ''
                                                    )
                                                  }
                                                  value={priority}
                                                >
                                                  {({ selected, active }) => (
                                                    <>                                                  
                                                      <div className="flex items-center">                                                    
                                                        <ShieldExclamationIcon
                                                          className={classNames(
                                                            priority.value === null ? 'hidden' : 
                                                            priority.value === 'critical' ? 'text-purple-500' : 
                                                            priority.value === 'high' ? 'text-red-500' : 
                                                            priority.value === 'medium' ? 'text-orange-500' : 
                                                            priority.value === 'low' ? 'text-gray-500' : 'text-gray-500',
                                                            'h-5 w-5 flex-shrink-0 sm:-ml-1'                                                        
                                                          )}
                                                          aria-hidden="true"
                                                        />
                                                        <div className="flex items-center">
                                                          <span className={classNames(
                                                            priority.value === null ? '' : 'ml-1', 
                                                            'block truncate font-medium')}>{priority.name}
                                                          </span>
                                                        </div>
                                                      </div>
                                                      {selected ? (
                                                        <span
                                                          className={classNames(
                                                            active ? 'text-gray-700' : 'text-gray-400',
                                                            'absolute inset-y-0 right-0 flex items-center pr-4'
                                                          )}
                                                        >
                                                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                        </span>
                                                      ) : null}                                                  
                                                    </>
                                                  )}
                                                </Listbox.Option>
                                              ))}
                                            </Listbox.Options>
                                          </Transition>
                                        </div>
                                      </>
                                    )}
                                  </Listbox>

                                  <Listbox as="div" value={dated} onChange={setDated} className="flex-shrink-0">
                                    {({ open }) => (
                                      <>
                                        <Listbox.Label className="sr-only"> Add a due date </Listbox.Label>
                                        <div className="relative">
                                          <Listbox.Button className="relative inline-flex items-center whitespace-nowrap rounded-full bg-gray-50 py-2 px-2 text-sm font-medium text-gray-500 hover:bg-gray-100 sm:px-3">                                            
                                            <span
                                              className={classNames(
                                                dated.value === null ? '' : 'text-gray-900',
                                                'hidden truncate sm:block'
                                              )}
                                            >
                                              {dated.value === null ? 'Type' : dated.name}
                                            </span>
                                          </Listbox.Button>

                                          <Transition
                                            show={open}
                                            as={Fragment}
                                            leave="transition ease-in duration-100"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                          >
                                            <Listbox.Options className="absolute right-0 z-10 mt-1 max-h-58 w-52 overflow-auto rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                              {dueDates.map((dueDate) => (
                                                <Listbox.Option
                                                  key={dueDate.value}
                                                  disabled={dueDate.unavailable}
                                                  className={({ active, disabled }) =>
                                                    classNames(
                                                      active ? 'bg-gray-100' : 'bg-white',
                                                      'relative cursor-default select-none py-2 px-3',
                                                      disabled ? 'text-gray-400' : ''
                                                    )
                                                  }
                                                  value={dueDate}
                                                >
                                                  {({ selected, active }) => (
                                                  <>
                                                  <div className="flex items-center">
                                                    <span className="block truncate font-medium">{dueDate.name}</span>
                                                  </div>
                                                  {selected ? (
                                                    <span
                                                      className={classNames(
                                                        active ? 'text-gray-700' : 'text-gray-400',
                                                        'absolute inset-y-0 right-0 flex items-center pr-4'
                                                      )}
                                                    >
                                                      <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                  ) : null}                                                  

                                                  </>
                                                  )}
                                                </Listbox.Option>
                                              ))}
                                            </Listbox.Options>
                                          </Transition>
                                        </div>
                                      </>
                                    )}
                                  </Listbox>
                                  </div>
                                  <Popover className="relative">
                                    {({ open }) => (
                                      <>
                                        <Popover.Button className={classNames(located.hasLocation ? 'bg-sky-100 text-sky-400 hover:text-sky-600 hover:bg-sky-200' : 'bg-gray-50 text-gray-500 hover:bg-gray-100', 'relative inline-flex items-center whitespace-nowrap rounded-full py-2 px-2 text-sm font-medium sm:px-2')}>
                                          <MapPinIcon className={classNames(
                                            located.hasLocation ? 'inherit' : 'text-gray-900',
                                            'h-5 w-5'
                                          )} aria-hidden="true" />
                                        </Popover.Button>
                                        <Transition
                                          as={Fragment}
                                          enter="transition ease-out duration-200"
                                          enterFrom="opacity-0 translate-y-1"
                                          enterTo="opacity-100 translate-y-0"
                                          leave="transition ease-in duration-150"
                                          leaveFrom="opacity-100 translate-y-0"
                                          leaveTo="opacity-0 translate-y-1"
                                        >
                                          <Popover.Panel className="absolute right-2 z-10 mt-3 w-screen max-w-lg transform px-4 sm:px-0">
                                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                              <div className="relative grid gap-8 bg-white p-7 grid-cols-1">
                                                <div>
                                                  <h3 className="text-lg font-medium leading-6 text-gray-900">Edit location</h3>
                                                  <div className="bg-sky-100 px-4 py-2 mt-2 rounded-md text-xs">Click on the map to set the Issue location</div>
                                                </div>
                                                <div className="flex items-center justify-center text-sky-400 h-52 border bg-sky-50 border-gray-300 uppercase rounded-md">Map Goes Here</div>
                                              </div>
                                              <div className="flex justify-end bg-gray-50 p-4">
                                                <Popover.Button 
                                                  className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2" 
                                                  as={location.hasLocation} 
                                                  href="##">
                                                  Set Location
                                                </Popover.Button>                                                
                                              </div>
                                            </div>
                                          </Popover.Panel>
                                        </Transition>
                                      </>
                                    )}
                                  </Popover>                                  

                                </div>

                                <div className="mb-4">
                                  <label htmlFor="description" className="block text-sm font-medium text-gray-900">
                                    Description
                                  </label>
                                  <div className="mt-1">
                                    <textarea
                                      id="description"
                                      name="description"
                                      rows={4}
                                      className="mt-2 relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:z-10 focus:border-sky-400 focus:outline-none focus:ring-sky-400 sm:text-sm"
                                      defaultValue={''}
                                      
                                    />
                                  </div>
                                </div>
                              </div>

                              {/* Tabs */}

                              <div className="pt-6 mt-6 border-t border-gray-200">
                              <label htmlFor="description" className="block text-sm font-medium text-gray-900">
                                  Photos
                              </label>
                                <div className="sm:hidden">
                                  <label htmlFor="tabs" className="sr-only">
                                    Select a tab
                                  </label>
                                  {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                                  <select
                                    id="tabs"
                                    name="tabs"
                                    className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                                    defaultValue="Recently Viewed"
                                  >
                                    <option>Recently Viewed</option>
                                    <option>Recently Added</option>
                                    <option>Favorited</option>
                                  </select>
                                </div>
                                <div className="hidden sm:block">
                                  <div className="flex items-center border-b border-gray-200">
                                    <nav className="-mb-px flex flex-1 space-x-6 xl:space-x-8" aria-label="Tabs">
                                      {tabs.map((tab) => (
                                        <Link key={tab.name} href={tab.href}>
                                          <a
                                            aria-current={tab.current ? 'page' : undefined}
                                            className={classNames(
                                              tab.current
                                                ? 'border-sky-500 text-sky-600'
                                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                                              'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
                                            )}
                                            >
                                            {tab.name}
                                            {tab.count ? (
                                              <span
                                                className={classNames(
                                                  tab.current ? 'bg-sky-100 text-sky-600' : 'bg-gray-100 text-gray-900',
                                                  'hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block'
                                                )}
                                              >
                                                {tab.count}
                                              </span>
                                            ) : null}                                          
                                          </a>
                                        </Link>
                                      ))}
                                    </nav>
                                    <div className="ml-6 hidden items-center rounded-lg bg-gray-100 p-0.5 sm:flex">
                                      <button
                                        type="button"
                                        className="rounded-md p-1.5 text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500"
                                      >
                                        <Bars4Icon className="h-5 w-5" aria-hidden="true" />
                                        <span className="sr-only">Use list view</span>
                                      </button>
                                      <button
                                        type="button"
                                        className="ml-0.5 rounded-md bg-white p-1.5 text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500"
                                      >
                                        <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
                                        <span className="sr-only">Use grid view</span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Gallery */}
                              <section className="" aria-labelledby="gallery-heading">
                                <h2 id="gallery-heading" className="sr-only">
                                  Recently viewed
                                </h2>
                                <ul
                                  role="list"
                                  className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-3"
                                >
                                  {files.map((file, index) => (
                                    <li key={file.name} className="relative">
                                      <div className='mt-2 hover:opacity-50 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-sky-500 group block w-full rounded-lg bg-gray-100 overflow-hidden'>
                                        <div className="relative h-28">
                                          <Image                                                                                        
                                            src={file.source}
                                            alt=""
                                            className={classNames(
                                              file.current ? '' : 'group-hover:opacity-75',
                                              'object-cover pointer-events-none'
                                            )}
                                            layout="fill"
                                            objectFit='cover'
                                          />
                                          <button
                                            type="button"                                    
                                            className="z-9 absolute hover:opacity-100 hover:bg-gray-100 right-1 top-1 -ml-px inline-flex items-center space-x-2 rounded-md border border-gray-300 bg-gray-50 px-1 py-1 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                                          >
                                            <TrashIcon className="h-3 w-3 text-gray-400 hover:text-gray-900" />
                                          </button>
                                        </div>
                                        <button type="button" className="absolute inset-0 focus:outline-none">
                                          <span className="sr-only">View details for {file.name}</span>
                                        </button>
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                                <div>
                                  <button
                                    type="button"
                                    
                                    className="mt-4 inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:ring-offset-1"
                                  >
                                    <CameraIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                                    <span>Add Photo</span>
                                  </button>
                                </div>
                              </section>                              

                              <div className="form-field mb-10 pt-6 mt-6 border-t border-gray-200">
                                <label htmlFor="service" className="block text-sm font-medium text-gray-900">Tasks</label>
                                <p className="mb-2 text-xs">Add Tasks to resolve this Issue</p>
                                {serviceList.map((singleService, index) => (
                                  <div key={index}>
                                    <div className="mt-2 flex rounded-md">
                                      <div className="relative flex flex-grow items-stretch focus-within:z-10">                                      
                                        <input
                                          className="block relative block w-full appearance-none rounded-l-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:z-10 focus:border-sky-400 focus:outline-none focus:ring-sky-400 sm:text-sm"
                                          name="service"
                                          type="text"
                                          id="service"
                                          value={singleService.service}
                                          onChange={(e) => handleServiceChange(e, index)}
                                          placeholder="What needs to be done?"
                                        />
                                      </div>
                                      <button
                                        type="button"
                                        onClick={() => handleServiceRemove(index)}
                                        className="remove-btn relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                                      >
                                        <TrashIcon className="h-5 w-5 text-gray-400" />
                                      </button>
                                    </div>
                                  </div>                                  
                                ))}
                                <div className="mt-4">
                                  <button
                                    type="button"
                                    onClick={handleServiceAdd}
                                    className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:ring-offset-1"
                                  >
                                    <CheckCircleIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                                    <span>Add Task</span>
                                  </button>
                                </div>
                              </div>


                              {/* <div className="output">
                                <h2>Output</h2>
                                {serviceList &&
                                  serviceList.map((singleService, index) => (
                                    <ul key={index}>
                                      {singleService.service && <li>{singleService.service}</li>}
                                    </ul>
                                  ))}
                              </div> */}

                            </div>
                          </div>
                        </div>
                        <div className="flex flex-shrink-0 justify-end px-4 py-4">
                          <button
                            type="button"
                            className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                            onClick={() => setOpen(false)}
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="ml-4 inline-flex justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                          >
                            Save
                          </button>
                        </div>

                      </form>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </div>
          </Dialog>
        </Transition.Root>

      </div>
    </LayoutAppSidebar>
  )
}