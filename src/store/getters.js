const getters = {
    getAppBarTitle: (state) => state.appBar.title,
    getNavigationItems: (state) => state.navigationItems,
    getNavigationValue: (state) => state.navigationValue,

    getGroups: (state) => state.groups,
    getMockTrainings: (state) => state.mockTrainings
};

export default getters