import shortid from 'shortid'

export type TData = {
  id: string
  hex: string
  rgb: number[]
  lock: boolean
}

export const generateRandomColor = (): TData => {
  const hexCodes = '0123456789ABCDEF'
  let color = ''
  for (let i = 0; i < 6; i++) {
    color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
  }
  return {
    id: shortid.generate(),
    hex: `#${color}`,
    rgb: hexToRgb(color),
    lock: false,
  }
}

export const queryParams = (value: string | null): false | TData[] => {
  if (!value) return false

  return value.split(',').map(x => ({
    id: shortid.generate(),
    hex: `#${x}`,
    rgb: hexToRgb(x),
    lock: false,
  }))
}

function hexToRgb(hex: string) {
  const bigint = parseInt(hex, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255

  return [r, g, b]
}
