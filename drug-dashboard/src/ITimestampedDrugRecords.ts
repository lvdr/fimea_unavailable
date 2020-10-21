import { IDrugRecord } from "./IDrugRecord";
export interface ITimestampedDrugRecords {
    read_date:        string,  // The name of the drug in question
    unavailable_meds: IDrugRecord[],
}
