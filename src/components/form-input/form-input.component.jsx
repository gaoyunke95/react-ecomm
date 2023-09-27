import './form-input.styles.scss'

//use ...otherProps since it is object contains multiple props
const FormInput = ({label, ...otherProps}) => {
    return (
        <div className="group">
            <input className='form-input' {...otherProps}/>
            <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>

        </div>
    )
}

export default FormInput;