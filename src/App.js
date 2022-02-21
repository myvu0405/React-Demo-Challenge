import React from 'react';
import VenuesList from './VenuesList';

import axios from 'axios';
import './App.css';
import Search from './Search';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      latlong: '',
      venues: []
    }
  }

  componentDidMount () {
    this.getLocation();
  }

  getLocation = () => {//get current location of the user

    navigator.geolocation.getCurrentPosition( res => {
      console.log(res);
      this.setState( {
        latlong: `${res.coords.latitude},${res.coords.longitude}`
      })
    })
  }

  getVenues = (query) => {//get venues around the user's location

    const apiKey = 'fsq3hT3bmk58C32bDdjIAjPKhTvhAljdFn3ci5qIIyLt4p0=';

    const endpoint= 'https://api.foursquare.com/v3/places/search?'; //'https://api.foursquare.com/v2/venues/search?';
    const params= {
      // client_id: '1MPFOW3H1HE3FLPVWRTKLX2YPD22XQLO1Y5CHEIJCUGAOWV2',
      // client_secret: 'KUJJRJBAYUKBG44CDKPLSY2ZXSLIAOKR2ZSLGDMXRIU1V4NU',
      ll: this.state.latlong,
      radius: 100000,
      query: query,
      
      //v: '20220221'
    };
    const url = endpoint + new URLSearchParams(params);

    const options = {
      method: 'GET',
      url: url,
      headers: {
        Accept: 'application/json',
        Authorization: apiKey
      }
    };


    axios.request(options)
      .then(res => {
        console.log(res.data.results);
        this.setState({
          venues: res.data.results
        })
      })
      .catch(error => console.log(error))

  }

  render() {
    return (
      <div className="App">
          <h1>
            welcome to my app.
          </h1>
          <Search getVenues = {this.getVenues}/>
          <VenuesList venues={this.state.venues}/>
      </div>
    );
  }
}

export default App;
