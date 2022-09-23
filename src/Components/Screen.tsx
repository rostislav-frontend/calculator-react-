import { useContext } from "react"
import { CalcContext } from "../Context/CalculatorContext"
import { Textfit } from 'react-textfit';

export const Screen = () => {

    const { calc } = useContext(CalcContext);

  return (
    <Textfit className="screen" max={70}  mode="single">{calc.num ? calc.num : calc.res}</Textfit>
  )
}