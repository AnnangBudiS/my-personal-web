import React from 'react'
import { BiLogoTailwindCss, BiLogoReact, BiLogoCss3, BiLogoJavascript, BiLogoHtml5 } from 'react-icons/bi'

const Skills = () => {
    return (
        <div className='mb-10'>
            <h4 className='text-2xl text-slate-50 font-mono font-semibold'>Skills/Tolls</h4>
            <div className='flex space-x-4 text-4xl mt-2'>
                <BiLogoHtml5 />
                <BiLogoCss3 />
                <BiLogoJavascript />
                <BiLogoReact />
                <BiLogoTailwindCss />
            </div>
        </div>
    )
}

export default Skills