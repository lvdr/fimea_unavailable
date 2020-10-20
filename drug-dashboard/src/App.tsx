import * as React from 'react';
import './App.css';

import { IDrugRecordService } from "./IDrugRecordService";
import { IDrugRecord } from "./IDrugRecord";
import { DrugRecordComponent } from "./DrugRecordComponent";

export class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = { };
  }

  componentDidMount() {
    this.props.drugRecordService.getAllDrugs()
      .then((drugs) => {
        this.setState({
          drugRecords: drugs
        });
      });
  }

  render() {
    let drugList = undefined;
    if (this.state.drugRecords) {
      drugList = this.state.drugRecords.map((value) => {
        return (<li>
          <DrugRecordComponent record={value} />
        </li>);
      });
    }

    return (
      <div className="App">
        <ul>
          {drugList}
        </ul>
      </div>
    );
  }

}

export interface AppProps {
  drugRecordService: IDrugRecordService;
}

export interface AppState {
  drugRecords?: IDrugRecord[];
}
