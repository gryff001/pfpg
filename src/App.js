import { Component } from 'react';
import './App.css';
//import Navbar from './Navbar';
import Footer from './footer';
import './footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      data: [],
      loaded: false
    }
  }
  async componentDidMount(){
    const url= "https://randomuser.me/api/"
    await fetch(url)
    .then((response)=> response.json())
    .then((response)=>{
    this.setState({data:response.results,loaded: true})
    })
 
 }
  render(){
    var {data , loaded} =this.state
    if(!loaded){
      return <h1>loading........</h1>
    }
    else{
      return(
        <div className='container-fluid nav_bg col-10 '>
        {data.map(dat=>(
          
        <div className='App'>
        <div>
          <nav className="navbar navbar-light bg-light" background-color='aqua'>
          <div className="container-fluid">
            <a className="navbar-brand" href={dat.picture.large}>
              <img src={dat.picture.thumbnail} alt={dat.name.first} width="30" height="24" className="d-inline-block align-text-top" border="solid black 5px"
               style={{
                width: 30,
                height: 30,
                borderRadius: 200 / 2,
                borderColor: 'white',
                borderWidth: 2,
            }}/>
              <strong>
              <div className='d-inline-block align-text-top'>
                   {dat.name.first} {dat.name.last}
              </div>
              </strong>
            </a>
            <form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
          <div className="form-group mb-0">
            <div className="input-group input-group-alternative">
              
              <input className="form-control" placeholder="Search" type="text"/>
            </div>
          </div>
        </form>
            
              <button>
                  settings
              </button>
        </div>
        </nav>
        </div>
        <div className='mx-auto' style={{fontcolor: 'grey',textAlign: 'center',fontSize:'30px'}}>
          <img src={dat.picture.medium} alt={dat.name.first}/>
          <h1 >
            {dat.name.first}'s Profile
          </h1>
          <div>
          <table>
            <thead>
              <tr>
              <th>Name</th>
              <th>{dat.name.title} {dat.name.first} {dat.name.last}</th>
              </tr>
              <tr>
              <th>Gender</th>
              <th>{dat.gender}</th>
              </tr>
              <tr>
              <th>DOB</th>
              <th>{dat.dob.date} </th>
              </tr>
              <tr>
              <th>Age</th>
              <th>{dat.dob.age}</th>
              </tr>
              <tr>
              <th>Contact</th>
              <th>{dat.cell} </th>
              </tr>
              <tr>
              <th>Email</th>
              <th>{dat.email}</th>
              </tr>
              <tr>
              <th>Address</th>
              <th>{dat.location.street.number} {dat.location.street.name}</th>
              </tr>
              <tr>
              <th>City</th>
              <th>{dat.location.city}</th>
              </tr>
              <tr>
              <th>PIN</th>
              <th>{dat.location.postcode}</th>
              </tr>
              <tr>
              <th>Country</th>
              <th>{dat.location.country}</th>
              </tr>
              <tr>
              <th>Latitude</th>
              <th>{dat.location.coordinates.latitude}</th>
              </tr>
              <tr>
              <th>Longitude</th>
              <th>{dat.location.coordinates.longitude}</th>
              </tr>
              
              
            </thead>
          </table>

          </div>
        </div>
        
        
        
      </div>
        ))}
        
        <button type="button" class="btn btn-outline-primary">update</button>
        <a href='/'>
        <button type="button" class="btn btn-outline-primary">Refresh</button>
        </a>
        <Footer/>
        </div>
        
      );
    }
 
    

  }
    
  
}

export default App;
