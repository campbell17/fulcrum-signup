import { useState } from 'react';
import Link from 'next/link';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

export default function CreatePasswordField() {
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });
  
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div className="col-span-6 sm:col-span-3">
      <label htmlFor="create-password" className="block text-sm font-medium text-gray-700">
        Create password
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <input
          type={values.showPassword ? "text" : "password"}
          onChange={handlePasswordChange("password")}
          value={values.password}
          name="create-password"
          id="create-password"
          className="relative block w-full rounded-md border border-gray-300 px-3 py-2 pr-10 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-sky-400 focus:outline-none focus:ring-sky-400 sm:text-sm"
          placeholder=""
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 z-10">
          <Link href="#">
            <a
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              >
              {values.showPassword ? <EyeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              :
              <EyeSlashIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />}
            </a>
          </Link>          
        </div>
      </div>
    </div>
  )
}
