import PropTypes from "prop-types";
import s from "./Input.module.css"

export default function Input({type,name,value,handleChange,title,pattern}) {
    return (
        <label className={s.label}>{name}
            <input
                className={s.input}
                type={type}
                name={name.toLowerCase()}
                value={value}
                onChange={handleChange}
                title={title}
                pattern={pattern}
                required
            />
        </label>
    )
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    pattern: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
}