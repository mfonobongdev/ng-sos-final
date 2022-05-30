import Image from 'next/image'
import heroImage from '/public/assets/mobile-right.png'
import Spacer from '../../components/primitives/Spacer'

export const KeysSection = (): JSX.Element => {
  return (
    <div className='bg-white'>
      <section className='container mx-auto py-6 lg:py-10'>
        <div className='grid grid-rows-[max-content_1fr] grid-cols-1 md:grid-rows-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-3'>
          <div className='hidden md:block relative w-full h-[600px] md:h-[680px] rounded-sm order-last md:order-first mx-12 md:mx-0'>
            <Image src={heroImage} alt={'hero'} layout={'fill'} className={'object-contain object-left md:object-center rounded-sm z-0'} />
          </div>
          <div className='md:place-self-center px-12'>
            <div className=''>
              <Spacer />
              <h1 className='font-Poppins font-semibold text-3xl text-primary leading-normal max-w-[20ch]'>Keys locked in Vehicle.</h1>
              <Spacer />
              <h3 className='font-Poppins font-normal text-base lg:text-base text-secondary leading-normal max-w-[60ch]'>
                A service provider is dispatched to unlock the vehicle. The cost of the call-out and 1h labour is covered. The service
                excludes parts, components, key cutting costs or similar charges.
              </h3>
              <Spacer medium />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
