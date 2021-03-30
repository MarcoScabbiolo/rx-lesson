interface Obj {
  prop?: {
    prop?: string
  }
}

function uglyness(obj?: Obj): string {
  if (obj.prop != null) {
    if (obj.prop.prop != null) {
      if (obj.prop.prop != null) {
        return obj.prop.prop
      }
    }
  }

  return 'null'
}

function prettyness(obj?: Obj): string {
  return obj?.prop?.prop ?? 'null'
}