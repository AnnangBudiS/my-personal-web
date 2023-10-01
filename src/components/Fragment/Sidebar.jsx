import React from 'react'
import { Link } from 'react-router-dom';
import { BsGithub, BsInstagram, BsLinkedin, BsFacebook } from 'react-icons/bs';
import Button from '../Element/Button';



const Sidebar = (props) => {
    const { children } = props
    return (
        <aside className='h-screen sticky top-0'>
            <div className='flex flex-col justify-between h-screen py-52'>
                {children}
            </div>
        </aside>
    )
}

const Avatar = () => {
    return (
        <div>
            <div className='avatar'>
                <div className='w-24 rounded-full'>
                    <img src="images/avatar.png" alt="avatar" />
                </div>
            </div>
            <Name />
        </div>

    )
}

const Name = () => {
    return (
        <div>
            <h1 className='text-5xl font-bold font-mono text-emerald-400'>Annang Budi S.</h1>
            <p className='max-w-md'>a <span className='font-mono font-semibold text-slate-50'>Front-End Developer</span> who likes an attractive interface, I also do what I like</p>
            <div className='mt-5'>
                <Button classname='btn normal-case hover:bg-emerald-400 hover:text-slate-900'>
                    <Link
                        to='https://drive.google.com/file/d/1hd38XgGbD1bjD_OJCw-YnlTLdObuMOCB/view?usp=drive_link'
                        download
                    >
                        Download Resume
                    </Link>
                </Button>
            </div>
        </div>
    )
}

// const Navigations = () => {
//     return (
//         <ul className='space-y-3 font-mono'>
//             <li>
//                 <a className='text-xl font-semibold hover:text-emerald-400' href="#">About</a>
//             </li>
//             <li>
//                 <a className='text-xl font-semibold hover:text-emerald-400' href="#">Project</a>
//             </li>
//             <li>
//                 <a className='text-xl font-semibold hover:text-emerald-400' href="#">Contact</a>
//             </li>
//         </ul>
//     )
// }

const SocialsMenu = () => {
    return (
        <div className='flex space-x-6'>
            <Link to='https://github.com/AnnangBudiS' className='text-3xl hover:text-emerald-400'>
                <BsGithub />
            </Link>
            <Link to='https://www.instagram.com/annangbudi/' className='text-3xl hover:text-emerald-400'>
                <BsInstagram />
            </Link>
            <Link to='https://www.linkedin.com/in/annangbudis/' className='text-3xl hover:text-emerald-400'>
                <BsLinkedin />
            </Link>
            <Link to='https://www.facebook.com/xannangx/' className='text-3xl hover:text-emerald-400'>
                <BsFacebook />
            </Link>
        </div>
    )
}

Sidebar.avatar = Avatar
Sidebar.contact = SocialsMenu

export default Sidebar