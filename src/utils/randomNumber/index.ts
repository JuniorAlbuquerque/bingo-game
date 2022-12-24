import { formattedBingoNumber } from '../formatedBingoNumber'
import { basedBingo } from '../generateBingo'

export const getRandomBingoNumber = (sorteds: number[]) => {
  const allowedSortedNumbers = basedBingo.filter(
    (number) => !sorteds.includes(number)
  )

  const sortedIndex = Math.floor(Math.random() * allowedSortedNumbers.length)
  const sortedNumber = allowedSortedNumbers[sortedIndex]

  return {
    sortedNumber,
    formatedBingoNumber: formattedBingoNumber(sortedNumber)
  }
}
