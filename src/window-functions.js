export function reloadWindow() {
  window.location.reload()
}

export function changeWindowLocation() {
  window.location = 'https://www.google.com'
}

export function isScreenSizeSmall() {
  return window.innerWidth <= 320
}
