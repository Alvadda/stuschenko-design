export const combineClassNames = (classNames: string[]) => classNames.join(' ')

export const setBrowserHistorie = (location?: string) => {
  if (!location) return

  const currentLocation = window.location.hash

  console.log(location, currentLocation)

  if (location === currentLocation) return

  window.history.pushState({}, '', location)
}
