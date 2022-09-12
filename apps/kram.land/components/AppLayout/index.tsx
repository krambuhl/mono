import type { AppLayoutProps } from './types'

export function AppLayout({ children, ...props }: AppLayoutProps) {
  return (
    <div {...props}>
      <main id="content">{children}</main>

      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          width: 100%;
        }

        main {
          flex-grow: 1;
          width: 100%;
        }
      `}</style>
    </div>
  )
}
