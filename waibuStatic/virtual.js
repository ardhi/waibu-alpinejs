async function virtual () {
  const { readJson } = this.app.bajo
  const { pick, find } = this.app.bajo.lib._
  const libs = readJson(`${this.dir.pkg}/lib/libs.json`)
  const virts = [find(libs, { prefix: 'alpinejs' })]
  for (const l of libs) {
    if (this.config.plugins.includes(l.prefix)) virts.push(pick(l, ['prefix', 'root']))
  }
  return virts
}

export default virtual
