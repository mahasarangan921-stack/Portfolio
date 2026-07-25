import { CheckCircle2, Code2, Database, GitBranch, Server } from 'lucide-react'
import Reveal from './Reveal'
import { buildSteps, skillGroups } from '../data/skills'

const icons = {
  frontend: Code2,
  backend: Server,
  database: Database,
  workflow: GitBranch,
}

export default function Skills() {
  return (
    <section id="skills" className="py-[120px] max-[640px]:py-20">
      <div className="mx-auto w-full max-w-wrap px-5 sm:px-8">
        <Reveal className="mb-14 grid gap-7 md:grid-cols-[0.95fr_1.05fr] md:items-end">
          <div>
            <SectionEyebrow>Skills</SectionEyebrow>
            <h2 className="font-display text-[clamp(28px,3.4vw,40px)] font-bold tracking-[-0.01em]">
              How I turn ideas into working products
            </h2>
          </div>
          <p className="text-[15.5px] leading-[1.8] text-muted md:max-w-[560px]">
            My toolkit is centered around the MERN stack, with a focus on building responsive
            interfaces, connecting APIs, and working with data to create complete web applications.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.id]

            return (
              <Reveal
                key={group.id}
                delay={i * 0.07}
                className="group relative overflow-hidden rounded-card border border-border bg-panel p-5 transition-all duration-300 hover:-translate-y-1 hover:border-teal hover:shadow-[0_22px_44px_-24px_rgba(45,212,168,.34)] sm:p-6"
              >
                <div className="mb-5 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-panel2 text-teal transition-all duration-300 group-hover:border-teal group-hover:bg-tealDim">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold">{group.title}</h3>
                    <p className="mt-1.5 text-[14.5px] leading-[1.7] text-muted">
                      {group.summary}
                    </p>
                  </div>
                </div>

                <div className="mb-5 flex flex-wrap gap-2">
                  {group.tools.map((tool) => (
                    <span
                      key={tool}
                      className="font-mono rounded-md border border-border bg-panel2 px-2.5 py-[5px] text-[11.5px] text-muted"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="space-y-3 border-t border-border pt-5">
                  {group.proof.map((item) => (
                    <div key={item} className="flex gap-3 text-[13.5px] leading-[1.65] text-muted">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal" strokeWidth={1.9} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal
          delay={0.12}
          className="mt-7 grid overflow-hidden rounded-card border border-border bg-panel2 sm:grid-cols-2 lg:grid-cols-4"
        >
          {buildSteps.map((step, i) => (
            <div
              key={step}
              className="border-border p-5 max-sm:border-b sm:[&:not(:nth-child(2n))]:border-r lg:border-r lg:[&:last-child]:border-r-0"
            >
              <span className="font-mono mb-2 block text-[12px] text-amber">
                0{i + 1}
              </span>
              <span className="font-display text-[16px] font-semibold">{step}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

export function SectionEyebrow({ children, center }) {
  return (
    <div
      className={`font-mono mb-3.5 flex items-center gap-2.5 text-[12.5px] uppercase tracking-[.14em] text-amber before:h-[1.5px] before:w-[26px] before:bg-amber ${
        center ? 'justify-center' : ''
      }`}
    >
      {children}
    </div>
  )
}
