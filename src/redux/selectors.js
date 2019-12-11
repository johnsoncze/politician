import {createSelector} from 'reselect'

export const getSearchQuery = store => store.app.searchQuery
export const getSearchResults = store => store.app.searchResults
export const isSearchLoading = store => store.app.loadingSearch
export const isDetailLoading = store => store.app.loadingDetail
export const getDetailData = store => store.app.detail
export const getPhotoUrl = store => getDetailData(store).photoUrl
export const getDetailNewsRaw = store => store.app.detailNews
export const getPersonalInsolvency = store => getDetailData(store).personalInsolvency
export const getCompanyInsolvency = store => getDetailData(store).companyInsolvency
export const wasSearched = store => !!getSearchResults(store)

export const getDetailNews = createSelector(getDetailNewsRaw, (news) => {
  return news.map(a => ({
    ...a,
    source: a.source.replace(new RegExp('^www.'), ''),
    time: (new Date(a.time*1000)).toLocaleDateString()
  }))
})
export const getFullName = store => {
	const detail = getDetailData(store)
	return `${detail.titlePrefix} ${detail.firstName} ${detail.lastName} ${detail.titleSuffix}`.trim() // TODO lip naformatovat
}

export const getBirthYear = store => {
  const {birthDate} = getDetailData(store)
  if (!birthDate) return ''
	return (new Date(birthDate)).getFullYear()
}

export const getCurrentParty = store => {
  const {currentParty} = getDetailData(store)
  return currentParty
}

export const getDescription = store => {
  return getDetailData(store).description
}

const groupByYear = (data) => {
  if (!data) return []

  let unsorted = data.reduce((groups, item) => {
    groups[item.year] = groups[item.year] || {
      year: item.year,
      items: []
    }
    groups[item.year].items.push(item)
    return groups
  }, {})

  return Object.values(unsorted).sort((a, b) => {
    return b.year - a.year
  })
}

export const getDonationsRaw = store => getDetailData(store).donations

export const getDonations = createSelector(getDonationsRaw, (donations) => groupByYear(donations))

export const getRolesRaw = store => getDetailData(store).roles

export const getRoles = createSelector(getRolesRaw, (roles) => {
  if (!roles) return []
  const rolesMap = roles.map((role) => ({
    ...role,
    year: role.endDate ? role.endDate.substring(0,4) : 9999
  }))
  return groupByYear(rolesMap)
})
