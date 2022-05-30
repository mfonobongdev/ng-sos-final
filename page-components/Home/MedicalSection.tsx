import Image from 'next/image'
import heroImage from '/public/assets/mobile-right.png'
import Spacer from '../../components/primitives/Spacer'
import { LearnMoreButton } from '../../components/primitives/LearnMoreButton'

export const MedicalSection = (): JSX.Element => {
  return (
    <div className='bg-white'>
      <section className='container mx-auto py-6 lg:py-10'>
        <div className='grid grid-rows-[max-content_1fr] grid-cols-1 md:grid-rows-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-3'>
          <div className='hidden md:block relative w-full h-[600px] md:h-[680px] rounded-sm order-last md:order-first mx-12 md:mx-0'>
            <Image src={heroImage} alt={'hero'} layout={'fill'} className={'object-contain object-left md:object-center rounded-sm z-0'} />
          </div>
          <div className='md:place-self-center px-12'>
            <div className=''>
              <div className={'border rounded self-start w-10 h-10 flex items-center justify-center shadow-sm bg-sosRed'}>
                <svg
                  className={'w-6 h-6 stroke-white group-hover:fill-white'}
                  viewBox='0 0 15 15'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z'
                    fill='currentColor'
                    fillRule='evenodd'
                    clipRule='evenodd'></path>
                </svg>
              </div>
              <Spacer />
              <h1 className='font-Poppins font-semibold text-3xl text-primary leading-normal max-w-[20ch]'>Medical Service.</h1>
              <Spacer />
              <h3 className='font-Poppins font-normal text-base lg:text-base text-secondary leading-normal max-w-[60ch]'>
                The NG-SOS APP automatically sends private medical response assistance, to your exact location the moment you press that
                button.
              </h3>
              <Spacer medium />
              <div className='flex justify-start space-x-3'>
                <LearnMoreButton path={'/medical'} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
