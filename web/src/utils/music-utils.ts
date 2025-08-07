export const getImagebyName = (name: string) => {
  const musicImage = imagesOfPlaylist[name]
  return musicImage ? musicImage : '/assets/music_images/lofi_mix.png'
}

const imagesOfPlaylist: Record<string, string> = {
  "Lo-Fi Beats": '/assets/music_images/lofi_mix.png',
  "Indie Study Beats": '/assets/music_images/indie_study.jpeg',
  "Mellow Morning Mix": '/assets/music_images/mellow_morning.png',
  "Peaceful Piano": '/assets/music_images/peaceful_piano_old.jpeg',
  "Acoustic Coffeehouse": '/assets/music_images/cafe_house.png',
}

export const getPlaylistURLbyName = (name: string) => {
  const URL = playlistURL[name]
  return URL ? URL : 'https://open.spotify.com/embed/playlist/37i9dQZF1DWWQRwui0ExPn'

}

const playlistURL: Record<string, string> = {
  "Lo Fi Beats": 'https://open.spotify.com/embed/playlist/37i9dQZF1DWWQRwui0ExPn',
  "Indie Study Beats": 'https://open.spotify.com/embed/playlist/37i9dQZF1DX8Uebhn9wzrS',
  "Mellow Morning Mix": 'https://open.spotify.com/embed/playlist/37i9dQZF1DWWzVPEmatsUB',
  "Peaceful Piano": 'https://open.spotify.com/embed/playlist/37i9dQZF1DX4sWSpwq3LiO',
  "Acoustic Coffeehouse": 'https://open.spotify.com/embed/playlist/2O4QEcrn4ktDdkOhM2lS5x',
}