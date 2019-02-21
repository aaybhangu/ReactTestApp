import React, { Component } from "react";
import FilmsData from "./filmsData";
class GetData extends Component {
  constructor(props) {
    super(props);
    // this.toggle = this.toggle.bind(this);
    this.state = {
      items: [],
      isloaded: false
      //collapse: false
    };
  }

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=ccfed2741988a33e9451dd753179c161"
    )
      .then(response => response.json())
      .then(json => {
        this.setState({
          isloaded: true,
          items: json
        });
      });
  }
  render() {
    const { isloaded, items } = this.state;
    console.log(items, isloaded);
    if (isloaded) {
      console.log(isloaded + " Items: " + items.results.length);
      let listArr = [];
      for (let i = 0; i < items.results.length; i++) {
        if (items.results[i].popularity > 10) {
          listArr.push(<FilmsData moviesList={items.results[i]} />);
        }
      }
      return (
        <div className="container">
          <div className="row justify-content-around">{listArr}</div>
        </div>
      );
    } else {
      return <p> Loading ....</p>;
    }
  }
}

export default GetData;
