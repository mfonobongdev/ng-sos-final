import Image from 'next/image'
import heroImage from '/public/assets/road-hero.png'
import Spacer from '../../components/primitives/Spacer'
import { AppStoreButtonLight, PlayStoreButtonLight } from '../../components/primitives/StoreButtons'

export const HeaderSection = (): JSX.Element => {
  return (
    <div className='relative'>
      <section className='container mx-auto py-6 md:py-24 z-20'>
        <div className='grid pt-20'>
          <div className='md:place-self-center px-12'>
            <div className='z-20 drop-shadow-2xl'>
              <h1 className='font-Poppins font-bold text-3xl lg:text-5xl text-white leading-normal max-w-[20ch] z-20'>
                Road-Side
                <br /> Assistance.
              </h1>
              <Spacer />
              <h3 className='font-Poppins font-normal text-base lg:text-lg text-white leading-normal max-w-[60ch] z-20'>
                Use of NG-SOS’s entire independent
                <br /> accredited panel of service providers
              </h3>
              <Spacer medium />
              <div className='flex justify-start space-x-3'>
                <AppStoreButtonLight />
                <PlayStoreButtonLight />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={'absolute inset-0 bg-gray-700/60 -z-10 rounded-md'} />
      <div className={'absolute inset-0 bg-sosRed/40 -z-10 rounded-md'} />
      <div className={'absolute inset-0 -z-20'}>
        <div className={'relative h-full w-full'}>
          <Image src={heroImage} alt={'hero'} layout={'fill'} className={'object-cover object-center rounded-md -z-20'} />
        </div>
      </div>
    </div>
  )
}