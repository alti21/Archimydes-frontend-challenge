import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addStory } from '../redux/actions'
import { getStories, viewStory } from '../redux/actions' //OUR ACTIONS
import history from '../utils/history';
import { withRouter } from 'react-router-dom';

const StoryList = () => {


    const currStories = useSelector((state)=> state.storyReducer.stories)
    const usedispatch = useDispatch();
    const userStories = () => usedispatch(getStories());
    const viewStories = (id) => usedispatch(viewStory(id));
    // let story = {}
      useEffect(() => {
        userStories()

     }, []);
     console.log('test')
     console.log(currStories)


    const admin = useSelector((state)=> state.loginReducer.isAdmin)
  
    const handleClick = id => {
        
        console.log('test')
        if(admin) {//admin click on story to view using get request with id, use {story.id} in this file
            viewStories(id)
            setTimeout(()=> history.push("/userStory"), 1000 )
        }
    }

    const backgroundColor = status => {
        if(status === 'accepted') {
            return 'bg-green'
        }
        else if(status === 'rejected') {
            return 'bg-red'
        }
    }

    return (
        <div>
            
            <section>
                <header>
                    
                        <div className='col'><strong>Summary</strong></div>
                        <div className='col'><strong>Description</strong></div>
                        <div className='col'><strong>Type</strong></div>
                        <div className='col'><strong>Complexity</strong></div>
                        <div className='col'><strong>Time</strong></div>
                        <div className='col'><strong>Cost</strong></div>
                   
                </header>
                
                {currStories.map(story => {
                return (
                    <div className={`row bg-black text-white ${backgroundColor(story.status)}`} onClick={()=>handleClick(story.id)}>
                        <div className='col'>{story.summary}</div>
                        <div className='col'>{story.description}</div>
                        <div className='col'>{story.type}</div>
                        <div className='col'>{story.complexity}</div>
                        <div className='col'>{story.estimatedHrs}</div>
                        <div className='col'>{story.cost}</div>
                    </div>   
                    
                )
            })}
            </section>
            
        </div>
    )
}



export default withRouter(StoryList);
