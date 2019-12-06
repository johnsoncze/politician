import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {loadDetail} from '../redux/actions'
import {getFullName, isDetailLoading} from '../redux/selectors'
import LoadingBar from '../components/loadingBar/loadingBar'

function Detail(props) {
  useEffect(() => {
    props.loadDetail(props.match.params.query)
  }, []);
  return (
		<React.Fragment>
			{props.isLoading && <LoadingBar />}
			{!props.isLoading && <div>
				<div>{props.fullname}</div>
			</div>}
		</React.Fragment>
  );
}

const mapStateToProps = state => ({
	fullname: getFullName(state),
	isLoading: isDetailLoading(state),
})

export default connect(mapStateToProps, {loadDetail})(Detail);
