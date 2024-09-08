import { Module } from "@nestjs/common";
import { LabTestBookingModuleBase } from "./base/labTestBooking.module.base";
import { LabTestBookingService } from "./labTestBooking.service";
import { LabTestBookingController } from "./labTestBooking.controller";
import { LabTestBookingResolver } from "./labTestBooking.resolver";

@Module({
  imports: [LabTestBookingModuleBase],
  controllers: [LabTestBookingController],
  providers: [LabTestBookingService, LabTestBookingResolver],
  exports: [LabTestBookingService],
})
export class LabTestBookingModule {}
