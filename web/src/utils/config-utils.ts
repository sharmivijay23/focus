

export const enableComponents = (sidebarItem: string) => {

  switch (sidebarItem) {
    case "Theme":
      return true
    case "Home Theme":
      return true
    case "Focus Theme":
      return true
    case "Sounds":
      return true
    case "Music":
      return true
    case "Timer":
      return true
    case "Clock":
      return true
    case "Stats":
      return true
    case "Profile":
      return true
    case "Contact Us":
      return true
    default:
      return true
  }

}
