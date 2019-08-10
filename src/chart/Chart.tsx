import ReactEcharts from 'echarts-for-react';
import * as React from "react";

type CityProps = {
    years: string[],
    city: string,
    temps: Map<string,string>
}
export const Temperatures = (props: CityProps) =>
{
    let years = props.years.map((year)=><li>{year}</li>);
    let temperatures = Object.keys(props.temps).map((key) =><li>{key} {props.temps.get(key)}</li>);
    return <h1>{props.city}
        <ul>Years:
            {years}
        </ul>
        <ul>
            Temperatures:
            {temperatures}
        </ul>
        Hello World today!

    </h1>;
};
