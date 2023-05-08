const routerManagement = [
      {
        path: '/management',
        redirect:"/management/login",
      },
      {
        path: '/management/register',
        name: 'm-register',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "customer" */ '../../views/management/register/Register.vue')
      },
      {
        path: '/management/customer',
        name: 'm-customer',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "customer" */ '../../views/management/customer/CustomerList.vue')
      },
      {
        path: '/management/order',
        name: 'm-order',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "order" */ '../../views/management/order/OrderList.vue')
      },
      {
        path: '/management/order/:id',
        name: "m-order-detail",
        component: () =>
            import(/*webpackChunkName "orderdetail" */ '../../views/management/order/OrderDetail.vue')
      },
      {
        path: '/management/promotion',
        name: 'm-promotion',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "promotion" */ '../../views/management/promotion/PromotionList.vue')
      },
      {
        path: '/management/productcategory',
        name: 'm-productcategory',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "productcategory" */ '../../views/management/productcategory/ProductCategoryList.vue')
      },
      {
        path: '/management/product',
        name: 'm-product',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "product" */ '../../views/management/product/ProductList.vue')
      },
      {
        path: '/management/product/:id',
        name: "m-product-detail",
        component: () =>
            import(/*webpackChunkName "product" */ '../../views/management/product/ProductDetail.vue')
      },
      
      {
        path: '/management/report',
        name: 'm-report',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "promotion" */ '../../views/management/report/ReportList.vue')
      },
      {
        path: '/management/login',
        name: 'm-login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../../views/management/login/Login.vue')
      },
      {
        path: '/management/setting',
        component: () =>
                        import(/*webpackChunkName "branch" */ '../../views/management/setting/Setting.vue'),
        children: [
                { path: '', redirect: 'branch' },
                {
                    path: 'branch',
                    name: "m-branch",
                    component: () =>
                        import(/*webpackChunkName "branch" */ '../../views/management/branch/BranchList.vue')
                },
                {
                    path: 'employee',
                    name: "m-employee",
                    component: () =>
                        import(/*webpackChunkName "employee" */ '../../views/management/employee/EmployeeList.vue')
                },
                {
                  path: 'employee/:id',
                  name: "m-employee-detail",
                  component: () =>
                      import(/*webpackChunkName "employee" */ '../../views/management/employee/EmployeeDetail.vue')
                },
                {
                    path: 'role',
                    name: "m-role",
                    component: () =>
                        import(/*webpackChunkName "role" */ '../../views/management/role/RoleList.vue')
                },
                {
                  path: 'role/:id',
                  name: "m-role-detail",
                  component: () =>
                      import(/*webpackChunkName "roledetail" */ '../../views/management/role/RoleDetail.vue')
                },
            ]
      },
]
export default routerManagement;