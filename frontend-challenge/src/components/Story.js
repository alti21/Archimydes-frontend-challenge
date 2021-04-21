import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setStatus } from '../redux/actions' //OUR ACTIONS
import history from '../utils/history';
import { withRouter } from 'react-router-dom';

const Story = () => {

    const currStory = useSelector((state)=> state.storyReducer.story)
    const usedispatch = useDispatch();
    const updateStatus = (id, status) => usedispatch(setStatus(id, status));

    const handleClick = (id, status) => {
        updateStatus(id, status)
        setTimeout(()=> history.push("/Archimydes-frontend-challenge/userStories"), 1000 )
    }

    return (
        <>
        <section>
            <header>
                <div className='col'><strong>Summary</strong></div>
                <div className='col'><strong>Description</strong></div>
                <div className='col'><strong>Type</strong></div>
                <div className='col'><strong>Complexity</strong></div>
                <div className='col'><strong>Time</strong></div>
                <div className='col'><strong>Cost</strong></div>
                <div className='col'><strong>Status</strong></div>
            </header>
            <div className='row'>
                <div className='col'>{currStory.summary}</div>
                <div className='col'>{currStory.description}</div>
                <div className='col'>{currStory.type}</div>
                <div className='col'>{currStory.complexity}</div>
                <div className='col'>{currStory.estimatedHrs}</div>
                <div className='col'>{currStory.cost}</div>
                <div className='col'>{currStory.status}</div>
            </div>
            
        </section>
        <div className='btns'>
            <button className='btn btn-accept' onClick={()=> handleClick(currStory.id,"accepted")}>Accept</button>
            <button className='btn btn-reject' onClick={()=> handleClick(currStory.id,"rejected")}>Reject</button>
        </div>
        </>
    )
}

export default withRouter(Story)




