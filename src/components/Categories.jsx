import React from 'react'
const Categories = React.memo(function Categories({items, onClickItem}) {
  const [activeItem, setActiveState] = React.useState(null)

  const onSelectItem = (index) => {
    setActiveState(index)
    onClickItem(index)
  }

  return (
    <div className="categories">
      <ul>
        <li 
          className={activeItem === null ? 'active' : ''} 
          onClick={() => onSelectItem(null)}
        >
          Все
        </li>
        {items && items.map((name, index) => (
          <li 
            className={activeItem === index ? 'active' : ''}
            key={`${name}_${index}`}
            onClick={() => onSelectItem(index)}
          >{name}</li>
        ))}
      </ul>
    </div>
  )
})

export default Categories
