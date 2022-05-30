import Image from 'next/image'
import heroImage from '/public/assets/mobile-left.png'
import Spacer from '../../components/primitives/Spacer'
import { LearnMoreButton } from '../../components/primitives/LearnMoreButton'

export const SecuritySection = (): JSX.Element => {
  return (
    <div className='bg-white'>
      <section className='container mx-auto py-6 lg:py-10'>
        <div className='grid grid-rows-[max-content_1fr] grid-cols-1 md:grid-rows-1 md:grid-cols-[2fr_1fr] gap-10 md:gap-3'>
          <div className='hidden md:block relative w-full h-[600px] md:h-[680px] rounded-sm order-first md:order-last mx-12 md:mx-0'>
            <Image src={heroImage} alt={'hero'} layout={'fill'} className={'object-contain object-left md:object-center rounded-sm z-0'} />
          </div>
          <div className='md:place-self-center px-12'>
            <div className=''>
              <div className={'border rounded self-start w-10 h-10 flex items-center justify-center shadow-sm bg-sosRed'}>
                <svg
                  className={'w-6 h-6 stroke-white group-hover:fill-white'}
                  viewBox='0 0 15 15'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M5 4.63601C5 3.76031 5.24219 3.1054 5.64323 2.67357C6.03934 2.24705 6.64582 1.9783 7.5014 1.9783C8.35745 1.9783 8.96306 2.24652 9.35823 2.67208C9.75838 3.10299 10 3.75708 10 4.63325V5.99999H5V4.63601ZM4 5.99999V4.63601C4 3.58148 4.29339 2.65754 4.91049 1.99307C5.53252 1.32329 6.42675 0.978302 7.5014 0.978302C8.57583 0.978302 9.46952 1.32233 10.091 1.99162C10.7076 2.65557 11 3.57896 11 4.63325V5.99999H12C12.5523 5.99999 13 6.44771 13 6.99999V13C13 13.5523 12.5523 14 12 14H3C2.44772 14 2 13.5523 2 13V6.99999C2 6.44771 2.44772 5.99999 3 5.99999H4ZM3 6.99999H12V13H3V6.99999Z'
                    fill='currentColor'
                    fillRule='evenodd'
                    clipRule='evenodd'></path>
                </svg>
              </div>
              <Spacer />
              <h1 className='font-Poppins font-semibold text-3xl text-primary leading-normal max-w-[20ch]'>Security.</h1>
              <Spacer />
              <h3 className='font-Poppins font-normal text-base lg:text-base text-secondary leading-normal max-w-[60ch]'>
                NG-SOS provides a “safety-net” for users by providing services with fast acting private security-providers.
              </h3>
              <Spacer medium />
              <div className='flex justify-start space-x-3'>
                <LearnMoreButton path={'/security'} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
