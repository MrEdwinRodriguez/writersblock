import React, { Fragment, useEffect} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../common/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const Books = (props) => {
    return (
        <div>
            <div className='dashboad-section'>
              <div className='row'>
                    <div className="col-6 col-sm-4">
                        <h4 className='mb-4'>My Books</h4>
                    </div>
                    <div className="col-6 col-sm-3">
                        <Link to="/new-Book" type="button" className="btn btn-primary">
                        <FontAwesomeIcon icon={faPlus} />New Book</Link>
                    </div>
              </div>
            </div>
            <div className='dashboad-section'>
                <div className='table-responsive'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th width="40%">Title</th>
                            <th width="25%">Word Count</th>
                            <th width="15%">End Goal</th>
                            <th width="10%"></th>
                            <th width="10%"></th>
                        </tr>
                    </thead>
                    <tbody>
                    
                    </tbody>
                </table>
                </div>
            </div>
      </div>
    )
}

Books.propTypes = {
}

const mapStateToPrope = state => ({

});
export default Books