  // make a search to google books api
  // https://www.googleapis.com/books/v1/volumes?q=harry+potter
  export const searchGoogleBooks = (query, category) => {
    const author = '+inauthor:';
    const genre ='+subject:';
    let modifiedQuery ='';

    const handleCategory = (category) => {
        if (category === 'Genre'){
            modifiedQuery = `${genre+query}`
        } else if (category === 'Author'){
            modifiedQuery = `${author+query}`
        } else {
            modifiedQuery = `${query}`
        }
    };

    handleCategory(category);

    return fetch(`https://www.googleapis.com/books/v1/volumes?q=${modifiedQuery}`);
  };