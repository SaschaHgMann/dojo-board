const getters = {
    getAppBarTitle: (state) => state.appBar.title,
    getBottomNavigationItems: (state) => state.bottomNavigationItems,

    getGroups: (state) => state.groups,
    getMockTrainings: (state) => state.mockTrainings
};

export default getters