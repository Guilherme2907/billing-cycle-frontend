export const selectTab = tabId => {
    return ({
        type: "SELECT_TAB",
        payload: tabId
    })
}

export const showTabs = (...tabs) => {
    const tabsToShow = {};
    tabs.forEach(tab => tabsToShow[tab] = true)
    return ({
        type: "TAB_SHOWED",
        payload: tabsToShow
    })
}