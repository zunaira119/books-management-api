import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/creat-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ApiTags, ApiOperation, ApiParam, ApiBody, ApiResponse } from '@nestjs/swagger';
import {BookResponseDto, retrieveAllBooksResponseDto } from './dto/book-response.dto';

@ApiTags('books')
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  @ApiOperation({ summary: 'Retrieve all books' })
  @ApiResponse({ status: 200, description: 'List of books retrieved successfully.' })
  async findAll() : Promise<retrieveAllBooksResponseDto> {
    const books = await this.booksService.retriveAll();
     return {
      statusCode: 200,
      message: 'List of books retrieved successfully. ',
      data: books,
    };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a book by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the book to retrieve' })
  @ApiResponse({ status: 200, description: 'Book retrieved successfully.' })
  @ApiResponse({ status: 404, description: 'Book not found.' })
  async findOne(@Param('id') id: string): Promise<BookResponseDto> {
    const book = await this.booksService.retriveOne(+id);
      return {
      statusCode: 200,
      message: 'Book retrieved successfully.',
      data: book,
    };
  }

  @Post()
  @ApiOperation({ summary: 'Add a new book' })
  @ApiBody({ type: CreateBookDto })
  @ApiResponse({ status: 201, description: 'Book created successfully.' })
  @ApiResponse({ status: 400, description: 'Invalid data.' })
  async create(@Body() createBookDto: CreateBookDto): Promise<BookResponseDto> {
    const newBook = await this.booksService.addNewBook(createBookDto);
    return {
      statusCode: 201,
      message: 'Book created successfully ',
      data: newBook,
    };
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a book by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the book to update' })
  @ApiBody({ type: UpdateBookDto })
  @ApiResponse({ status: 200, description: 'Book updated successfully.' })
  @ApiResponse({ status: 404, description: 'Book not found.' })
  @ApiResponse({ status: 400, description: 'Invalid data.' })
  async update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto): Promise<BookResponseDto> {
    const book = await this.booksService.updateBook(+id, updateBookDto);
     return {
      statusCode: 201,
      message: 'Book updated successfully. ',
      data: book,
    };
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a book by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the book to delete' })
  @ApiResponse({ status: 200, description: 'Book deleted successfully.' })
  @ApiResponse({ status: 404, description: 'Book not found.' })
  remove(@Param('id') id: string) {
    return this.booksService.deleteBook(+id);
  }
}
