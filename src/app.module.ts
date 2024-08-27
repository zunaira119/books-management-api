import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './books/books.module';
import { Book } from './books/entities/book.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', // Replace with your MySQL host
      port: 3306, // Default MySQL port
      username: 'root', // Replace with your MySQL username
      password: '', // Replace with your MySQL password
      database: 'books', // Replace with your MySQL database name
      entities: [Book],
      synchronize: true, // Automatically syncs the database schema with your entities (turn off in production)
    }),
    TypeOrmModule.forFeature([Book]),
    BooksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
