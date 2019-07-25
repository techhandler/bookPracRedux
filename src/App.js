import React from 'react';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';

function App() {
  return (
    <table>
      <tr>
        <td className='list-panel'>
          <BookList/>
        </td>
        <td className='detail-panel'>
          <BookDetail/>
        </td>
      </tr>
    </table>
  );
}

export default App;
