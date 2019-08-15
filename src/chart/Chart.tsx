import ReactEcharts from 'echarts-for-react';
import * as React from "react";
import * as firebase from "firebase";
import * as _ from "lodash";
import Select from 'react-select';
import {ActionMeta} from "react-select/src/types";

export const DAYS: string[] = ["01-01", "01-02", "01-03", "01-04", "01-05", "01-06", "01-07", "01-08", "01-09", "01-10", "01-11", "01-12", "01-13", "01-14", "01-15", "01-16", "01-17", "01-18", "01-19", "01-20", "01-21", "01-22", "01-23", "01-24", "01-25", "01-26", "01-27", "01-28", "01-29", "01-30", "01-31", "02-01", "02-02", "02-03", "02-04", "02-05", "02-06", "02-07", "02-08", "02-09", "02-10", "02-11", "02-12", "02-13", "02-14", "02-15", "02-16", "02-17", "02-18", "02-19", "02-20", "02-21", "02-22", "02-23", "02-24", "02-25", "02-26", "02-27", "02-28", "02-29", "03-01", "03-02", "03-03", "03-04", "03-05", "03-06", "03-07", "03-08", "03-09", "03-10", "03-11", "03-12", "03-13", "03-14", "03-15", "03-16", "03-17", "03-18", "03-19", "03-20", "03-21", "03-22", "03-23", "03-24", "03-25", "03-26", "03-27", "03-28", "03-29", "03-30", "03-31", "04-01", "04-02", "04-03", "04-04", "04-05", "04-06", "04-07", "04-08", "04-09", "04-10", "04-11", "04-12", "04-13", "04-14", "04-15", "04-16", "04-17", "04-18", "04-19", "04-20", "04-21", "04-22", "04-23", "04-24", "04-25", "04-26", "04-27", "04-28", "04-29", "04-30", "05-01", "05-02", "05-03", "05-04", "05-05", "05-06", "05-07", "05-08", "05-09", "05-10", "05-11", "05-12", "05-13", "05-14", "05-15", "05-16", "05-17", "05-18", "05-19", "05-20", "05-21", "05-22", "05-23", "05-24", "05-25", "05-26", "05-27", "05-28", "05-29", "05-30", "05-31", "06-01", "06-02", "06-03", "06-04", "06-05", "06-06", "06-07", "06-08", "06-09", "06-10", "06-11", "06-12", "06-13", "06-14", "06-15", "06-16", "06-17", "06-18", "06-19", "06-20", "06-21", "06-22", "06-23", "06-24", "06-25", "06-26", "06-27", "06-28", "06-29", "06-30", "07-01", "07-02", "07-03", "07-04", "07-05", "07-06", "07-07", "07-08", "07-09", "07-10", "07-11", "07-12", "07-13", "07-14", "07-15", "07-16", "07-17", "07-18", "07-19", "07-20", "07-21", "07-22", "07-23", "07-24", "07-25", "07-26", "07-27", "07-28", "07-29", "07-30", "07-31", "08-01", "08-02", "08-03", "08-04", "08-05", "08-06", "08-07", "08-08", "08-09", "08-10", "08-11", "08-12", "08-13", "08-14", "08-15", "08-16", "08-17", "08-18", "08-19", "08-20", "08-21", "08-22", "08-23", "08-24", "08-25", "08-26", "08-27", "08-28", "08-29", "08-30", "08-31", "09-01", "09-02", "09-03", "09-04", "09-05", "09-06", "09-07", "09-08", "09-09", "09-10", "09-11", "09-12", "09-13", "09-14", "09-15", "09-16", "09-17", "09-18", "09-19", "09-20", "09-21", "09-22", "09-23", "09-24", "09-25", "09-26", "09-27", "09-28", "09-29", "09-30", "10-01", "10-02", "10-03", "10-04", "10-05", "10-06", "10-07", "10-08", "10-09", "10-10", "10-11", "10-12", "10-13", "10-14", "10-15", "10-16", "10-17", "10-18", "10-19", "10-20", "10-21", "10-22", "10-23", "10-24", "10-25", "10-26", "10-27", "10-28", "10-29", "10-30", "10-31", "11-01", "11-02", "11-03", "11-04", "11-05", "11-06", "11-07", "11-08", "11-09", "11-10", "11-11", "11-12", "11-13", "11-14", "11-15", "11-16", "11-17", "11-18", "11-19", "11-20", "11-21", "11-22", "11-23", "11-24", "11-25", "11-26", "11-27", "11-28", "11-29", "11-30", "12-01", "12-02", "12-03", "12-04", "12-05", "12-06", "12-07", "12-08", "12-09", "12-10", "12-11", "12-12", "12-13", "12-14", "12-15", "12-16", "12-17", "12-18", "12-19", "12-20", "12-21", "12-22", "12-23", "12-24", "12-25", "12-26", "12-27", "12-28", "12-29", "12-30", "12-31"];

class Series {
    name: string
    type: string
    data: string[]

    constructor(name: string, type: string, data: string[]) {
        this.name = name;
        this.type = type;
        this.data = data;
    }
}

