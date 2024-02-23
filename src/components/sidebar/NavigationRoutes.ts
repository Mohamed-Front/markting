export interface INavigationRoute {
  name: string
  displayName: string
  meta: { icon: string }
  children?: INavigationRoute[]
}

export default {
  root: {
    name: '/',
    displayName: 'navigationRoutes.home',
  },
  routes: [
    {
      name: 'dashboard',
      displayName: 'dashboard',
      meta: {
        icon: 'vuestic-iconset-dashboard',
      },
      disabled: true,
      children: [

      ],
    },

    {
      name: 'statistics',
      displayName: 'users_management',
      meta: {
        icon: 'vuestic-iconset-user',
      },
      disabled: true,
      children: [
        {
          name: 'users',
          displayName: 'users',
        },
        {
          name: 'roles',
          displayName: 'roles',
        },
        {
          name: 'Permissions',
          displayName: 'permissions',
        },
      ],
    },


    {
      name: 'product',
      displayName: 'products',
      meta: {
        icon: 'eye',
      },

      children: [

        {
          name: 'product',
          displayName: 'product',
        },

      ],
    },
    {
      name: 'offer',
      displayName: 'offers',
      meta: {
        icon: 'eye',
      },

      children: [

        {
          name: 'offer',
          displayName: 'offer',
        },

      ],
    },
    {
      name: 'settings',
      displayName: 'settings',
      meta: {
        icon: 'settings',
      },

      children: [

        {
          name: 'about',
          displayName: 'about',
        },
        {
          name: 'contact',
          displayName: 'contact',
        },


      ],
    },

  ] as INavigationRoute[],
}
