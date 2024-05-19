export const getBackgroundById = (id: string): string => {
  switch (id) {
    case 'temple':
      return '/assets/backgrounds/in/temple.png'
    case 'himalayas_with_houses':
      return '/assets/backgrounds/in/himalayas_with_houses.png'
    default:
      return '/assets/backgrounds/in/temple.png'
  }
}