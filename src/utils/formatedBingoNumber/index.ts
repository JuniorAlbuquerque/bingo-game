export const formattedBingoNumber = (number: number) => {
  if (number <= 15) {
    return `B - ${number}`
  } else if (number <= 30) {
    return `I - ${number}`
  } else if (number <= 45) {
    return `N - ${number}`
  } else if (number <= 60) {
    return `G - ${number}`
  } else if (number <= 75) {
    return `O - ${number}`
  }
}
