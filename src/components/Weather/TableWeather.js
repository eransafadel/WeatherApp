import classes from "./TableWeather.module.css";
import InfoWeatherItem from "./InfoWeatherItem";

const TableWeather = (props) => {
  const data = props.data;
  return (
    <table className={classes.myTable}>
      <tr>
        {data.map((x, index) => (
          <th>
            <InfoWeatherItem title={x.title} content={x.content} />
          </th>
        ))}
      </tr>
    </table>
  );
};

export default TableWeather;
