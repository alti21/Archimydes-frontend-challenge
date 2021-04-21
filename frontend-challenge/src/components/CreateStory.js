import React, { useState } from 'react'
import { createStory } from '../redux/actions'
import { useDispatch } from "react-redux";

const CreateStory = () => {

    const [summary, setSummary] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [complexity, setcomplexity] = useState("");

    const usedispatch = useDispatch();
    const userCreateStory = (summary, description, type, complexity) => usedispatch(createStory({
                                                                                    'summary': summary,
                                                                                    'description': description,
                                                                                    'type': type,
                                                                                    'complexity': complexity 
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

    const handleSubmit = e => {
        e.preventDefault();
        userCreateStory(summary,description,type,complexity)
      //  setTimeout(()=> history.push("/user"), 1000 );
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
                    <option value="enhancement">Enchancement</option>
                    <option value="bugfix">Bugfix</option>
                    <option value="development">Development</option>
                    <option value="qa">QA</option>
                </select>
                <label for="complexity">Complexity:</label>
                <select name="complexity" onChange={handleComplexityChange}>
                    <option value="low">Low</option>
                    <option value="mid">Mid</option>
                    <option value="high">High</option>
                </select>
                <label for="time">Estimated time for completion:</label>
                <input name="time" type='text' />
                <label for="cost">Cost:</label>
                <input name="cost" type='number' />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default CreateStory;