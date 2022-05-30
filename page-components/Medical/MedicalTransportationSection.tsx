import Image from 'next/image'
import heroImage from '/public/assets/mobile-right.png'
import Spacer from '../../components/primitives/Spacer'

export const MedicalTransportationSection = (): JSX.Element => {
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
              <h1 className='font-Poppins font-semibold text-3xl text-primary leading-normal max-w-[20ch]'>Medical Transportation.</h1>
              <Spacer />
              <h3 className='font-Poppins font-normal text-base lg:text-base text-secondary leading-normal max-w-[60ch]'>
                In the event of a Medical Emergency, we will arrange Emergency Medical Transportation by Road or Air under appropriate
                medical supervision, if necessary, to the nearest medical facility capable of providing adequate care.
              </h3>
              <Spacer medium />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
