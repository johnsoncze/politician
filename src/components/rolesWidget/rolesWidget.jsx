
import React from 'react'
import {createStructuredSelector} from 'reselect'
import { connect } from 'react-redux'
import classnames from 'classnames'
import {getRoles, getShowAllRoles, getRolesCount} from '../../redux/selectors'
import {toggleShowAllRoles} from '../../redux/actions'
import styles from './rolesWidget.module.scss'
import {DEFAULT_ROLES_LIMIT} from '../../constants'

const EmptyState = () => {
  return (<div>Empty</div>)
}

const TableRow = (props) => {
  return (
    <React.Fragment>
      <div className={styles.tableRow}>
        <div className={styles.name}>{props.name}</div>
        <div className={styles.value}>{props.value}</div>
      </div>
    </React.Fragment>
  )
}

const Roles = ({rolesGroups, showAll, rolesCount, toggleShowAllRoles}) => {
  return (
    <React.Fragment>
        {rolesGroups.map((group, index) => {
          return (
            <div className={styles.tableSection} key={index}>
              <h3 className={styles.subtitle}>{group.year === 9999 ? 'Dosud' : group.year}</h3>
              {group.items.map((item, index) => <TableRow name={item.name} value={item.organization} key={index}/>)}
            </div>
          )
        })}
        <div onClick={toggleShowAllRoles}>
          {!showAll && <div className={styles.more}>Zobrazit {rolesCount-DEFAULT_ROLES_LIMIT} dalších</div>}
          {showAll && <div className={styles.more}>Zobrazit méně</div>}
        </div>
    </React.Fragment>
  )
}

const RolesWidget = ({rolesGroups, showAll, toggleShowAllRoles, rolesCount}) => {

  return (
    <div className={classnames(styles.widget, styles.roles, styles.widgetWithTable)}>
      <h2 className={styles.header}>Role</h2>
      {rolesGroups.length && <Roles
        rolesGroups={rolesGroups}
        showAll={showAll}
        rolesCount={rolesCount}
        toggleShowAllRoles={toggleShowAllRoles}
      />}
      {!rolesGroups.length && <EmptyState />}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  rolesGroups: getRoles,
  showAll: getShowAllRoles,
  rolesCount: getRolesCount,
})

export default connect(mapStateToProps, {toggleShowAllRoles})(RolesWidget);
