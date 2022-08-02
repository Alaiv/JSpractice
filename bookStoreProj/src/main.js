//book class: a book
class Book{
	constructor(title, author, isbn){
		this.title = title;
		this.author = author;
		this.isbn = isbn;
	}
}
//UI class: UI tasks
class UI {
	static displayBooks() {

		const books = Store.getBooks();

		books.forEach(book => UI.addBookToList(book))
	}

	static addBookToList(book) {
		const list = document.querySelector('#book-list');

		const row = document.createElement('tr');
		row.innerHTML = `
		<td>${book.title}</td>
		<td>${book.author}</td>
		<td>${book.isbn}</td>
		<td><a href='#' class="btn btn-danger btn-sm delete">X</a></td>
		`;

		list.appendChild(row);
	}

	static deleteBook(element) {
		if(element.classList.contains('delete')) {
			element.parentElement.parentElement.remove()
		}
	}

	static showAlert(message, className) {
		const div = document.createElement('div');
		div.classList = `alert alert-${className}`;
		div.appendChild(document.createTextNode(message));
		const container = document.querySelector(".container");
		const form = document.querySelector("#book-form");
		container.insertBefore(div, form)
		//vanish in 3 s
		setTimeout(() => document.querySelector('.alert').remove(), 3000)
	}

	static clearFields() {
		document.querySelector('#title').value = ''
		document.querySelector('#author').value = ''
		document.querySelector('#isbn').value = ''
	}
}
//Store class: storage(local)
class Store {
	static getBooks() {
		let books;
		if(localStorage.getItem('books') === null) {
			books = [];
		} else {
			books = JSON.parse(localStorage.getItem('books'));
		}

		return books;
	}

	static addBook(book) {
		const books = Store.getBooks();
		books.push(book);
		localStorage.setItem('books', JSON.stringify(books));
	}

	static removeBook(isbn) {
		const books = Store.getBooks();

		books.forEach((book, index) => {
			if(book.isbn === isbn){
				books.splice(index, 1);
			}
		});

		localStorage.setItem('books', JSON.stringify(books));
	}
}
//event: Display books
document.addEventListener('DOMContentLoaded', UI.displayBooks)

//Event: Add a book
document.querySelector('#book-form').addEventListener('submit', (e) => {
	e.preventDefault();
	//#form values
	const title = document.querySelector('#title').value
	const author = document.querySelector('#author').value
	const isbn = document.querySelector('#isbn').value

	//validation
	if(title === '' || author === '' || isbn === '') {
			UI.showAlert('Please fill in all fields', 'danger')

	} else {
	//inst book
	 const book = new Book(title, author, isbn);

	//add book to ui
	 UI.addBookToList(book);

	 //add book to lstorage
	 Store.addBook(book)

	 //success
	 UI.showAlert('Book added', 'success')

	//clearfields
	 UI.clearFields()
	}

})

//Event: Remove a book
document.querySelector('#book-list').addEventListener('click', (e) => {
	//delete form ui
	 UI.deleteBook(e.target);
	//delete from ls
	 Store.removeBook(e.target.parentElement.previousElementSibling.innerHTML);

	 UI.showAlert('Book deleted', 'success')
})