import React, { useState, useEffect } from 'react';
import Idea from './Idea';
import { MdAdd } from 'react-icons/md';
import './IdeaList.css';
import Divider from '@material-ui/core/Divider';
import { ScrollView } from "@cantonjs/react-scroll-view";


export default function IdeasList() {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
      async function fetchData(){
        let data = [];

        try {
          data = await fetch('https://jsonplaceholder.typicode.com/posts')
          .then(res => res.json());
        } catch (err) {
          console.log(err);
        }
      
        const loadIdeas = data.map(item => ({ id: item.id, title: item.title, body: item.body }));
        return setIdeas(loadIdeas); 
    }
    fetchData()
  }, []);

  const updateIdea = (newIdea, i) => {
    setIdeas(prevState => prevState.map(data => data.id !== i ? data : { ...data, title: newIdea }));
    console.log(`update ${i}: ${newIdea}`)
  };

  const deleteIdea = (id) => {
    console.log(`deleted: ${id}`);
    setIdeas(prevState => prevState.filter(idea => idea.id !== id));
  };

  const nextID = (ideas = []) => {
    let max = ideas.reduce((prev, curr) => prev.id > curr.id ? prev.id : curr.id, 0);
    return ++max;
  };

  const addIdea = ({ event = null, id = null, txt = 'default title', group = 'default group' }) => {
    console.log(event, id, txt, group);
    setIdeas(prevState => ([
        ...prevState, {
          id: id !== null ? id : nextID(prevState),
          title: txt,
          body: group,
        }])
    )
  };

  const renderEachIdea = (item, i) => {
    return (
      <div key={i} className="card">
        <div className="card-body">
          <Idea
            index={ item.id }
            onChange={ updateIdea }
            onDelete={ deleteIdea }
          >
            <p className="card-text">{ item.title }</p>
          </Idea>
          <Divider/>
        </div>
      </div>
    );
  };

    return (
      <ScrollView className="ideasList">
        { ideas.map(renderEachIdea) }
      </ScrollView>
    );
}



/*const renderEachIdea = (item, i) => {
    return (
      <div
        key={ `container${item.id}` }
        className="card"
      >
        <div className="card-body">
          <Idea
            index={ item.id }
            onChange={ updateIdea }
            onDelete={ deleteIdea }
          >
            <p className="card-text">{ item.title }</p>
          </Idea>
          <Divider/>
        </div>
      </div>
    );
  };*/