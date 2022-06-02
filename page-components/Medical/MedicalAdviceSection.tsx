import Image from 'next/image'
import heroImage from '/public/assets/medical-three.jpg'
import Spacer from '../../components/primitives/Spacer'

export const MedicalAdviceSection = (): JSX.Element => {
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
              <h1 className='font-Poppins font-semibold text-3xl text-primary leading-normal max-w-[20ch]'>
                Emergency Medical Advice and Assistance Hotline.
              </h1>
              <Spacer />
              <h3 className='font-Poppins font-normal text-base lg:text-base text-secondary leading-normal max-w-[60ch]'>
                Personnel shall be available 24-hours a day to provide general medical information and advice. This is an advisory service,
                as a telephonic conversation does not permit an accurate diagnosis. In addition to the general medical advice service, one
                call to our control centre will trigger the medical operators to guide a person through a medical crisis situation,
                involving the member by providing emergency advice or by organising for the member to receive the support required,
                utilizing the 24-hour contact centre Doctor.
              </h3>
              <Spacer medium />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
