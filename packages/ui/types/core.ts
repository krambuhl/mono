export interface CoreComponent extends React.HTMLAttributes<HTMLElement> {
  className?: string
  children: React.ReactNode | string
}
