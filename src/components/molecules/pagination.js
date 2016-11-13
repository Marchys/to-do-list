import React, { Component, PropTypes } from 'react';
import './pagination.css';

class Pagination extends Component {
  render() {
    const {  setPage, pageAmount, currentPage } = this.props;
    const pageArray = Array.from(new Array(pageAmount), (_, index) => index);
    return (
      <ol className="pagination">
        {pageArray.map((page) => {
          const iconClass = page !== currentPage ? 'fa-circle-o circle-unselected' : 'fa-circle circle-selected';
          return (
            <li key={page} className='liPageControl' onClick={setPage.bind(void 0, page)}>
              <i className={`fa ${iconClass}`} />
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
