import Image from 'next/image'
import heroImage from '/public/assets/values.png'
import Spacer from '../../components/primitives/Spacer'
export const ValuesSection = (): JSX.Element => {
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
              <h1 className='font-Poppins font-semibold text-5xl text-primary leading-normal max-w-[20ch]'>Our Values.</h1>
              <Spacer />
              <h3 className='font-Poppins font-normal text-base lg:text-base text-secondary leading-loose max-w-[60ch]'>
                We are committed to providing the fastest and most professional service wherever you are making a visible difference in
                society by continuing to evolve and improve our services offering using the best that technology has to offer accommodating
                a variety of devise platforms. Empowering skills within our partnerships to better assist with lifesaving services
                .Maintaining an affordable, usable and accessible product for all. Guarding our clients, wherever they are, with the
                fastest.
              </h3>
              <Spacer medium />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
