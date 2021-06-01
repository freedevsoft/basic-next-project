import Page from '../components/page'
import { initializeStore } from '../store'

export default function SSR() {
  return <Page />
}

// The date returned here will be different for every request that hits the page,
// that is because the page becomes a serverless function instead of being statically
// exported when you use `getServerSideProps` or `getInitialProps`
export function getServerSideProps() {
 return {
    props: {
      initialReduxState: {
        lastUpdate: Date.now(),
        light: false,
      },
    },
  }
}
