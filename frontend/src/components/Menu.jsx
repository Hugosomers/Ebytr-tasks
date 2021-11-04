import React, {useState} from 'react'
import Modal from 'react-modal';

import './css/menu.css';

import { AiOutlineClose } from 'react-icons/ai';


export default function Menu({classe, closeFunc, toggle}) {
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <div className="menu-container" id={classe}>

      <div className="close-icon-div">
        {toggle ? <AiOutlineClose  className="icons" onClick={() => closeFunc(false)} /> : null}
      </div>

      <button type="button" onClick={() => setIsOpen(true)}> Criar task </button>
      <button type="button"> Logout </button>

      <Modal
        isOpen={modalIsOpen}
      >
        <button onClick={() => setIsOpen(false)}>Fechar</button>
        <div>
          <h1>Insira as informações para adicionar sua task</h1>
        </div>
        <form>
        </form>
      </Modal>
    </div>
  );
}