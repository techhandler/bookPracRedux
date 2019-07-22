import React, { Component } from 'react';
import {connect} from 'react-redux';

class BookList extends Component {

  renderBookList = () => {
    return <ul>{this.props.books.map(a => <li key={a.title}>{a.title}</li>)}</ul>
  }

  render() {
    return (
      <div>
        <h2>BookList</h2>
        <p>
          {this.renderBookList()}
        </p>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    books:state.books
  }
}

export default connect(mapStateToProps)(BookList);
