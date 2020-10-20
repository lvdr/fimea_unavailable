/// This is the model for a drug's availability
export interface IDrugRecord {
  drugName:            string,  // The name of the drug in question
  packageSize:         string,  // The size of the package that's unavailable
  drugForm:            string,  // What kind of drug is it
  strength:            string,  // How strong (concentrated) the drug is
  unavailabilityStart: string,    // When is the unavailable period starting
  unavailabilityEnd:   string,    // When is the unavailable period ending
}
