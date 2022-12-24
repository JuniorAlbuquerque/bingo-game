import { BingoData } from '@/utils/generateBingo'
import { FC } from 'react'
import { BingoNumber, styles } from './styles'

type BingoProps = {
  data: BingoData
  sorteds: number[]
}

const Bingo: FC<BingoProps> = ({ data, sorteds }) => {
  return (
    <div className={styles.root()}>
      {Object.entries(data)?.map(([letter, numbers]) => (
        <div key={letter}>
          <div className={styles.letter()}>{letter}</div>

          {numbers?.map((number) => {
            const active = sorteds?.includes(number)

            return (
              <BingoNumber key={number} variant={active ? 'active' : null}>
                {number}
              </BingoNumber>
            )
          })}
        </div>
      ))}
    </div>
  )
}

export default Bingo
