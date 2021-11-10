import axios from "axios";
import React from "react";
import Book from "./Book";
// import { books } from "./books";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { book: [], };
    }
    
    componentDidMount() {
        axios.get('http://localhost:8000')
            .then(res => {
                const data = res.data;
                this.setState({
                    book: data
                });

            })
            .catch(err => { })
    }

    render() {
        return (
          <section className="main-container">
            <section className="header">
              <h1>Estante de livros</h1>
            </section>
            <section className="booklist">
              {this.state.book.map((output) => {
                return <Book key={output.id} {...output}></Book>;
              })}
            </section>
          </section>
        );
    }

    // render() {
    //   return (
    //     <section className="main-container">
    //       <section className="header">
    //         <h1>Estante de livros</h1>
    //       </section>
    //       <section className="booklist">
    //         {books.map((book) => {
    //           return <Book key={book.id} {...book}></Book>;
    //         })}
    //       </section>
    //     </section>
    //   );
    // }
}

export default App;
