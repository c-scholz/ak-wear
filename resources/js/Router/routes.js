const routes = [
    {
        path: '',
        component: require('../Pages/Index').default,
        name: 'index'
    },
    {
        path: '/bestellen',
        component: require('../Pages/Order').default,
        name: 'order'
    },
    {
        path: '/checkout',
        component: require('../Pages/Checkout').default,
        name: 'checkout'
    },
    {
        path: '/motiv',
        component: require('../Pages/Motif').default,
        name: 'motif'
    },
    {
        path: '/agb',
        component: require('../Pages/Agb').default,
        name: 'terms_and_conditions'
    },
    {
        path: '/impressum',
        component: require('../Pages/Imprint').default,
        name: 'imprint'
    },
    {
        path: '/datenschutz',
        component: require('../Pages/Privacy').default,
        name: 'privacy'
    },
]

export default routes;
