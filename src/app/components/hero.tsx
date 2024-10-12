import Image from 'next/image';
import mockups from './../../../public/images/image-mockups.png'

export default function Hero(){
    return (
        <>
        <div className='bg-Very-Light-Gray font-PublicSans flex items-center pl-52 desBackground'>
          <div>
              <p className='text-6xl text-balance text-Dark-Blue'>Next generation digital banking</p>
              <p className=' my-6 text-Grayish-Blue text-lg w-[65%]'>Take your financial life online. Your Easybank account will be a one-stop-shop 
              for spending, saving, budgeting, investing, and much more.</p>
              <button className="bg-gradient-to-tr from-Lime-Green to-Bright-Cyan text-white py-3 px-8 rounded-full hover:opacity-60">Request Invite</button>
          </div>
          <div className='custome-overflow'>
              <Image src={mockups} alt="mockups" className='scale-150 w-full drop-shadow-xl'/>
          </div>
        </div>
        </>
    )
}