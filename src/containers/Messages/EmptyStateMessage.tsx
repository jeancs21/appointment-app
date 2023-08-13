import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

type Props = {
    message: string,
    routePath: string,
    buttonTitle: string,
}

const EmptyStateMessage:FunctionComponent<Props> = (props) => {
  return (
    <div className='flex w-full bg-pink-300 p-8 justify-center gap-2 rounded-2xl'>
        <div className='flex flex-col'>
            <p className=' text-white sm:text-xl font-medium text-center'>{props.message}</p>
            <Link to={props.routePath} className='mt-4 self-center bg-white rounded-full p-2 items-center text-black font-medium text-center text-xs sm:text-base shadow-md hover:shadow-sm hover:shadow-slate-100 duration-300`'>{ props.buttonTitle }</Link>
        </div>
    </div>
  )
}

export default EmptyStateMessage