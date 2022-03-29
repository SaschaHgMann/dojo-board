const getters = {
    
    // isLoggedIn: (state, getters) => {
    //     if(getters.getActiveUser !== {}) {
    //         return true
    //     }
    //     return false
    // },

    getActiveUser: (state) => state.activeUser,
    getAppBarTitleDefault: (state) => state.appBar.titleDefault,
    getAppBarTitleMobile: (state) => state.appBar.titleMobile,
    getNavigationItems: (state) => state.navigationItems,
    getNavigationValue: (state) => state.navigationValue,

    getGroups: (state) => state.groups,
    getMockTrainings: (state) => state.mockTrainings
};

export default getters