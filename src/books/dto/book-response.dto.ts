import { Book } from '../entities/book.entity';

export class BookResponseDto {
  statusCode: number;
  message: string;
  data: Book;
}

export class retrieveAllBooksResponseDto {
  statusCode: number;
  message: string;
  data: Book[];
}