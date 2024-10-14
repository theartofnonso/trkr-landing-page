'use client'

import {useEffect, useRef, useState} from 'react'
import {Tab, TabGroup, TabList} from '@headlessui/react'
import clsx from 'clsx'
import {motion,} from 'framer-motion'
import {useDebouncedCallback} from 'use-debounce'

import {CircleBackground} from '@/app/components/CircleBackground'
import {Container} from '@/app/components/Container'
import {PhoneFrame} from '@/app/components/PhoneFrame'

import Image from "next/image";

import {ArrowTrendingUpIcon, RocketLaunchIcon, LightBulbIcon} from '@heroicons/react/24/solid'

const features = [
    {
        name: 'Train with insights',
        description:
            'Log your training sessions and leverage the data to make smarter, informed decisions about your progress. Discover detailed stats on what to focus on and how to improve.',
        image: 'phone_one.png',
        icon: LightBulb,
    },
    {
        name: 'Reveal patterns and plateaus',
        description:
            'Identify specific areas where you might be facing challenges in your training. By pinpointing these struggles, you can effectively address them and enhance your performance.',
        image: 'phone_two.png',
        icon: ArrowTrendingUp,
    },
    {
        name: 'Get coached while training ',
        description:
            'Leverage personalized insights from TRKR Coach to identify and address problem areas in your training.',
        image: 'phone_three.png',
        icon: RocketLaunch,
    },
]

function LightBulb(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <LightBulbIcon {...props} />
    )
}

function ArrowTrendingUp(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <ArrowTrendingUpIcon {...props} />
    )
}

function RocketLaunch(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <RocketLaunchIcon {...props} />
    )
}

function FeaturesDesktop() {
    const [selectedIndex, setSelectedIndex] = useState(0)

    const onChange = useDebouncedCallback(
        (selectedIndex) => {
            setSelectedIndex(selectedIndex)
        },
        100,
        {leading: true},
    )

    return (
        <TabGroup
            className="grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24"
            selectedIndex={selectedIndex}
            onChange={onChange}
            vertical
        >
            <TabList className="relative z-10 order-last col-span-6 space-y-6">
                {features.map((feature, featureIndex) => (
                    <div
                        key={feature.name}
                        className="relative rounded-2xl transition-colors hover:bg-sapphireDark80"
                    >
                        {featureIndex === selectedIndex && (
                            <motion.div
                                layoutId="activeBackground"
                                className="absolute inset-0 bg-sapphireDark60"
                                initial={{borderRadius: 16}}
                            />
                        )}
                        <div className="relative z-10 p-8">
                            <feature.icon className="h-8 w-8"/>
                            <h3 className="mt-6 text-lg font-semibold text-white">
                                <Tab className="text-left ui-not-focus-visible:outline-none">
                                    <span className="absolute inset-0 rounded-2xl"/>
                                    {feature.name}
                                </Tab>
                            </h3>
                            <p className="mt-2 text-sm text-gray-400">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}
            </TabList>
            <div className="relative col-span-6">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <CircleBackground color="#2bf20c" className="animate-spin-slower"/>
                </div>
                <PhoneFrame className="z-10 mx-auto w-full max-w-[366px]">
                    <Image
                        src={`/${features[selectedIndex].image}`}
                        alt=""
                        width="366" height="729"
                        className="pointer-events-none absolute inset-0 h-full w-full"
                        unoptimized
                    />
                </PhoneFrame>
            </div>
        </TabGroup>
    )
}

function FeaturesMobile() {
    const [activeIndex, setActiveIndex] = useState(0)
    const slideContainerRef = useRef<React.ElementRef<'div'>>(null)
    const slideRefs = useRef<Array<React.ElementRef<'div'>>>([])

    console.log(activeIndex);

    useEffect(() => {
        const observer = new window.IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting && entry.target instanceof HTMLDivElement) {
                        setActiveIndex(slideRefs.current.indexOf(entry.target))
                        break
                    }
                }
            },
            {
                root: slideContainerRef.current,
                threshold: 0.6,
            },
        )

        for (const slide of slideRefs.current) {
            if (slide) {
                observer.observe(slide)
            }
        }

        return () => {
            observer.disconnect()
        }
    }, [slideContainerRef, slideRefs])

    return (
        <>
            <div
                ref={slideContainerRef}
                className="-mb-4 flex snap-x snap-mandatory -space-x-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [scrollbar-width:none] sm:-space-x-6 [&::-webkit-scrollbar]:hidden"
            >
                {features.map((feature, featureIndex) => (
                    <div
                        ref={(ref) => {
                            ref && (slideRefs.current[featureIndex] = ref)
                        }}
                        key={featureIndex}
                        className="w-full flex-none snap-center px-4 sm:px-6"
                    >
                        <div className="relative transform overflow-hidden rounded-2xl bg-sapphireDark80 px-5 py-6">
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                <CircleBackground
                                    color="#13B5C8"
                                    className={featureIndex % 2 === 1 ? 'rotate-180' : undefined}
                                />
                            </div>
                            <PhoneFrame className="relative mx-auto w-full max-w-[366px]">
                                <Image
                                    src={`/${feature.image}`}
                                    alt=""
                                    width="366" height="729"
                                    className="pointer-events-none absolute inset-0 h-full w-full"
                                    unoptimized
                                />
                            </PhoneFrame>
                            <div className="absolute inset-x-0 bottom-0 bg-sapphireDark60 p-6 backdrop-blur sm:p-10">
                                <feature.icon className="text-gray-400 h-8 w-8"/>
                                <h3 className="mt-6 text-sm font-semibold text-white sm:text-lg">
                                    {feature.name}
                                </h3>
                                <p className="mt-2 text-sm text-gray-400">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-6 flex justify-center gap-3">
                {features.map((_, featureIndex) => (
                    <button
                        type="button"
                        key={featureIndex}
                        className={clsx(
                            'relative h-0.5 w-4 rounded-full',
                            featureIndex === activeIndex ? 'bg-white' : 'bg-gray-500',
                        )}
                        aria-label={`Go to slide ${featureIndex + 1}`}
                        onClick={() => {
                            slideRefs.current[featureIndex].scrollIntoView({
                                block: 'nearest',
                                inline: 'nearest',
                            })
                        }}
                    >
                        <span className="absolute -inset-x-1.5 -inset-y-3"/>
                    </button>
                ))}
            </div>
        </>
    )
}

export function PrimaryFeatures() {
    return (
        <section
            id="features"
            aria-label="Features for investing all your money"
            className="pb-16">
            <div className="md:hidden">
                <FeaturesMobile/>
            </div>
            <Container className="hidden md:block">
                <FeaturesDesktop/>
            </Container>
        </section>
    )
}
