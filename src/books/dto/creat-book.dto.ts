import { IsString, IsNotEmpty, IsISBN } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty({ example: 'The title of the book' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'The author of the book' })
  @IsString()
  @IsNotEmpty()
  author: string;

  @ApiProperty({ example: 'The ISBN of the book' })
  @IsISBN()
  @IsNotEmpty()
  isbn: string;
}
