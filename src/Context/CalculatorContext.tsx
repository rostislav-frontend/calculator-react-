import { createContext, useState } from "react"


export const CalcContext = createContext<any>(0)

export const CalcProvider = ({ children }: any) => {

    const [calc, setCalc] = useState({
        sign: "",
        num: 0,
        res: 0
      });
      const providerValue = {
        calc, setCalc
      }
      return (
        <CalcContext.Provider value={providerValue}>
          {children}
        </CalcContext.Provider>
      )
}

