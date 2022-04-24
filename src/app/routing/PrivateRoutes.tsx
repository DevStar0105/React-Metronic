import React, {Suspense, lazy} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {FallbackView} from '../../_metronic/partials'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {MenuTestPage} from '../pages/MenuTestPage'
import { Ventures } from '../qolony/ventures'
import { Explore } from '../qolony/explore'
import { Favorites } from '../qolony/favorites'
import { MyVentures } from '../qolony/myven'
import { AllNests } from '../qolony/nests/all'
import { MyNests } from '../qolony/nests/my'
import { PendingNests } from '../qolony/nests/pending'
import { Profile } from '../qolony/profile'
import { CreateVenture } from '../qolony/createven'
import { Faq } from '../qolony/faq'

export function PrivateRoutes() {
  const BuilderPageWrapper = lazy(() => import('../pages/layout-builder/BuilderPageWrapper'))
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))

  return (
    <Suspense fallback={<FallbackView />}>
      <Switch>
        <Route path='/ventures' component={Ventures} />
        <Route path='/explore' component={Explore} />
        <Route path='/favorites' component={Favorites} />
        <Route path='/myventures' component={MyVentures} />
        <Route path='/nests/all' component={AllNests} />
        <Route path='/nests/my' component={MyNests} />
        <Route path='/nests/pending' component={PendingNests} />
        <Route path='/profile' component={Profile} />
        <Route path='/createven' component={CreateVenture} />
        <Route path='/faq' component={Faq} />
        <Route path='/dashboard' component={DashboardWrapper} />
        <Route path='/builder' component={BuilderPageWrapper} />
        <Route path='/crafted/pages/profile' component={ProfilePage} />
        <Route path='/crafted/pages/wizards' component={WizardsPage} />
        <Route path='/crafted/widgets' component={WidgetsPage} />
        <Route path='/crafted/account' component={AccountPage} />
        <Route path='/apps/chat' component={ChatPage} />
        <Route path='/menu-test' component={MenuTestPage} />
        <Redirect from='/auth' to='/dashboard' />
        <Redirect exact from='/' to='/dashboard' />
        <Redirect to='error/404' />
      </Switch>
    </Suspense>
  )
}
