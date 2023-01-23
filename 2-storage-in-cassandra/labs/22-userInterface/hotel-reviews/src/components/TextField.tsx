import React, { useRef, useState } from "react";

interface Person {
    firstName: string;
    lastName: string;
}

interface IArgumentTextFields {
  text: string;
  i?: number;
  john?: Person; 
  ok?: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  //fn: (bob: string) => number;
  //obj: {};
}

export const TextField: React.FC<IArgumentTextFields> = ( {handleChange}) => {
    
    // Define const with the types, 5 is the initial state
    const [count, setCount]   = useState<number | null | undefined | string>(5);
    
    // Reuse an object as constant in the component
    const [person, setPerson] = useState<Person>({firstName: "Cedrick", lastName: "Lunven"});

    // Reference usage
    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null);

    setCount(5);

    return(
        <div ref={divRef}>
            <input ref={inputRef} onChange={handleChange}/>

        </div>
    );

};