import type { GetStaticProps } from 'next'
import type { File } from 'types/files'
import { listDirectory } from 'lib/directory'
import { HtmlHead } from 'components/HtmlHead'
import { FileListing } from 'ui/components/FileListing'
import { Text } from 'ui/components/Text'
import { Stack } from 'ui/components/Stack'

interface Props {
  entryList: File[]
}

export default function SketchIndex({ entryList }: Props) {
  return (
    <Stack>
      <HtmlHead title="Sketches" />

      <Text as="h1" type="heading" size="lg">
        Sketches
      </Text>

      <FileListing files={entryList} />
    </Stack>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const entryList = await listDirectory('pages/sketch/**/*.tsx')

  return {
    props: {
      entryList,
    },
  }
}
