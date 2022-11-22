import BookGrid from "../components/BookGrid";
import BookSearchForm from "../features/BookSearchForm";

export default function BookSearch() {
  function handleSearch(data) {
    console.log(data);
  }

  return (
    <div>
      <BookSearchForm onSubmit={handleSearch} />
      <BookGrid />
    </div>
  );
}
