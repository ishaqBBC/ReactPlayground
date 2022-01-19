
import React, {useState} from 'react'; 
import Button from './components/Button'; 
import Statistics from './components/Statistics';




function App() {
  const initReview = {
    good: [],
    bad: [],
    neutral: []
  }
  const [review, setReview] = useState(initReview); 

  const handleClick = (text) => {
      return () => {
        if(text === 'good'){
          setReview({...review, good: review.good.concat(1)})
        }else if (text === 'bad'){
          setReview({...review, bad: review.bad.concat(-1)})
        }else{
          setReview({...review, neutral: review.neutral.concat(0)})
        }
      }
  }

  return (
    <>
      <h1>Give feedback </h1>
      <Button handleClick={handleClick}  text={'good'} />
      <Button handleClick={handleClick} text={'bad'} />
      <Button handleClick={handleClick}  text={'neutral'} />  

      <h1> Statistics </h1>
      <Statistics reviews={review} />
    </>
  );
}

export default App;
