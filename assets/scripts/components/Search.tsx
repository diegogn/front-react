import * as React from 'react';
import {Book, WorkResponse} from '../interfaces/index';
import { getWorks } from '../data/index';

interface SearchProp {
    books: Book[]
}

interface SearchState {
    books: Book[]
}

export class Search extends React.Component<{}, SearchState> {
    constructor(props){
        super(props);
        this.state = {books: []};
        this.updateState = this.updateState.bind(this);
    }

    private updateState(response: WorkResponse) {
        this.setState({books: response.results});
    }

    componentDidMount() {
        this.getBooks();
    }

    getBooks() {
        getWorks(this.updateState);
    }

    render() {
        return (
            <div>
                <SearchInput/>
                <ResultList books={this.state.books}/>
            </div>
        );
    }
}

class SearchInput extends React.Component {
    render() {
        return (
            <div>
                <input name="searchName"/>
            </div>
        );
    }
}

class ResultList extends React.Component<SearchProp, {}> {
    render() {
        return (
            <div>
                {
                    this.props.books.map((book: Book) => <li key={book.id}>{book.title} - {book.authors[0].name + " " + book.authors[0].surname}</li>)
                }
            </div>
        )
    }
}