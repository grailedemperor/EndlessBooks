import { Col } from 'react-bootstrap'


const BookCard = ({title, author, imgUrl, year}) => {
    return (
        <div className="book-item">
            <Col sm={12} md={12}>
                <div className="proj-imgbx">
                    <img src={imgUrl} alt=""/>
                    <div className="proj-txtx">
                        <h2>{title}</h2>
                        <br></br>
                        <h3>{author}</h3>
                        <br></br>
                        <p>{year}</p>
                    </div>
                </div>
            </Col>
        </div>
    )
}

export default BookCard;