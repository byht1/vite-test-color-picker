import React, { FC, useState } from "react"
import { RxLockClosed, RxLockOpen2 } from "react-icons/rx"
import { TData } from "helpers"
import { Button, Text, TextBox } from "./ColorSection.styled"
import chroma from "chroma-js"
import { Box } from "component/Box"
import { InputRange } from "component/InputRange"
import { ReactChange } from "type"

type Props = {
  defaultValue: TData
  index: number
  set: React.Dispatch<React.SetStateAction<TData[]>>
}

export const ColorSection: FC<Props> = ({ defaultValue, index, set }) => {
  const isLock = defaultValue.lock
  const [value] = useState(defaultValue)
  const [changeRange, setChangeRange] = useState(defaultValue.opacity)
  const { hex, rgb } = value
  const isOpacity = changeRange === 1
  const rgbText = isOpacity
    ? `rgb(${rgb.join(", ")})`
    : `rgba(${rgb.join(", ")}, ${changeRange})`

  const luminance = chroma(hex).luminance()
  const color = luminance > 0.5 || 0.5 > changeRange ? "#232426" : "#EDF0F3"

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

  const onChange = (e: ReactChange) => {
    const value = Number(e.target.value)
    set(prev =>
      prev.map((x, i) => {
        if (i !== index) return x

        return {
          ...x,
          opacity: value,
        }
      })
    )
    setChangeRange(value)
  }

  return (
    <Box
      p="10px"
      display="grid"
      gridTemplateColumns="1fr"
      gridTemplateRows={`repeat(3, ${window.innerHeight / 3}px)`}
      justifyItems="center"
      alignItems="center"
      height="100vh"
      backgroundColor={rgbText}
    >
      <TextBox color={color}>
        {isOpacity && (
          <Text
            onClick={() => navigator.clipboard.writeText(hex)}
            theme={luminance}
          >
            {hex}
          </Text>
        )}
        <Text
          onClick={() => navigator.clipboard.writeText(rgbText)}
          theme={luminance}
        >
          {rgbText}
        </Text>
      </TextBox>
      <InputRange
        changeValue={changeRange}
        change={onChange}
        luminance={luminance}
      />
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
