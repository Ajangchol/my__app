import { Clinic as TClinic } from "../api/clinic/Clinic";

export const CLINIC_TITLE_FIELD = "id";

export const ClinicTitle = (record: TClinic): string => {
  return record.id?.toString() || String(record.id);
};
