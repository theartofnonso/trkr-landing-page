import Image from 'next/image'
import clsx from 'clsx'

export function PhoneFrame({
                               className,
                               children,
                               priority = false,
                               ...props
                           }: React.ComponentPropsWithoutRef<'div'> & { priority?: boolean }) {
    return (
        <div className={clsx('relative aspect-[366/729]', className)} {...props}>
            <Image
                src="/phone_one.png"
                alt=""
                width="366" height="729"
                className="pointer-events-none absolute inset-0 h-full w-full"
                unoptimized
                priority={priority}
            />
        </div>
    )
}
