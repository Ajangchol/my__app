import * as graphql from "@nestjs/graphql";
import { ClinicResolverBase } from "./base/clinic.resolver.base";
import { Clinic } from "./base/Clinic";
import { ClinicService } from "./clinic.service";

@graphql.Resolver(() => Clinic)
export class ClinicResolver extends ClinicResolverBase {
  constructor(protected readonly service: ClinicService) {
    super(service);
  }
}
