import { FunctionComponent } from "react"
import { Link } from "react-router-dom"

type Props = {
    path: string,
    buttonText: string
}

const NavigateButton:FunctionComponent<Props> = (props) => {
  return (
    <>
        <Link to={props.path}
            className='flex items-center justify-center w-36 p-2 border text-center text-sm rounded-full border-slate-400 hover:bg-slate-100 duration-300'
        >
            {props.buttonText}
        </Link>
    </>
  )
}

export default NavigateButton