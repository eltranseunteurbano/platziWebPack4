import React from 'react'
import data from '../../../json/data.json'
import Loader from '../loader/Loader';

console.log(data.loaders);
const App = () => {

    const [loaderList, setLoaderList] = React.useState([])

    const handleClick = () => {
      setLoaderList(data.loaders)
    }

    return(
        <>         
            <ul>
                {
                loaderList.map(item => <Loader data={item.name} key={item.id}/> )
                }
            </ul>
            
            <button onClick={handleClick}>Mostrar lo aprendido hasta el momento</button>
         </>
    )	  
}	

export default App;