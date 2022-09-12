/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const sizes = [
  { id: 1, name: '1-10' },
  { id: 2, name: '11-50' },
  { id: 3, name: '51-200' },
  { id: 4, name: '201-500' },
  { id: 5, name: '501-1,000' },
  { id: 6, name: '1,001-5000' },
  { id: 7, name: '5,001-10,000' },
  { id: 8, name: '10,000+' },
  { id: 9, name: 'Personal use' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function CompanySizeSelect() {
  const [selected, setSelected] = useState(sizes[3])

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-pointer rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm">
              <span className="block truncate">{selected.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {sizes.map((size) => (
                  <Listbox.Option
                    key={size.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-sky-500' : 'text-gray-900',
                        'relative cursor-pointer select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={size}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {size.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-sky-500',
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
  )
}
