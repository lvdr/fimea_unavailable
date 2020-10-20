import { OnlineDetectionService } from "./OnlineDetectionService";
import { IDrugRecordService } from "./IDrugRecordService";
import { MockDrugRecordService } from "./MockDrugRecordService";

export class DrugRecordServiceFactory {
  constructor(onlineDetectionService: OnlineDetectionService) {
    if (onlineDetectionService.isOnline()) {
      this.service = new MockDrugRecordService();
    } else {
      this.service = new MockDrugRecordService();
    }
  }

  getDrugRecordService() {
    return this.service;
  }

  private service: IDrugRecordService;
}
