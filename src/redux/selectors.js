export const getSearchQuery = store => store.app.searchQuery
export const getSearchResults = store => store.app.searchResults
export const isDetailLoading = store => store.app.loadingDetail
export const getDetailData = store => store.app.detail
export const getRoles = store => getDetailData(store).roles
export const getDonations = store => getDetailData(store).donations
export const getFullName = store => {
	const detail = getDetailData(store)
	return `${detail.titlePrefix} ${detail.firstName} ${detail.lastName} ${detail.titleSuffix}` // TODO lip naformatovat
}
export const getDescription = store => {
  return getDetailData(store).description
}
