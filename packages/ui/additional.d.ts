import 'react'

declare module 'dirty-json'

declare module '*.module.css' {
  const content: { [className: string]: string }
  export = content
}
