import Steps from "./Steps"

const Acordions = (props) => {
    const { children, checked } = props
    return (
        <div className='collapse collapse-plus bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border mb-2'>
            <input type="radio" name='my-project' checked={checked} />
            {children}           
        </div>
    )
}

const AcordionsTitle = (props) => {
    const { title } = props
    return (
        <div className='collapse-title text-xl text-slate-50 font-medium'>
            {title}
        </div>
    )
}

const AcordionsLink = (props) => {
    const { children } = props
    return (
        <div className='collapse-content'>
        {children}
    </div>
    )
}

Acordions.AcordionsTitle = AcordionsTitle
Acordions.AcordionsLink = AcordionsLink

export default Acordions