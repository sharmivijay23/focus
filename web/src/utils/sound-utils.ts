
export const getSoundURL = (sound: string) => {
  const url = sounds[sound]
  return url ? url : ""
}


const sounds: Record<string, string> = {
  "Rain": "/assets/sounds/Rain.mp3",
  "Cafe Vibes": "/assets/sounds/cafe_vibes.mp3",
  "Lightning Wings": "/assets/sounds/Lightning Wings.mp3",
  "Night Symphony with Traffic": "/assets/sounds/Night Symphony with Traffic.mp3",
  "Vintage Train Chime": "/assets/sounds/vintage_train_chime.mp3",
  "Forest Bonfire": "/assets/sounds/Forest Bonfire.mp3",
}