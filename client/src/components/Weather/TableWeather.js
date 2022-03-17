import classes from "./TableWeather.module.css";
import InfoWeatherItem from "./InfoWeatherItem";

const TableWeather = (props) => {
  const data = props.data;
  return (
    <table className={classes.myTable}>
      <tbody>
      <tr>
        {data.map((x, index) => (
          <th key={index}>
            <InfoWeatherItem title={x.title} content={x.content} />
          </th>
        ))}
      </tr>
      </tbody>
    </table>
  );
};

export default TableWeather;
