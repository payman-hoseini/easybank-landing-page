import Image from 'next/image';
import mockups from './../../../public/images/image-mockups.png'

export default function Hero(){
    return (
        <>
        <div className='bg-Very-Light-Gray font-PublicSans flex flex-col-reverse md:flex-row justify-between items-center md:pl-52 pb-20 md:pb-0 desBackground'>
          <div className='text-center md:text-left mt-5 md:mt-0 font-light'>
              <p className='md:text-6xl text-5xl text-balance text-Dark-Blue'>Next generation digital banking</p>
              <p className='my-6 text-Grayish-Blue text-lg md:w-[65%] '>Take your financial life online. Your Easybank account will be a one-stop-shop 
              for spending, saving, budgeting, investing, and much more.</p>
              <button className="bg-gradient-to-tr from-Lime-Green to-Bright-Cyan text-white py-3 px-8 rounded-full hover:opacity-60">Request Invite</button>
          </div>
          <div className='custome-overflow overflow-hidden md:overflow-visible'>
              <Image src={mockups} alt="mockups" className='md:scale-150 w-full drop-shadow-xl -mt-36 md:-mt-0'/>
          </div>
        </div>
        </>
    )
}