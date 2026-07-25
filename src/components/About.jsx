import Reveal from './Reveal'

const tags = ['Problem Solver', 'Detail-Oriented', 'Fast Learner', 'Team Player']

export default function About() {
  return (
    <section id="about" className="border-y border-border bg-panel py-[120px] max-[640px]:py-20">
      <div className="mx-auto grid w-full max-w-wrap grid-cols-1 items-start gap-10 px-5 sm:px-8 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
        <Reveal className="relative overflow-hidden rounded-card border border-border bg-panel2 p-5 sm:p-7">
          <span className="font-display absolute right-5 top-3.5 text-[60px] font-bold text-border">01</span>
          <h4 className="font-display relative mb-2 text-lg">Currently</h4>
          <p className="relative text-[14.5px] leading-[1.7] text-muted">
            Building full-stack web applications and sharpening my skills in the MERN stack — one
            project at a time.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="font-mono mb-3.5 flex items-center gap-2.5 text-[12.5px] uppercase tracking-[.14em] text-amber before:h-[1.5px] before:w-[26px] before:bg-amber">
            About Me
          </div>
          <h2 className="font-display mb-[22px] text-[clamp(28px,3.4vw,40px)] font-bold tracking-[-0.01em]">
            A developer who likes things to work — and look right too.
          </h2>
          <div className="space-y-[18px] text-[15.5px] leading-[1.85] text-muted sm:text-[16px]">
            <p>
  I&apos;m <strong className="font-semibold text-text">Mahalakshmi</strong>, a BCA student and
  aspiring full-stack developer who likes turning ideas into things people can actually use.
  Starting with frontend development, I became curious about the bigger picture — how the
  interface, backend, and data all come together to make a product work.
</p>

<p>
  I learn by building, experimenting, and sometimes breaking things before figuring out how to
  fix them. I&apos;m currently growing my skills in the MERN stack and looking for opportunities
  where I can contribute, learn, and keep building better things.
</p>
            </div>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {tags.map((t) => (
              <span
                key={t}
                className="font-mono rounded-full border border-border px-3.5 py-2 text-[12.5px] text-muted"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
