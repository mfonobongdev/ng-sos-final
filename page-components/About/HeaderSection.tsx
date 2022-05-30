import Image from 'next/image'
import heroImage from '/public/assets/ng-sos-badge.png'
import Spacer from '../../components/primitives/Spacer'
export const HeaderSection = (): JSX.Element => {
  return (
    <div className='bg-white'>
      <section className='container mx-auto py-6 lg:py-10'>
        <div className='grid grid-rows-[max-content_1fr] grid-cols-1 lg:grid-rows-1 lg:grid-cols-[2fr_1fr] gap-10 md:gap-3'>
          <div className='hidden lg:block relative w-full h-[600px] lg:h-[680px] rounded-sm order-first md:order-last mx-12 md:mx-0'>
            <Image
              src={heroImage}
              alt={'hero'}
              layout={'fill'}
              className={'object-contain object-left lg:object-left-top rounded-sm z-0'}
            />
          </div>
          <div className='md:place-self-stretch px-12'>
            <div className=''>
              <h1 className='font-Poppins font-semibold text-5xl text-primary leading-normal max-w-[20ch]'>About Us.</h1>
              <Spacer />
              <h3 className='font-Poppins font-normal text-base lg:text-base text-secondary leading-loose max-w-[80ch]'>
                At NG-SOS we believe in the right of every single person to be safe and retain freedom of movement without fear, wherever
                they are.
              </h3>
              <Spacer />
              <Spacer small />
              <h3 className='font-Poppins font-normal text-base lg:text-base text-secondary leading-loose max-w-[80ch]'>
                The concentration of serious crime in Nigeria remains high in densely populated cities, focused more intensely in urban, and
                suburban areas. Although Public Services, in the form of the Nigerian Police Service, and Public Healthcare Emergency
                Response exists, resources are limited. “High Spike” times of the day and week (for example, Friday nights) results in
                overburdened public services that are often overwhelmed, slowing response-time.
              </h3>
              <Spacer />
              <Spacer small />
              <h3 className='font-Poppins font-normal text-base lg:text-base text-secondary leading-loose max-w-[80ch]'>
                NG-SOS provides a “safety-net” for users by supplementing these services with private service-providers. Although private
                home-security has become a standard feature for many Nigerian families, NG-SOS seeks to expand that level of security to
                external, public environments.
              </h3>
              <Spacer />
              <h3 className='font-Poppins font-normal text-base lg:text-base text-secondary leading-loose max-w-[80ch]'>
                We are passionate about providing a user-friendly, affordable service that will ensure the safety of individuals, whether
                they are on the road, on holiday, or simply taking a walk.
              </h3>
              <Spacer medium />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
