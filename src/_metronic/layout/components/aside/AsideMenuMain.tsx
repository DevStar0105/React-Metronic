/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
import {KTSVG} from '../../../helpers'
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'

export function AsideMenuMain() {
  const intl = useIntl()

  return (
    <>
      <AsideMenuItem
        to='/ventures'
        icon='/media/icons/duotune/art/cube.svg'
        title='Ventures'
        fontIcon='bi-app-indicator'
      />
      <AsideMenuItem
        to='/explore'
        icon='/media/icons/duotune/art/compass.svg'
        title='Explore'
        fontIcon='bi-app-indicator'
      />
      <AsideMenuItem
        to='/favorites'
        icon='/media/icons/duotune/art/heart.svg'
        title='Favorites'
        fontIcon='bi-app-indicator'
      />
      <AsideMenuItem
        to='/myventures'
        icon='/media/icons/duotune/art/bookmark.svg'
        title='My ventures'
        fontIcon='bi-app-indicator'
      />
      <AsideMenuItemWithSub
        to='/crafted/accounts'
        title='Nests'
        icon='/media/icons/duotune/art/layers.svg'
        fontIcon='bi-person'
      >
        <AsideMenuItem to='/nests/all' title='All Nests' hasBullet={false} />
        <AsideMenuItem to='/nests/my' title='My Nests' hasBullet={false} />
        <AsideMenuItem to='/nests/pending' title='Pending Acceptance' hasBullet={false} />
      </AsideMenuItemWithSub>
      <AsideMenuItem
        to='/profile'
        icon='/media/icons/duotune/art/profile.svg'
        title='Profile'
        fontIcon='bi-app-indicator'
      />
      <AsideMenuItem
        to='/createven'
        icon='/media/icons/duotune/art/plus.svg'
        title='Create Venture'
        fontIcon='bi-app-indicator'
      />
      <AsideMenuItem
        to='/faq'
        icon='/media/icons/duotune/art/help.svg'
        title='FAQ'
        fontIcon='bi-layers'
      />
    </>
  )
}
