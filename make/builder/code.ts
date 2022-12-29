import { Tree, code } from '~'
import type { MeshInputType } from '~'

export function resolveCodeAsNumber(
  input: MeshInputType,
): number {
  let line = code.assumeNest(input).line[0]

  if (line && line.like === Tree.Code) {
    let type = line.base
    let rest = line.code

    switch (type) {
      case 'b':
        return parseInt(rest, 2)
      case 'x':
        return parseInt(rest, 16)
      case 'o':
        return parseInt(rest, 8)
      case 'h':
        return parseInt(rest, 16)
      default:
        throw new Error(line.code)
    }
  } else {
    throw new Error('Oops')
  }
}
