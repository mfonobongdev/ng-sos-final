import Image from 'next/image'
import heroImage from '/public/assets/mobile-left.png'
import Spacer from '../../components/primitives/Spacer'
import { LearnMoreButton } from '../../components/primitives/LearnMoreButton'

export const RoadSideSection = (): JSX.Element => {
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
                  xmlns='http://www.w3.org/2000/svg'
                  className={'w-6 h-6 fill-white group-hover:fill-white'}
                  viewBox='0 0 20 20'
                  fill='currentColor'>
                  <path
                    fillRule='evenodd'
                    d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <Spacer />
              <h1 className='font-Poppins font-semibold text-3xl text-primary leading-normal max-w-[20ch]'>Roadside Assist.</h1>
              <Spacer />
              <h3 className='font-Poppins font-normal text-base lg:text-base text-secondary leading-normal max-w-[60ch]'>
                NG-SOS covers the entire geographical area within the borders of Nigeria; supporting you during road side emergencies.
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
