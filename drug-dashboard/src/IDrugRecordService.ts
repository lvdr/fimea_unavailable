import {ITimestampedDrugRecords} from "./ITimestampedDrugRecords";

export interface IDrugRecordService {
  getAllDrugs(): Promise<ITimestampedDrugRecords>;
}
