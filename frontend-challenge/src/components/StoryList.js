import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addStory } from '../redux/actions'
import { getStories } from '../redux/actions' //OUR ACTIONS

const arr = [];

const StoryList = () => {

    const [ storyArray, setStoryArray ] = useState([])

    const currStories = useSelector((state)=> state.storyReducer.stories)
    const usedispatch = useDispatch();
    const userStories = (email, password, isAdmin) => usedispatch(getStories());
    // let story = {}
      useEffect(() => {
        userStories()

       // setStoryArray([...storyArray, currStory])
       // arr.push(currStory)
        // setStoryArray([...storyArray, currStory])
    //     localStorage.setItem("stories", storyArray);
    //     console.log('test')
    //     setTimeout(()=> {
    //         story = localStorage.getItem('stories');
    //         console.log(story)
    //     }, 500)
     }, []);
     console.log('test')
     console.log(currStories)
    
   // console.log(storyArray)

  //  arr.push(storyArray)

    //arr.push(currStory)
   //console.log(arr)
   // const currStory = useSelector((state)=> state.storyReducer.stories)

    //console.log(currStory[0])

    const admin = useSelector((state)=> state.loginReducer.isAdmin)
  //  console.log(admin)
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
                    <div className='row'>
                        <div className='col'>{story.summary}</div>
                        <div className='col'>{story.description}</div>
                        <div className='col'>{story.type}</div>
                        <div className='col'>{story.complexity}</div>
                        <div className='col'>{story.time}</div>
                        <div className='col'>{story.cost}</div>
                    </div>   
                    
                )
            })}

            {admin ? 
                (<div>admin</div>) 
                : 
                (<div>user</div>)
            }
            
            </section>
            
        </div>
    )
}



export default StoryList;
