import Image from 'next/image'
import heroImage from '/public/assets/security-hero.jpg'
import Spacer from '../../components/primitives/Spacer'
import { AppStoreButtonLight, PlayStoreButtonLight } from '../../components/primitives/StoreButtons'

export const HeaderSection = (): JSX.Element => {
  return (
    <div className='relative'>
      <section className='container mx-auto py-6 md:py-24 z-20'>
        <div className='grid pt-20'>
          <div className='md:place-self-center px-12'>
            <div className='z-20 drop-shadow-2xl'>
              <h1 className='font-Poppins font-bold text-3xl lg:text-5xl text-white leading-normal max-w-[20ch] z-20'>Security.</h1>
              <Spacer />
              <h3 className='font-Poppins font-normal text-base lg:text-lg text-white leading-normal max-w-[60ch] z-20'>
                We don&apos;t secure assets <br />
                we secure your loved ones.
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
      <div className={'absolute inset-0 bg-gray-700/60 -z-10'} />
      <div className={'absolute inset-0 bg-sosRed/40 -z-10'} />
      <div className={'absolute inset-0 -z-20'}>
        <div className={'relative h-full w-full'}>
          <Image src={heroImage} alt={'hero'} layout={'fill'} className={'object-cover object-center -z-20'} />
        </div>
      </div>
    </div>
  )
}
