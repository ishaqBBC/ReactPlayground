const Statistics = ({reviews}) => {
    const good = reviews.good.length
    const bad = reviews.bad.length
    const neutral = reviews.neutral.length;
    const all = good + bad + neutral; 
    const average = good - bad ;
    const positive = good/all ? good/all : '0'; 
    if(all > 0){ 
    return (
      <table>
        <caption>The Stats of the reviews</caption>
        <colgroup>
        <col className="numberOfReviews" span="3"></col> 
        <col className="computedReviews" span="3"></col>
        </colgroup>
        <tbody>
        <tr>
          <th scope="col" >Good</th>
          <th>Bad</th>
          <th>Netural</th>
          <th>All</th>
          <th>Average</th>
          <th>Positive</th>
        </tr>
        <tr>
          <td>{good}</td>
          <td>{bad}</td>
          <td>{neutral}</td>
          <td>{all}</td>
          <td>{average}</td>
          <td>{positive}%</td>
        </tr>
        </tbody>
      </table>
        )
    }else{
        return (
            <div>No Stats available </div>
        )
    }
  }

  export default Statistics