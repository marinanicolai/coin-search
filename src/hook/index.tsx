import {useState} from "react";

export const useFormQuery = () => {

    const [query, setQuery] = useState("")//coin search

    const handleSubmit = ( e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const target = e.target as HTMLFormElement;
    
        const {form } = Object.fromEntries(new FormData(target))
    
        if (form.toString().trim().length === 0) return
    
        target.reset()
        target.focus()
       
    }
return {
    query, handleSubmit
}    

}