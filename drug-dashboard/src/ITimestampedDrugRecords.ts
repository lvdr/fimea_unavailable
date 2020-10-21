import { IDrugRecord } from "./IDrugRecord";
export interface ITimestampedDrugRecords {
    readDate:        string,  // The name of the drug in question
    unavailableMeds: IDrugRecord[],
}
