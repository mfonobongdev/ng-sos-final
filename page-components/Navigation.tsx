import ngSosLogo from '/public/assets/ng-sos-logo.png'
import Link from 'next/link'
import Image from 'next/image'

export const Navigation = (): JSX.Element => {
  return (
    <div className={'fixed top-0 left-0 right-0 z-50 bg-white/80 shadow-md backdrop-blur'}>
      <div className='container px-2 mx-auto flex justify-between items-center'>
        <div className='relative w-28 h-16'>
          <Image src={ngSosLogo} alt={'ng sos logo'} className={'object-contain object-center'} layout={'fill'} />
        </div>

        {/*nav items*/}
        <div className={'lg:flex flex-row space-x-10 hidden'}>
          <Link href={'/'}>
            <div className='cursor-pointer'>
              <h3 className='font-Poppins font-normal text-xs xl:text-sm text-secondary hover:text-red-500 leading-normal max-w-[60ch]'>
                Home
              </h3>
            </div>
          </Link>

          <Link className='cursor-pointer' href={'/about-us'}>
            <div className='cursor-pointer'>
              <h3 className='font-Poppins font-normal text-xs xl:text-sm text-secondary hover:text-red-500 leading-normal max-w-[60ch]'>
                About Us
              </h3>
            </div>
          </Link>

          <Link className='cursor-pointer' href={'/security'}>
            <div className='cursor-pointer'>
              <h3 className='font-Poppins font-normal text-xs xl:text-sm text-secondary hover:text-red-500 leading-normal max-w-[60ch]'>
                Security
              </h3>
            </div>
          </Link>

          <Link className='cursor-pointer' href={'/medical-services'}>
            <div className='cursor-pointer'>
              <h3 className='font-Poppins font-normal text-xs xl:text-sm text-secondary hover:text-red-500 leading-normal max-w-[60ch]'>
                Medical
              </h3>
            </div>
          </Link>

          <Link className='cursor-pointer' href={'/road-side-assistance'}>
            <div className='cursor-pointer'>
              <h3 className='font-Poppins font-normal text-xs xl:text-sm text-secondary hover:text-red-500 leading-normal max-w-[60ch]'>
                Road-Side Assistance
              </h3>
            </div>
          </Link>

          <Link className='cursor-pointer' href={'/control-room'}>
            <div className='cursor-pointer'>
              <h3 className='font-Poppins font-normal text-xs xl:text-sm text-secondary hover:text-red-500 leading-normal max-w-[60ch]'>
                Control Room
              </h3>
            </div>
          </Link>

          <Link className='cursor-pointer' href={'/contact-us'}>
            <div className='cursor-pointer'>
              <h3 className='font-Poppins font-normal text-xs xl:text-sm text-secondary hover:text-red-500 leading-normal max-w-[60ch]'>
                Contact Us
              </h3>
            </div>
          </Link>
        </div>

        {/*  download*/}
        <div className='flex justify-start items-center space-x-3'>
          <h3 className='font-Poppins font-normal text-xs xl:text-sm text-secondary leading-normal max-w-[60ch] hidden xl:block'>
            Download
          </h3>
          <Link className='cursor-pointer' href={'/'}>
            <div
              className={
                'group cursor-pointer border hover:opacity-80 rounded-md py-2 px-5 flex space-x-3 items-center border-transparent bg-red-600 text-white'
              }>
              <svg className={'w-5 h-5 fill-white'} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'>
                <path d='M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z' />
              </svg>
            </div>
          </Link>
          <Link className='cursor-pointer' href={'/'}>
            <div
              className={
                'group cursor-pointer border hover:opacity-80 rounded-md py-2 px-5 flex space-x-3 items-center border-transparent bg-red-600 text-white'
              }>
              <svg className={'w-5 h-5 fill-white'} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                <path d='M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z' />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
