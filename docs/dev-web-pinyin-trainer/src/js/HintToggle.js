function HintToggle({ text, isChecked, onToggle }) {

  return (
    <div>
    <span className="slider-label">{ text }</span>
    <label className="switch">
      <input type="checkbox" defaultChecked={ isChecked } onChange={ onToggle }/>
      <span className="slider round"></span>
    </label>
    </div>
  );
}

export default HintToggle;