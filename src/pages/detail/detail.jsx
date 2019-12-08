import React, { useEffect } from 'react'
import {createStructuredSelector} from 'reselect'
import { connect } from 'react-redux'
import {loadDetail} from '../../redux/actions'
import {getFullName, isDetailLoading, getDescription, getRoles, getDonations, getPersonalInsolvency, getCompanyInsolvency} from '../../redux/selectors'
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

function WidgetInsolvency(insolvency) {
  return (
    <div>
      <div>je věřitelem</div>
      <div>
        <div>jako fyzická osoba</div>
        <div>{insolvency.personalInsolvency.count}</div>
        <div>skrz právnickou osobu</div>
        <div>{insolvency.companyInsolvency.count}</div>
      </div>
    </div>
  )
}

function Detail(props) {
  const {loadDetail, match: { params: {id} } } = props
  useEffect(() => {
    loadDetail(id)
  }, [loadDetail, id]);
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
                    {props.roles && props.roles.map((group, index) => {
                      return (
                        <div key={index}>
                          <div>{group.year === 9999 ? 'Dosud' : group.year}</div>
                          {group.items.map((item, index) => <TableRow name={item.name} value={item.organization} key={index}/>)}
                        </div>
                      )
                    })}
                  </React.Fragment>
                </div>
                <div className={styles.detailBox}>
                  <h2>Sponzorstvi</h2>
                  <React.Fragment>
                    {props.donations && props.donations.map((group, index) => {
                      return (
                        <div key={index}>
                          <div>{group.year}</div>
                          {group.items.map((item, index) => <TableRow name={item.party} value={item.value} key={index} />)}
                        </div>
                      )
                    })}
                  </React.Fragment>
                </div>
                <div className={styles.detailBox}>
                  <h2>Insolvence</h2>
                  {props.personalInsolvency && props.companyInsolvency &&
                    <React.Fragment>
                      <WidgetInsolvency personalInsolvency={props.personalInsolvency.creditor} companyInsolvency={props.companyInsolvency.creditor}/>
                      <WidgetInsolvency personalInsolvency={props.personalInsolvency.debtor} companyInsolvency={props.companyInsolvency.debtor}/>
                      <WidgetInsolvency personalInsolvency={props.personalInsolvency.bailiff} companyInsolvency={props.companyInsolvency.bailiff}/>
                    </React.Fragment>}
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      }
		</React.Fragment>
  );
}

const mapStateToProps = createStructuredSelector({
	fullname: getFullName,
  isLoading: isDetailLoading,
  description: getDescription,
  roles: getRoles,
  donations: getDonations,
  personalInsolvency: getPersonalInsolvency,
  companyInsolvency: getCompanyInsolvency,
})

export default connect(mapStateToProps, {loadDetail})(Detail);
