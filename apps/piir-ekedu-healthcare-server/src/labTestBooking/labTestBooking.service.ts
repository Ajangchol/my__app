import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LabTestBookingServiceBase } from "./base/labTestBooking.service.base";

@Injectable()
export class LabTestBookingService extends LabTestBookingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
