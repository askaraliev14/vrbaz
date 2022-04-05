import debounce from 'lodash/debounce'
import { useCallback, useEffect, useState } from 'react'

const useWindowSize = () => {
  const [width, setWidth] = useState(0)

  const windowListener = useCallback(
    debounce(() => {
      if (window) setWidth(window.innerWidth)
    }, 250),
    []
  )

  useEffect(() => {
    if (window) {
      setWidth(window.innerWidth)
      window.addEventListener('resize', windowListener)
    }
    return () => {
      windowListener.cancel()
      window && window.removeEventListener('resize', windowListener)
    }
  }, [])

  return width
}

export default useWindowSize
