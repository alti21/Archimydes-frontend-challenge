import React from 'react'

const CreateStory = () => {

    return (
        <div>
            <form className='create-story-form'>
                <label for="summary">Summary:</label>
                <input name="summary" type='text' />
                <label for="desc">Description:</label>
                <textarea name="desc" type='text' />
                <label for="type">Type:</label>
                <select name="type">
                    <option value="enhancement">Enchancement</option>
                    <option value="bugfix">Bugfix</option>
                    <option value="development">Development</option>
                    <option value="qa">QA</option>
                </select>
                <label for="complexity">Complexity:</label>
                <select name="complexity">
                    <option value="Low">Low</option>
                    <option value="Mid">Mid</option>
                    <option value="High">High</option>
                </select>
                <label for="time">Estimated time for completion:</label>
                <input name="time" type='text' />
                <label for="cost">Cost:</label>
                <input name="cost" type='number' />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default CreateStory;