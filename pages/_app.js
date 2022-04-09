import '../styles/globals.css'
import { AppWrapper } from 'context'
import NextNProgress from "nextjs-progressbar";
import Navi from 'components/navbar/navi'
import Footies from 'components/footer/footies'
import { motion } from 'framer-motion'
require('dotenv').config()



function MyApp({ Component, pageProps, router }) {
  return <AppWrapper>
    <Navi/>
    <NextNProgress color="#FF0000"
  startPosition={0.3}
  stopDelayMs={200}
  height={3}
  showOnShallow={true} />
   <motion.div
          key={router.route}
          initial="hidden" animate="visible" variants={{
            hidden: {
              scale: .9,
              opacity: 0
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: .05
              }
            },
          }}
        >
    <Component {...pageProps} />
    </motion.div>
    <Footies />
  </AppWrapper>
}

export default MyApp
