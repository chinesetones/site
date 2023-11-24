function SubmitButton({ text, isDisabled, handleClick }) {
  return (
    <div className="submitbutton-div">
      { isDisabled ?
        <a
          className={"disabled-button"}>
          {text}
        </a> :
        <a
          onClick={handleClick}
          className={"pressible-button"}>
          {text}
        </a>
      }       
    </div>
  )


}

export default SubmitButton;