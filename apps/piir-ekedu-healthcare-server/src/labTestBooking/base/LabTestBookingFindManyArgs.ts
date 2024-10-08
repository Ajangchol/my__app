/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LabTestBookingWhereInput } from "./LabTestBookingWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { LabTestBookingOrderByInput } from "./LabTestBookingOrderByInput";

@ArgsType()
class LabTestBookingFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => LabTestBookingWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => LabTestBookingWhereInput, { nullable: true })
  @Type(() => LabTestBookingWhereInput)
  where?: LabTestBookingWhereInput;

  @ApiProperty({
    required: false,
    type: [LabTestBookingOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [LabTestBookingOrderByInput], { nullable: true })
  @Type(() => LabTestBookingOrderByInput)
  orderBy?: Array<LabTestBookingOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { LabTestBookingFindManyArgs as LabTestBookingFindManyArgs };
