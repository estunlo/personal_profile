export const appBusy = () => {
  document.getElementsByTagName('html')[0].classList.add('busy')
}

export const appIdle = () => {
  document.getElementsByTagName('html')[0].classList.remove('busy')
}
