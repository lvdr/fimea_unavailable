import { IDrugRecordService } from "./IDrugRecordService";
import { IDrugRecord } from "./IDrugRecord";

export class MockDrugRecordService implements IDrugRecordService {
  constructor(records?: IDrugRecord[] | undefined) {
    if (records) {
      this.records = records;
    } else {
      this.records = this.defaultRecords
    }
  }

  async getAllDrugs(): Promise<IDrugRecord[]> {
    return this.records;
  }

  private records: IDrugRecord[];
  private readonly defaultRecords: IDrugRecord[] = [
    {
      drugName:            "SIRIUS MILOTIC",
      packageSize:         "197",
      drugForm:            "purutabletti",
      strength:            "10 mg",
      unavailabilityStart: "10.5.1980",
      unavailabilityEnd:   "11.6.1980",
    }, {
      drugName:            "SIRIUS UMBREON",
      packageSize:         "197",
      drugForm:            "imeskelytabletti",
      strength:            "30 mg",
      unavailabilityStart: "4.4.1980",
      unavailabilityEnd:   "5.5.1980",
    }, {
      drugName:            "SIRIUS SENTRET",
      packageSize:         "197",
      drugForm:            "tabletti, kalvopäällysteinen",
      strength:            "50 mg",
      unavailabilityStart: "3.10.1980",
      unavailabilityEnd:   "2.12.1980",
    }, {
      drugName:            "SIRIUS VULPIX",
      packageSize:         "3",
      drugForm:            "injektioneste, liuos, esitäytetty kynä",
      strength:            "30 mikrog",
      unavailabilityStart: "2.5.1980",
      unavailabilityEnd:   "5.6.1980",
    }, {
      drugName:            "SIRIUS UMBREON",
      packageSize:         "30 ml",
      drugForm:            "tipat, emulsio",
      strength:            "40 mg/ml",
      unavailabilityStart: "10.5.1980",
      unavailabilityEnd:   "11.6.1980",
    }
  ];
}
