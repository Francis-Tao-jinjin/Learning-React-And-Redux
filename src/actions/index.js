export function selectBook(book) {
  console.log('A book has been selected:', book.title);
  // selectBook 是一个 Actioncrator，它需要返回一个 Action
  // 返回的 Object 中是真正的 Action，并且必须包含 type 属性
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}

