import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const useRouteChanged = (fn: () => void) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      fn()
      console.log('App is changing to: ', url)
    }

    // router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      // router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router, fn])
}

export default useRouteChanged
