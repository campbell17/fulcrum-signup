import { MapPinIcon, ChevronRightIcon, WrenchIcon } from '@heroicons/react/20/solid'
import { PlusIcon } from "@heroicons/react/20/solid";
import { ChatBubbleLeftEllipsisIcon, TagIcon, UserCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
import {
  ArrowLongLeftIcon,
  CheckIcon,
  HandThumbUpIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PaperClipIcon,
  QuestionMarkCircleIcon,
  UserIcon,
} from '@heroicons/react/20/solid'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const user = {
  name: 'Whitney Francis',
  email: 'whitney@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Dashboard', href: '#' },
  { name: 'Jobs', href: '#' },
  { name: 'Applicants', href: '#' },
  { name: 'Company', href: '#' },
]
const breadcrumbs = [
  { name: 'Jobs', href: '#', current: false },
  { name: 'Front End Developer', href: '#', current: false },
  { name: 'Applicants', href: '#', current: true },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]
const attachments = [
  { name: 'resume_front_end_developer.pdf', href: '#' },
  { name: 'coverletter_front_end_developer.pdf', href: '#' },
]
const eventTypes = {
  applied: { icon: UserIcon, bgColorClass: 'bg-gray-400' },
  advanced: { icon: HandThumbUpIcon, bgColorClass: 'bg-blue-500' },
  completed: { icon: CheckIcon, bgColorClass: 'bg-green-500' },
}
const timeline = [
  {
    id: 1,
    type: eventTypes.applied,
    content: 'Applied to',
    target: 'Front End Developer',
    date: 'Sep 20',
    datetime: '2020-09-20',
  },
  {
    id: 2,
    type: eventTypes.advanced,
    content: 'Advanced to phone screening by',
    target: 'Bethany Blake',
    date: 'Sep 22',
    datetime: '2020-09-22',
  },
  {
    id: 3,
    type: eventTypes.completed,
    content: 'Completed phone screening with',
    target: 'Martha Gardner',
    date: 'Sep 28',
    datetime: '2020-09-28',
  },
  {
    id: 4,
    type: eventTypes.advanced,
    content: 'Advanced to interview by',
    target: 'Bethany Blake',
    date: 'Sep 30',
    datetime: '2020-09-30',
  },
  {
    id: 5,
    type: eventTypes.completed,
    content: 'Completed interview with',
    target: 'Katherine Snyder',
    date: 'Oct 4',
    datetime: '2020-10-04',
  },
]

