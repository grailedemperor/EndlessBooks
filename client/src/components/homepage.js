import Carousel from 'react-multi-carousel';
import { Container, Row, Col } from "react-bootstrap";
import 'react-multi-carousel/lib/styles.css'
import BookCard from './bookcard';
import seedsvar from '';


const Homepage = () => {

const books = [seedsvar]

    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
  
    return (
      <section className="home" id="home">
          <Container>
              <Row>
                  <Col size={12}>
                      <div className="home-bx wow zoomIn">
                          <h2>Featured</h2>
                          <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme home-slider business-analyst">
                          {
                            books.map((book, index) => {
                              return (
                                <BookCard
                                  key={index}
                                  {...book}
                                />
                              )
                            })
                          }
                          </Carousel>
                      </div>
                  </Col>
              </Row>
          </Container>
      </section>
    )
  }
  
  export default Homepage;