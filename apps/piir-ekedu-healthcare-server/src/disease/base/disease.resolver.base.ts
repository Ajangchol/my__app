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
import { Disease } from "./Disease";
import { DiseaseCountArgs } from "./DiseaseCountArgs";
import { DiseaseFindManyArgs } from "./DiseaseFindManyArgs";
import { DiseaseFindUniqueArgs } from "./DiseaseFindUniqueArgs";
import { DeleteDiseaseArgs } from "./DeleteDiseaseArgs";
import { DiseaseService } from "../disease.service";
@graphql.Resolver(() => Disease)
export class DiseaseResolverBase {
  constructor(protected readonly service: DiseaseService) {}

  async _diseasesMeta(
    @graphql.Args() args: DiseaseCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Disease])
  async diseases(
    @graphql.Args() args: DiseaseFindManyArgs
  ): Promise<Disease[]> {
    return this.service.diseases(args);
  }

  @graphql.Query(() => Disease, { nullable: true })
  async disease(
    @graphql.Args() args: DiseaseFindUniqueArgs
  ): Promise<Disease | null> {
    const result = await this.service.disease(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Disease)
  async deleteDisease(
    @graphql.Args() args: DeleteDiseaseArgs
  ): Promise<Disease | null> {
    try {
      return await this.service.deleteDisease(args);
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
