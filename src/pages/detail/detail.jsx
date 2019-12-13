import React, { useEffect } from 'react'
import {createStructuredSelector} from 'reselect'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { ReactComponent as ShareBtn } from '../../assets/images/share.svg';
import { ReactComponent as ReportBtn } from '../../assets/images/report.svg';
import { ReactComponent as Divider } from '../../assets/images/detailDivider.svg';
import {loadDetail} from '../../redux/actions'
import {
  getFullName,
  getBirthYear,
  isDetailLoading,
  getDescription,
  getCurrentParty,
  getPhotoUrl,
} from '../../redux/selectors'
import LoadingBar from '../../components/loadingBar/loadingBar'
import NewsWidget from '../../components/newsWidget/newsWidget'
import DonationsWidget from '../../components/donationsWidget/donationsWidget'
import RolesWidget from '../../components/rolesWidget/rolesWidget'
import InsolvencyWidget from '../../components/insolvencyWidget/insolvencyWidget'
import ProfilePicture from '../../components/profilePicture/profilePicture'
import styles from './detail.module.scss';

function Detail(props) {
  const {loadDetail, match: { params: {id} } } = props
  useEffect(() => {
    loadDetail(id)
  }, [loadDetail, id]);
  return (
		<div className={styles.detail}>
			{props.isLoading && <LoadingBar />}
			{!props.isLoading &&
        <React.Fragment>
          <div className={styles.heading}>
            <div className={styles.wrapper}>
              <ProfilePicture src={props.photoUrl} name={props.fullname} customClassName={styles.photo} />
              <div className={styles.initials}>
                <div className={styles.initialsWrapper}>
                  <div className={styles.fullname}>{props.fullname}</div>
                  <div className={styles.birthYear}>*{props.birthYear}</div>
                  <div className={styles.divider}></div>
                  <div className={styles.currentParty}>{props.currentParty}</div>
                </div>
                <div className={styles.shareWrapper}>
                  <ShareBtn className={styles.shareIcon}/>
                  <div className={styles.shareBtn}>Sdílet</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.body}>
            <div className={styles.menu}>
              <Link to='' className={styles.link}>Přehled</Link>
              <Link to='' className={styles.link}>Kariéra Politika</Link>
              <Link to='' className={styles.link}>Angažovanost</Link>
              <Link to='' className={styles.link}>Mediální Obraz</Link>
            </div>
            <div className={styles.detail}>
              <div className={styles.section}>
                <div className={styles.titleWrapper}>
                  <h1 className={styles.title}>Přehled</h1>
                  <Divider className={styles.titleDivider}/>
                </div>
                <div className={styles.widgets}>
                  <div className={styles.widget}>
                    <div className={styles.header}>
                      <h2 className={styles.title}>Ve Zkratce</h2>
                      <div>
                        {/* <div></div> TODO: tagy */}
                        <ReportBtn />
                      </div>
                    </div>
                    <div className={styles.description}>{props.description}</div>
                  </div>
                  <div className={styles.widget}>
                    <div className={styles.header}>
                      <h2 className={styles.title}>Výroky</h2>
                      <div>
                        {/* <div></div> TODO: tagy */}
                        <ReportBtn />
                      </div>
                    </div>
                  </div>
                  <div className={styles.widget}>
                    <div className={styles.header}>
                      <h2 className={styles.title}>Kontakty</h2>
                      <div>
                        {/* <div></div> TODO: tagy */}
                        <ReportBtn />
                      </div>
                    </div>
                    <h3 className={styles.subtitle}>Sociální Sítě</h3>
                    <h3 className={styles.subtitle}>Web</h3>
                  </div>
                </div>
              </div>
              <div className={styles.section}>
                <div className={styles.titleWrapper}>
                  <h1 className={styles.title}>Kariéra</h1>
                  <Divider className={styles.titleDivider}/>
                </div>
                <div className={styles.widgets}>
                  <RolesWidget />
                  <DonationsWidget />
                  <InsolvencyWidget />
                </div>
                <div className={styles.section}>
                  <div className={styles.titleWrapper}>
                    <h1 className={styles.title}>Mediální obraz</h1>
                    <Divider className={styles.titleDivider}/>
                  </div>
                  <div className={styles.widgets}>
                    <NewsWidget />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      }
		</div>
  );
}

const mapStateToProps = createStructuredSelector({
	fullname: getFullName,
	birthYear: getBirthYear,
	currentParty: getCurrentParty,
  isLoading: isDetailLoading,
  description: getDescription,
  photoUrl: getPhotoUrl,
})

export default connect(mapStateToProps, {loadDetail})(Detail);
