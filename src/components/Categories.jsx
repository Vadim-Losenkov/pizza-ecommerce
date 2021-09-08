import React from 'react'

// class Categories extends React.Component {

//   state = {
//     activeItem: 3
//   }

//   onSelectItem = index => {
//     this.setState({
//       activeItem: index
//     })
//   }

//   render() {
//     const {items} = this.props

//     return (
//       <div className="categories">
//         <ul>
//           <li>Все</li>
//           {items.map((name, index) => (
//             <li 
//               onClick={() => this.onSelectItem(index)} 
//               key={`${name}_${index}`} 
//               className={this.state.activeItem === index ? 'active' : ''}
//             >{name}</li>
//           ))}
//         </ul>
//       </div>
//     )
//   }
// }

function Categories({items, onClick}) {
  const [activeItem, setActiveState] = React.useState(null)

  return (
    <div className="categories">
      <ul>
        <li className="active">Все</li>
        {items.map((name, index) => (
          <li 
            className={activeItem === index ? 'active' : ''}
            key={`${name}_${index}`}
            onClick={() => setActiveState(index)}
          >{name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
