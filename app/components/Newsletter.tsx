'use client';

import {DevicePhoneMobileIcon, CalendarDaysIcon} from '@heroicons/react/24/outline'
import {FormEvent, useState} from "react";

export default function Newsletter() {

    let [email, setEmail] = useState("")
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email}),
            });

            const result = await res.json();

            console.log(result);

            if (result.success) {
                setIsSubscribed(true);
            } else {
                setIsSubscribed(false);
            }
        } catch (error) {
            setIsSubscribed(false);
        }
    };

    return (
        <div className="relative isolate overflow-hidden bg-transparent py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                    <div className="max-w-xl lg:max-w-lg">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Subscribe to our
                            newsletter.</h2>
                        <p className="mt-4 text-lg leading-8 text-gray-300">
                            Join a community of people who track their progress, share their wins, and motivate each
                            other to reach new fitness goals.
                        </p>
                        <form onSubmit={handleSubmit}>
                            <div className="mt-6 flex max-w-md gap-x-4">

                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="Enter your email"
                                    autoComplete="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-vibrantGreen sm:text-sm sm:leading-6"
                                />
                                <button
                                    type="submit"
                                    className="flex-none rounded-md bg-sapphireDark60 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-vibrantGreen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vibrantGreen"
                                >
                                    Subscribe
                                </button>

                    </div>
                        </form>
                </div>
                <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                        <div className="flex flex-col items-start">
                            <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                <DevicePhoneMobileIcon aria-hidden="true" className="h-6 w-6 text-white"/>
                            </div>
                            <dt className="mt-4 font-semibold text-white">New Features</dt>
                            <dd className="mt-2 leading-7 text-gray-400">
                                Be the first to get new features and releases in the trainer app.
                            </dd>
                        </div>
                        <div className="flex flex-col items-start">
                            <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                <CalendarDaysIcon aria-hidden="true" className="h-6 w-6 text-white"/>
                            </div>
                            <dt className="mt-4 font-semibold text-white">Events</dt>
                            <dd className="mt-2 leading-7 text-gray-400">
                                Stay in the loop with events happening in the TRKR community.
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
            <div aria-hidden="true" className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#2bf20c] to-[#038cec] opacity-30"
                />
            </div>
        </div>
    )
}
