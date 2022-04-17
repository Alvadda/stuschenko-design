export const combineClassNames = (classNames: string[]) => classNames.join(' ')

export const setBrowserHistorie = (location?: string) => {
  if (!location) return

  const currentLocation = window.location.hash
  if (location === currentLocation) return

  window.history.pushState({}, '', location)
}
