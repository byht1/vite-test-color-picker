import { ColorSection } from 'component/ColorSection'
import {  useState } from 'react'

import { Box } from '../Box'
import { useData } from '../../hooks/useData'

//
export const ColorsBody = () => {
  const [sections] = useState(6)
  const { data, setData } = useData(sections)
  return (
    <Box display="grid" gridTemplateColumns={`repeat(${sections}, 1fr)`}>
      {data.map((x, i) => (
        <ColorSection key={x.id} defaultValue={x} index={i} set={setData} />
      ))}
    </Box>
  )
}
