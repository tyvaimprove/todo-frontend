import { useState } from 'react'
import CustomButton from '../components/CustomButton'
export default function Home() {
  
  const [count, setCount] = useState<number>(0)

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-slate-500 flex flex-col gap-2 justify-center items-center text-white w-[30%] h-[30%]">
        <p>Hello !</p>
        <p>{count}</p>
        <CustomButton
          onClick={ () => setCount(count + 1)}
        >
          +increase
        </CustomButton>
        <CustomButton
          onClick={ () => setCount(0)}
          variant='danger'
        >
          reset
        </CustomButton>
      </div>
    </div>
  )
}