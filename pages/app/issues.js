import { Fragment, useState, useRef } from 'react'
import LayoutAppSidebar from '../../components/layout-appsidebar';
import { 
  LinkIcon, 
  PlusIcon, 
  QuestionMarkCircleIcon, 
  CalendarIcon, 
  PaperClipIcon, 
  TagIcon, 
  UserCircleIcon } from '@heroicons/react/20/solid';
import { XMarkIcon, CheckIcon, ShieldExclamationIcon } from '@heroicons/react/24/outline'
import { Dialog, Transition, Listbox } from '@headlessui/react'
import IssueTypeSelectIcons from '../../components/issue-type-select-icons';
import Image from 'next/image';
import IssueTypeFieldGroup from '../../components/issue-type-field-group';

const team = [
  {
    name: 'Tom Cook',
    email: 'tom.cook@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Whitney Francis',
    email: 'whitney.francis@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Leonard Krasner',
    email: 'leonard.krasner@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Floyd Miles',
    email: 'floy.dmiles@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Emily Selman',
    email: 'emily.selman@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

const assignees = [
  {
    name: 'Unresolved',
    value: 'unresolved',
    resolved: false
  },
  {
    name: 'Resolved',
    value: 'resolved',
    resolved: true
  },
]
const priorities = [
  { name: 'Priority:', value: null, unavailable: true },
  { name: 'Critical', value: 'critical', unavailable: false },
  { name: 'High', value: 'high', unavailable: false },
  { name: 'Medium', value: 'medium', unavailable: false },
  { name: 'Low', value: 'low', unavailable: false },
]
const dueDates = [
  { name: 'No due date', value: null },
  { name: 'Today', value: 'today' },
  // More items...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Issues() {
  const [open, setOpen] = useState(false)
  const [assigned, setAssigned] = useState(assignees[0])
  const [priority, setPriority] = useState(priorities[3])
  const [dated, setDated] = useState(dueDates[0])

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
          <Dialog as="div" className="relative z-10" onClose={setOpen} initialFocus={titleRef}>
            <div className="fixed inset-0" />

            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                  <Transition.Child
                    
                    as={Fragment}
                    enter="transform transition ease-in-out duration-200 sm:duration-300"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-200 sm:duration-300"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                  >
                    <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                      <form className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                        <div className="h-0 flex-1 overflow-y-auto">
                          <div className="bg-white py-6 px-4 pb-0 sm:px-6">
                            <div className="flex items-center justify-between">
                              <input
                                ref={titleRef}
                                id="title"
                                name="title"
                                type="text"
                                autoComplete="title"
                                required
                                className="mt-1 relative block w-full appearance-none border-b border-white text-gray-900 py-1 placeholder-gray-300 focus:z-10 focus:border-sky-400 focus:outline-none focus:ring-sky-400 sm:text-xl"
                                placeholder='Issue Title'                                
                              />

                              {/* <Dialog.Title className="text-lg font-medium text-gray-700">Report Issue</Dialog.Title> */}
                              {/* <div className="ml-3 flex h-7 items-center">
                                <button
                                  type="button"
                                  className="rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                                  onClick={() => setOpen(false)}
                                >
                                  <span className="sr-only">Close panel</span>
                                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                              </div> */}
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col justify-between">
                            <div className="divide-y divide-gray-200 px-4 sm:px-6">
                              <div className="space-y-6 pt-6 pb-5">

                                <div className="flex flex-nowrap justify-start space-x-2 py-0 px-0">
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
                                                  {({ assigned, active }) => (
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

                                                      {assigned ? (
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
                                                        'block truncate font-medium')}>{priority.name}</span>
                                                    </div>
                                                  </div>
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
                                            <CalendarIcon
                                              className={classNames(
                                                dated.value === null ? 'text-gray-300' : 'text-gray-500',
                                                'h-5 w-5 flex-shrink-0 sm:-ml-1'
                                              )}
                                              aria-hidden="true"
                                            />
                                            <span
                                              className={classNames(
                                                dated.value === null ? '' : 'text-gray-900',
                                                'hidden truncate sm:ml-2 sm:block'
                                              )}
                                            >
                                              {dated.value === null ? 'Due date' : dated.name}
                                            </span>
                                          </Listbox.Button>

                                          <Transition
                                            show={open}
                                            as={Fragment}
                                            leave="transition ease-in duration-100"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                          >
                                            <Listbox.Options className="absolute right-0 z-10 mt-1 max-h-56 w-52 overflow-auto rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                              {dueDates.map((dueDate) => (
                                                <Listbox.Option
                                                  key={dueDate.value}
                                                  className={({ active }) =>
                                                    classNames(
                                                      active ? 'bg-gray-100' : 'bg-white',
                                                      'relative cursor-default select-none py-2 px-3'
                                                    )
                                                  }
                                                  value={dueDate}
                                                >
                                                  <div className="flex items-center">
                                                    <span className="block truncate font-medium">{dueDate.name}</span>
                                                  </div>
                                                </Listbox.Option>
                                              ))}
                                            </Listbox.Options>
                                          </Transition>
                                        </div>
                                      </>
                                    )}
                                  </Listbox>
                                </div>

                                <div>
                                  <label htmlFor="description" className="block text-sm font-medium text-gray-900">
                                    Description
                                  </label>
                                  <div className="mt-1">
                                    <textarea
                                      id="description"
                                      name="description"
                                      rows={4}
                                      className="mt-1 relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-sky-400 focus:outline-none focus:ring-sky-400 sm:text-sm"
                                      defaultValue={''}
                                      
                                    />
                                  </div>
                                </div>
                                <div>
                                  <h3 className="text-sm font-medium text-gray-900">Team Members</h3>
                                  <div className="mt-2">
                                    <div className="flex space-x-2">
                                      {team.map((person) => (
                                        <a key={person.email} href={person.href} className="rounded-full hover:opacity-75">
                                          <div className="relative inline-block h-8 w-8 rounded-full">
                                            <Image
                                              className="inline-block h-8 w-8 rounded-full"
                                              src={person.imageUrl}
                                              alt={person.name}
                                              layout='fill'
                                              objectFit='cover'
                                            />
                                          </div>
                                        </a>
                                      ))}
                                      <button
                                        type="button"
                                        className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 border-dashed border-gray-200 bg-white text-gray-400 hover:border-gray-300 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                      >
                                        <span className="sr-only">Add team member</span>
                                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <fieldset>
                                  <legend className="text-sm font-medium text-gray-900">Privacy</legend>
                                  <div className="mt-2 space-y-5">
                                    <div className="relative flex items-start">
                                      <div className="absolute flex h-5 items-center">
                                        <input
                                          id="privacy-public"
                                          name="privacy"
                                          aria-describedby="privacy-public-description"
                                          type="radio"
                                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                          defaultChecked
                                        />
                                      </div>
                                      <div className="pl-7 text-sm">
                                        <label htmlFor="privacy-public" className="font-medium text-gray-900">
                                          Public access
                                        </label>
                                        <p id="privacy-public-description" className="text-gray-500">
                                          Everyone with the link will see this project.
                                        </p>
                                      </div>
                                    </div>
                                    <div>
                                      <div className="relative flex items-start">
                                        <div className="absolute flex h-5 items-center">
                                          <input
                                            id="privacy-private-to-project"
                                            name="privacy"
                                            aria-describedby="privacy-private-to-project-description"
                                            type="radio"
                                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                          />
                                        </div>
                                        <div className="pl-7 text-sm">
                                          <label htmlFor="privacy-private-to-project" className="font-medium text-gray-900">
                                            Private to project members
                                          </label>
                                          <p id="privacy-private-to-project-description" className="text-gray-500">
                                            Only members of this project would be able to access.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div>
                                      <div className="relative flex items-start">
                                        <div className="absolute flex h-5 items-center">
                                          <input
                                            id="privacy-private"
                                            name="privacy"
                                            aria-describedby="privacy-private-to-project-description"
                                            type="radio"
                                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                          />
                                        </div>
                                        <div className="pl-7 text-sm">
                                          <label htmlFor="privacy-private" className="font-medium text-gray-900">
                                            Private to you
                                          </label>
                                          <p id="privacy-private-description" className="text-gray-500">
                                            You are the only one able to access this project.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </fieldset>
                              </div>
                              <div className="pt-4 pb-6">
                                <div className="flex text-sm">
                                  <a
                                    href="#"
                                    className="group inline-flex items-center font-medium text-indigo-600 hover:text-indigo-900"
                                  >
                                    <LinkIcon
                                      className="h-5 w-5 text-indigo-500 group-hover:text-indigo-900"
                                      aria-hidden="true"
                                    />
                                    <span className="ml-2">Copy link</span>
                                  </a>
                                </div>
                                <div className="mt-4 flex text-sm">
                                  <a href="#" className="group inline-flex items-center text-gray-500 hover:text-gray-900">
                                    <QuestionMarkCircleIcon
                                      className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                      aria-hidden="true"
                                    />
                                    <span className="ml-2">Learn more about sharing</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-shrink-0 justify-end px-4 py-4">
                          <button
                            type="button"
                            className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            onClick={() => setOpen(false)}
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="ml-4 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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