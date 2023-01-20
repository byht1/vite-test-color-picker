import shortid from "shortid"

export type TData = {
  id: string
  hex: string
  rgb: number[]
  lock: boolean
  opacity: number
}

export const generateRandomColor = (): TData => {
  const hexCodes = "0123456789ABCDEF"
  let color = ""
  for (let i = 0; i < 6; i++) {
    color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
  }
  return {
    id: shortid.generate(),
    hex: `#${color}`,
    rgb: hexToRgb(color),
    lock: false,
    opacity: 1,
  }
}

export const queryParams = (value: string | null): false | TData[] => {
  if (!value) return false

  const queryParse: string[] = JSON.parse(value)
  const query = queryParse.map(x => {
    return {
      hex: x[0].split("#")[1],
      opacity: x[1],
    }
  })

  return query.map(({ hex, opacity }) => ({
    id: shortid.generate(),
    hex: `#${hex}`,
    rgb: hexToRgb(hex),
    lock: false,
    opacity: Number(opacity),
  }))
}

function hexToRgb(hex: string) {
  const bigint = parseInt(hex, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255

  return [r, g, b]
}
