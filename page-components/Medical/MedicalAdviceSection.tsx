import Image from 'next/image'
import heroImage from '/public/assets/mobile-left.png'
import Spacer from '../../components/primitives/Spacer'

export const MedicalAdviceSection = (): JSX.Element => {
  return (
    <div className='bg-white'>
      <section className='container mx-auto py-6 lg:py-10'>
        <div className='grid grid-rows-[max-content_1fr] grid-cols-1 md:grid-rows-1 md:grid-cols-[2fr_1fr] gap-10 md:gap-3'>
          <div className='hidden md:block relative w-full h-[600px] md:h-[680px] rounded-sm order-first md:order-last mx-12 md:mx-0'>
            <Image src={heroImage} alt={'hero'} layout={'fill'} className={'object-contain object-left md:object-center rounded-sm z-0'} />
          </div>
          <div className='md:place-self-center px-12'>
            <div className=''>
              <Spacer />
              <h1 className='font-Poppins font-semibold text-3xl text-primary leading-normal max-w-[20ch]'>Emergency Medical Advice.</h1>
              <Spacer />
              <h3 className='font-Poppins font-normal text-base lg:text-base text-secondary leading-normal max-w-[60ch]'>
                One call to our control centre will trigger the medical operators to guide a person through a medical crisis situation.
              </h3>
              <Spacer medium />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
