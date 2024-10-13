import { Faqs } from '@/app/components/Faqs'
import { Hero } from '@/app/components/Hero'
import { PrimaryFeatures } from '@/app/components/PrimaryFeatures'
import { Reviews } from '@/app/components/Reviews'
import { SecondaryFeatures } from '@/app/components/SecondaryFeatures'
import {Header} from "@/app/components/Header";
import {Footer} from "@/app/components/Footer";

export default function Home() {
    return (
        <div className="bg-gradient-to-b from-sapphireDark60 to-sapphireDark">
            <Header/>
            <PrimaryFeatures />
            <SecondaryFeatures />
            <Reviews />
            <Faqs />
            <Footer/>
        </div>
    )
}
