import React from 'react';
import Modal from 'react-modal'

const OptionModal=(props)=>{
return (
<Modal className="modal"
isOpen={!!props.selectedOption}
contentLabel='Selected Option'
closeTimeoutMS={200}
>
<h3 className="modal__title">You should get some </h3>
{props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
<button className="button" onClick={props.confirmSelected}> Ok </button>
    </Modal>
)
}


export default OptionModal
