import React,{useState} from 'react'

function Options() {


  const [selectedOptions, setSelectedOptions] = useState([]);
  const [result, setResult] = useState('');
  const [scrn, setScrn] = ('');
  const [qualified, setQualified] = useState('1');

  const handleOptionToggle = (optionId) => {
    const optionIndex = selectedOptions.indexOf(optionId);
    if (optionIndex > -1) {
      setSelectedOptions(selectedOptions.filter((_, index) => index !== optionIndex));
    } else {
      setSelectedOptions([...selectedOptions, optionId]);
    }
  };

  const handleResult = () => {
    if (selectedOptions.includes(1) && selectedOptions.includes(4) && selectedOptions.includes(7) && selectedOptions.includes(10)) {
      setResult('you are 1')&&setScrn(1);
    }
    else if (selectedOptions.length >= 4) {
      setResult('you are 2')&&setScrn(2)
    } else {
      setQualified('2')&&setResult('you are out');
    }
  };
    
  console.log(selectedOptions);
    

  return (
    <div>
      {qualified == 1 && <div>
        <h2>Choose your options:</h2>
        <div>
          <label>
            <input type="checkbox" checked={selectedOptions.includes(1)} onChange={() => handleOptionToggle(1)} />
            Option 1
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" checked={selectedOptions.includes(2)} onChange={() => handleOptionToggle(2)} />
            Option 2
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" checked={selectedOptions.includes(3)} onChange={() => handleOptionToggle(3)} />
            Option 3
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" checked={selectedOptions.includes(4)} onChange={() => handleOptionToggle(4)} />
            Option 4
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" checked={selectedOptions.includes(5)} onChange={() => handleOptionToggle(5)} />
            Option 5
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" checked={selectedOptions.includes(6)} onChange={() => handleOptionToggle(6)} />
            Option 6
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" checked={selectedOptions.includes(7)} onChange={() => handleOptionToggle(7)} />
            Option 7
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" checked={selectedOptions.includes(8)} onChange={() => handleOptionToggle(8)} />
            Option 8
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" checked={selectedOptions.includes(9)} onChange={() => handleOptionToggle(9)} />
            Option 9
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" checked={selectedOptions.includes(10)} onChange={() => handleOptionToggle(10)} />
            Option 10
          </label>
          <label>
            <input type="checkbox" checked={selectedOptions.includes(10)} onChange={() => handleOptionToggle(11)} />
            Option 11
          </label>
          <label>
            <input type="checkbox" checked={selectedOptions.includes(10)} onChange={() => handleOptionToggle(12)} />
            Option 12
          </label>
          <label>
            <input type="checkbox" checked={selectedOptions.includes(10)} onChange={() => handleOptionToggle(13)} />
            Option 13
          </label>
        </div>
        <button onClick={handleResult}>Submit</button>
        {result && <div>Your result: {result}</div>}
      </div>
      }
      {qualified==2 && <div> Not Quilified</div>}
    </div>
   
  );
}

export default Options
