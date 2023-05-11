import { Container } from 'react-bootstrap'
import Header from './Components/Header';
import Footer from './Components/Footer';
function App() {
  return (
    <>
      <Header></Header>
      <main className='py-3'> 
        <Container>
          <h1>  Welcome to E-commerce Website </h1>
        </Container>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
