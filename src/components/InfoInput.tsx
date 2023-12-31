import React, { FC, useState } from 'react'
import { InfoContentType } from '../lib/types'

interface InfoInputProps {
  content: InfoContentType
  onChange: (data: InfoContentType) => void
}

const InfoInput: FC<InfoInputProps> = ({ content, onChange }): JSX.Element => {
  // logic
  const { label, text, placeholder } = content

  const [value, setValue] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const data = label === 'mbti' ? event.target.value.toUpperCase() : event.target.value
    setValue(data)
    onChange({ ...content, value: data })
  }

  // view
  return (
    <div className="py-2 first:pt-0 last:pb-0 ">
      <div className="relative">
        <label
          htmlFor={label}
          className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                      absolute">
          {text}
        </label>
        <input
          type={label === 'age' ? 'number' : 'text'}
          id={label}
          name={label}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          className="border placeholder-gray-400 focus:outline-none
                      focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                      border-date-gray-200 rounded-2xl placeholder:text-date-gray-200"
        />
      </div>
    </div>
  )
}

export default InfoInput
