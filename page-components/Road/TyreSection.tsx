import Image from 'next/image'
import heroImage from '/public/assets/road-three.png'
import Spacer from '../../components/primitives/Spacer'

export const TyreSection = (): JSX.Element => {
  return (
    <div className='bg-white'>
      <section className='container mx-auto py-6 lg:py-10'>
        <div className='grid grid-rows-[max-content_1fr] grid-cols-1 md:grid-rows-1 md:grid-cols-[2fr_1fr] gap-10 md:gap-3'>
          <div className='hidden md:block relative w-full h-[480px] lg:h-[500px] rounded-md order-first md:order-last mx-12 md:mx-0'>
            <div className={'absolute h-full w-full bg-sosRed/40 z-10 rounded-md'} />
            <Image src={heroImage} alt={'hero'} layout={'fill'} className={'object-cover object-left md:object-center rounded-md z-0'} />
          </div>
          <div className='md:place-self-center px-12'>
            <div className=''>
              <Spacer />
              <h1 className='font-Poppins font-semibold text-3xl text-primary leading-normal max-w-[20ch]'>Tyre change service.</h1>
              <Spacer />
              <h3 className='font-Poppins font-normal text-base lg:text-base text-secondary leading-normal max-w-[60ch]'>
                A service provider is dispatched to change a flat tyre vehicle can be towed on a Member to Pay basis. Any costs for the
                repair of the tyre, parts, wheel balancing or similar charges are excluded.
              </h3>
              <Spacer medium />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}