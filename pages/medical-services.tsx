import type { NextPage } from 'next'
import { MetaHelper } from '../components/MetaHelper'
import { DownloadSection } from '../page-components/Home/DownloadSection'
import FooterComponent from '../page-components/Footer'
import { HeaderSection } from '../page-components/Medical/HeaderSection'
import { MedicalResponseSection } from '../page-components/Medical/MedicalResponseSection'
import { MedicalTransportationSection } from '../page-components/Medical/MedicalTransportationSection'
import { MedicalAdviceSection } from '../page-components/Medical/MedicalAdviceSection'
import { AmbulanceServiceSection } from '../page-components/Medical/AmbulanceServiceSection'
import CoverageMedicalSection from '../page-components/Medical/CoverageMedicalSection'
const MedicalServices: NextPage = () => {
  return (
    <section>
      <MetaHelper title={'MedicalServices Services'} />

      <HeaderSection />
      <MedicalResponseSection />
      <MedicalTransportationSection />
      <MedicalAdviceSection />
      <AmbulanceServiceSection />
      <CoverageMedicalSection/>
      <DownloadSection />
      <FooterComponent />
    </section>
  )
}

export default MedicalServices
