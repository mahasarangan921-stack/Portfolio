import Reveal from './Reveal'
import { SectionEyebrow } from './Skills'
import { timeline } from '../data/timeline'

export default function Experience() {
  return (
    <section id="experience" className="py-[120px] max-[640px]:py-20">
      <div className="mx-auto w-full max-w-wrap px-5 sm:px-8">
        <Reveal className="mb-14 max-w-[640px]">
          <SectionEyebrow>Experience</SectionEyebrow>
          <h2 className="font-display text-[clamp(28px,3.4vw,40px)] font-bold tracking-[-0.01em]">
            A quick timeline
          </h2>
          <p className="mt-3.5 text-[15.5px] leading-[1.7] text-muted">
            The path so far — milestones worth mentioning.
          </p>
        </Reveal>

        <Reveal className="relative pl-[34px] before:absolute before:left-[6px] before:top-1.5 before:bottom-1.5 before:w-[1.5px] before:bg-border">
          {timeline.map((item, i) => (
            <div
              key={item.title}
              className={`relative ${i === timeline.length - 1 ? 'pb-0' : 'pb-11'}`}
            >
              <div className="absolute -left-[34px] top-0.5 h-[13px] w-[13px] rounded-full border-2 border-teal bg-bg shadow-[0_0_0_4px_var(--teal-dim)]" />
              <span className="font-mono mb-1.5 block text-[12.5px] text-amber">{item.date}</span>
              <h4 className="font-display mb-1 text-lg">{item.title}</h4>
              <span className="mb-2.5 block text-[14px] text-muted">{item.org}</span>
              <p className="max-w-[560px] text-[14.5px] leading-[1.7] text-muted">{item.desc}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
