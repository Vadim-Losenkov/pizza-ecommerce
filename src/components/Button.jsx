import React from 'react'
import classNames from 'classnames'

function Button({className, outline, test, children, onClick}) {
  return <button className={classNames(
    'button', className, {
      'button--outline': outline
    },
    {
      'button--test': test
    }
  )}
  onClick={onClick}>{children || 'Привет'}</button>
}

export default Button;