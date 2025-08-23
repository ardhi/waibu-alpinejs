async function factory (pkgName) {
  const me = this

  return class WaibuAlpinejs extends this.lib.Plugin {
    constructor () {
      super(pkgName, me.app)
      this.alias = 'walp'
      this.dependencies = ['waibu-static']
      this.config = {
        plugins: ['mask', 'persist', 'resize'],
        waibu: {
          prefix: 'alpinejs'
        }
      }
    }

    retainAttrKey = (key) => {
      return key.startsWith('x-') || key.includes(':') || key.startsWith('@')
    }

    stripAttrKeys = (attr) => {
      const result = {}
      for (const key in attr) {
        if (!this.retainAttrKey(key)) result[key] = attr[key]
      }
      return result
    }
  }
}

export default factory
