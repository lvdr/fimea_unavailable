import * as React from 'react';
import './App.css';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import { Stack, IStackStyles } from 'office-ui-fabric-react/lib/Stack';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import {
  DetailsList,
  DetailsListLayoutMode,
  IColumn,
  CheckboxVisibility,
  SelectionMode,
} from 'office-ui-fabric-react/lib/DetailsList';
import { IDrugRecordService } from "./IDrugRecordService";
import { IDrugRecord } from "./IDrugRecord";
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
      name: "Unavailable starting",
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

    this.state = {drugRecords: [],
                  visibleDrugRecords: [],
                  readDate: "",
                 };
  }

  componentDidMount() {
    this.props.drugRecordService.getAllDrugs()
      .then((timestampedDrugs) => {
        console.log(timestampedDrugs);
        this.setState({
          drugRecords: timestampedDrugs.unavailableMeds,
	  visibleDrugRecords: timestampedDrugs.unavailableMeds,
          readDate: timestampedDrugs.readDate,
	});
      });
  }

  render() {
    const stackStyles: Partial<IStackStyles> = { root: { width: 650 } };
    return (
      <Fabric>
        <Stack styles={stackStyles}>
          <p>Last updated: {this.state.readDate}</p>
          <TextField label="Filter:" onChange={this.filter} />
        </Stack>
        <DetailsList
          items={this.state.visibleDrugRecords || []}
          columns={this._columns}
          layoutMode={DetailsListLayoutMode.justified}
          checkboxVisibility={CheckboxVisibility.hidden}
          selectionMode={SelectionMode.none}
        />
      </Fabric>
    );
  }

  filter = (ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, text?: string) => {
    this.setState({
      visibleDrugRecords: text ? this.state.drugRecords.filter(i => i.drugName.toLowerCase().indexOf(text) > -1) : this.state.drugRecords,
    });
  }

}

export interface AppProps {
  drugRecordService: IDrugRecordService;
}

export interface AppState {
  drugRecords:        IDrugRecord[];
  visibleDrugRecords: IDrugRecord[];
  readDate:           string;
}
