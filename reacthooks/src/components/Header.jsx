import React from 'react'
import { memo } from 'react'

const Header = (props) => {
    console.log("Render")
  return (
    <div>
        {props.title}
    </div>
  )
}

export default memo(Header);