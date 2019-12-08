export const getSearchQuery = store => store.app.searchQuery
export const getSearchResults = store => store.app.searchResults
export const isSearchLoading = store => store.app.loadingSearch
export const isDetailLoading = store => store.app.loadingDetail
export const getDetailData = store => store.app.detail
export const getPersonalInsolvency = store => getDetailData(store).personalInsolvency
export const getCompanyInsolvency = store => getDetailData(store).companyInsolvency

export const getFullName = store => {
	const detail = getDetailData(store)
	return `${detail.titlePrefix} ${detail.firstName} ${detail.lastName} ${detail.titleSuffix}`.trim() // TODO lip naformatovat
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

export const getDonations = store => groupByYear(getDetailData(store).donations)

export const getRoles = store => {
  const detailData = getDetailData(store).roles
  for(let i in detailData) {
    detailData[i].year = detailData[i].startDate.substring(0,4)
  }
  return groupByYear(detailData)
}
