// Write your code here

import "./index.css"
const TodoItem = props => {
  const {list, deleteItem} = props
  const {title, id} = list
  const onDelete = () => {
    deleteItem(id)
  }
  return (
    <li className="text-container">
      <p className="title-text">{title}</p>
      <button className="delete-button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
