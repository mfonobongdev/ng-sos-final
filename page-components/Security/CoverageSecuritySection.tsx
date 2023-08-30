import Image from 'next/image'
import heroImage from '/public/assets/coverage-lagos.png'
import Spacer from '../../components/primitives/Spacer'


const locations = [
  "LEKKI PHASE 1",
  "LEKKI PHASE 2",
  "CHEVRON, VGC & AJAH AREA",
  "IKOYI","VICTORIA ISLAND",
  "ONIRU ESTATE",
  "MENDE","OGUDU",
  "GBAGADA",
  "ISOLO & FESTAC",
  "ILUPEJU",
  "OBANIKORO",
  "IKEJA GRA",
  "OPEBI",
  "ALLEN AVENUE",
  "OREGUN",
  "ADENIYI JONES",
  "ALAUSA",
  "MAGODO",
  "KETU",
  "OJOTA",
  "MARYLAND"
]

export default  function CoverageSecuritySection(){
    return(
        <div className='bg-slate-900'>
        <section className='container mx-auto py-10 lg:py-14'>
        <h1 className='font-Poppins font-semibold text-3xl text-white leading-tight max-w-[20ch] mb-10 px-10'>
            Coverage 
            <br /> 
            <span className='text-xl text-white/70'>- Security Response Service</span>
        </h1>

          <div className='grid grid-rows-[max-content_1fr] grid-cols-1 md:grid-rows-1 md:grid-cols-[1fr_1fr] gap-10 md:gap-3'>
            <div className='relative w-full h-[480px] lg:h-[500px] rounded-md'>
              <div className={'absolute h-full w-full bg-transparent z-10 rounded-md px-10'} />
              <Image src={heroImage} alt={'hero'} layout={'fill'} className={'object-contain object-center rounded-md z-0'} />
            </div>
            <div className='md:place-self-center px-12'>
              <div>
                <h1 className='font-Poppins font-semibold text-3xl text-white leading-normal max-w-[20ch]'>Lagos Metropolis Only.</h1>
                <Spacer />
                <h3 className='font-Poppins font-normal text-base lg:text-base text-white leading-normal max-w-[60ch]'>
                  22 areas in Lagos Metropolis as at 31 August 2023 
                  <br />
                  <span className='text-xs'>( New Areas/States coming soon)</span>.
                </h3>
                <Spacer />
                <ul className=" flex flex-col flex-wrap h-44 list-inside list-disc text-white text-sm">
                  {locations.map(location => <li key={location} className='mx-2'>{location}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
}