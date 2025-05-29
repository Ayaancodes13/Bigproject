import  React ,{ useId } from "react";

const  Input  =  React.forwardRef (function Input({
    label,
    type,
    className= "",
    ...prop
},ref){
    const id = useId()
    return(
        <div>
            {label && ( <label htmlFor="id">{label}</label>)}
            <input type={`${type}`}
            className={`outline-none rounded-sm px-3 py-2 focus:bg-gray-50 duration-200 ${className}`}
            ref={ref}
            id={`${id}`}
            {...prop}
            />
            </div>
    )
}
)