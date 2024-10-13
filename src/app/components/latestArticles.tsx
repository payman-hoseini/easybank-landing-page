import Image from 'next/image';
import money from './../../../public/images/image-currency.jpg'
import cofe from './../../../public/images/image-restaurant.jpg'
import plane from './../../../public/images/image-plane.jpg'
import color from './../../../public/images/image-confetti.jpg'

export default function LatestArticles(){
    return (
        <>
        <div className='lg:px-52 py-20 font-PublicSans bg-Very-Light-Gray px-8'>
          <p className='text-4xl text-Dark-Blue text-center lg:text-start font-light'>Latest Articles</p>
          <div className='mt-10 grid md:grid-cols-2 lg:grid-cols-4 md:gap-x-6 gap-y-6 lg:gap-y-0'>
            <div className='bg-white rounded-md flex flex-col'>
              <div className='basis-1/2'>
                  <Image src={money} alt='money' className='rounded-t-md h-full'/>
              </div>
              <div className='mt-6 mb-6 mx-6 basis-1/2'>
                <p className='text-xs text-Grayish-Blue'>By Claire Robinson</p>
                <p className='my-3 text-lg text-Dark-Blue leading-5 hover:text-Lime-Green hover:cursor-pointer'>Receive money in any currency with no fees</p>
                <p className='text-Grayish-Blue text-sm text-balance'>The world is getting smaller and we’re becoming more mobile. So why should you be 
                forced to only receive money in a single …</p>
              </div>
            </div>
            <div className='bg-white rounded-md flex flex-col'>
              <div className='basis-1/2'>
                  <Image src={cofe} alt='cofe' className='rounded-t-md h-full'/>
              </div>
              <div className='mt-6 mb-6 mx-6 basis-1/2'>
                <p className='text-xs text-Grayish-Blue'>By Wilson Hutton</p>
                <p className='my-3 text-lg text-Dark-Blue leading-5 hover:text-Lime-Green hover:cursor-pointer'>Treat yourself without worrying about money</p>
                <p className='text-Grayish-Blue text-sm'>Our simple budgeting feature allows you to separate out your spending and set 
                realistic limits each month. That means you …</p>
              </div>
            </div>
            <div className='bg-white rounded-md flex flex-col'>
              <div className='basis-1/2'>
                  <Image src={plane} alt='plane' className='rounded-t-md h-full'/>
              </div>
              <div className='mt-6 mb-6 mx-6 basis-1/2'>
                <p className='text-xs text-Grayish-Blue'>By Wilson Hutton</p>
                <p className='my-3 text-lg text-Dark-Blue leading-5 hover:text-Lime-Green hover:cursor-pointer'>Take your Easybank card wherever you go</p>
                <p className='text-Grayish-Blue text-sm'>We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
                while you’re abroad. We’ll even show you.. </p>
              </div>
            </div>
            <div className='bg-white rounded-md flex flex-col'>
              <div className='basis-1/2'>
                  <Image src={color} alt='color' className='rounded-t-md h-full'/>
              </div>
              <div className='mt-6 mb-6 mx-6 basis-1/2'>
                <p className='text-xs text-Grayish-Blue'>By Claire Robinson</p>
                <p className='my-3 text-lg text-Dark-Blue leading-5 hover:text-Lime-Green hover:cursor-pointer'>Our invite-only Beta accounts are now live!</p>
                <p className='text-Grayish-Blue text-sm'>After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
                It’s easy to request an invite through the site ...</p>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}