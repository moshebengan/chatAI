import './newPrompt.css'

const NewPrompt = () => {
  return (
    <div className='newPrompt'>
      <form action="" className="newForm">
        <label htmlFor="file"></label>
        <input type="file" multiple={false} />
      </form>
    </div>
  )
}

export default NewPrompt
