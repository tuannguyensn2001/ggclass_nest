import { Module } from '@nestjs/common';
import { PostModule } from 'services/post/post.module';
import { ConfigModule } from '@nestjs/config';
import configuration from 'config/configuration';

@Module({
  imports: [
    PostModule,
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
