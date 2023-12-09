import {Icons} from '@/components/Icons'

const page = () => {
    <>
        <div className='container relative flex pt-20 flex-col items-center justify-center lg:px-0' >
            <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]' >
                <div className='flex flex-col items-center dpace-y-2 text-center ' >
                    <Icons.logo className='h-20 w-20'/>
                </div>
            </div>
        </div>
    </>
}

export default  page;