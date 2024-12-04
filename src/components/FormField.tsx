import {Fragment} from "react";

interface Props {
    id: string;
    label: string;
    placeholder: string;
    errors?: string[]
}

export default function FormField({id, label, placeholder, errors}: Props) {

    return (
        <Fragment>
            <div>
                <label htmlFor={id}>{label}</label>
                <input id={id} name={id} placeholder={placeholder}/>
            </div>
            {errors && errors?.map((error) => <p key={error}>{error}</p>)}
        </Fragment>
    )
}