async function virtual () {
  const { readJson } = this.app.bajo
  const { pick } = this.app.bajo.lib._
  const virts = [{ prefix: 'alpinejs', root: 'alpinejs:/dist' }]
  const libs = readJson(`${this.dir.pkg}/lib/libs.json`)
  for (const l of libs) {
    if (this.config.plugins.includes(l.prefix)) virts.push(pick(l, ['prefix', 'root']))
  }
  return virts
}

export default virtual
