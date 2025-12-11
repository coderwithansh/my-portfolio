import React from 'react'
import { IconType } from 'react-icons';

type Props = {
    role: string | React.ReactNode;
    Icon: IconType;
    discription: string;
    school: string;
    date?: string;
}
const ResumeCart = ({ role, Icon, date, discription, school }: Props) => {
    return (
        <div className='mb-6'>
            <div className='flex items-start space-x-6 bg-indigo-950/20 transition-all duration-300 hover:bg-blue-950/40 p-4 sm:p-8 rounded-md '>
                <div className='sm:w-14 sm:h-14w-10 h-10 bg-indigo-700 rounded-full flex flex-col items-center justify-center'>
                    <Icon className='sm:w-8 sm:h-8 w-6 h-6 text-white' />
                </div>
                <div className='flex-1'>
                    {date && (
                        <p className='mb-2 sm:px-6 sm:py-1.5 px-4 py-1 rounded-full bg-gray-200 text-gray-600 w-fit
                    sm:text-lg text-sm font-bold'>{date}</p>
                    )}
                    <h1 className='text-gray-200 text-xl sm:text-2xl font-smibold'>
                        {role}
                    </h1>
                    <p className='text-gray-200 text-md sm:text-2xl mt-4 inset-shadow-sm bg-indigo-200/2 inset-shadow-indigo-900 rounded-lg font-smibold'>
                        {school}
                    </p>
                    <p className='text-gray-300 text-sm sm:text-base pt-3'>
                        {discription}
                    </p>

                </div>
            </div>
        </div>
    )
}

export default ResumeCart
