import type { File } from '../../types/files'
import type { CoreComponent } from '../../types/core'

export interface FileListingProps extends Omit<CoreComponent, 'children'> {
  files: File[]
}
