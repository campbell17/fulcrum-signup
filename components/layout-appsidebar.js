import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  MapPinIcon,
  ExclamationTriangleIcon,
  ClipboardDocumentCheckIcon,
  CogIcon,
  XMarkIcon,
  Squares2X2Icon,
  ArrowPathRoundedSquareIcon,
  StarIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

const sidebarNavigation = [
  { name: 'Dashboard', href: '/app/dashboard', icon: Squares2X2Icon, current: false },
  { name: 'Apps', href: '/app/apps', icon: MapPinIcon, current: false },
  { name: 'Issues', href: '/app/issues', icon: ExclamationTriangleIcon, current: false },
  { name: 'Tasks', href: '/app/tasks', icon: ClipboardDocumentCheckIcon, current: false },
  { name: 'Workflows', href: '/app/workflows', icon: ArrowPathRoundedSquareIcon, current: false },
  { name: 'Settings', href: '/app/settings', icon: CogIcon, current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Sign out', href: '/signin' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function LayoutAppSidebar({ children }) {
  const router = useRouter();
  
  return (
    <>
      <div className="flex h-full border-t-4 border-red-500">
        {/* Narrow sidebar */}
        <div className="w-28 bg-gradient-to-b from-gray-700 via-slate-900 to-gray-900">
          <div className="flex w-full h-full flex-col items-center py-6">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/app/dashboard">
                <a>
                  <Image
                    className="h-8 w-8"
                    src="/fulcrumicon-white.svg"
                    alt="Fulcrum"
                    width={32}
                    height={32}
                  />
                </a>
              </Link>
            </div>
            <div className="mt-6 w-full flex-1 space-y-1 px-2 overflow-auto">
              {sidebarNavigation.map((item) => (
                <Link key={item.name} href={item.href}>                
                  <a                                    
                    className={classNames(
                      router.asPath.includes(item.href) ? 'text-sky-400' : 'text-gray-300 hover:bg-[rgba(55,189,248,.05)] hover:text-white',
                      'group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >{console.log(item.href)}
                    <item.icon
                      className={classNames(
                        router.asPath.includes(item.href) ? 'text-sky-400' : 'text-gray-400 group-hover:text-white',
                        'h-6 w-6'
                      )}
                      aria-hidden="true"
                    />
                    <span className="mt-2">{item.name}</span>
                  </a>
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4 pb-2">
              {/* Profile dropdown */}
              <Menu as="div" className="relative flex-shrink-0">
                <div>
                  <Menu.Button className="col-span-1 flex rounded-md shadow-sm">
                    <span className="sr-only">Open user menu</span>
                    <div className="bg-gray-800 hover:bg-gray-900 border border-gray-300 hover:border-white flex-shrink-0 flex items-center justify-center w-10 h-10 text-white rounded-full">
                      <UserIcon className="w-6 h-6 text-gray-300 hover:text-white"/>
                    </div>                    
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute left-0 bottom-10 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {userNavigation.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <a
                            href={item.href}
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            {item.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>

            </div>            
          </div>
        </div>
        {/* Content area */}
        <div className="flex flex-1 flex-col overflow-auto">
          {/* Main content */}
          <main>
            {children}
          </main>
        </div>
      </div>
    </>
  )
}
