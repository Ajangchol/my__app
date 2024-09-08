import { LabTestResult as TLabTestResult } from "../api/labTestResult/LabTestResult";

export const LABTESTRESULT_TITLE_FIELD = "id";

export const LabTestResultTitle = (record: TLabTestResult): string => {
  return record.id?.toString() || String(record.id);
};
