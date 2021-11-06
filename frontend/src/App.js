import axios from "axios";
import React from "react";
import Book from "./Book";

class App extends React.Component {
    state = { details: [], }

    componentDidMount() {
        let data;
        axios.get('http://localhost:8000')
            .then(res => {
                data = res.data;
                this.setState({
                    details: data
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
              {this.state.details.map((output) => {
                return <Book key={output.id} {...output}></Book>;
              })}
            </section>
          </section>
        );
    }

}

export default App;
// ReactDom.render(<BookList />, document.getElementById('root'));