import clsx from 'clsx'

export function PhoneFrame({
                               className,
                               children,
                               ...props
                           }: React.ComponentPropsWithoutRef<'div'> & { priority?: boolean }) {
    return (
        <div className={clsx('relative aspect-[366/729]', className)} {...props}>
            {children}
        </div>
    )
}
