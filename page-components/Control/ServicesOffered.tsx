import Spacer from '../../components/primitives/Spacer'

export const ServicesOffered = (): JSX.Element => {
  return (
    <section className='container mx-auto py-6 md:py-24'>
      <div className={'mx-auto flex items-center justify-center'}>
        <h1 className='font-Poppins font-bold text-3xl lg:text-3xl text-primary leading-normal max-w-[20ch]'>Services Offered</h1>
      </div>
      <Spacer medium />
      <div className={'grid grid-cols-1 place-self-center lg:grid-cols-3 lg:grid-rows-1 text-left'}>
        <div className={'p-14 flex flex-col space-y-5'}>
          <div className={'border rounded self-start w-10 h-10 flex items-center justify-center shadow-sm'}>1</div>

          <h1 className='font-Poppins font-semibold text-2xl text-primary leading-normal max-w-[20ch]'>Nigerian Call Centre</h1>

          <h3 className='font-Poppins font-normal text-base lg:text-base text-secondary leading-normal max-w-[60ch]'>
            We can provide a single toll free telephone number that can be called from any Nigerian telephone.
          </h3>
        </div>
        <div className={'p-14 flex flex-col space-y-5'}>
          <div className={'border rounded self-start w-10 h-10 flex items-center justify-center shadow-sm'}>2</div>
          <h1 className='font-Poppins font-semibold text-2xl text-primary leading-normal max-w-[20ch]'>Foreign Call Centre</h1>
          <h3 className='font-Poppins font-normal text-base lg:text-base text-secondary leading-normal max-w-[60ch]'>
            Our customers have the option to dial the number from any foreign telephone roaming within Nigeria
            <br />
            (This is a toll free number)
          </h3>
        </div>
        <div className={'p-14 flex flex-col space-y-5'}>
          <div className={'border rounded self-start w-10 h-10 flex items-center justify-center shadow-sm'}>3</div>
          <h1 className='font-Poppins font-semibold text-2xl text-primary leading-normal max-w-[20ch]'>Record Keeping</h1>
          <h3 className='font-Poppins font-normal text-base lg:text-base text-secondary leading-normal max-w-[60ch]'>
            We can record incident details for an agreed period of time and provide a written notification of incidents and key information
            via email
          </h3>
        </div>
      </div>
    </section>
  )
}
