import 'react'

declare module 'dirty-json'

declare module '*.module.css' {
  const content: { [className: string]: string }
  export = content
}

declare module 'react' {
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    jsx?: boolean
    global?: boolean
  }
}
