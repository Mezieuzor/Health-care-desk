import Header from "@/components/header"
import Hero from "@/components/hero"
import Categories from "@/components/categories"
import BestSellers from "@/components/best-sellers"
import TrustBadges from "@/components/trust-badges"
import BrandStory from "@/components/brand-story"
import ResearchFormulations from "@/components/research-formulations"
import EcoManufacturing from "@/components/eco-manufacturing"
import CharitableInitiatives from "@/components/charitable-initiatives"
import Testimonials from "@/components/testimonials"
import Newsletter from "@/components/newsletter"
import PrimaryFooter from "@/components/primary-footer"
import FullFooter from "@/components/full-footer"
import SocialMedia from "@/components/social-media"

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <Categories />
      <BestSellers />
      <TrustBadges />
      <BrandStory />
      <ResearchFormulations />
      <EcoManufacturing />
      <CharitableInitiatives />
      <Testimonials />
      <SocialMedia />
      <Newsletter />
      <PrimaryFooter />
      <FullFooter />
    </main>
  )
}
