import './newPrompt.css'

const NewPrompt = () => {
  return (
    <div className='newPrompt'>
      <form action="" className="newForm">
        <label htmlFor="file">
            <img src="/attachment.png" alt="" />
        </label>
        <input id='file' type="file" multiple={false} />
      </form>
    </div>
  )
}

export default NewPrompt
