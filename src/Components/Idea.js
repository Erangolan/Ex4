import React, { useState } from 'react';
import { MdEdit, MdDelete, MdSave } from 'react-icons/md';
import './Idea.css';

export default function Idea (props) {
  const { onDelete, index, children, onChange } = props;
  const [editing, setEditing] = useState(false);

  let idea = {value: ''};
  const editIdea = () => setEditing(true);
  const deleteIdea = () => onDelete(index);
  
  const saveIdea = (event) => {
    event.preventDefault();
    console.log(idea.value, index);
    onChange(idea.value, index);
    setEditing(false);
  };

  function Form() {
    return (
      <div>
        <form>
          <textarea ref={element => idea = element} cols="30" rows="3" />
          <span>
            <button onClick={saveIdea}><MdSave /></button>
          </span>
        </form>
      </div>
    );
  }

  function UI() {
    return (
      <div className="idea">
        <div>{children}</div>
          <div className="buttons">
            <MdEdit id="edit" onClick={editIdea} className="btn btn-primary" />
            <MdDelete id="delete" onClick={deleteIdea} className="btn btn-primary" />
          </div>
      </div>
    );
  }

  return editing ? <Form /> : <UI />;
}

