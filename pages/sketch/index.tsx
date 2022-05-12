import type { GetStaticProps } from 'next'
import type { File } from 'types/files'

import { listDirectory } from 'lib/directory'
import { FileListing } from 'components/FileListing'
import { HtmlHead } from 'components/HtmlHead'

interface Props {
  entryList: File[]
}

export default function SketchIndex({ entryList }: Props) {
  return (
    <>
      <HtmlHead title="Sketches" />
      <h1>Sketches</h1>
      <FileListing files={entryList} />
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
