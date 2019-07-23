import React, { Component } from 'react';
import {connect} from 'react-redux';
import { selectBook } from '../actions';
import {bindActionCreators} from 'redux'
class BookList extends Component {

  renderBookList = () => {
    return <ul>{this.props.books.map(a => <li onClick={()=>this.props.selectBook(a)} key={a.title}>{a.title}</li>)}</ul>
  }

  render() {
    return (
      <div>
        <h2>BookList</h2>
        <div>
          {this.renderBookList()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    books:state.books
  }
}

function mapActionToDispatch(dispatch){
  return bindActionCreators({selectBook},dispatch);
}

export default connect(mapStateToProps, mapActionToDispatch)(BookList);
