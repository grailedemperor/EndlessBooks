import { Col } from 'react-bootstrap'


const BookCard = ({title, author, year, imgUrl}) => {
    return (
        <Col sm={6} md={4}>
            <div className="book-imgbx item">
                <img src={imgUrl} alt="bookImage"/>
                <div className="book-txtx">
                    <h1>{title}</h1>
                    <br></br>
                    <h3>{author}</h3>
                    <br></br>
                    <h2>{year}</h2>
                    <br></br>
                </div>
            </div>
        </Col>
    )
}

export default BookCard;