//import the axios HTTP client to communicate with the API
import axios from 'axios';
class JeopardyService {
    constructor(url = 'http://jservice.io/api/random', service = axios.create()){
        this.url = url;
        this.client = clientInformation
        
    }
    getQuestion(){
        return this.client.get(this.url)
    }
    getCategory(){
        return this.client.getCategory().then(this.url + "/category")
        
      }
    
    }
    
    
    
export default JeopardyService;