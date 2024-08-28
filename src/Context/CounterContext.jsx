
import { createContext, useState } from "react";

export let counter = createContext(0)

export default function CreateContextProvider ({children}) {

    const [count, setCount] = useState(0)
    function increase () {

        setCount (count+1)
    }
    return <counter.Provider value = {{increase , count}}>
        {children}
    </counter.Provider>
}