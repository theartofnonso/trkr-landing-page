import Image from "next/image";

export default function Home() {
    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
            style={{
                backgroundImage: "url('background.jpg')", // Replace with your image URL
                backgroundSize: "cover", // Ensures the image covers the entire background
                backgroundPosition: "center", // Centers the image
                backgroundRepeat: "no-repeat", // Prevents repeating
            }}
        >
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <Image
                    src="/TRKR.png"
                    alt="TRKR logo"
                    width={140}
                    height={38}
                    priority
                />
                <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                    <li className="mb-2 text-white">
                        Train better with insights
                    </li>
                    <li className="text-white">See how well you are training.</li>
                </ol>

                <div className="flex gap-4 items-center flex-col sm:flex-row">
                    <a
                        className="rounded-full bg-white text-black border border-solid border-transparent flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                        href="https://apps.apple.com/app/6474073502"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        → Start tracking now
                    </a>
                    <a
                        className="rounded-full bg-transparent text-white border border-solid border-white flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                        href="https://www.instagram.com/trkrtrainer"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Follow the trail
                    </a>
                </div>
            </main>
        </div>
    );
}
