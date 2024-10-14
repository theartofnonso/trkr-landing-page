'use client'

import Link from 'next/link'
import { Container } from '@/app/components/Container'
import {TRKRLogo} from "@/app/components/TRKRLogo";

export function Header() {
  return (
    <header>
      <nav className="">
        <Container className="relative z-50 flex justify-center pt-10">
          <div className="relative z-10 flex items-center gap-14">
            <Link href="/" aria-label="Home">
              <TRKRLogo className="h-4 w-auto"/>
            </Link>
          </div>
        </Container>
      </nav>
    </header>
  )
}
