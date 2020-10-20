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
      unavailabilityStart: new Date("10.5.1980"),
      unavailabilityEnd:   new Date("11.6.1980"),
    }, {
      drugName:            "SIRIUS UMBREON",
      packageSize:         "197",
      drugForm:            "imeskelytabletti",
      strength:            "30 mg",
      unavailabilityStart: new Date("4.4.1980"),
      unavailabilityEnd:   new Date("5.5.1980"),
    }, {
      drugName:            "SIRIUS SENTRET",
      packageSize:         "197",
      drugForm:            "tabletti, kalvop\\u00e4\\u00e4llysteinen",
      strength:            "50 mg",
      unavailabilityStart: new Date("3.10.1980"),
      unavailabilityEnd:   new Date("2.12.1980"),
    }, {
      drugName:            "SIRIUS VULPIX",
      packageSize:         "3",
      drugForm:            "injektioneste, liuos, esit\\u00e4ytetty kyn\\u00e4",
      strength:            "30 mikrog",
      unavailabilityStart: new Date("2.5.1980"),
      unavailabilityEnd:   new Date("5.6.1980"),
    }, {
      drugName:            "SIRIUS UMBREON",
      packageSize:         "30 ml",
      drugForm:            "tipat, emulsio",
      strength:            "40 mg/ml",
      unavailabilityStart: new Date("10.5.1980"),
      unavailabilityEnd:   new Date("11.6.1980"),
    }
  ];
}
