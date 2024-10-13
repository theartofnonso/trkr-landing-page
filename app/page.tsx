import { CallToAction } from '@/app/components/CallToAction'
import { Faqs } from '@/app/components/Faqs'
import { Hero } from '@/app/components/Hero'
import { PrimaryFeatures } from '@/app/components/PrimaryFeatures'
import { Reviews } from '@/app/components/Reviews'
import { SecondaryFeatures } from '@/app/components/SecondaryFeatures'

export default function Home() {
    return (
        <div className="bg-gradient-to-b from-sapphireDark80 to-sapphireDark">
            <Hero />
            <PrimaryFeatures />
            <SecondaryFeatures />
            <CallToAction />
            <Reviews />
            <Faqs />
        </div>
    )
}
