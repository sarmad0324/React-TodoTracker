import TaskRow from "./TaskRow"

const Task = ({tasks , onDelete , remainder}) => {
    
  return (
    <>
      {tasks.map((task) => (
        <TaskRow 
            key={task.id} 
            task={task}
            onDelete ={onDelete}
            remainder ={remainder}
        />
      ))}
    </>
  )
}

export default Task
