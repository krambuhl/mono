import type { File } from 'types/files'
import type { CoreComponent } from 'ui/types/core'

export interface FileListingProps extends Omit<CoreComponent, 'children'> {
  files: File[]
}
