import type { NextPage } from 'next'
import { MetaHelper } from '../components/MetaHelper'
import { DownloadSection } from '../page-components/Home/DownloadSection'
import FooterComponent from '../page-components/Footer'
import { HeaderSection } from '../page-components/Control/HeaderSection'
import { ServicesOffered } from '../page-components/Control/ServicesOffered'
import { CenterCapabilities } from '../page-components/Control/CenterCapabilities'
const Control: NextPage = () => {
  return (
    <section>
      <MetaHelper title={'Control Room'} />

      <HeaderSection />
      <ServicesOffered />
      <CenterCapabilities />
      <DownloadSection />
      <FooterComponent />
    </section>
  )
}

export default Control
