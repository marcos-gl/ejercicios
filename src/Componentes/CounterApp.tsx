import { useState } from "react"


export const CounterApp = () => {

   /*  const [counter,setCounter] = useState(0); */

    const [colors, setColors] = useState("red");


    return (
        <div className="flex flex-col content-center">
          {/*   <h1 className={counter === 0 ? "text-white" : counter < 0 ? "text-red-500" : "text-green-500" }>Cuenta: {counter}</h1>

            <div className="flex gap-2">
                <button className="bg-gray-200 px-4 py-2 rounded-xl" onClick={() => setCounter(counter > 0 ? counter - 1 : 0)}>Restar</button>
                <button className="bg-gray-200 px-4 py-2 rounded-xl" onClick={() => setCounter(counter + 1)}>Sumar</button>
            </div> */}

            <div>
                <div className={colors === "red" ? "rounded-full bg-red-500 w-16 h-16" : colors === "yellow" ? "rounded-full bg-yellow-500 w-16 h-16" : "rounded-full bg-green-500 w-16 h-16"}></div>
                <div className="flex gap-2 mt-4">
                    <button className="bg-gray-200 px-4 py-2 rounded-xl" onClick={() => setColors(colors === "red" ? "green" : colors === "green" ? "yellow" : "red")}>Button</button>
                </div>

            </div>

        </div>
    )
}
