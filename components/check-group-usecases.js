/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
const people = [
  { name: 'Asset management', id: 1 },
  { name: 'Safety audits', id: 2 },
  { name: 'Inspections', id: 3 },
  { name: 'Compliance', id: 4 },
  { name: 'Facilities management', id: 5 },
  { name: 'Surveying + mapping', id: 6 },
  { name: 'Damage reports', id: 7 },
]

export default function Example() {
  return (
    <fieldset>
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
        {people.map((person, personIdx) => (
          <div key={personIdx}>
            <label htmlFor={`person-${person.id}`} className="relative flex items-start py-4 cursor-pointer focus:outline-none border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium sm:flex-1 bg-white border-gray-200 text-gray-700 hover:bg-gray-50">
              <div className="min-w-0 flex-1 text-sm">
                {person.name}
              </div>
              <div className="ml-3 flex h-5 items-center">
                <input
                  id={`person-${person.id}`}
                  name={`person-${person.id}`}
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
              </div>
            </label>
            </div>
        ))}
      </div>
    </fieldset>
  )
}
