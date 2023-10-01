import Acordions from "../Element/Acordions"
import Button from "../Element/Button"
import Steps from "../Element/Steps"
import { BiSolidChevronRight } from 'react-icons/bi'

const Projects = () => {
    return (
        <div className='mb-10'>
            <h4 className='text-2xl font-semibold text-slate-50'>Project Experiences</h4>
            <div className='mt-5'>
                <p className="mb-2">Course Project</p>
                <Acordions>
                    <Acordions.AcordionsTitle title='Udemy.com' />
                    <Acordions.AcordionsLink>
                        <Steps>
                            <Steps.ListElement 
                            links='https://tind-dog.vercel.app/' 
                            title='Tindog APP'/>
                            <Steps.ListElement 
                            links='https://drum-kit-kappa-steel.vercel.app/'
                            title='The Drum Kit'/>
                            <Steps.ListElement 
                            links='https://keeper-lemon.vercel.app/' 
                            title='Keepeer App'/>
                        </Steps>
                    </Acordions.AcordionsLink>
                </Acordions>
                <Acordions>
                    <Acordions.AcordionsTitle title='Harisenin.com'/>
                    <Acordions.AcordionsLink>
                        <Steps>
                            <Steps.ListElement title='Personal Website Clone'/>
                            <Steps.ListElement title='Music Player App'/>
                            <Steps.ListElement title='Cloning Jobstreet website'/>
                        </Steps>
                    </Acordions.AcordionsLink>
                </Acordions>
            </div>
            <div className='mt-5'>
                <p className="mb-2">Self Project</p>
                <Acordions>
                    <Acordions.AcordionsTitle title='Dummy project'/>
                    <Acordions.AcordionsLink>
                        <Steps>
                            <Steps.ListElement 
                            links='https://fylo-dark-theme-landing-page-master-beryl.vercel.app/' 
                            title='fylo landing page'/>
                            <Steps.ListElement 
                            links='https://newsletter-sign-up-with-success-message-main-theta-beige.vercel.app/' 
                            title='Sign Up with validate email'/>
                        </Steps>
                    </Acordions.AcordionsLink>
                </Acordions>
            </div>
            <Button classname='mt-4 hover:text-emerald-400 underline font-semibold text-xl flex items-center'>See More Projets <BiSolidChevronRight /></Button>
        </div>
    )
}

export default Projects