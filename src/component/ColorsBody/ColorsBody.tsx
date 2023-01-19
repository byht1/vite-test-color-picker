import { ColorSection } from 'component/ColorSection'
import { useEffect, useState } from 'react'

import { Box } from '../Box'
import { useData } from '../../hooks/useData'
import { defaultValue } from 'helpers'

//
export const ColorsBody = () => {
  const [sections, setSections] = useState(6)
  const { data, setData } = useData(sections)
  return (
    <Box display="grid" gridTemplateColumns={`repeat(${sections}, 1fr)`}>
      {data.map((x, i) => (
        <ColorSection key={x.id} defaultValue={x} index={i} set={setData} />
      ))}
    </Box>
  )
}
