async function factory (pkgName) {
  const me = this

  class WaibuAlpinejs extends this.app.pluginClass.base {
    static alias = 'walp'
    static dependencies = ['waibu-static']

    constructor () {
      super(pkgName, me.app)
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

  return WaibuAlpinejs
}

export default factory
