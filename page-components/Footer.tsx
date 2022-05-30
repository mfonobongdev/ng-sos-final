import ngSosLogo from '/public/assets/ng-sos-logo.jpeg'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function FooterComponent() {
  return (
    <section className={'container mx-auto py-6 md:py-24 px-5 xl:px-20'}>
      <div className='grid w-full gap-10 place-content-stretch grid-cols-2 lg:grid-cols-4'>
        {/*first*/}
        <div className='flex flex-col space-y-4 '>
          <div className='cursor-pointer'>
            <div className='flex items-center'>
              <div className='relative w-28 h-16'>
                <Image src={ngSosLogo} alt={'ng sos logo'} className={'object-contain object-left-top'} layout={'fill'} />
              </div>
            </div>
          </div>

          <a href='/pdf/terms-converted.pdf' target='_blank'>
            <div className={'flex space-x-1 items-center cursor-pointer hover:opacity-50'}>
              <h3 className='font-Poppins font-normal text-xs text-secondary leading-normal max-w-[60ch]'>Terms & Conditions</h3>
              <LinkIcon />
            </div>
          </a>
        </div>

        {/*second*/}
        <div className='flex flex-col space-y-4 '>
          <div className='font-bold'>Links</div>

          <Link className='cursor-pointer' href={'/'}>
            <div className='cursor-pointer'>
              <h3 className='font-Poppins font-normal text-xs text-secondary leading-normal max-w-[60ch]'>Home</h3>
            </div>
          </Link>

          <Link className='cursor-pointer' href={'/about'}>
            <div className='cursor-pointer'>
              <h3 className='font-Poppins font-normal text-xs text-secondary leading-normal max-w-[60ch]'>About Us</h3>
            </div>
          </Link>

          <Link className='cursor-pointer' href={'/security'}>
            <div className='cursor-pointer'>
              <h3 className='font-Poppins font-normal text-xs text-secondary leading-normal max-w-[60ch]'>Security</h3>
            </div>
          </Link>

          <Link className='cursor-pointer' href={'/medical'}>
            <div className='cursor-pointer'>
              <h3 className='font-Poppins font-normal text-xs text-secondary leading-normal max-w-[60ch]'>Medical Assistance</h3>
            </div>
          </Link>

          <Link className='cursor-pointer' href={'/road'}>
            <div className='cursor-pointer'>
              <h3 className='font-Poppins font-normal text-xs text-secondary leading-normal max-w-[60ch]'>Road-Side Assistance</h3>
            </div>
          </Link>

          <Link className='cursor-pointer' href={'/control'}>
            <div className='cursor-pointer'>
              <h3 className='font-Poppins font-normal text-xs text-secondary leading-normal max-w-[60ch]'>Control Room</h3>
            </div>
          </Link>
        </div>

        {/*Third*/}
        <div className='flex flex-col space-y-4 '>
          <div className='font-bold'>Service</div>

          <Link className='cursor-pointer' href={'/'}>
            <div className='cursor-pointer'>
              <h3 className='font-Poppins font-normal text-xs text-secondary leading-normal max-w-[60ch]'>Managed IT</h3>
            </div>
          </Link>

          <Link className='cursor-pointer' href={'/security'}>
            <div className='cursor-pointer'>
              <h3 className='font-Poppins font-normal text-xs text-secondary leading-normal max-w-[60ch]'>Security</h3>
            </div>
          </Link>

          <Link className='cursor-pointer' href={'/medical'}>
            <div className='cursor-pointer'>
              <h3 className='font-Poppins font-normal text-xs text-secondary leading-normal max-w-[60ch]'>IT Support</h3>
            </div>
          </Link>

          <Link className='cursor-pointer' href={'/road'}>
            <div className='cursor-pointer'>
              <h3 className='font-Poppins font-normal text-xs text-secondary leading-normal max-w-[60ch]'>FAQ&apos;s</h3>
            </div>
          </Link>
        </div>

        {/*forth*/}
        <div className='flex flex-col space-y-4 overflow-clip'>
          <div className='font-bold'>Contact Us</div>
          <h3 className='font-Poppins font-normal text-xs text-secondary leading-normal max-w-[60ch]'>sales@m2m-nigeria.com</h3>
          <h3 className='font-Poppins font-normal text-xs text-secondary leading-normal max-w-[60ch]'>+234 (1) 236 6367</h3>
          <h3 className='font-Poppins font-normal text-xs text-secondary leading-normal max-w-[60ch]'>
            6th Floor, Landmark Tower, 5B Water Corporation Road Victoria Island, Lagos.
          </h3>
        </div>
      </div>
      <div className='border-t border-gray-300 mt-8 pt-4 flex justify-between'>
        <h3 className='font-Poppins font-normal text-xs text-secondary leading-normal max-w-[60ch]'>© 2022 NG-SOS</h3>
        <div className='flex space-x-6 items-center'>
          <h3 className='font-Poppins font-normal text-xs text-secondary leading-normal max-w-[60ch]'>Follow Us</h3>
          <EmailIcon />
          <WhatsappIcon />
          <LinkedinIcon />
          <InstagramIcon />
        </div>
      </div>
    </section>
  )
}