const options = {
    title: {
        text: 'ECharts entry example'
    },
    tooltip: {},
    legend: {
        data: ['1951', '1984', '2018']
    },
    xAxis: {
        data: DAYS
    },
    yAxis: {},
    series: [] as Series[]
}
const firebaseConfig = {
    apiKey: "AIzaSyDv_AFGTRAMzUWkyNpCd-bRneIm6_ndON4",
    authDomain: "globalne-ocieplenie.firebaseapp.com",
    databaseURL: "https://globalne-ocieplenie.firebaseio.com",
    projectId: "globalne-ocieplenie",
    storageBucket: "globalne-ocieplenie.appspot.com",
    messagingSenderId: "183270572278",
    appId: "1:183270572278:web:c0b9035f55d0f70b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


class CityTemp {
    name: string = "";
    temperatures: Map<string, string> = new Map<string, string>();
}

class ReadResult {
    year: string = ""
    data: string[] = []
}

type DocumentSnapshot = firebase.firestore.DocumentSnapshot;

function dataForCityAndYear(city: string, year: string): Promise<ReadResult> {
    const db = firebase.firestore();
    const doc = db.collection(year).doc(city);
    const docs = doc.get();
    return docs.then(function (value: DocumentSnapshot) {
        let cityTemp: CityTemp = value.data() as CityTemp;
        let temperatures = new Map(Object.entries(cityTemp.temperatures));
        let result: string[] = []

        if (temperatures) {
            return {
                data: DAYS.map((day) => {
                    return temperatures.get(day)
                }), year: year
            }
        }
        return {data: result, year: year}
    });
}


type CityProps = {
    years: string[],
    city: string,
    temps: Map<string, string>
}


export class CitiesProps {
    cities: string[];
    updateCity: (name: string[]) => void;
    multiselect: boolean = false

    constructor(cities: string[], onChange: (name: string[]) => void) {
        this.cities = cities;
        this.updateCity = onChange
    }
}

class LabeledOption {
    label: string
    value: string

    constructor(label: string, value: string) {
        this.label = label;
        this.value = value;
    }
}

export class Cities extends React.Component<CitiesProps, {}, any> {

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {


        const handleInputChange = (newValue: Object | Object[] | null | undefined, action: ActionMeta) => {
            // TODO: how to proprely type this function in typescript?
            if (newValue) {
                if (_.isArray(newValue)) {
                    this.props.updateCity(newValue.map((v) => {
                        return (v as LabeledOption).value
                    }))
                } else {
                    this.props.updateCity([(newValue as LabeledOption).value])
                }
            }
        };
        let multiSelect = <Select
            options={this.props.cities.map((city => {
                return {'value': city, 'label': city};
            }))}
            isMulti={this.props.multiselect}
            onChange={handleInputChange}
        />;
        return multiSelect;
        // return <select multiple={this.props.multiselect} onChange={(e) => {
        //     if(this.props.multiselect){
        //         var options = e.target.options;
        //         var value = [];
        //         for (var i = 0, l = options.length; i < l; i++) {
        //             if (options[i].selected) {
        //                 value.push(options[i].value);
        //             }
        //         }
        //         console.log(value)
        //         this.props.updateCity(value)
        //     }
        //     else
        //     {
        //         this.props.updateCity([e.target.value])
        //     }
        // }}>
        //     {options}
        // </select>;
    }
}

export class ChartProps {
}

type ChartState = {
    city: string
    year: string[]
}

export class Chart extends React.Component<ChartProps, ChartState, any> {
    private echarts_react: any;


    constructor(props: ChartProps, context: any) {
        super(props, context);
        this.state = {city: "", year: []}
    }

    updateChart(city: string | undefined, year: string[] | undefined) {
        if (city) {
            this.setState({city})
        }
        if (year) {
            this.setState({year})
        }
    }


    componentDidUpdate(prevProps: Readonly<ChartProps>, prevState: Readonly<ChartState>, snapshot?: any): void {
        if (this.state.city && this.state.year.length > 0) {
            let promises = []
            for (const year in this.state.year) {
                promises.push(dataForCityAndYear(this.state.city, this.state.year[year]))
            }
            Promise.all(promises).then((dataList) => {
                let newOpts = _.clone(options);
                newOpts.legend = {data: this.state.year};
                newOpts.series = dataList.map(data => {
                    return {
                        name: data.year,
                        type: 'line',
                        data: data.data
                    }
                }) as Series[];

                this.echarts_react.getEchartsInstance().setOption(newOpts, true);
            })
        }
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return <div>
            <div>
                <Cities cities={["KIELCE-SUKÓW", "LODZ"]} updateCity={(city) => this.updateChart(city[0], this.state.year)} multiselect={false}/>
                <Cities cities={["1984", "1985", "1988", "2014", "2018", "2019"]} updateCity={(years) => this.updateChart(this.state.city, years)}
                        multiselect={true}/>
            </div>
            <ReactEcharts ref={(e) => {
                this.echarts_react = e;
            }} theme={"dark"} option={options}/>
        </div>;
    }
}
