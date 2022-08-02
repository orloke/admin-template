interface Props{
    label: string;
    value: string;
    onChange: (value: any) => void;
    type: 'text' | 'password' | 'email'
    required?: boolean;
}

const AuthInput = (props: Props) => {
    return (
        <div  className='flex flex-col'  >
            <label> {props.label} </label>
            <input 
                className="border"
                type= {props.type ?? 'text'}
                value={props.value}
                onChange={(e) => props.onChange(e.target.value)}
                required={props.required}
                
            />
        </div>
    )
}

export default AuthInput;