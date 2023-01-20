import { generateRandomColor } from './generateRandomColor'

export const defaultValue = (length = 6) => {
  const value = []
  for (let i = 0; i < length; i += 1) {
    value.push(generateRandomColor())
  }
  return value
}
