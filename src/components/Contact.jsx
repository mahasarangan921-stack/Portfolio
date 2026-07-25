import { Mail, Phone } from 'lucide-react'
import Reveal from './Reveal'
import { SectionEyebrow } from './Skills'
import { LinkedInIcon, GitHubIcon } from './icons/BrandIcons'
import { socials } from '../data/socials'

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-panel py-[120px] max-[640px]:py-20">
      <div className="mx-auto w-full max-w-wrap px-5 sm:px-8">
        <Reveal className="relative overflow-hidden rounded-card border border-border bg-panel2 px-5 py-12 text-center sm:px-8 sm:py-16 md:px-12">
          <div className="animate-drift absolute -left-[160px] -top-[160px] h-[460px] w-[460px] rounded-full bg-teal opacity-[.18] blur-[90px]" />
          <div className="animate-drift absolute -right-[160px] -bottom-[160px] h-[380px] w-[380px] rounded-full bg-amber opacity-[.16] blur-[90px] [animation-delay:-6s]" />

          <SectionEyebrow center>Contact</SectionEyebrow>
          <h2 className="font-display relative mb-4 text-[clamp(28px,4vw,44px)] font-bold">
            Let&apos;s build something together.
          </h2>
          <p className="relative mx-auto mb-9 max-w-[520px] text-[15.5px] leading-[1.7] text-muted sm:text-[16px]">
            Looking for a developer for your next project? Let&apos;s talk.
          </p>

          <div className="relative flex flex-wrap justify-center gap-3.5">
            <ContactLink href={`mailto:${socials.email}`}>
              <Mail size={17} strokeWidth={1.8} />
              {socials.email}
            </ContactLink>
            <ContactLink href={`tel:${socials.phone}`}>
              <Phone size={17} strokeWidth={1.8} />
              {socials.phoneDisplay}
            </ContactLink>
            <ContactLink href={socials.linkedin} external>
              <LinkedInIcon className="h-[17px] w-[17px]" />
              LinkedIn
            </ContactLink>
            <ContactLink href={socials.github} external>
              <GitHubIcon className="h-[17px] w-[17px]" />
              GitHub
            </ContactLink>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function ContactLink({ href, external, children }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener' : undefined}
      className="flex min-w-0 w-full items-center justify-center gap-2.5 rounded-xl border border-border bg-panel px-4 py-[13px] text-[14px] font-medium transition-all duration-200 hover:-translate-y-1 hover:border-teal hover:text-teal sm:w-auto sm:px-[22px] sm:text-[14.5px]"
    >
      {children}
    </a>
  )
}
