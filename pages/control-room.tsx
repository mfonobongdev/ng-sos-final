import type { NextPage } from 'next'
import { MetaHelper } from '../components/MetaHelper'
import { DownloadSection } from '../page-components/Home/DownloadSection'
import FooterComponent from '../page-components/Footer'
import { HeaderSection } from '../page-components/Control/HeaderSection'
import { ServicesOffered } from '../page-components/Control/ServicesOffered'
import { CenterCapabilities } from '../page-components/Control/CenterCapabilities'
const ControlRoom: NextPage = () => {
  return (
    <section>
      <MetaHelper title={'ControlRoom Room'} />

      <HeaderSection />
      <ServicesOffered />
      <CenterCapabilities />
      <DownloadSection />
      <FooterComponent />
    </section>
  )
}

export default ControlRoom
