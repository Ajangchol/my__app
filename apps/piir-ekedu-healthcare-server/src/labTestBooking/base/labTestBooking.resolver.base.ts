/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { LabTestBooking } from "./LabTestBooking";
import { LabTestBookingCountArgs } from "./LabTestBookingCountArgs";
import { LabTestBookingFindManyArgs } from "./LabTestBookingFindManyArgs";
import { LabTestBookingFindUniqueArgs } from "./LabTestBookingFindUniqueArgs";
import { DeleteLabTestBookingArgs } from "./DeleteLabTestBookingArgs";
import { LabTestBookingService } from "../labTestBooking.service";
@graphql.Resolver(() => LabTestBooking)
export class LabTestBookingResolverBase {
  constructor(protected readonly service: LabTestBookingService) {}

  async _labTestBookingsMeta(
    @graphql.Args() args: LabTestBookingCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [LabTestBooking])
  async labTestBookings(
    @graphql.Args() args: LabTestBookingFindManyArgs
  ): Promise<LabTestBooking[]> {
    return this.service.labTestBookings(args);
  }

  @graphql.Query(() => LabTestBooking, { nullable: true })
  async labTestBooking(
    @graphql.Args() args: LabTestBookingFindUniqueArgs
  ): Promise<LabTestBooking | null> {
    const result = await this.service.labTestBooking(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => LabTestBooking)
  async deleteLabTestBooking(
    @graphql.Args() args: DeleteLabTestBookingArgs
  ): Promise<LabTestBooking | null> {
    try {
      return await this.service.deleteLabTestBooking(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
