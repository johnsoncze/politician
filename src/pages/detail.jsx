import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {loadDetail} from '../redux/actions'
import {getFullName} from '../redux/selectors'

function Detail(props) {
  useEffect(() => {
    props.loadDetail(props.match.params.query)
  });
  return (
    <div>
			<div>{props.fullname}</div>
		</div>
  );
}

const mapStateToProps = state => ({
	fullname: getFullName(state),
})

export default connect(mapStateToProps, {loadDetail})(Detail);
