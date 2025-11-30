import Link from 'next/link'
import type {SiteSettings} from '@/types/sanity'

type FooterProps = {
  settings?: SiteSettings | null
}

export const Footer = ({settings}: FooterProps) => {
  const title = settings?.title ?? 'flatter'
  const footerLinks = settings?.footerLinks ?? []
  const socialLinks = settings?.socialLinks ?? []

  return (
    <footer className="border-t border-border bg-charcoal text-cream dark:border-dark-border dark:bg-dark-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold">{title}</p>
          <p className="text-sm text-muted/70 dark:text-gray-400">
            © Copyright 2021. All Rights Reserved.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted/80 dark:text-gray-400">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-cream dark:hover:text-dark-text">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          {socialLinks.map((social) => (
            <Link
              key={social.platform}
              href={social.href ?? '#'}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border/30 dark:border-dark-border"
              aria-label={social.platform}
            >
              <span className="text-xs uppercase">{social.platform}</span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

