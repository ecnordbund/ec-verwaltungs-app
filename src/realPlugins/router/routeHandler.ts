import auth from '@/plugins/auth';
import eventbus from '@/plugins/eventbus';
import routerPlugin from '@/realPlugins/router/router';

const startPage = '/app'
const loginPage = '/login'

const routesWithOutLogIn = [loginPage]

// Router Guard
routerPlugin.router.beforeEach((to, from, next) => {
  // wenn /login und angemeldet -> startpage
  if (auth.isLogedIn()) {
    if (
      to.meta.userGroups !== undefined &&
      (to.meta.userGroups === '*' ||
        to.meta.userGroups.indexOf(
          auth._userGroupBezeichnung
        ) !== -1)
    ) {
      next()
    } else {
      next(startPage)
    }
  } else {
    if (routesWithOutLogIn.indexOf(to.fullPath) !== -1) {
      next()
    } else {
      next(loginPage)
    }
  }
})

eventbus.on('logedOut', () => {
  routerPlugin.router.push(loginPage)
})
