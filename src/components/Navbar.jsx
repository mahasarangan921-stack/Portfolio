import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, Sun, Moon, Menu, X } from 'lucide-react'
import { LinkedInIcon, GitHubIcon } from './icons/BrandIcons'
import { navItems, socials } from '../data/socials'
import useTheme from '../hooks/useTheme'
import useActiveSection from '../hooks/useActiveSection'

const SECTION_IDS = ['home', 'about', 'projects', 'skills', 'experience', 'contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const active = useActiveSection(SECTION_IDS)

  const closeMenu = () => setOpen(false)

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[500] flex h-[var(--nav-h)] items-center">
        <div className="absolute inset-0 border-b border-border bg-[rgba(10,14,24,0.55)] backdrop-blur-[18px] backdrop-saturate-[140%] transition-colors duration-400 [html[data-theme='light']_&]:bg-[rgba(255,255,255,0.6)]" />
        <div className="relative z-10 mx-auto flex w-full max-w-wrap items-center justify-between px-5 sm:px-8">
          <a href="#home" className="font-display flex items-center gap-2.5 text-[19px] font-bold tracking-[0.02em]">
            <span className="h-[9px] w-[9px] rotate-45 rounded-sm bg-teal shadow-[0_0_12px_var(--teal)]" />
            Maha<span className="text-teal">.</span>
          </a>

          <ul className="hidden items-center gap-9 md:flex">
            {navItems.map((item) => {
              const id = item.href.replace('#', '')
              const isActive = active === id
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`relative py-1.5 text-[14.5px] font-medium transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-teal after:transition-all after:duration-300 ${
                      isActive
                        ? 'text-text after:w-full'
                        : 'text-muted after:w-0 hover:text-text hover:after:w-full'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="relative z-10 flex items-center gap-3.5">
            <IconLink href={socials.linkedin} label="LinkedIn" external className="hidden lg:flex">
              <LinkedInIcon className="h-4 w-4" />
            </IconLink>
            <IconLink href={socials.github} label="GitHub" external className="hidden lg:flex">
              <GitHubIcon className="h-4 w-4" />
            </IconLink>
            <IconLink href={`mailto:${socials.email}`} label="Email" className="hidden lg:flex">
              <Mail className="h-4 w-4" strokeWidth={1.8} />
            </IconLink>
            <IconLink href={`tel:${socials.phone}`} label="Phone" className="hidden lg:flex">
              <Phone className="h-4 w-4" strokeWidth={1.8} />
            </IconLink>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex h-[38px] w-[38px] items-center justify-center rounded-[10px] border border-border text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-teal hover:text-teal"
            >
              {theme === 'light' ? <Sun className="h-4 w-4" strokeWidth={1.8} /> : <Moon className="h-4 w-4" strokeWidth={1.8} />}
            </button>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
              className="flex h-[38px] w-[38px] items-center justify-center rounded-[10px] border border-border md:hidden"
            >
              {open ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[var(--nav-h)] z-[499] flex flex-col border-b border-border bg-panel px-5 pb-[22px] pt-2 sm:px-8 md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="border-b border-border py-[13px] text-[15px] text-muted"
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-3 pt-4">
              <IconLink href={socials.linkedin} label="LinkedIn" external>
                <LinkedInIcon className="h-4 w-4" />
              </IconLink>
              <IconLink href={socials.github} label="GitHub" external>
                <GitHubIcon className="h-4 w-4" />
              </IconLink>
              <IconLink href={`mailto:${socials.email}`} label="Email">
                <Mail className="h-4 w-4" strokeWidth={1.8} />
              </IconLink>
              <IconLink href={`tel:${socials.phone}`} label="Phone">
                <Phone className="h-4 w-4" strokeWidth={1.8} />
              </IconLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function IconLink({ href, label, external, children, className = 'flex' }) {
  return (
    <a
      href={href}
      aria-label={label}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener' : undefined}
      className={`${className} h-[38px] w-[38px] items-center justify-center rounded-[10px] border border-border text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-teal hover:text-teal`}
    >
      {children}
    </a>
  )
}
