import React, { useState } from 'react'
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { handleEdit } from '../redux/action';




const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


Modal.setAppElement('#root');

const EditTask = ({tache}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [text, setText] = useState(tache.action)
    const dispatch=useDispatch()


  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const handeleSubmit=(e)=>{
      const newTask={
          id:tache.id,
          isDone:tache.isDone,
          action:text
      }
      dispatch(handleEdit(newTask))
      closeModal()

  }

  return (
    <div>
         <button onClick={openModal}>Edit</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
          <form action="" onSubmit={handeleSubmit}>
              <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
              <button>cancel</button>
              <button onClick={()=>closeModal()}>confirm</button>

          </form>
      </Modal>
    </div>
  )
}

export default EditTask