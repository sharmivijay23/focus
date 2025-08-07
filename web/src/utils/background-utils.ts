export const getBackgroundById = (id: string): string => {
  switch (id) {
    case 'temple':
      return '/assets/backgrounds/in/temple.png'
    case 'himalayas_with_houses':
      return '/assets/backgrounds/in/himalayas_with_houses.png'
    case 'tajmahal':
      return '/assets/backgrounds/in/tajmahal.png'
    case 'tajmahal_dark':
      return '/assets/backgrounds/in/tajmahal_dark.png'
    default:
      return '/assets/backgrounds/in/temple.png'
  }
}

