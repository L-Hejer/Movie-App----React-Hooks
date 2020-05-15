import React, { useState } from 'react';
import Modal from 'react-modal';

import './AddMovie.css';

Modal.setAppElement('#root');

const AddMovie = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button className='Add-btn' onClick={openModal}>
        +
      </button>
      <Modal
        className='add-modal'
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <h1 className='addMovie-h1'>Add A Movie</h1>
        <form>
          <label>Movie Name</label>
          <input
            type='text'
            name='name'
            onChange={(e) => props.setName(e.target.value)}
          />
          <label>Movie Rate</label>
          <input
            type='text'
            name='rating'
            onChange={(e) => props.setRating(e.target.value)}
          />
          <label>Movie Release Date</label>
          <input
            type='text'
            name='date'
            onChange={(e) => props.setDate(e.target.value)}
          />
          <label>Movie Image</label>
          <input
            type='text'
            name='image'
            onChange={(e) => props.setImage(e.target.value)}
          />
                    <label>Movie Summary</label>
          <input
            type='text'
            name='description'
            onChange={(e) => props.setDescription(e.target.value)}
          />
        </form>
        <button
          className='Modal-btn'
        onClick={props.addMovie}
    
        >
          Submit
        </button>
        <button className='Modal-btn' onClick={closeModal}>
          close
        </button>
      </Modal>
    </div>
  );
};

export default AddMovie;
