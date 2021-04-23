import React, { useState } from 'react'
import { createStory } from '../redux/actions'
import { useDispatch } from "react-redux";
import history from '../utils/history';
import { withRouter } from 'react-router-dom';

const CreateStory = () => {

    const [summary, setSummary] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [complexity, setcomplexity] = useState("");
    const [time, setTime] = useState("");
    const [cost, setCost] = useState(0);

    const usedispatch = useDispatch();
    const userCreateStory = (summary, description, type, complexity, time, cost) => usedispatch(createStory({
                                                                                    'summary': summary,
                                                                                    'description': description,
                                                                                    'type': type,
                                                                                    'complexity': complexity,
                                                                                    'time': time,
                                                                                    'cost': cost 
                                                                                }));

    const handleSummaryChange = e => {
        setSummary(e.target.value)
    }  
    
    const handleDescriptionChange = e => {
        setDescription(e.target.value)
    }

    const handleTypeChange = e => {
        setType(e.target.value)
    }

    const handleComplexityChange = e => {
        setcomplexity(e.target.value)
    }

    const handleTimeChange = e => {
        setTime(e.target.value)
    }

    const handleCostChange = e => {
        setCost(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        //userCreateStory(summary,description,type,complexity,time,cost)
        setTimeout(()=> userCreateStory(summary,description,type,complexity,time,cost), 1000 );
        setTimeout(()=> history.push("/userStories"), 1000 );
    }

    return (
        <div>
            <form className='create-story-form'>
                <label for="summary">Summary:</label>
                <input name="summary" type='text' onChange={handleSummaryChange}/>
                <label for="desc">Description:</label>
                <textarea name="desc" type='text' onChange={handleDescriptionChange}/>
                <label for="type">Type:</label>
                <select name="type" onChange={handleTypeChange}>
                    <option value="enhancement" defaultValue>Enchancement</option>
                    <option value="bugfix">Bugfix</option>
                    <option value="development">Development</option>
                    <option value="qa">QA</option>
                </select>
                <label for="complexity">Complexity:</label>
                <select name="complexity" onChange={handleComplexityChange}>
                    <option value="low" defaultValue>Low</option>
                    <option value="mid">Mid</option>
                    <option value="high">High</option>
                </select>
                <label for="time">Estimated time for completion:</label>
                <input name="time" type='text' onChange={handleTimeChange}/>
                <label for="cost">Cost:</label>
                <input name="cost" type='number' onChange={handleCostChange}/>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default withRouter(CreateStory);