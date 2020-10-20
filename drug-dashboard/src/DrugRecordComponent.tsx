import * as React from "react";
import { IDrugRecord } from "./IDrugRecord";

export function DrugRecordComponent(props: IDrugRecordComponentProps): JSX.Element {
  return ( <div className="ms-Table-row">
      <span className="ms-Table-cell"> <b> Drug Name: </b> {props.record.drugName} </span>
      <span className="ms-Table-cell"> <b> Package Size: </b> {props.record.packageSize} </span>
      <span className="ms-Table-cell"> <b> Drug Form: </b> {props.record.drugForm} </span>
      <span className="ms-Table-cell"> <b> Drug Strength: </b> {props.record.strength} </span>
      <span className="ms-Table-cell"> <b> Unavailability Start: </b> {props.record.unavailabilityStart} </span>
      <span className="ms-Table-cell"> <b> Unavailability End: </b> {props.record.unavailabilityEnd} </span>
  </div>);
}

export interface IDrugRecordComponentProps {
  record: IDrugRecord;
}
