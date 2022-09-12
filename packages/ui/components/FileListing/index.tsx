import NextLink from 'next/link'

import { BodyText, HeadingText } from '../Text'
import { Button } from '../Button'
import { Stack } from '../Stack'

import { FileListingProps } from './types'
import { tokens } from '../../tokens'
import classNames from 'classnames'

export function FileListing({ files, className, ...props }: FileListingProps) {
  return (
    <Stack
      gap={tokens.size.x12}
      className={classNames('file-listing', className)}
      {...props}
    >
      {files ? (
        files
          .filter(({ name }) => name !== 'index')
          .sort((a, b) => (a.date < b.date ? 1 : -1))
          .map(({ title, date, url }) => (
            <NextLink key={title} href={url} passHref>
              <Button className="file-listing--button">
                <Stack
                  gap={tokens.size.x6}
                  direction="vertical"
                  className="file-listing--stack"
                >
                  <HeadingText
                    as="h3"
                    size="sm"
                    className="file-listing--title"
                  >
                    {title}
                  </HeadingText>

                  <BodyText as="div" size="xs">
                    {new Date(date).toLocaleDateString('en-US')}
                  </BodyText>
                </Stack>
              </Button>
            </NextLink>
          ))
      ) : (
        <div>No Files</div>
      )}

      <style jsx>{`
        :global(.file-listing) {
          text-align: center;
        }

        :global(.file-listing--button) {
          width: 100%;
        }

        :global(.file-listing--stack) {
          width: 100%;
          justify-content: space-between;
        }

        :global(.file-listing--file) {
          display: flex;
          align-items: baseline;
          justify-items: center;
        }

        :global(.file-listing--title) {
          flex-grow: 1;
          text-align: left;
        }
      `}</style>
    </Stack>
  )
}
