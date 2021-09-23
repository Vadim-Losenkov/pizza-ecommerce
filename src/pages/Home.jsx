import React from 'react'
import { Categories, SortPopup, PizzaBlock } from '../components'
import { useSelector, useDispatch } from 'react-redux'
import { setCategory } from '../redux/actions/filters'

const categoryNames = [
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые',
]

const sortItems = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'alphabet' }
]

function Home() {
  const dispatch = useDispatch()
  const items = useSelector(({ pizzas }) => pizzas.items)

  const onSelectCategory = React.useCallback(
    index => {
      dispatch(setCategory(index))
    },
    [dispatch],
  )

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={onSelectCategory} items={categoryNames} />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          items && items.map(obj => (<PizzaBlock key={`${obj.name}_${obj.id}`} {...obj} />))
        }
      </div>
    </div>
  )
}

export default Home
