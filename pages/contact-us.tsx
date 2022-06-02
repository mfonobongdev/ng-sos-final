import type { NextPage } from 'next'
import { MetaHelper } from '../components/MetaHelper'
import { DownloadSection } from '../page-components/Home/DownloadSection'
import FooterComponent from '../page-components/Footer'
import { HeaderSection } from '../page-components/Contact/HeaderSection'
import { ContactForm } from '../page-components/Contact/ContactForm'
const ContactUs: NextPage = () => {
  return (
    <section>
      <MetaHelper title={'Contact Us'} />

      <HeaderSection />

      <ContactForm />

      {/*  embed map*/}
      <div className='relative text-right h-[500px] w-full'>
        <div className='overflow-hidden bg-none h-[500px] w-full'>
          <iframe
            width='100%'
            height='500'
            id='gmap_canvas'
            src='https://maps.google.com/maps?q=6th%20Floor,%20Landmark%20Tower,%205B%20Water%20Corporation%20Road%20Victoria%20Island,%20Lagos.&t=&z=13&ie=UTF8&iwloc=&output=embed'
            frameBorder='0'
            scrolling='no'
            marginHeight={0}
            marginWidth={0}></iframe>
        </div>
      </div>
      <DownloadSection />
      <FooterComponent />
    </section>
  )
}

export default ContactUs
