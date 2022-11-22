export default function BookGrid({ bookList }) {
  return (
    <div className="book-grid">
      {bookList?.map((bookData) => {
        return <BookGridCard {...bookData} />;
      })}
    </div>
  );
}

function BookGridCard({ title, imageUrl }) {
  return (
    <div className="book-grid-card">
      <div>
        <img src={imageUrl} />
      </div>
      <div>{title}</div>
    </div>
  );
}
