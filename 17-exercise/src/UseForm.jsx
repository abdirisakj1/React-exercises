import { useState } from "react"

const useForm = (initalvalue) => {

    const [values,setValue] = useState(initalvalue)


    const handleChange = (e) => {
        const {name,value} = e.target;

        setValue((prev) => ({...prev, 
            [name] : value,
        }))

    }
        return {values,handleChange}

}

export default useForm