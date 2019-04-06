import React, { Component } from 'react';
import axios from 'axios';


class RestaurantList extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
       
        results: [],
        errorState: null,
        loading: false,
        };
    }
    
    componentDidMount () {
        this.getRestaurantsFromApi('Vancouver');
    }

    componentDidUpdate (prevProps, prevState) {
        if(this.props.searchLocationQuery !== prevProps.searchLocationQuery) {
            this.setState({
                results: [], 
            }, () => this.getRestaurantsFromApi(this.props.searchLocationQuery))
        }
    }

    getRestaurantsFromApi = (locationSearched) => {

        this.setState({ loading: true })
     axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${locationSearched}`, {
         headers: {
             Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
        },
          params: {
            categories: 'breakfast_brunch',
        }
        })
        .then((res) => {
            console.log(res.data.businesses)
        
            this.setState({ results: res.data.businesses, loading: false })
        })
        .catch((err) => {
           
            this.setState({ errorState: `Sorry we coudln't find information related to the location you search, do you want to try something else?`, loading: false })
        })
    }

    renderEmptyState () {
        return (
            <h2 className = "heading-tertiary">`Hang tight! We are working on getting you the list of best brunch spots in your neighbourhood! `</h2>
        )
    }

    renderRestaurantInfo () {
        
        const RestaruantList = this.state.results.map((result) => {
            
            return (    
                <div 
                    className = "RestaurantInfo"
                    key = {result.id}
                >
                    <img src = {result.image_url} alt = "" className = "RestaurantInfo__img" />
                    <h2 className = "heading-tertiary RestaurantInfo__name">{result.name}</h2>
                    
                    <p className = "RestaurantInfo__para">
                 
                        {result.location.display_address[0]}, {result.location.display_address[1]}
                    </p>
                    
                    <p className = "RestaurantInfo__para">
                        */}
                        {result.phone}
                    </p>

                   

                    <p className = "RestaurantInfo__reviewCount"> Based on {result.review_count} Reviews</p>
               
                    <a 
                        href= {result.url} 
                        className = "RestaurantInfo__website">
                            More infomration on Yelp
                    </a>


                </div>  
            );
        });

        return(
            <div className="RestuarantList__gallery">{RestaruantList}</div>
        )
    }

    render() {
        return (
            
            <section className="RestuarantList">
                {this.state.results.length ? this.renderRestaurantInfo() : this.renderEmptyState()}

           
                {!!this.state.errorState &&
                    <h1>{this.state.error}</h1>
                }   
            </section>
        )}

}
export default RestaurantList
