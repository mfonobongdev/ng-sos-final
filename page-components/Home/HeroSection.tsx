import Image from 'next/image'
import heroImage from '/public/assets/mobile-front.png'
import heroImageTwo from '/public/assets/mobile-front-right.png'
import Spacer from '../../components/primitives/Spacer'
import { AppStoreButton, PlayStoreButton } from '../../components/primitives/StoreButtons'

export const HeroSection = (): JSX.Element => {
  return (
    <div className='bg-dullOrange'>
      <section className='container mt-10 mx-auto py-16 md:py-24'>
        <div className='grid grid-rows-[max-content_1fr] grid-cols-1 md:grid-rows-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-3'>
          <div className='hidden md:block relative w-full h-[600px] md:h-[680px] rounded-sm order-last md:order-first mx-12 md:mx-0'>
            <Image src={heroImage} alt={'hero'} layout={'fill'} className={'object-contain object-left md:object-center rounded-sm z-0'} />
          </div>
          <div className='block md:hidden relative w-full h-[600px] md:h-[680px] rounded-sm order-last md:order-first mx-12 md:mx-0'>
            <Image
              src={heroImageTwo}
              alt={'hero'}
              layout={'fill'}
              className={'object-contain object-left md:object-center rounded-sm z-0'}
            />
          </div>
          <div className='md:place-self-center px-12'>
            <div className=''>
              <h1 className='font-Poppins font-bold text-3xl lg:text-5xl text-primary leading-normal max-w-[20ch]'>
                Full-Service Emergency Assistance.
              </h1>
              <Spacer />
              <h3 className='font-Poppins font-normal text-base lg:text-base text-secondary leading-normal max-w-[60ch]'>
                Making it easier for emergency personal to find, and assist you as quickly and efficiently as possible.
              </h3>
              <Spacer medium />
              <div className='flex justify-start space-x-3'>
                <AppStoreButton />
                <PlayStoreButton />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
