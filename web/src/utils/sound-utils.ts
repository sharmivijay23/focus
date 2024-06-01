
export const getSoundURL = (sound: string) => {
  switch (sound) {
    case 'Rain':
      return '/assets/sounds/Rain.mp3'
    case 'Cafe Vibes':
      return '/assets/sounds/cafe_vibes.mp3'
    case 'Lightning Wings':
      return '/assets/sounds/Lightning Wings.mp3'
    case 'Night Symphony with Traffic':
      return '/assets/sounds/Night Symphony with Traffic.mp3'
    case 'Vintage Train Chime':
      return '/assets/sounds/vintage_train_chime.mp3'
    case 'Forest Bonfire':
      return '/assets/sounds/Forest Bonfire.mp3'
    default:
      return ''

  }

}


const sounds = [
  { name: "None", url: " " },
  { name: "Rain", url: "/assets/sounds/Rain.mp3" },
  { name: "Cafe Vibes", url: "/assets/sounds/cafe_vibes.mp3" },
  { name: "Lightning Wings", url: "/assets/sounds/Lightning Wings.mp3" },
  { name: "Night Symphony with Traffic", url: "/assets/sounds/Night Symphony with Traffic.mp3" },
  { name: "Vintage Train Chime", url: "/assets/sounds/vintage_train_chime.mp3" },
  { name: "Forest Bonfire", url: "/assets/sounds/Forest Bonfire.mp3" },
]