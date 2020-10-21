import { OnlineDetectionService } from "./OnlineDetectionService";
import { IDrugRecordService } from "./IDrugRecordService";
import { MockDrugRecordService } from "./MockDrugRecordService";
import { OnlineDrugRecordService } from "./OnlineDrugRecordService";
export class DrugRecordServiceFactory {
  constructor(onlineDetectionService: OnlineDetectionService) {
    if (onlineDetectionService.isOnline()) {
      this.service = new OnlineDrugRecordService();
    } else {
      this.service = new MockDrugRecordService();
    }
  }

  getDrugRecordService() {
    return this.service;
  }

  private service: IDrugRecordService;
}
