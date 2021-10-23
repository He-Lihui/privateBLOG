import '../styles/globals.css'
import 'antd/dist/antd.css'
import '../static/style/pages/comm.css'
import '../static/style/pages/detailed.css'
import '../static/style/components/header.css'
import '../static/style/pages/index.css'
import '../static/style/components/author.css'
import '../static/style/components/footer.css'
import '../static/style/components/advert.css'
import 'markdown-navbar/dist/navbar.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
