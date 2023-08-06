

const TaskRow = ({task , onDelete, remainder}) => {
  return (
    <div 
        className={`task ${task.remainder ? "remainder" : ''}`} 
        onDoubleClick={()=> remainder(task.id)}
    >
      <h3>{task.title}  <i class="fa-solid fa-xmark" onClick={() => onDelete(task.id)}></i></h3>
      <p>{task.day}  </p>
    </div>
  )
}

export default TaskRow
