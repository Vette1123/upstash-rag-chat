import Link from 'next/link'

import { siteConfig } from '@/config/site'
import { buttonVariants } from '@/components/ui/button'

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      Append in the URL the path of the page you want to chat with, for example:
      <code className="mt-2 block font-mono text-sm text-white">
        /https://en.wikipedia.org/wiki/Asia_Carrera
      </code>
      the full URL would be:
      <code className="mt-2 block font-mono text-sm text-white">
        http://localhost:3000/https://en.wikipedia.org/wiki/Asia_Carrera
      </code>
    </section>
  )
}
