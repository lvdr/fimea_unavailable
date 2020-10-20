import * as React from 'react';
import './App.css';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import {
  DetailsList,
  DetailsListLayoutMode,
  IColumn,
} from 'office-ui-fabric-react/lib/DetailsList';
import { IDrugRecordService } from "./IDrugRecordService";
import { IDrugRecord } from "./IDrugRecord";
import { DrugRecordComponent } from "./DrugRecordComponent";
export class App extends React.Component<AppProps, AppState> {
  private _columns: IColumn[];

  constructor(props: AppProps) {
    super(props);

    this._columns = [
     {
      key: "name",
      name: "Drug name",
      fieldName: "drugName",
      data: "string",
      minWidth: 300,
     }, {
      key: "size",
      name: "Package name",
      fieldName: "packageSize",
      data: "string",
      minWidth: 100,
     }, {
      key: "form",
      name: "Drug form",
      fieldName: "drugForm",
      data: "string",
      minWidth: 300,
     }, {
      key: "strength",
      name: "Drug strength",
      fieldName: "strength",
      data: "string",
      minWidth: 100,
     }, {
      key: "startDate",
      name: "Unavailable staring",
      fieldName: "unavailabilityStart",
      data: "string",
      minWidth: 150,
     }, {
      key: "endDate",
      name: "Unavailable until",
      fieldName: "unavailabilityEnd",
      data: "string",
      minWidth: 150,
     }];

    initializeIcons();

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
    return (
        <DetailsList
          items={this.state.drugRecords || []}
          columns={this._columns}
          layoutMode={DetailsListLayoutMode.justified}
        />
    );
  }

}

export interface AppProps {
  drugRecordService: IDrugRecordService;
}

export interface AppState {
  drugRecords?: IDrugRecord[];
}
