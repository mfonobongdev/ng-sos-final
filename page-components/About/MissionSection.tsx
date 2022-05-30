import Image from 'next/image'
import heroImage from '/public/assets/mission.png'
import Spacer from '../../components/primitives/Spacer'
export const MissionSection = (): JSX.Element => {
  return (
    <div className='bg-[#FDFDFD]'>
      <section className='container mx-auto'>
        <div className='grid grid-rows-[max-content_1fr] grid-cols-1 lg:grid-rows-1 lg:grid-cols-[2fr_1fr] gap-10 md:gap-3'>
          <div className='hidden lg:block relative w-full h-[500px] rounded-sm order-first md:order-last mx-12 md:mx-0'>
            <Image
              src={heroImage}
              alt={'hero'}
              layout={'fill'}
              className={'object-contain object-left lg:object-left-top rounded-sm z-0'}
            />
          </div>
          <div className='md:place-self-start px-12'>
            <div className=''>
              <h1 className='font-Poppins font-semibold text-5xl text-primary leading-normal max-w-[20ch]'>Our Mission.</h1>
              <Spacer />
              <h3 className='font-Poppins font-normal text-base lg:text-base text-secondary leading-loose max-w-[60ch]'>
                security and emergency response-time. Innovating systems and evolving the nature of private security. Becoming the largest
                and most reliable mobile safety- service application, by unifying and empowering the best security and emergency personnel,
                nationwide, backed by personalised intelligent data services.
              </h3>
              <Spacer medium />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
