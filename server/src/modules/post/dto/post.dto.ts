import { ApiProperty } from "@nestjs/swagger";

export class PostDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  content: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  authorId: number;

  @ApiProperty()
  viewCount: number;

  @ApiProperty()
  postImg: string;

  @ApiProperty()
  likeCount: number;

  @ApiProperty()
  _count?: object;

  @ApiProperty()
  comments?: { content: string; nickname: string }[];
}
