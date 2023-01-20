import React, { FC, useState } from 'react'
import { RxLockClosed, RxLockOpen2 } from 'react-icons/rx'
import { TData } from 'helpers'
import { Button, Text, TextBox } from './ColorSection.styled'
import chroma from 'chroma-js'
import { Box } from 'component/Box'

type Props = {
  defaultValue: TData
  index: number
  set: React.Dispatch<React.SetStateAction<TData[]>>
}

export const ColorSection: FC<Props> = ({ defaultValue, index, set }) => {
  const isLock = defaultValue.lock
  const [value] = useState(defaultValue)
  const { hex, rgb } = value
  const rgbText = `rgb(${rgb.join(', ')})`

  const lockClick = () => {
    set(prev =>
      prev.map((x, i) => {
        if (i !== index) return x

        return {
          ...x,
          lock: !x.lock,
        }
      })
    )
  }

  const luminance = chroma(hex).luminance()
  const color = luminance > 0.5 ? '#232426' : '#EDF0F3'

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-around"
      height="100vh"
      backgroundColor={hex}
    >
      <TextBox color={color}>
        <Text
          onClick={() => navigator.clipboard.writeText(hex)}
          theme={luminance}
        >
          {hex}
        </Text>
        <Text
          onClick={() => navigator.clipboard.writeText(rgbText)}
          theme={luminance}
        >
          {rgbText}
        </Text>
      </TextBox>
      <Button type="button" onClick={lockClick} theme={luminance}>
        {isLock ? (
          <RxLockClosed size={20} color={color} />
        ) : (
          <RxLockOpen2 size={20} color={color} />
        )}
      </Button>
    </Box>
  )
}
