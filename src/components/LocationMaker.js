import { Icon } from "@iconify/react";
import locationIcon from '@iconify/icons-mdi/fire-alert'

import React from 'react'

export const LocationMaker = ({ lat, lng, onClick}) => {
  return (
    <div className="location-maker" onClick={ onClick }>
        <Icon icon = {locationIcon} className="location-icon"/>
    </div>
  )
}
