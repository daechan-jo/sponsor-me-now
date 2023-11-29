import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import * as process from "process";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "../../passport/jwt.strategy";
import { AuthService } from "../auth/auth.service";
import { PrismaClient } from "@prisma/client";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "../../entities/user.entity";
import { PaymentsEntity } from "../../entities/payments.entity";
import { PostEntity } from "../../entities/post.entity";

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: "24h" },
    }),
    TypeOrmModule.forFeature([UserEntity, PostEntity, PaymentsEntity]),
  ],
  controllers: [UserController],
  providers: [UserService, AuthService, PrismaClient, JwtStrategy],
  exports: [UserService],
})
export class UserModule {}
