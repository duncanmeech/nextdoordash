/**
 * store cards in a grid
 */

const data = [
  "New York",
  "San Francisco",
  "Los Angeles",
  "Toronto",
  "Chicago",
  "Houston",
  "Brooklyn",
  "San Diego",
  "Las Vegas",
  "Seattle",
  "Atlanta",
  "Queens",
  "Miami",
  "San Antonio",
  "Phoenix",
  "Denver",
  "Austin",
];

export default class TopCities extends React.Component {
  state = {
    cities: [],
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ cities: data });
    }, 1000);
  }
  render() {
    const { cities } = this.state;
    return (
      <div className="container">
        <p className="text title">Top Cities</p>
        {cities.map((city) => (
          <p className="text city">{city}</p>
        ))}
        <style jsx>{`
          .container {
            width: 100vw;
            padding-top: 10px;
            padding-bottom: 100px;
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: black;
          }
          .text {
            color: #c4c4c4;
            font-size: 12px;
          }
          .title {
            font-family: TTNorms-Bold;
          }
          .city {
            font-family: TTNorms;
            margin: 0 0 10px 0;
          }
        `}</style>
      </div>
    );
  }
}
