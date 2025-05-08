import React from 'react'

const ButtonItem = (props) => {
  const { language } = props
  return (
    <button className='btn'>
      {language.title}
    </button>
  )
}

export default ButtonItem
