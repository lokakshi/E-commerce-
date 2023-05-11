import { Container } from 'react-bootstrap'
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomeScreen from './screens/HomeScreen';
function App() {
  return (
    <>
      <Header></Header>
      <main className='py-3'>
        <Container>
          <HomeScreen></HomeScreen>
        </Container>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
