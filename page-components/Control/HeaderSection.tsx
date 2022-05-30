import Image from 'next/image'
import heroImage from '/public/assets/mobile-front.png'
import heroImageTwo from '/public/assets/mobile-front-right.png'
import Spacer from '../../components/primitives/Spacer'
import { AppStoreButton, PlayStoreButton } from '../../components/primitives/StoreButtons'

export const HeaderSection = (): JSX.Element => {
  return (
    <div className='bg-red-50'>
      <section className='container mx-auto py-6 md:py-24'>
        <div className='grid pt-20'>
          <div className='md:place-self-center px-12'>
            <div className=''>
              <h1 className='font-Poppins font-bold text-3xl lg:text-5xl text-primary leading-normal max-w-[20ch]'>Control Room.</h1>
              <Spacer />
              <h3 className='font-Poppins font-normal text-base lg:text-lg text-secondary leading-normal max-w-[60ch]'>
                In order to ensure efficient and effective call taking and call handling, we use one national number operated through a
                high-tech emergency contact centre twenty seven hours per day, everyday. The call centre is supported by an independent
                off-site disaster and back up location.
              </h3>
              <Spacer medium />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
