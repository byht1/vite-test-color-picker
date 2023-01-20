import styled from "styled-components"

export const Range = styled.input<any>`
  -webkit-appearance: none;
  margin-right: 15px;
  width: 100%;
  height: 7px;
  cursor: pointer;
  background: ${p => (p.luminance > 0.5 ? "#232426" : "#EDF0F3")};
  border-radius: 5px;
  background-image: linear-gradient(
    ${p => (p.luminance > 0.5 ? "#232426, #EDF0F3" : "#EDF0F3, #232426")}
  );
  background-size: ${p => p.progress}% 100%;
  background-repeat: no-repeat;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 15px;
    width: 15px;
    border: 1px solid ${p => (p.luminance > 0.5 ? "#EDF0F3" : "#232426")};
    border-radius: 50%;
    background: ${p => (p.luminance > 0.5 ? "#232426" : "#EDF0F3")};
    cursor: pointer;
    box-shadow: 0 0 2px 0 #555;
    transition: background 0.3s ease-in-out;
  }
  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }
`
