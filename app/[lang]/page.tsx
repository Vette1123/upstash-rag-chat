import Link from 'next/link'
import { Locale } from '@/i18n.config'

import { siteConfig } from '@/config/site'
import { getDictionary } from '@/lib/localization'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

interface IndexPageProps {
  params: { lang: Locale }
}

export default async function IndexPage({ params }: IndexPageProps) {
  const { page } = await getDictionary(params.lang)
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          {page.home.title}
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          {page.home.description}
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.github}
          target="_blank"
          rel="noreferrer"
          className={cn(buttonVariants())}
        >
          Sadge
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: 'outline' })}
        >
          GitHub
        </Link>
      </div>
    </section>
  )
}
