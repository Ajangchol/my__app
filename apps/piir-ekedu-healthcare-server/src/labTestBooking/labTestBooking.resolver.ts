import * as graphql from "@nestjs/graphql";
import { LabTestBookingResolverBase } from "./base/labTestBooking.resolver.base";
import { LabTestBooking } from "./base/LabTestBooking";
import { LabTestBookingService } from "./labTestBooking.service";

@graphql.Resolver(() => LabTestBooking)
export class LabTestBookingResolver extends LabTestBookingResolverBase {
  constructor(protected readonly service: LabTestBookingService) {
    super(service);
  }
}
