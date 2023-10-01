const Button = (props) => {
    const {classname, children} = props
    return (
        <div>
            <button className={classname}>
               {children}
            </button>
        </div>
    )
}

export default Button