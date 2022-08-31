import React, {useState, useCallback} from 'react';
import Modal from 'react-modal';
import Colorpicker from './Colorpicker';

export default function Model(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }
    const closeModal= useCallback((anand)=>{
        setModalIsOpen(anand)
    },[])
    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',
          backgroundColor       : '#F0AA89'      
        }
    };
  return (
    <div>
      <button onClick={setModalIsOpenToTrue} className="btn btn-primary">Select color</button>
            <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={()=> setModalIsOpen(false)} ariaHideApp={false}>
             <button onClick={setModalIsOpenToFalse}>x</button>
             <Colorpicker pickColor={props.pickColor} pickBackColor={props.pickBackColor} closeModal={closeModal}/>
            </Modal>
    </div>
  )
}
