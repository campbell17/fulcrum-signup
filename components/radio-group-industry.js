/* This example requires Tailwind CSS v2.0+ */
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'

const memoryOptions = [
  { name: 'Construction', inStock: true },
  { name: 'Energy', inStock: true },
  { name: 'Environmental', inStock: true },
  { name: 'Manufacturing', inStock: true },
  { name: 'Reatil', inStock: true },
  { name: 'Telecommunications', inStock: true },
  { name: 'Transportation', inStock: true },
  { name: 'Utilities', inStock: true },
  { name: 'Other', inStock: true },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function RadioGroupIndustry() {
  const [mem, setMem] = useState(memoryOptions[0])

  return (
    <div>
      {/* <div className="block md:hidden max-w-md mx-auto -space-y-px">
        <h2 className="text-sm font-medium text-gray-900">Industry</h2>
      </div> */}

      <RadioGroup value={mem} onChange={setMem} className="mt-2">
        <RadioGroup.Label className="sr-only"> Choose your Industry </RadioGroup.Label>
        <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
          {memoryOptions.map((option) => (
            <RadioGroup.Option
              key={option.name}
              value={option}
              className={({ active, checked }) =>
                classNames(
                  'relative',
                  option.inStock ? 'cursor-pointer focus:outline-none' : 'opacity-25 cursor-not-allowed',
                  active ? 'ring-2 ring-offset-2 ring-gray-400' : '',
                  checked
                    ? 'bg-slate-700 border-transparent text-white hover:bg-slate-900'
                    : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50',
                  'border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium font-gray-700 sm:flex-1'
                )
              }
              disabled={!option.inStock}
            >
            {({ checked, active }) => (
              <>
                <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <CheckIcon
                    className={classNames(!checked ? 'invisible' : '', 'h-5 w-5 text-gray-100')}
                    aria-hidden="true"
                  />
                </span>
                <RadioGroup.Label as="span">{option.name}</RadioGroup.Label>
              </>
            )}              
              
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  )
}
