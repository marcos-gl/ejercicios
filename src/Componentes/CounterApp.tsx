import { useState } from "react"


export const CounterApp = () => {

   /*  const [counter,setCounter] = useState(0); */

    const [isVisibile, setIsVisible] = useState(false);


    return (
        <div className="flex flex-col items-center">
         
            <button className="w-40 h-13 bg-lime-50 rounded-xl text-amber-900" onClick={() => setIsVisible(!isVisibile) } >{isVisibile ? "Ocultar Mnesajes" : "Mostrar mensaje"}</button>
            {isVisibile && <p className="mt-2 text-amber-900 font-semibold">¡Hola, soy un mensaje secreto!</p>}

        </div>
    )
}
