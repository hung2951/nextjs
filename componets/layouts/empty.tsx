import React from 'react'
import { LayoutProps } from '../../models/layout'

type Props = {}

const LayoutEmpty = (props: LayoutProps) => {
  return (
    <div>
        {props.children}
    </div>
  )
}

export default LayoutEmpty