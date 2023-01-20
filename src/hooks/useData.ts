import { defaultValue, generateRandomColor, queryParams, TData } from "helpers"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

export const useData = (value: number) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [data, setData] = useState<TData[]>(
    queryParams(searchParams.get("colors")) || defaultValue(value)
  )
  //   setData()

  useEffect(() => {
    setSearchParams({ colors: data.map(x => x.hex.split("#")[1]).join(",") })
  }, [data, setSearchParams])

  useEffect(() => {
    window.addEventListener("keydown", clickSpace)

    return () => {
      window.removeEventListener("keydown", clickSpace)
    }
  }, [])

  function clickSpace(e: KeyboardEvent) {
    if (e.code !== "Space") {
      return
    }
    e.preventDefault()

    setData(prev =>
      prev.map(x => {
        if (x.lock) return x

        return generateRandomColor()
      })
    )
  }

  return { data, setData }
}
