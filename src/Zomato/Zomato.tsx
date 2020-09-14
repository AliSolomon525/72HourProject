import React from 'react';
import { ZomatoInterface } from './ZomatoInterface';

export interface ZomatoProps {
    latitude: number;
    longitude: number;
}
export interface ZomatoState {
    ZomatoResults: ZomatoInterface;
}

class Zomato extends React.Component<ZomatoProps,ZomatoState> {
    constructor(props: ZomatoProps) {
        super(props);
        this.state = {
            ZomatoResults: {}
        }
    }
    componentDidUpdate(prevProps: ZomatoProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.latitude !== prevProps.latitude) {
            fetch(`https://developers.zomato.com/api/v2.1/geocode?lat=${this.props.latitude}&lon=${this.props.longitude}`, {
                method: 'GET',
                headers: {
                    'user-key': 'f0e967e1b7213e6511c3900caf3f8aac',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then((json: ZomatoInterface) => {
                console.log(json)
                this.setState({ZomatoResults: json})
            })
        }
      }
    render() { 
        return ( <div>{this.state.ZomatoResults.nearby_restaurants !== undefined ? this.state.ZomatoResults.nearby_restaurants[0].restaurant.name : <></>}</div> );
    }
}
 
export default Zomato;