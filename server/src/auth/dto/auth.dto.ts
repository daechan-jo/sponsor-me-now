import { PaymentHistory, Post, Subscribe, Comment } from "@prisma/client";
import {
  IsString,
  IsEmail,
  IsNumber,
  IsNotEmpty,
  IsOptional,
  IsBoolean,
  IsArray,
  IsDate,
} from "class-validator";
import { SerializeOptions } from "@nestjs/common";
import { Exclude } from "class-transformer";

@SerializeOptions({ strategy: "exposeAll" })
export class AuthDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsOptional()
  nickname?: string;

  @IsString()
  @IsNotEmpty()
  @Exclude()
  password: string;

  @IsOptional()
  @IsNumber()
  snsId?: number;

  @IsOptional()
  @IsString()
  provider?: string;

  @IsOptional()
  profileImg?: string;

  @IsOptional()
  @IsString()
  field?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNotEmpty()
  @IsBoolean()
  isSponsor!: boolean;

  @IsOptional()
  @IsArray()
  subscribe?: Subscribe[];

  @IsOptional()
  @IsArray()
  paymentHistory?: PaymentHistory[];

  @IsOptional()
  @IsArray()
  post?: Post[];

  @IsOptional()
  @IsArray()
  comment?: Comment[];

  @IsNotEmpty()
  @IsBoolean()
  manager!: boolean;

  @IsNotEmpty()
  @IsDate()
  createdAt!: Date;

  @IsOptional()
  @IsDate()
  updatedAt?: Date;
}
