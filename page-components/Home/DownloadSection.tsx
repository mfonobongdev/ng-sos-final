import Image from 'next/image'
import heroImageTwo from '/public/assets/mobile-front-right.png'
import Spacer from '../../components/primitives/Spacer'
import { AppStoreButton, PlayStoreButton } from '../../components/primitives/StoreButtons'

export const DownloadSection = (): JSX.Element => {
  return (
    <div className='bg-dullOrange'>
      <section className='container mx-auto py-6 md:py-24'>
        <div className='grid grid-rows-[max-content_1fr] grid-cols-1 md:grid-rows-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-3'>
          <div className='relative w-full h-[600px] md:h-[680px] rounded-sm order-last md:order-first mx-12 md:mx-0'>
            <Image
              src={heroImageTwo}
              alt={'hero'}
              layout={'fill'}
              className={'object-contain object-left md:object-center rounded-sm z-0'}
            />
          </div>
          <div className='md:place-self-center px-12'>
            <div className=''>
              <h1 className='font-Poppins font-bold text-3xl lg:text-3xl text-primary leading-normal max-w-[20ch]'>
                Download the app to get started.
              </h1>
              <Spacer />
              <h3 className='font-Poppins font-normal text-base lg:text-base text-secondary leading-normal max-w-[60ch]'>
                NG-SOS brings lifesaving assistance to you, at any time, anywhere in Nigeria.
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
