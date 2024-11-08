import Box from "./components/box"
import Callback from "./components/Callback"
import Cleaning from "./components/Cleaning"
import Footer from "./components/Footer"
import Herosection from "./components/Herosection"
import Recentnews from "./components/Recentnews"
import Service from "./components/Service"
import Team from "./components/Team"
import Tradition from "./components/Tradition"

const App = () => {
  return (<>
    <Herosection />
    <Box />
    <Tradition />
    <Cleaning />
    <Service />
    <Team />
    <Callback />
    <Recentnews />
    <Footer />
  </>)
}
export default App