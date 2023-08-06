import {useState} from 'react'

const AddTask = ({onAdd}) => {

    const[title, setTitle] = useState("")
    const [day, setDay] = useState("")
    const[remainder,setRemainder] = useState(false)

    function submitForm(e){
        e.preventDefault();
        if(!title){
            alert('please add a task')
            return
        }
        onAdd({title, day, remainder})
        setTitle("")
        setDay("")
        setRemainder(false)
    }

  return (

    <form className="add-form" onSubmit={submitForm}>

      <div className="form-control">
        <label>Task</label>
        <input 
            type="text"
            placeholder="Add Task"
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label>Date - Time</label>
        <input 
            type="date" 
            placeholder="Add day & time"
            value={day}
            onChange={(e)=> setDay(e.target.value)} 
        />
      </div>

      <div className="form-control form-control-check">
        
        <input 
            type="checkbox" 
            checked={remainder}
            value={remainder}
            onChange={(e)=> setRemainder(e.currentTarget.checked)}
        />
        <span>Set Remainder</span>
      </div>

      <button  type="submit" className='btn btn-block'>Submit</button>

    </form>

  )
}

export default AddTask
