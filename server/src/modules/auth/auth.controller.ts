import {
  Body,
  Controller,
  HttpException,
  Request,
  Post,
  UseGuards,
  Res,
  SerializeOptions,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto/auth.dto";
import { SubmitUserDataDto } from "./dto/submitUserData.dto";
import { Response } from "express";
import { ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";
import { TryLoginDto } from "./dto/tryLogin.dto";
import { LoginUserDto } from "./dto/loginUser.dto";
import { AuthGuard } from "@nestjs/passport";
import { RequestWithUser } from "../user/interface/requestWithUser";
import { ResponseCreateUserDto } from "./dto/responseCreateUser.dto";

@ApiTags("Auth")
@Controller("api/auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  private isValidPassword(submitUserDto: SubmitUserDataDto): boolean {
    return submitUserDto.password === submitUserDto.passwordConfirm;
  }
  @Post()
  @ApiBody({ description: "회원가입", type: SubmitUserDataDto })
  @ApiResponse({ status: 201, type: ResponseCreateUserDto })
  @UsePipes(new ValidationPipe())
  async createUser(@Body() submitUserDto: SubmitUserDataDto): Promise<AuthDto> {
    console.log(submitUserDto);
    if (!this.isValidPassword(submitUserDto)) {
      throw new HttpException("Passwords do not match", 400);
    }
    const { passwordConfirm: _passwordConfirm, ...createUserDto } = submitUserDto;
    return await this.authService.createUser(createUserDto);
  }

  @Post("login")
  @UseGuards(AuthGuard("local"))
  @ApiBody({ description: "로그인", type: TryLoginDto })
  @ApiResponse({ type: LoginUserDto })
  @UsePipes(new ValidationPipe())
  async login(@Request() req: RequestWithUser, @Res() res: Response): Promise<LoginUserDto> {
    return await this.authService.login(req.user, res);
  }
}
