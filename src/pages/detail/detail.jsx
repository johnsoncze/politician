import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {loadDetail} from '../../redux/actions'
import {getFullName, isDetailLoading, getDescription, getRoles, getDonations} from '../../redux/selectors'
import LoadingBar from '../../components/loadingBar/loadingBar'
import styles from './detail.module.scss';

function TableRow(role) {
  return (
    <React.Fragment>
      <div className={styles.tableRow}>
        <div>{role.name}</div>
        <div>{role.value}</div>
      </div>
    </React.Fragment>
  )
}

function Detail(props) {
  useEffect(() => {
    props.loadDetail(props.match.params.query)
  }, []);
  return (
		<React.Fragment>
			{props.isLoading && <LoadingBar />}
			{!props.isLoading && 
        <React.Fragment>
          <div className={styles.header}>
            <div>{props.fullname}</div>
          </div>
          <div className={styles.body}>
            <div className={styles.menu}>menu</div>
            <div>
              <div>
                <h1>Prehled</h1>
                <div className={styles.detailBox}>
                  <h2>Ve Zkratce</h2>
                  <div className={styles.description}>{props.description}</div>
                </div>
                <div className={styles.detailBox}>demagog.cz</div>
                <div className={styles.detailBox}>
                  <h2>Kontakty</h2>
                  <h3>Socialni Site</h3>
                  <h3>Web</h3>
                </div>
              </div>
              <div>
                <h1>Kariera</h1>
                <div className={styles.detailBox}>
                  <h2>Role</h2>
                  <React.Fragment>
                    {props.roles && props.roles.map((role, i) => <TableRow name={role.name} value={role.organization} key={i} />)}
                  </React.Fragment>
                </div> 
                <div className={styles.detailBox}>
                  <h2>Sponzorstvi</h2>
                  <React.Fragment>
                    {props.donations && props.donations.map((donation, i) => <TableRow name={donation.party} value={donation.value} key={i} />)}
                  </React.Fragment>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      }
		</React.Fragment>
  );
}

const mapStateToProps = state => ({
	fullname: getFullName(state),
  isLoading: isDetailLoading(state),
  description: getDescription(state),
  roles: getRoles(state),
  donations: getDonations(state),
})

export default connect(mapStateToProps, {loadDetail})(Detail);
