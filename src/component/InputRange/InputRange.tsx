import React, { FC } from "react"
import { Box } from "component/Box"
import { Range } from "./InputRange.styled"
import { ReactChange } from "type"

type Props = {
  changeValue: number
  luminance: number
  change: (e: ReactChange) => void
}

export const InputRange: FC<Props> = ({ changeValue, luminance, change }) => {
  return (
    <Box>
      <Range
        onChange={(e: ReactChange) => change(e)}
        type="range"
        min={0}
        max={1}
        step={0.05}
        value={changeValue}
        progress={changeValue * 100}
        luminance={luminance}
      />
    </Box>
  )
}
