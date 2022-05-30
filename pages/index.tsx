import type { NextPage } from 'next'
import { MetaHelper } from '../components/MetaHelper'
import { HeroSection } from '../page-components/Home/HeroSection'
import { SecuritySection } from '../page-components/Home/SecuritySection'
import { MedicalSection } from '../page-components/Home/MedicalSection'
import { RoadSideSection } from '../page-components/Home/RoadSideSection'
import { AppFeatures } from '../page-components/Home/AppFeatures'
import { DownloadSection } from '../page-components/Home/DownloadSection'
import FooterComponent from '../page-components/Footer'

const Home: NextPage = () => {
  return (
    <main>
      <MetaHelper title={'Home'} />

      <HeroSection />
      <SecuritySection />
      <MedicalSection />
      <RoadSideSection />
      <AppFeatures />
      <DownloadSection />
      <FooterComponent />
    </main>
  )
}

export default Home
