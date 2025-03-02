import { Module } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Job, Jobschema } from './schemas/job.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Job.name, schema: Jobschema }])],
  controllers: [JobsController],
  providers: [JobsService],
})
export class JobsModule {}
