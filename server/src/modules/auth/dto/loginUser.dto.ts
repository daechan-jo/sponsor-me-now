import { ApiProperty } from "@nestjs/swagger";

export class LoginUserDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  username: string;

  @ApiProperty()
  nickname: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  isSponsor: true;

  @ApiProperty()
  token: string;
}
