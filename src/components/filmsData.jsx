import React, { Component } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";

class FilmsData extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false
    };
  }
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  render() {
    console.log(" Film Data " + this.props.moviesList.title);
    let movieInfo = this.props.moviesList;
    console.log("ID = " + movieInfo.id);
    return (
      <div
        key={movieInfo.id}
        className="card border-white col-2-md col-2-sm offset-md-*"
      >
        <img
          src={
            "https://image.tmdb.org/t/p/w185_and_h278_bestv2/" +
            movieInfo.poster_path
          }
          className="card-img-top"
          alt="..."
        />
        <div className="border border-top-0">
          <h5 className="card-header text-danger">{movieInfo.title}</h5>
          <div className="card-body">
            <p className="card-text text-truncate">{movieInfo.overview}</p>
            <Button btn btn-secondary onClick={this.toggle}>
              More Info
            </Button>
            <Collapse className="mt-auto p-2" isOpen={this.state.collapse}>
              <div className="card-title">Description</div>
              <div className="card-text text-secondary">
                {movieInfo.overview}
              </div>
              <div className="card-title">Genres: </div>
              <div className="card-text text-secondary">
                {movieInfo.genre_ids[0]}
              </div>
              <div className="card-title">Tag line: </div>
              <div className="card-text text-secondary">{movieInfo.title}</div>
              <div className="card-title">Runtime: </div>{" "}
              <div className="card-text text-secondary">
                {movieInfo.release_date}
              </div>
            </Collapse>
          </div>
        </div>
      </div>
    );
  }
}

export default FilmsData;
