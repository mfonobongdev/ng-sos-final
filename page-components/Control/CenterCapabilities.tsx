import Spacer from '../../components/primitives/Spacer'

export const CenterCapabilities = (): JSX.Element => {
  return (
    <div className='bg-lightBlue'>
      <section className='container mx-auto py-6 md:py-24'>
        <div className={'mx-auto flex items-center justify-center'}>
          <h1 className='font-Poppins font-bold text-3xl lg:text-3xl text-primary leading-normal max-w-[20ch]'>Call Centre Capabilities</h1>
        </div>
        <Spacer medium />
        <div className={'grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 text-left'}>
          <div className={'p-14 flex flex-col space-y-5'}>
            <div className={'border rounded self-start w-10 h-10 flex items-center justify-center shadow-sm'}>1</div>
            <h3 className='font-Poppins font-normal text-base lg:text-base text-secondary leading-normal max-w-[60ch]'>
              Our call centre agents are highly trained and dedicated to answer each and every call immediately.
            </h3>
          </div>
          <div className={'p-14 flex flex-col space-y-5'}>
            <div className={'border rounded self-start w-10 h-10 flex items-center justify-center shadow-sm'}>2</div>
            <h3 className='font-Poppins font-normal text-base lg:text-base text-secondary leading-normal max-w-[60ch]'>
              Every call centre agent has the ability to rapidly request emergency services support to an incident scene (These services
              include Police, Fire, Ambulance as well as private services.)
            </h3>
          </div>
          <div className={'p-14 flex flex-col space-y-5'}>
            <div className={'border rounded self-start w-10 h-10 flex items-center justify-center shadow-sm'}>3</div>
            <h3 className='font-Poppins font-normal text-base lg:text-base text-secondary leading-normal max-w-[60ch]'>
              All the call centre agents are highly trained to handle each type of emergencies.
            </h3>
          </div>
          <div className={'p-14 flex flex-col space-y-5'}>
            <div className={'border rounded self-start w-10 h-10 flex items-center justify-center shadow-sm'}>4</div>
            <h3 className='font-Poppins font-normal text-base lg:text-base text-secondary leading-normal max-w-[60ch]'>
              The agents have the ability to diagnose the nature of emergencies and the immediate action required to safely and effective
              respond to them.
            </h3>
          </div>
          <div className={'p-14 flex flex-col space-y-5'}>
            <div className={'border rounded self-start w-10 h-10 flex items-center justify-center shadow-sm'}>5</div>
            <h3 className='font-Poppins font-normal text-base lg:text-base text-secondary leading-normal max-w-[60ch]'>
              They have the ability to rapidly provide information to a caller on nearest emergency services. (These services include
              Police, Fire, Ambulance as well as private services.)
            </h3>
          </div>
          <div className={'p-14 flex flex-col space-y-5'}>
            <div className={'border rounded self-start w-10 h-10 flex items-center justify-center shadow-sm'}>6</div>
            <h3 className='font-Poppins font-normal text-base lg:text-base text-secondary leading-normal max-w-[60ch]'>
              Response procedures are in place to assist the agent to deal with a broad range of incidents including security, criminal,
              medical, natural disaster or vehicle breakdown/accident.
            </h3>
          </div>
        </div>
      </section>
    </div>
  )
}
