import {Title} from "./components/Title";
import {Form} from "./components/Form";
import {CoinResult} from "./components/CoinResult";
import { useFormQuery } from "./hook";


const App = () => {
  const {handleSubmit, query} = useFormQuery();

  return (<div>
    <Title />
    <Form handleSubmit={handleSubmit}/>  

    {query.length >0 && <CoinResult query={query}/>}
  </div>)
}

export default App
