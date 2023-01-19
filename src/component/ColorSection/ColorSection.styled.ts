import styled from 'styled-components'

export const TextBox = styled.div<any>`
  display: grid;
  gap: 20px;

  text-align: center;

  color: ${p => p.color};

  cursor: pointer;
`

export const Text = styled.p`
  padding: 15px;

  border-radius: 24px;

  transition: background-color 250ms linear;

  &:hover,
  &:focus {
    ${p =>
      p.theme > 0.5
        ? 'background-color: rgba(0, 0, 0, 0.15);'
        : 'background-color: rgba(255, 255, 255, 0.15);'}
  }
`

export const Button = styled.button`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  background-color: transparent;

  transition: background-color 250ms linear;

  &:hover,
  &:focus {
    ${p =>
      p.theme > 0.5
        ? 'background-color: rgba(0, 0, 0, 0.15);'
        : 'background-color: rgba(255, 255, 255, 0.15);'}
  }
`
