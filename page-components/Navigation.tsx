import ngSosLogo from '/public/assets/ng-sos-logo.jpeg'
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
              <h3 className='font-Poppins font-normal text-sm text-secondary hover:text-red-500 leading-normal max-w-[60ch]'>Home</h3>
            </div>
          </Link>

          <Link className='cursor-pointer' href={'/about'}>
            <div className='cursor-pointer'>
              <h3 className='font-Poppins font-normal text-sm text-secondary hover:text-red-500 leading-normal max-w-[60ch]'>About Us</h3>
            </div>
          </Link>

          <Link className='cursor-pointer' href={'/security'}>
            <div className='cursor-pointer'>
              <h3 className='font-Poppins font-normal text-sm text-secondary hover:text-red-500 leading-normal max-w-[60ch]'>Security</h3>
            </div>
          </Link>

          <Link className='cursor-pointer' href={'/medical'}>
            <div className='cursor-pointer'>
              <h3 className='font-Poppins font-normal text-sm text-secondary hover:text-red-500 leading-normal max-w-[60ch]'>Medical</h3>
            </div>
          </Link>

          <Link className='cursor-pointer' href={'/road'}>
            <div className='cursor-pointer'>
              <h3 className='font-Poppins font-normal text-sm text-secondary hover:text-red-500 leading-normal max-w-[60ch]'>
                Road-Side Assistance
              </h3>
            </div>
          </Link>

          <Link className='cursor-pointer' href={'/control'}>
            <div className='cursor-pointer'>
              <h3 className='font-Poppins font-normal text-sm text-secondary hover:text-red-500 leading-normal max-w-[60ch]'>
                Control Room
              </h3>
            </div>
          </Link>
        </div>

        {/*  download*/}
        <div className='flex justify-start space-x-3'>
          <Link className='cursor-pointer' href={'/'}>
            <div
              className={
                'group cursor-pointer border hover:opacity-80 rounded-md py-2 px-5 flex space-x-3 items-center border-transparent bg-red-600 text-white'
              }>
              <div className={'flex flex-col text-sm text-white'}>
                <span>
                  <strong>Download</strong>
                </span>
              </div>
              <svg className={'w-4 h-4 fill-white'} viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M7.50005 1.04999C7.74858 1.04999 7.95005 1.25146 7.95005 1.49999V8.41359L10.1819 6.18179C10.3576 6.00605 10.6425 6.00605 10.8182 6.18179C10.994 6.35753 10.994 6.64245 10.8182 6.81819L7.81825 9.81819C7.64251 9.99392 7.35759 9.99392 7.18185 9.81819L4.18185 6.81819C4.00611 6.64245 4.00611 6.35753 4.18185 6.18179C4.35759 6.00605 4.64251 6.00605 4.81825 6.18179L7.05005 8.41359V1.49999C7.05005 1.25146 7.25152 1.04999 7.50005 1.04999ZM2.5 10C2.77614 10 3 10.2239 3 10.5V12C3 12.5539 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2239 12.2239 10 12.5 10C12.7761 10 13 10.2239 13 10.5V12C13 13.1041 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2239 2.22386 10 2.5 10Z'
                  fill='currentColor'
                  fillRule='evenodd'
                  clipRule='evenodd'></path>
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
