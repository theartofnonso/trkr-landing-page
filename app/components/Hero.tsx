'use client'

import {AppStoreLink} from "@/app/components/AppStoreLink";

export function Hero() {
    return (
        <div className="relative isolate px-6 lg:px-8">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#2bf20c] to-[#038cec] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                />
            </div>
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <div className="sm:mb-8 sm:flex sm:justify-center">
                    <div
                        className="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-white hover:ring-gray-900/20">
                        <a href="https://www.instagram.com/trkrtrainer/" className="font-medium text-white" target="_blank">
                            Follow the trail on Instagram{' '} <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        Train better with insights
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-400">
                        Stop leaving gains on the table when you train. Maximize every rep and every session with data-driven insights and personalized coaching from <span className="text-white font-medium">TRKR’s AI.</span>
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <AppStoreLink/>
                        <a href="#" className="text-sm font-semibold leading-6 text-white">
                            Android coming soon <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#2bf20c] to-[#038cec] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                />
            </div>
        </div>
    )
}
