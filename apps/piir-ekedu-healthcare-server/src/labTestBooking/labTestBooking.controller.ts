import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LabTestBookingService } from "./labTestBooking.service";
import { LabTestBookingControllerBase } from "./base/labTestBooking.controller.base";

@swagger.ApiTags("labTestBookings")
@common.Controller("labTestBookings")
export class LabTestBookingController extends LabTestBookingControllerBase {
  constructor(protected readonly service: LabTestBookingService) {
    super(service);
  }
}
