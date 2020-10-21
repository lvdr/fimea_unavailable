import { IDrugRecordService } from "./IDrugRecordService";
import { ITimestampedDrugRecords } from "./ITimestampedDrugRecords";

export class OnlineDrugRecordService implements IDrugRecordService {
  
  async getAllDrugs(): Promise<ITimestampedDrugRecords> {
    return fetch(window.location.href + "/medications.json")
             .then(function(response) {
	       if (response.status !== 200) {
                 console.log("Error fetching json, status code " + response.status);
	       }
	       return response.json();
	     });
  }

}
