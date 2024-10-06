function stripAttrKeys (attr) {
  const result = {}
  for (const key in attr) {
    if (!this.retainAttrKey(key)) result[key] = attr[key]
  }
  return result
}

export default stripAttrKeys
