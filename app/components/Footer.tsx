import { Container } from '@/app/components/Container'

export function Footer() {
  return (
    <footer>
      <Container>
        <div className="flex flex-col items-start pb-12 justify-start">
          <p className="mt-6 text-sm text-white-500 md:mt-0">
            &copy; Copyright {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
