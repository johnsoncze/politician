import React, { useEffect } from 'react'
import {createStructuredSelector} from 'reselect'
import { connect } from 'react-redux'
import classnames from 'classnames'
import {loadDetail} from '../../redux/actions'
import {
  getFullName,
  getBirthYear,
  isDetailLoading,
  getDescription,
  getRoles,
  getDonations,
  getPersonalInsolvency,
  getCompanyInsolvency,
  getCurrentParty,
  getPhotoUrl,
} from '../../redux/selectors'
import LoadingBar from '../../components/loadingBar/loadingBar'
import NewsWidget from '../../components/newsWidget/newsWidget'
import ProfilePicture from '../../components/profilePicture/profilePicture'
import styles from './detail.module.scss';

function TableRow(role) {
  return (
    <React.Fragment>
      <div className={styles.tableRow}>
        <div className={styles.name}>{role.name}</div>
        <div className={styles.value}>{role.value}</div>
      </div>
    </React.Fragment>
  )
}

function WidgetInsolvency(insolvency) {
  return (
    <div>
      <h3 className={styles.subtitle}>je {insolvency.title}</h3>
      <div>
        <div className={styles.tableRow}>
          <div>jako fyzická osoba</div>
          <div>{insolvency.personalInsolvency.count}</div>
        </div>
        <div className={styles.tableRow}>
          <div>skrz právnickou osobu</div>
          <div>{insolvency.companyInsolvency.count}</div>
        </div>
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
          <div className={styles.heading}>
            <div className={styles.wrapper}>
            <ProfilePicture src={props.photoUrl} name={props.fullname} />
              <div className={styles.fullname}>{props.fullname}</div>
              <div className={styles.birthYear}>*{props.birthYear}</div>
              <div className={styles.currentParty}>{props.currentParty}</div>
            </div>
          </div>
          <div className={styles.body}>
            <div className={styles.menu}>menu</div>
            <div className={styles.detail}>
              <div className={styles.section}>
                <h1 className={styles.title}>Prehled</h1>
                <div className={styles.widgets}>
                  <div className={styles.widget}>
                    <h2 className={styles.header}>Ve Zkratce</h2>
                    <div className={styles.description}>{props.description}</div>
                  </div>
                  <div className={styles.widget}>
                    <h2 className={styles.header}>Výroky</h2>
                  </div>
                  <div className={styles.widget}>
                    <h2 className={styles.header}>Kontakty</h2>
                    <h3 className={styles.subtitle}>Socialni Site</h3>
                    <h3 className={styles.subtitle}>Web</h3>
                  </div>
                </div>
              </div>
              <div className={styles.section}>
                <h1 className={styles.title}>Kariera</h1>
                <div className={styles.widgets}>
                  <div className={classnames(styles.widget, styles.roles, styles.widgetWithTable)}>
                    <h2 className={styles.header}>Role</h2>
                    <React.Fragment>
                      {props.roles && props.roles.map((group, index) => {
                        return (
                          <div className={styles.tableSection} key={index}>
                            <h3 className={styles.subtitle}>{group.year === 9999 ? 'Dosud' : group.year}</h3>
                            {group.items.map((item, index) => <TableRow name={item.name} value={item.organization} key={index}/>)}
                          </div>
                        )
                      })}
                    </React.Fragment>
                  </div>
                  <div className={classnames(styles.widget, styles.widgetWithTable)}>
                    <h2 className={styles.header}>Sponzorstvi</h2>
                    <React.Fragment>
                      {props.donations && props.donations.map((group, index) => {
                        return (
                          <div className={styles.tableSection} key={index}>
                            <h3 className={styles.subtitle}>{group.year}</h3>
                            {group.items.map((item, index) => <TableRow name={item.party} value={item.value} key={index} />)}
                          </div>
                        )
                      })}
                    </React.Fragment>
                  </div>
                  <div className={classnames(styles.widget, styles.widgetWithTable, styles.insolvency)}>
                    <h2 className={styles.header}>Insolvence</h2>
                    {props.personalInsolvency && props.companyInsolvency &&
                      <React.Fragment>
                        <WidgetInsolvency title='věřitelem' personalInsolvency={props.personalInsolvency.creditor} companyInsolvency={props.companyInsolvency.creditor}/>
                        <WidgetInsolvency title='dlužníkem' personalInsolvency={props.personalInsolvency.debtor} companyInsolvency={props.companyInsolvency.debtor}/>
                        <WidgetInsolvency title='insolvenčním správcem' personalInsolvency={props.personalInsolvency.bailiff} companyInsolvency={props.companyInsolvency.bailiff}/>
                      </React.Fragment>}
                  </div>
                </div>
                <div className={styles.section}>
                  <h1 className={styles.title}>Mediální obraz</h1>
                  <div className={styles.widgets}>
                    <div className={styles.widget}>
                      <h2 className={styles.header}>V médiích</h2>
                      <NewsWidget />
                    </div>
                  </div>
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
	birthYear: getBirthYear,
	currentParty: getCurrentParty,
  isLoading: isDetailLoading,
  description: getDescription,
  roles: getRoles,
  donations: getDonations,
  personalInsolvency: getPersonalInsolvency,
  companyInsolvency: getCompanyInsolvency,
  photoUrl: getPhotoUrl,
})

export default connect(mapStateToProps, {loadDetail})(Detail);
