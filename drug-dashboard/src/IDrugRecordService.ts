import {IDrugRecord} from "./IDrugRecord";

export interface IDrugRecordService {
  getAllDrugs(): Promise<IDrugRecord[]>;
}
