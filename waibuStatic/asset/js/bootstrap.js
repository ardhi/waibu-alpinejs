/* global bootstrap */
/* eslint-disable no-unused-vars */

async function copyContentToClipboard (elId) {
  const content = document.getElementById(elId).textContent
  await navigator.clipboard.writeText(content)
  const toastId = displayToast('Copied!')
  const el = document.getElementById(toastId)
  const instance = bootstrap.Toast.getOrCreateInstance(el)
  instance.show()
  el.addEventListener('hidden.bs.toast', () => {
    el.remove()
  })
}

function displayToast (msg) {
  const id = 'toast' + Date.now()
  const toast = document.createElement('div')
  toast.setAttribute('id', id)
  toast.classList.add('toast')
  const body = document.createElement('div')
  body.classList.add('toast-body')
  body.innerText = msg
  toast.appendChild(body)
  const container = document.getElementsByClassName('toast-container')
  container[0].appendChild(toast)
  return id
}
