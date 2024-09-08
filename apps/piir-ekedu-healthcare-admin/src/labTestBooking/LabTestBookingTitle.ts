import { LabTestBooking as TLabTestBooking } from "../api/labTestBooking/LabTestBooking";

export const LABTESTBOOKING_TITLE_FIELD = "id";

export const LabTestBookingTitle = (record: TLabTestBooking): string => {
  return record.id?.toString() || String(record.id);
};
