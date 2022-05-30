import Image from 'next/image'
import heroImage from '/public/assets/mobile-front-stack.png'
import Spacer from '../../components/primitives/Spacer'

export const AppFeatures = (): JSX.Element => {
  return (
    <div className='bg-lightBlue'>
      <section className='container mx-auto py-6 lg:py-10'>
        <div className='grid grid-rows-[max-content_1fr] grid-cols-1 md:grid-rows-1 md:grid-cols-[2fr_1fr] gap-10 md:gap-3'>
          <div className='hidden md:block relative w-full h-[600px] md:h-[680px] rounded-sm order-first md:order-last mx-12 md:mx-0'>
            <Image src={heroImage} alt={'hero'} layout={'fill'} className={'object-contain object-left md:object-center rounded-sm z-0'} />
          </div>
          <div className='md:place-self-stretch px-12'>
            <div className=''>
              <h1 className='font-Poppins font-semibold text-4xl text-primary leading-normal max-w-[20ch]'>App Highlights.</h1>
              <Spacer large />
              <div className='grid grid-rows-2 grid-cols-2 gap-10'>
                <div>
                  <div className={'border rounded self-start w-10 h-10 flex items-center justify-center shadow-sm text-white bg-sosRed'}>
                    1
                  </div>
                  <Spacer />
                  <h1 className='font-Poppins font-semibold text-2xl text-primary leading-normal max-w-[20ch]'>User Friendly.</h1>
                  <Spacer />
                  <h3 className='font-Poppins font-normal text-base lg:text-base text-secondary leading-normal max-w-[60ch]'>
                    The application is easy to use, with clearly marked buttons and instructions.
                  </h3>
                </div>
                <div>
                  <div className={'border rounded self-start w-10 h-10 flex items-center justify-center shadow-sm text-white bg-sosRed'}>
                    2
                  </div>
                  <Spacer />
                  <h1 className='font-Poppins font-semibold text-2xl text-primary leading-normal max-w-[20ch]'>Affordable.</h1>
                  <Spacer />
                  <h3 className='font-Poppins font-normal text-base lg:text-base text-secondary leading-normal max-w-[60ch]'>
                    Small monthly fee, per person.
                  </h3>
                </div>
                <div>
                  <div className={'border rounded self-start w-10 h-10 flex items-center justify-center shadow-sm text-white bg-sosRed'}>
                    3
                  </div>
                  <Spacer />
                  <h1 className='font-Poppins font-semibold text-2xl text-primary leading-normal max-w-[20ch]'>Innovative.</h1>
                  <Spacer />
                  <h3 className='font-Poppins font-normal text-base lg:text-base text-secondary leading-normal max-w-[60ch]'>
                    It essentially turns your phone into a geo- tagged emergency response security device.
                  </h3>
                </div>
                <div>
                  <div className={'border rounded self-start w-10 h-10 flex items-center justify-center shadow-sm text-white bg-sosRed'}>
                    4
                  </div>
                  <Spacer />
                  <h1 className='font-Poppins font-semibold text-2xl text-primary leading-normal max-w-[20ch]'>Practical.</h1>
                  <Spacer />
                  <h3 className='font-Poppins font-normal text-base lg:text-base text-secondary leading-normal max-w-[60ch]'>
                    All your necessary medical data communicated to emergency personal at the scened.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
