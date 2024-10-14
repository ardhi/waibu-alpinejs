async function waibuMpaThemefterInjectScripts ({ items, req }) {
  const { readJson } = this.app.bajo
  const { filter, isString, map } = this.app.bajo.lib._
  const all = filter(readJson(`${this.dir.pkg}/lib/libs.json`), f => this.config.plugins.includes(f.prefix))
  for (const a of all) {
    const scripts = isString(a.scripts) ? [a.scripts] : a.scripts
    items.push(...map(scripts, s => `${this.name}.virtual:/${a.prefix}${s}`))
  }
  items.push(`${this.name}.virtual:/alpinejs/cdn.min.js`)
  // custom scripts
  /*
  const theme = pick(find(this.app.waibuMpa.themes, { name: req.theme }) ?? {}, ['name', 'framework'])
  if (theme.name === 'bootstrap' || theme.framework === 'bootstrap') {
    items.push('waibuAlpinejs.asset:/js/bootstrap.js')
  }
  */
}

export default waibuMpaThemefterInjectScripts
