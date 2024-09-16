function keyAttrHandler (key) {
  return key.startsWith('x-') || key.includes(':') || key.startsWith('@')
}

export default keyAttrHandler
