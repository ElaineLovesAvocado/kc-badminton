import * as React from 'react';
import './match.css'
import Button from '@mui/material/Button';

import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 350,
  height: 200,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
}));

function shuffleArray(array) {
  let length = array.length;
  let shuffle = array.slice(); // copy of array
  // loop over the array
  for (let i = length - 1; i > 0; i -= 1) {
    let random = Math.floor(Math.random() * (i + 1)); // random card position
    let current = shuffle[i]; // current card
    // swap the random card and the current card
    shuffle[i] = shuffle[random]; // move the random card to the current position
    shuffle[random] = current; // put the current card in the random position
  }
  return shuffle; // return shuffled array
};

function formatMatch(array, formatString) {

    if (array.length % 4 != 0) {
      return "Please check the size of input players!! \n Need to be multiple of 4!"
    }

    if (array.length < 4){
      console.log(formatString)
      return formatString
    }
  
    while (array.length > 3) {
      formatString += '🏸' + array[0] + '&' + array[1] + '  🆚  ' + array[2] + '&' + array[3] + "\n"
      let newArr = array.slice(4)
      return formatMatch(newArr, formatString)
    }

}


const Match = () => {
  const [players, setplayers]  = React.useState("");
  const [match, setmatch] = React.useState([]);
  const [match2, setmatch2] = React.useState([]);


  const generateRandomMatch = (event) => {
      event.preventDefault();
      //var playersArr = playersRef.current.value.replace(/[0-9]/g, "").replace(/\./g,"").replace(/\s+/g, ' ').trim().split(' ')

      var playersArr = players.replace('1.', '').split(/[0-9]+\./)

      var shuffledArr1 = shuffleArray(playersArr)
      var shuffledArr2 = shuffleArray(playersArr)

      setmatch(shuffledArr1)
      setmatch2(shuffledArr2)

      console.log(shuffledArr1) 
      console.log(shuffledArr2)
  }

  return (
    <div className="body">
    
          <p>Generate random match:</p>
          <div className='firstGame'>
            <textarea name="postContent" placeholder='Input players with number at front. Example: 1.Lin Dan 2. Yaqiong Huang 3. SiweiZ 4. An Se-young'
            rows={8} cols={45} value={players} onChange={e => setplayers(e.target.value)}> 
            
            </textarea>
          </div>
          <div className='submitButton'>
            <Button variant="contained" onClick={generateRandomMatch} >Submit</Button>
          </div>

          <div className='shuffledMatch'>

              <Stack direction="row" spacing={2}>
                <DemoPaper variant="elevation">
                  <pre className='teamMatch'>{formatMatch(match, ' ')}</pre>
                </DemoPaper>              
                <DemoPaper variant="elevation">
                  <pre className='teamMatch'>{formatMatch(match2, ' ')}</pre>
                </DemoPaper>
              </Stack>
          </div>

          
  </div>
  );
}

export default Match
