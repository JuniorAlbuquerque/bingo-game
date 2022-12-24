export const maxNumbers = 75

export const getRandomBingoNumber = () => {
  let formatedBingoNumber = ''

  const sortedNumber = Math.floor(Math.random() * maxNumbers + 1)

  if (sortedNumber <= 15) {
    formatedBingoNumber = `B - ${sortedNumber}`
  } else if (sortedNumber <= 30) {
    formatedBingoNumber = `I - ${sortedNumber}`
  } else if (sortedNumber <= 45) {
    formatedBingoNumber = `N - ${sortedNumber}`
  } else if (sortedNumber <= 60) {
    formatedBingoNumber = `G - ${sortedNumber}`
  } else if (sortedNumber <= 75) {
    formatedBingoNumber = `O - ${sortedNumber}`
  }

  return {
    sortedNumber,
    formatedBingoNumber
  }
}
