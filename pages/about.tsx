import type { NextPage } from 'next'
import { HeaderSection } from '../page-components/About/HeaderSection'
import { MetaHelper } from '../components/MetaHelper'
import { VisionSection } from '../page-components/About/VisionSection'
import { ValuesSection } from '../page-components/About/ValuesSection'
import { MissionSection } from '../page-components/About/MissionSection'
import { DownloadSection } from '../page-components/Home/DownloadSection'
import FooterComponent from '../page-components/Footer'
const About: NextPage = () => {
  return (
    <section className='mt-20'>
      <MetaHelper title={'About'} />

      <HeaderSection />
      <VisionSection />
      <ValuesSection />
      <MissionSection />
      <DownloadSection />
      <FooterComponent />
    </section>
  )
}

export default About