const activity = [
  {
    id: 1,
    type: 'comment',
    person: { name: 'Eduardo Benz', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ',
    date: '6d ago',
  },
  {
    id: 2,
    type: 'assignment',
    person: { name: 'Hilary Mahy', href: '#' },
    assigned: { name: 'Kristin Watson', href: '#' },
    date: '2d ago',
  },
  {
    id: 3,
    type: 'tags',
    person: { name: 'Hilary Mahy', href: '#' },
    tags: [
      { name: 'Bug', href: '#', color: 'bg-rose-500' },
      { name: 'Accessibility', href: '#', color: 'bg-indigo-500' },
    ],
    date: '6h ago',
  },
  {
    id: 4,
    type: 'comment',
    person: { name: 'Jason Meyers', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis diam.',
    date: '2h ago',
  },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



const applications = [
  {
    applicant: {
      name: 'SAMPLE - Building Inspection App',
      email: 'ricardo.cooper@example.com',
      imageUrl:
        'https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1079&q=80',
    },
    date: '2020-01-07',
    dateFull: 'January 7, 2020',
    stage: '25 records',
    href: '#',
  },
  {
    applicant: {
      name: 'SAMPLE - Asset Maintenance App',
      email: 'kristen.ramos@example.com',
      imageUrl:
        'https://images.unsplash.com/photo-1535836432365-6b6a2c69185c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
    },
    date: '2020-01-07',
    dateFull: 'January 7, 2020',
    stage: '227 records',
    href: '#',
  },
  {
    applicant: {
      name: 'SAMPLE - Safety Checklist App',
      email: 'ted.fox@example.com',
      imageUrl:
        'https://images.unsplash.com/photo-1552879890-3a06dd3a06c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2154&q=80',
    },
    date: '2020-01-07',
    dateFull: 'January 7, 2020',
    stage: '1,117 records',
    href: '#',
  },
]

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


      <div className="mx-auto mt-8 grid max-w-3xl grid-cols-4 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-4">

      <div className="overflow-hidden self-start lg:col-span-3 bg-white shadow sm:rounded-md">
        <ul role="list" className="divide-y divide-gray-200">
          {applications.map((application) => (
            <li key={application.applicant.email}>
              <Link href={application.href}>
              <a className="block hover:bg-gray-50">
                <div className="flex items-center px-4 py-4 sm:px-6">
                  <div className="flex min-w-0 flex-1 items-center">
                    <div className="flex-shrink-0 relative h-12 w-12 rounded-full">
                      <Image className="h-12 w-12 rounded-full" src={application.applicant.imageUrl} alt="" layout='fill' objectFit='cover' />
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p className="truncate text-sm font-medium text-indigo-600">{application.applicant.name}</p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          <WrenchIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                          <span className="truncate">{application.applicant.email}</span>
                        </p>
                      </div>
                      <div className="hidden md:block">
                        <div>
                          <p className="text-sm text-gray-900">
                            Updated on <time dateTime={application.date}>{application.dateFull}</time>
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500">
                            <MapPinIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-sky-400" aria-hidden="true" />
                            {application.stage}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                </div>
              </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flow-root col-span-1 col-start-4">
      <ul role="list" className="-mb-8">
        {activity.map((activityItem, activityItemIdx) => (
          <li key={activityItem.id}>
            <div className="relative pb-8">
              {activityItemIdx !== activity.length - 1 ? (
                <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
              ) : null}
              <div className="relative flex items-start space-x-3">
                {activityItem.type === 'comment' ? (
                  <>
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white">
                      <Image
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white"
                        src={activityItem.imageUrl}
                        alt=""
                        layout="fill"
                        objectFit='cover'
                      />

                      <span className="absolute -bottom-0.5 -right-1 rounded-tl bg-white px-0.5 py-px">
                        <ChatBubbleLeftEllipsisIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div>
                        <div className="text-sm">
                          <Link href={activityItem.person.href} >
                          <a className="font-medium text-gray-900">
                            {activityItem.person.name}
                          </a>
                          </Link>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">Commented {activityItem.date}</p>
                      </div>
                      <div className="mt-2 text-sm text-gray-700">
                        <p>{activityItem.comment}</p>
                      </div>
                    </div>
                  </>
                ) : activityItem.type === 'assignment' ? (
                  <>
                    <div>
                      <div className="relative px-1">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white">
                          <UserCircleIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                        </div>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1 py-1.5">
                      <div className="text-sm text-gray-500">
                        <Link href={activityItem.person.href}>
                        <a  className="font-medium text-gray-900">
                          {activityItem.person.name}
                        </a></Link>{' '}
                        assigned{' '}
                        <Link href={activityItem.assigned.href}>
                        <a  className="font-medium text-gray-900">
                          {activityItem.assigned.name}
                        </a></Link>{' '}
                        <span className="whitespace-nowrap">{activityItem.date}</span>
                      </div>
                    </div>
                  </>
                ) : activityItem.type === 'tags' ? (
                  <>
                    <div>
                      <div className="relative px-1">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white">
                          <TagIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                        </div>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1 py-0">
                      <div className="text-sm leading-8 text-gray-500">
                        <span className="mr-0.5">
                          <Link href={activityItem.person.href}>
                          <a className="font-medium text-gray-900">
                            {activityItem.person.name}
                          </a></Link>{' '}
                          added tags
                        </span>{' '}
                        <span className="mr-0.5">
                          {activityItem.tags.map((tag) => (
                            <Fragment key={tag.name}>
                              <a
                                href={tag.href}
                                className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5 text-sm"
                              >
                                <span className="absolute flex flex-shrink-0 items-center justify-center">
                                  <span
                                    className={classNames(tag.color, 'h-1.5 w-1.5 rounded-full')}
                                    aria-hidden="true"
                                  />
                                </span>
                                <span className="ml-3.5 font-medium text-gray-900">{tag.name}</span>
                              </a>{' '}
                            </Fragment>
                          ))}
                        </span>
                        <span className="whitespace-nowrap">{activityItem.date}</span>
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
          </div>
    </div>




  )
}