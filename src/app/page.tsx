import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TechMarquee from '@/components/TechMarquee'
import About from '@/components/About'
import Services from '@/components/Services'
import StatsSection from '@/components/StatsSection'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import CursorGlow from '@/components/CursorGlow'
import ScrollProgress from '@/components/ScrollProgress'
import FloatingActions from '@/components/FloatingActions'
import AnimatedBackground from '@/components/AnimatedBackground'
import { personalInfo } from '@/lib/data'

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://bikash-tripathy.dev'

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        name: personalInfo.name,
        url: siteUrl,
        image: `${siteUrl}/profile.jpg`,
        jobTitle: personalInfo.title,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Hyderabad',
          addressRegion: 'Telangana',
          addressCountry: 'IN',
        },
        email: personalInfo.email,
        sameAs: [personalInfo.github, personalInfo.linkedin],
      },
      {
        '@type': 'WebSite',
        name: `${personalInfo.name} Portfolio`,
        url: siteUrl,
        inLanguage: 'en-IN',
      },
      {
        '@type': 'WebPage',
        name: `${personalInfo.name} Portfolio`,
        url: siteUrl,
        description:
          'Portfolio of Bikash Tripathy, a frontend-focused full-stack developer building performant and scalable web applications.',
        isPartOf: {
          '@type': 'WebSite',
          url: siteUrl,
        },
        about: {
          '@type': 'Person',
          name: personalInfo.name,
        },
      },
    ],
  }

  return (
    <>
      <main className="relative min-h-screen overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <AnimatedBackground />
        <ScrollProgress />
        <CursorGlow />
        <Navbar />
        <Hero />
        <TechMarquee />
        <About />
        <Services />
        <StatsSection />
        <Experience />
        <Projects />
        <Skills />
        <Testimonials />
        <CTASection />
        <Contact />
        <Footer />
        <FloatingActions />
      </main>
    </>
  )
}
