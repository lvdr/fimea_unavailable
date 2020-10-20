import * as React from "react";
import { IDrugRecord } from "./IDrugRecord";

export function DrugRecordComponent(props: IDrugRecordComponentProps): JSX.Element {
  return (
    <div>
      <p> <b> Drug Name: </b> {props.record.drugName} </p>
      <p> <b> Package Size: </b> {props.record.packageSize} </p>
      <p> <b> Drug Form: </b> {props.record.drugForm} </p>
      <p> <b> Drug Strength: </b> {props.record.strength} </p>
      <p> <b> Unavailability Start: </b> {props.record.unavailabilityStart.toDateString()} </p>
      <p> <b> Unavailability End: </b> {props.record.unavailabilityEnd.toDateString()} </p>
    </div>
  );
}

export interface IDrugRecordComponentProps {
  record: IDrugRecord;
}
