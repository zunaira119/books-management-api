import { PartialType } from '@nestjs/swagger';
import { CreateBookDto } from './creat-book.dto';

export class UpdateBookDto extends PartialType(CreateBookDto) {}