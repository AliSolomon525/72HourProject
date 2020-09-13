import React from 'react'
import { GeoState, GeoProps } from '../App';

class Zomato extends React.Component<GeoProps, GeoState> {
    constructor(props: GeoProps) {
        super(props);
    }
    componentDidMount() {
        fetch(`https://developers.zomato.com/api/v2.1/geocode?lat=${this.state.latitude}&lon=${this.state.longitude}`, {
            method: 'GET',
            headers: {
                'Authorization': 'f0e967e1b7213e6511c3900caf3f8aac',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then((json: any) => {
            console.log(json)
            this.setState({results: json.results})
        })
    }
    render() { 
        return ( <div></div> );
    }
}
 
export default Zomato;