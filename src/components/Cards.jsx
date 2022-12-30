import React, { useLayoutEffect } from 'react';
import Modal from 'react-modal';
// ReactModal.setAppElement('#image');

const customStyles = {
    content: {
        transform: 'scale(1,1)',
        background: 'transparent',
        // width: '100%',
        // height:'auto',
    //   top: '50%',
    //   left: '50%',
    //   right: 'auto',
    //   bottom: 'auto',
    //   marginRight: '-50%',
    //   transform: 'translate(-50%, -50%)',
    },
  };


function Cards (props) {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal () {
        setIsOpen(true);
    }

    function closeModal () {
        setIsOpen(false)
    }

    return (
        <div className='flex items-center border-solid border-transparent border-4 rounded p-1 m-5 shadow-md shadow-black hover:scale-105'>
            <img id='image' onClick={openModal} src={props.image} alt="p" class='hover'style={{ width: '250px'}}/>
                <Modal 
                isOpen={modalIsOpen}
                style={customStyles}
                onRequestClose={closeModal}>
                    <div className='h-screen flex flex-col items-center'>
                    <button className="bg-orange-200 hover:shadow text-white font-bold py-2 px-4 rounded-full m-8 font-face-gm" onClick={closeModal}>Close</button>
                    <img src={props.image} alt="p" className='flex items-center jusfify-center p-8 ' style={{height:'80%'}} />
                    </div>
                </Modal>
        </div>)
}

export default Cards;