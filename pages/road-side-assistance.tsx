import type { NextPage } from 'next'
import { MetaHelper } from '../components/MetaHelper'
import { DownloadSection } from '../page-components/Home/DownloadSection'
import FooterComponent from '../page-components/Footer'
import { HeaderSection } from '../page-components/Road/HeaderSection'
import { FuelSection } from '../page-components/Road/FuelSection'
import { MechanicalSection } from '../page-components/Road/MechanicalSection'
import { TyreSection } from '../page-components/Road/TyreSection'
import { KeysSection } from '../page-components/Road/KeysSection'
import { JumpSection } from '../page-components/Road/JumpSection'
const RoadSideAssistance: NextPage = () => {
  return (
    <section>
      <MetaHelper title={'RoadSideAssistance-side Assistance'} />

      <HeaderSection />
      <FuelSection />
      <MechanicalSection />
      <TyreSection />
      <KeysSection />
      <JumpSection />
      <DownloadSection />
      <FooterComponent />
    </section>
  )
}

export default RoadSideAssistance
