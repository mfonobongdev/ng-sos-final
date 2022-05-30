import Image from 'next/image'
import heroImage from '/public/assets/vision.png'
import Spacer from '../../components/primitives/Spacer'
export const VisionSection = (): JSX.Element => {
  return (
    <div className='bg-[#FDFDFD]'>
      <section className='container pt-10 mx-auto'>
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
              <h1 className='font-Poppins font-semibold text-5xl text-primary leading-normal max-w-[20ch]'>Our Vision.</h1>
              <Spacer />
              <h3 className='font-Poppins font-normal text-base lg:text-base text-secondary leading-loose max-w-[60ch]'>
                Empowering the personal Safety of Nigerians through the very best National Emergency and Security Response Application in
                Nigeria backed by intelligent additional data services.
              </h3>
              <Spacer medium />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
