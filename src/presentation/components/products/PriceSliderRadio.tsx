import { Slider } from "@/presentation/components/shared/slider"
import { useState } from "react"

const PriceSliderRadio = () => {
  const [values, setValues] = useState([0, 300])

  const handleChange = (newValues: number[]) => {
    setValues(newValues);
  }
  

  return (
    <div className="mt-[6px] mb-8 ml-[26px] font-medium text-[#333333]">
      <Slider defaultValue={[0, 300]} max={300} min={0} step={1} onValueChange={handleChange} values={values} />
    </div>
  )
}

export default PriceSliderRadio
