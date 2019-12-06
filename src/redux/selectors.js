export const getSearchQuery = store => store.app.searchQuery
export const getSearchResults = store => store.app.searchResults
export const getDetailData = store => store.app.detail
export const getFullName = store => {
	const detail = getDetailData(store)
	return `${detail.titlePrefix} ${detail.firstName} ${detail.lastName} ${detail.titleSuffix}` // TODO lip naformatovat
}
