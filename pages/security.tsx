import type { NextPage } from 'next'
import { MetaHelper } from '../components/MetaHelper'
import { DownloadSection } from '../page-components/Home/DownloadSection'
import FooterComponent from '../page-components/Footer'
import { HeaderSection } from '../page-components/Security/HeaderSection'
import { ArmedResponseSection } from '../page-components/Security/ArmedResponseSection'
import { EscortsSection } from '../page-components/Security/EscortsSection'
import CoverageSecuritySection from '../page-components/Security/CoverageSecuritySection'
const Security: NextPage = () => {
  return (
    <section>
      <MetaHelper title={'Security'} />

      <HeaderSection />
      <ArmedResponseSection />
      <EscortsSection />
      <CoverageSecuritySection/>
      <DownloadSection />
      <FooterComponent />
    </section>
  )
}

export default Security
