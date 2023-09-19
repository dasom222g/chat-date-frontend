import React from 'react'
import Title from '../components/Title'
import Button from '../components/Button'

const UserInfo = (): JSX.Element => {
  // logic
  const handleClick = (): void => {
    console.log('handleClick')
  }

  // view
  return (
    <div className="w-full h-full px-6 break-keep overflow-auto">
      <i className="w-168 h-168 rounded-full bg-date-pink-500 fixed -z-10 -left-60 -top-104"></i>
      <div className="h-full flex flex-col">
        <Title mainTitle="당신을 알려주세요" />
        {/* info 영역 */}
        <form className="pt-20">
          {/* 성별 체크 */}
          <div className="flex py-8">
            <div className="w-full text-center">
              <label htmlFor="male" className="peer-checked:bg-red-500">
                <input
                  id="male"
                  type="radio"
                  name="gender"
                  value={'남자'}
                  className="hidden peer"
                />
                <div className="pb-4 grayscale peer-checked:grayscale-0">
                  <img src="./images/male.svg" alt="male" className="block w-3/5 mx-auto" />
                </div>
                <span className="w-5 h-5 inline-block align-middle rounded bg-date-gray-300 peer-checked:bg-date-blue-500">
                  <i className="block w-full h-full bg-[url('../public/images/check.svg')] bg-no-repeat bg-center"></i>
                </span>
                <span className="inline-block align-middle px-2">남자</span>
              </label>
            </div>
            <div className="w-full text-center">
              <label htmlFor="female" className="peer-checked:bg-red-500">
                <input
                  id="female"
                  type="radio"
                  name="gender"
                  value={'여자'}
                  className="hidden peer"
                />
                <div className="pb-4 grayscale peer-checked:grayscale-0">
                  <img src="./images/female.svg" alt="female" className="block w-3/5 mx-auto" />
                </div>
                <span className="w-5 h-5 inline-block align-middle rounded bg-date-gray-300 peer-checked:bg-date-blue-500">
                  <i className="block w-full h-full bg-[url('../public/images/check.svg')] bg-no-repeat bg-center"></i>
                </span>
                <span className="inline-block align-middle px-2">여자</span>
              </label>
            </div>
          </div>
          {/* 성별 체크 */}
          {/* input 영역 */}
          <div>
            <div className="py-2 first:pt-0 last:pb-0 ">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                      absolute">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="홍길동"
                  className="border placeholder-gray-400 focus:outline-none
                      focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                      border-date-gray-300 rounded-2xl placeholder:text-date-gray-300"
                />
              </div>
            </div>
            <div className="py-2 first:pt-0 last:pb-0 ">
              <div className="relative">
                <label
                  htmlFor="age"
                  className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                      absolute">
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  placeholder="20"
                  className="border placeholder-gray-400 focus:outline-none
                      focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                      border-date-gray-300 rounded-2xl placeholder:text-date-gray-300"
                />
              </div>
            </div>
            <div className="py-2 first:pt-0 last:pb-0 ">
              <div className="relative">
                <label
                  htmlFor="mbti"
                  className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                      absolute">
                  Mbti
                </label>
                <input
                  type="text"
                  id="mbti"
                  placeholder="ENTJ"
                  className="border placeholder-gray-400 focus:outline-none
                      focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                      border-date-gray-300 rounded-2xl placeholder:text-date-gray-300"
                />
              </div>
            </div>
          </div>
          {/* input 영역 */}
        </form>
        {/* info 영역 */}

        {/* Button 영역 */}
        <Button onClick={handleClick} />
        {/* Button 영역 */}
      </div>
    </div>
  )
}

export default UserInfo
