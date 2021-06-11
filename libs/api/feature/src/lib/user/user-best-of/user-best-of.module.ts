import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import {
  Document,
  DocumentModelService,
  DocumentSchema,
} from '@dark-rush-photography/api/data';
import { UserBestOfController } from './user-best-of.controller';
import { UserBestOfService } from './user-best-of.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Document.name, schema: DocumentSchema },
    ]),
  ],
  controllers: [UserBestOfController],
  providers: [DocumentModelService, UserBestOfService],
})
export class UserBestOfModule {}
