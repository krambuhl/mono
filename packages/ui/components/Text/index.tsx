import type {
  TextProps,
  HeadingTextProps,
  BodyTextProps,
  DataTextProps,
} from './types'
import { tokens } from '../../tokens'

export function Text({
  as: Tag = 'span',
  type = 'body',
  size = 'md',
  children,
  ...props
}: TextProps) {
  return (
    <Tag className="text" {...props}>
      {children}

      <style jsx>{`
        .text {
          font-family: ${tokens.fontFamily[type]};
          font-weight: ${tokens.fontWeight[type]};
          font-size: ${tokens.fontSize[type][size]};
          line-height: ${tokens.lineHeight[type]};
        }
      `}</style>
    </Tag>
  )
}

export function HeadingText(props: HeadingTextProps) {
  return <Text type="heading" {...props} />
}

export function BodyText(props: BodyTextProps) {
  return <Text type="body" as="p" {...props} />
}

export function DataText(props: DataTextProps) {
  return <Text type="data" {...props} />
}
