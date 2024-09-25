function retainAttrKey (key) {
  return key.startsWith('x-') || key.includes(':') || key.startsWith('@')
}

export default retainAttrKey
