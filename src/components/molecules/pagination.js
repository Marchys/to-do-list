import React, { Component, PropTypes } from 'react';

class Pagination extends Component {
  render() {
    const {  setPage, pageAmount, currentPage } = this.props;
    const pageArray = Array.from(new Array(pageAmount), (_, index) => index);
    return (
      <ol>
        {pageArray.map((page) => {
          const style = page !== currentPage ? { color: 'black' } : { color: 'blue' };
          return (
            <li key={page} style={style} onClick={setPage.bind(void 0, page)}>
              {page + 1}
            </li>
          );
        }
        )}
      </ol>
    );
  }
}

Pagination.propTypes = {
  setPage: PropTypes.func.isRequired,
  pageAmount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired
};

export default Pagination;
