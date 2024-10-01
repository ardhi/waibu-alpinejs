async function waibuMpaThemefterInjectScripts ({ items, req }) {
  const { readJson } = this.app.bajo
  const { filter, isArray, map } = this.app.bajo.lib._
  items.push(`${this.name}.virtual:/alpinejs/cdn.min.js`)
  const all = filter(readJson(`${this.dir.pkg}/lib/libs.json`), f => this.config.plugins.includes(f.prefix))
  for (const a of all) {
    const scripts = isArray(a.scripts) ? [a.scipts] : a.scipts
    items.push(...map(scripts, s => `${this.name}.virtual:/${a.prefix}/${s}`))
  }
  // custom scripts
  /*
  const theme = pick(find(this.app.waibuMpa.themes, { name: req.theme }) ?? {}, ['name', 'framework'])
  if (theme.name === 'bootstrap' || theme.framework === 'bootstrap') {
    items.push('waibuAlpinejs.asset:/js/bootstrap.js')
  }
  */
}

export default waibuMpaThemefterInjectScripts
