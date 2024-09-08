import { LabTestBookingWhereInput } from "./LabTestBookingWhereInput";
import { LabTestBookingOrderByInput } from "./LabTestBookingOrderByInput";

export type LabTestBookingFindManyArgs = {
  where?: LabTestBookingWhereInput;
  orderBy?: Array<LabTestBookingOrderByInput>;
  skip?: number;
  take?: number;
};
