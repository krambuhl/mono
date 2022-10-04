import type { GetStaticProps } from 'next'
import { listDirectory } from 'ui/lib/directory'
import type { File } from 'ui/types/files'
import { FileListing } from 'ui/components/FileListing'
import { PageHeader } from 'ui/components/PageHeader'
import { Stack } from 'ui/components/Stack'
import { HtmlTitle } from 'ui/components/HtmlTitle'
import { tokens } from 'ui/tokens'

interface Props {
  entryList: File[]
}

export default function SketchIndex({ entryList }: Props) {
  return (
    <>
      <HtmlTitle title="Sketches" />
      <Stack gap={tokens.size.x24}>
        <PageHeader title="Sketches" />
        <FileListing files={entryList} />
      </Stack>
    </>
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
