import { basedBingo } from '../generateBingo'

export const getRandomBingoNumber = (sorteds: number[]) => {
  const allowedSortedNumbers = basedBingo.filter(
    (number) => !sorteds.includes(number)
  )

  const sortedIndex = Math.floor(Math.random() * allowedSortedNumbers.length)
  const sortedNumber = allowedSortedNumbers[sortedIndex]
  let formatedBingoNumber = ''

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
