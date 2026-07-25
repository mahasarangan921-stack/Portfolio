import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import useTypewriter from '../hooks/useTypewriter'
import { roles, badges } from '../data/socials'
import profileImage from '../assets/images/maha.png'

export default function Hero() {
  const typed = useTypewriter(roles)

  return (
    <section id="home" className="relative overflow-hidden pt-[var(--nav-h)]">
      <div className="animate-drift absolute -left-[160px] -top-[140px] h-[420px] w-[420px] rounded-full bg-teal opacity-[.28] blur-[90px]" />
      <div className="animate-drift absolute -right-[120px] bottom-[2%] h-[340px] w-[340px] rounded-full bg-amber opacity-[.18] blur-[90px] [animation-delay:-6s]" />

      <div className="relative mx-auto grid min-h-[calc(100svh_-_var(--nav-h))] w-full max-w-wrap grid-cols-1 items-center gap-12 px-6 py-12 sm:px-8 md:grid-cols-[1.05fr_0.95fr] md:gap-10 md:py-14 lg:gap-16">
        <div className="z-[2] max-w-[680px]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-tealDim bg-tealDim px-3.5 py-2 text-[11px] font-semibold uppercase leading-tight tracking-[0.1em] text-teal sm:text-[12.5px]"
          >
            <span className="animate-ringpulse h-1.5 w-1.5 rounded-full bg-teal" />
            Open to Frontend & Full-Stack Opportunities
          </motion.div>

          <motion.h1 className="font-display leading-[1.03] tracking-normal">
            <span className="block text-[34px] font-semibold sm:text-[42px] lg:text-[50px]">
              Hi, I&apos;m
            </span>
            <span className="mt-1 block bg-gradient-to-r from-teal to-white bg-clip-text text-[48px] font-bold leading-[0.98] text-transparent [html[data-theme='light']_&]:to-text sm:text-[60px] lg:text-[72px]">
              Mahalakshmi
            </span>
            <span className="mt-4 block max-w-[620px] text-[28px] font-medium leading-[1.1] text-muted sm:text-[36px] lg:text-[46px]">
              Building modern web experiences.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono mb-7 mt-5 flex flex-wrap items-center gap-2.5 text-[15px] sm:text-[17px] lg:text-[19px]"
          >
            <span className="text-muted">&gt;</span>
            <span className="border-r-2 border-teal pr-0.5 text-teal animate-blink">{typed}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-9 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-[11px] bg-teal px-[24px] py-[13px] text-[14.5px] font-semibold text-[#04140f] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_28px_-8px_rgba(45,212,168,.55)]"
            >
              Explore My Work
              <ArrowRight size={15} strokeWidth={2.2} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-[11px] border border-border px-[24px] py-[13px] text-[14.5px] font-semibold text-text transition-all duration-200 hover:-translate-y-1 hover:border-teal hover:text-teal"
            >
              Let&apos;s Connect
            </a>
          </motion.div>

          
        </div>

        <div className="z-[1] flex items-center justify-center md:justify-end">
          <div className="relative h-[390px] w-full max-w-[340px] sm:h-[500px] sm:max-w-[420px] lg:h-[560px] lg:max-w-[470px]">
            <div
              className="
                animate-spin-slow
                absolute inset-[8%]
                rounded-full
                border
                border-dashed
                border-white/10
                [html[data-theme='light']_&]:border-black/15
              "
            />

            <div
              className="
                animate-spin-slow-rev
                absolute inset-[1%]
                rounded-full
                border
                border-dashed
                border-white/10
                [html[data-theme='light']_&]:border-black/15
              "
            />

            <div className="absolute inset-0 flex items-end justify-center p-6">
              <div className="absolute bottom-4 left-1/2 h-10 w-[70%] -translate-x-1/2 rounded-full bg-black/20 blur-3xl [html[data-theme='light']_&]:bg-black/10" />
              <div className="relative h-full w-[82%] overflow-hidden">
                <img
                  src={profileImage}
                  alt="Mahalakshmi"
                  className="absolute bottom-0 left-1/2 h-[105%] max-w-none -translate-x-1/2 object-contain"
                />
              </div>
            </div>

            {badges.map((b) => (
              <div
                key={b.label}
                className={`font-mono animate-floaty absolute z-[3] hidden items-center gap-2 rounded-xl border border-white/10 bg-panel px-3 py-2 text-[11.5px] font-medium shadow-[0_10px_24px_-10px_rgba(0,0,0,.5)] backdrop-blur-[10px] [html[data-theme='light']_&]:border-black/10 [html[data-theme='light']_&]:shadow-[0_12px_28px_-14px_rgba(15,23,42,.28)] min-[420px]:flex sm:text-[12.5px] ${b.pos}`}
                style={{ animationDelay: b.delay }}
              >
                <span className="h-2 w-2 rounded-full" style={{ background: b.color }} />
                {b.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-[26px] left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[11px] uppercase tracking-[0.1em] text-muted md:flex">
        <span>Scroll</span>
        <span className="animate-down h-[34px] w-px bg-gradient-to-b from-muted to-transparent" />
      </div>
    </section>
  )
}

function Stat({ num, lbl }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="font-display text-2xl font-bold">{num}</span>
      <span className="text-[12px] uppercase tracking-[.08em] text-muted">{lbl}</span>
    </div>
  )
}
