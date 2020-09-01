import React from "react";
import { Container} from "react-bootstrap";

function App() {
  return (
      <footer>
        <section>
          <Container className="text-center pt-3 pb-3">
            &copy; 2020 <a href="https://www.hackyourfuture.dk/" target="_blank" rel="noopener noreferrer">HackYourFuture CPH</a> partnered with <a href="https://www.finklusiv.dk/" target="_blank" rel="noopener noreferrer">Finklusiv.dk</a>, Designed and developed by <a href="https://priyankasharma.netlify.app" target="_blank" rel="noopener noreferrer">PriyankaSharma.</a>
          </Container>
        </section>
      </footer>
  );
}

export default App;
