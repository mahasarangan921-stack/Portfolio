import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import { SectionEyebrow } from './Skills'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="border-y border-border bg-panel py-[120px] max-[640px]:py-20">
      <div className="mx-auto w-full max-w-wrap px-5 sm:px-8">
        <Reveal className="mb-14 max-w-[640px]">
          <SectionEyebrow>Projects</SectionEyebrow>
          <h2 className="font-display text-[clamp(28px,3.4vw,40px)] font-bold tracking-[-0.01em]">
            Things I&apos;ve built
          </h2>
          <p className="mt-3.5 text-[15.5px] leading-[1.7] text-muted">
            A few projects that reflect how I think through a problem, end to end.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal
              key={p.id}
              delay={i * 0.08}
              className="flex flex-col gap-4 rounded-card border border-border bg-panel2 p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-teal hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,.6)] sm:p-[26px]"
            >
              <div className="flex items-start justify-between">
                <div className="font-display flex h-[46px] w-[46px] items-center justify-center rounded-xl bg-tealDim text-[16px] font-bold text-teal">
                  {p.tag}
                </div>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener"
                  aria-label={`View ${p.title} on GitHub`}
                  className="flex h-[34px] w-[34px] items-center justify-center rounded-[9px] border border-border text-muted transition-all duration-200 hover:rotate-45 hover:border-text hover:text-text"
                >
                  <ArrowUpRight size={17} />
                </a>
              </div>
              <h3 className="font-display text-xl font-semibold">{p.title}</h3>
              <p className="flex-1 text-[14.5px] leading-[1.7] text-muted">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono rounded-md border border-border bg-panel px-2.5 py-[5px] text-[11.5px] text-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
