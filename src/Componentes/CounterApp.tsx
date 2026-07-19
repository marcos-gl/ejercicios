import { useState } from "react"


export const CounterApp = () => {

    const [counter,setCounter] = useState(0);


    return (
        <div className="p-4">
            <h1 className={counter === 0 ? "text-white" : counter < 0 ? "text-red-500" : "text-green-500" }>Cuenta: {counter}</h1>

            <div className="flex gap-2">
                <button className="bg-gray-200 px-4 py-2 rounded-xl" onClick={() => {if(counter > 0) {setCounter(counter - 1)}}}>Restar</button>
                <button className="bg-gray-200 px-4 py-2 rounded-xl" onClick={() => setCounter(counter + 1)}>Sumar</button>
            </div>

        </div>
    )
}
