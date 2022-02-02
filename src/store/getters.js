const getters = {
    getAppBarTitleDefault: (state) => state.appBar.titleDefault,
    getAppBarTitleMobile: (state) => state.appBar.titleMobile,
    getNavigationItems: (state) => state.navigationItems,
    getNavigationValue: (state) => state.navigationValue,

    getGroups: (state) => state.groups,
    getMockTrainings: (state) => state.mockTrainings
};

export default getters