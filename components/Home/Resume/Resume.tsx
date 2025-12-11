import React from 'react'
import ResumeCart from './ResumeCart'
import { FaCodepen, FaDatabase, FaReact } from 'react-icons/fa'
import { BiBadge } from 'react-icons/bi'
import { BsAmazon, BsAndroid2, BsDatabase } from 'react-icons/bs'
import { AiFillExclamationCircle, AiFillProfile } from 'react-icons/ai'
// import { FaReact } from 'react-icons/fa'

const Resume = () => {
    return (
        <div className="pt-20 pd-16" id='Resume'>
            <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10'>
                {/* WORK PART */}
                <div>
                    <h1 className='txt-3xl sm:text-4xl font-bold text-white'>
                        My Work <span className='text-indigo-400'>Experince</span>
                    </h1>
                    <div className='mt-10 ' data-aos="zoom-in" data-achor-placement="top-center" >
                        <ResumeCart Icon={FaCodepen} role="Full-stack Developer" date="" school="" discription="Designing interfaces, engineering backends, deploying apps—full-stack creativity unleashed." />
                        <ResumeCart Icon={FaReact} role="Front-end Developer" date="" school="" discription="Building modern UIs with clean code, strong visuals, and smooth interactions." />
                        <ResumeCart Icon={FaDatabase} role="Backend Developer" date="" school="" discription="Designing APIs, managing databases, and optimizing server performance with precision." />
                    </div>
                </div>
                {/* EDUCATION PART */}
                <div>
                    <h1 className='txt-3xl sm:text-4xl font-bold text-white'>
                        My <span className='text-indigo-400'>Education</span>
                    </h1>

                    <div className='mt-10'
                        data-aos="zoom-out" data-achor-placement="top-center" data-aos-delay="300" >
                        <ResumeCart Icon={BiBadge}
                            role={
                                <>Master of Computer Application(MCA) <sup>Pursuing</sup>
                                </>}
                            date="Sept 2024 - Jul 2026"
                            school="Chhattisgarh Swami Vivekanand Technical University"
                            discription="Developing in-depth knowledge of software development, system architecture, databases, algorithms, and cloud technologies.
                            Worked on multiple team projects, coding assignments, and research-based mini modules" />
                        <ResumeCart Icon={AiFillProfile}
                            role="Bachelor of Computer Application(BCA)"
                            date="Sept 2021 - Jul 2024 "
                            school="Hemchand Yadav Vishwavidyalaya"
                            discription="Graduated in BCA with a focus on programming logic, database management, and application development. Applied concepts 
                        through real-world projects and coding assignments." />
                        <ResumeCart Icon={BsDatabase}
                            role="Higher Secondary(12)"
                            date="Jun 2020 - Aprl 2021"
                            school="Chhattisgarh Board of Secondary Education (CGBSE)."
                            discription="Finished Class 12 with a focus on analytical skills, problem-solving, and foundational computer knowledge — which helped 
                    shape my interest in software development." />
                        <ResumeCart Icon={AiFillExclamationCircle}
                            role="Secondary(10)"
                            date="Jun 2017 - Aprl 2018"
                            school="Chhattisgarh Board of Secondary Education (CGBSE)."
                            discription="Completed Class 10 with strong fundamentals in mathematics, science, and logical reasoning."
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume
