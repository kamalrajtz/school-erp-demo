export const ACTIVITY_CONFIGS = {
    cultural: {
        type: 'cultural',
        listTitle: 'Cultural List',
        formTitle: 'Cultural Information',
        addButtonLabel: 'Add New Cultural Activity',
        personLabel: 'Coordinator',
        personField: 'coordinator',
        adminRoutes: {
            list: '/admin/activities/cultural-list',
            add: '/admin/activities/add-cultural',
        },
        directorRoutes: {
            list: '/director/activities/cultural-list',
            add: '/director/activities/add-cultural',
        },
    },
    sports: {
        type: 'sports',
        listTitle: 'Sports List',
        formTitle: 'Sports Information',
        addButtonLabel: 'Add New Sports Activity',
        personLabel: 'Coach',
        personField: 'coach',
        adminRoutes: {
            list: '/admin/activities/sports-list',
            add: '/admin/activities/add-sports',
        },
        directorRoutes: {
            list: '/director/activities/sports-list',
            add: '/director/activities/add-sports',
        },
    },
    competition: {
        type: 'competition',
        listTitle: 'Competitions List',
        formTitle: 'Competition Information',
        addButtonLabel: 'Add New Competition',
        personLabel: 'Coordinator',
        personField: 'coordinator',
        adminRoutes: {
            list: '/admin/activities/competitions-list',
            add: '/admin/activities/add-competition',
        },
        directorRoutes: {
            list: '/director/activities/competitions-list',
            add: '/director/activities/add-competition',
        },
    },
}

export const getActivityConfig = (activityType) => ACTIVITY_CONFIGS[activityType]

export const getActivityRoutes = (activityType, roleKey) => {
    const config = getActivityConfig(activityType)
    return roleKey === 'admin' ? config.adminRoutes : config.directorRoutes
}