export const LinkIcon = () => {
  return (
    <svg width='15' height='15' viewBox='0 0 15 15' fill='none' className='w-4 h-4 fill-current' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z'
        fill='currentColor'
        fillRule='evenodd'
        clipRule='evenodd'></path>
    </svg>
  )
}
const WhatsappIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
      focusable='false'
      data-prefix='fab'
      data-icon='whatsapp'
      className='w-4 h-4 fill-current text-secondary hover:text-red-500'
      role='img'
      viewBox='0 0 448 512'>
      <path
        fill='currentColor'
        d='M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z'
      />
    </svg>
  )
}

const LinkedinIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
      focusable='false'
      data-prefix='fab'
      data-icon='linkedin-in'
      className='w-4 h-4 fill-current text-secondary hover:text-red-500'
      role='img'
      viewBox='0 0 448 512'>
      <path
        fill='currentColor'
        d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'
      />
    </svg>
  )
}

const InstagramIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
      focusable='false'
      data-prefix='fab'
      data-icon='instagram'
      className='w-4 h-4 fill-current text-secondary hover:text-red-500'
      role='img'
      viewBox='0 0 448 512'>
      <path
        fill='currentColor'
        d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'
      />
    </svg>
  )
}

const EmailIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
      focusable='false'
      data-prefix='fas'
      data-icon='at'
      className='w-4 h-4 fill-current text-secondary hover:text-red-500'
      role='img'
      viewBox='0 0 512 512'>
      <path
        fill='currentColor'
        d='M256 8C118.941 8 8 118.919 8 256c0 137.059 110.919 248 248 248 48.154 0 95.342-14.14 135.408-40.223 12.005-7.815 14.625-24.288 5.552-35.372l-10.177-12.433c-7.671-9.371-21.179-11.667-31.373-5.129C325.92 429.757 291.314 440 256 440c-101.458 0-184-82.542-184-184S154.542 72 256 72c100.139 0 184 57.619 184 160 0 38.786-21.093 79.742-58.17 83.693-17.349-.454-16.91-12.857-13.476-30.024l23.433-121.11C394.653 149.75 383.308 136 368.225 136h-44.981a13.518 13.518 0 0 0-13.432 11.993l-.01.092c-14.697-17.901-40.448-21.775-59.971-21.775-74.58 0-137.831 62.234-137.831 151.46 0 65.303 36.785 105.87 96 105.87 26.984 0 57.369-15.637 74.991-38.333 9.522 34.104 40.613 34.103 70.71 34.103C462.609 379.41 504 307.798 504 232 504 95.653 394.023 8 256 8zm-21.68 304.43c-22.249 0-36.07-15.623-36.07-40.771 0-44.993 30.779-72.729 58.63-72.729 22.292 0 35.601 15.241 35.601 40.77 0 45.061-33.875 72.73-58.161 72.73z'
      />
    </svg>
  )
}
