import {useState} from "react";

interface IForm {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const Form = ({handleSubmit} : IForm) => {
    

   
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Example: bitcoin"/>
            <button>Search</button>
        </form>
    )
}