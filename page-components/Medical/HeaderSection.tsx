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
              <h1 className='font-Poppins font-bold text-3xl lg:text-5xl text-primary leading-normal max-w-[20ch]'>Medical Services.</h1>
              <Spacer />
              <h3 className='font-Poppins font-normal text-base lg:text-lg text-secondary leading-normal max-w-[60ch]'>
                Immediate medical response is absolutely
                <br /> vital in the event of a severe injury.
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
