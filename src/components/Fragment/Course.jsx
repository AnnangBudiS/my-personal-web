import React from 'react'

const Course = () => {
    return (
        <div>
            <h4 className='text-2xl text-slate-50 font-mono font-semibold'>Course, Training and Certificate</h4>
            <div className='mt-2 space-y-2'>
                <Card title='Oct, 2022 - Feb, 2023' name='Udemy.com' location='-Udemy.com' child='Web Development Bootcamp' />
                <Card title='Jul, 2023 - Dec, 2023' name='Harisenin.com' location='-Jakarta, Indonesia' child='Full Stack Development Bootcamp' />
            </div>
        </div>
    )
}

const Card = (props) => {
    const { title, name, location, child } = props
    return (
        <div>
            <p>{title}</p>
            <p> <span className='font-bold text-slate-50'>{name}</span>{location}</p>
            <p>{child}</p>
        </div>
    )
}

export default Course