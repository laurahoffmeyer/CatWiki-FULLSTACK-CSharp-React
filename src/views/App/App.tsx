import { TopBar } from '../../components/TopBar/TopBar';
import { Home } from '../../views/Home/Home';
import { Footer } from '../../components/Footer/Footer';
import { TopTen } from '../../views/TopTen/TopTen';
import { Breed } from '../../views/Breed/Breed';

function App() {

  return (
    <>
      <TopBar />
      <Breed />
      <TopTen />
      <Home />
      <Footer />
    </>
  );
}

export default App;