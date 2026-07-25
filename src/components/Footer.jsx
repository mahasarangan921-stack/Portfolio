import { socials } from '../data/socials'

export default function Footer() {
  return (
    <footer className="py-9">
      <div className="mx-auto flex w-full max-w-wrap flex-col items-center justify-between gap-3.5 px-5 text-center text-[13.5px] text-muted sm:flex-row sm:px-8 sm:text-left">
        <span className="font-mono">© 2026 Mahalakshmi S. Built from scratch.</span>
        <div className="flex gap-3.5">
          <a href={socials.linkedin} target="_blank" rel="noopener" className="transition-colors hover:text-teal">
            LinkedIn
          </a>
          <a href={socials.github} target="_blank" rel="noopener" className="transition-colors hover:text-teal">
            GitHub
          </a>
          <a href={`mailto:${socials.email}`} className="transition-colors hover:text-teal">
            Email
          </a>
          <a href={`tel:${socials.phone}`} className="transition-colors hover:text-teal">
            Phone
          </a>
        </div>
      </div>
    </footer>
  )
}
