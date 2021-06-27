import {
  Controller,
  Body,
  UseGuards,
  Post,
  Param,
  Get,
  Query,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { Observable } from 'rxjs';

import {
  ADMIN,
  VideoDimension,
  VideoDimensionData,
} from '@dark-rush-photography/shared-types';
import {
  VideoDimensionAddDto,
  VideoDimensionDataDto,
  VideoDimensionDto,
} from '@dark-rush-photography/api/types';
import { Roles, RolesGuard } from '@dark-rush-photography/api/util';
import { AdminVideoDimensionsService } from './admin-video-dimensions.service';

@Controller('admin/v1/video-dimensions')
@UseGuards(RolesGuard)
@ApiBearerAuth()
@ApiTags('Admin Video Dimensions')
export class AdminVideoDimensionsController {
  constructor(
    private readonly adminVideoDimensionsService: AdminVideoDimensionsService
  ) {}

  @Roles(ADMIN)
  @Post()
  @ApiOkResponse({ type: VideoDimensionDto })
  add$(
    @Query('entityId') entityId: string,
    @Query('videoId') videoId: string,
    @Body() videoDimension: VideoDimensionAddDto
  ): Observable<VideoDimension> {
    return this.adminVideoDimensionsService.add$(
      entityId,
      videoId,
      videoDimension
    );
  }

  @Roles(ADMIN)
  @Get(':id')
  @ApiOkResponse({ type: VideoDimensionDto })
  findOne$(
    @Param('id') id: string,
    @Query('entityId') entityId: string
  ): Observable<VideoDimension> {
    return this.adminVideoDimensionsService.findOne$(id, entityId);
  }

  @Roles(ADMIN)
  @Get(':id/data')
  @ApiOkResponse({ type: VideoDimensionDataDto })
  data$(
    @Param('id') id: string,
    @Query('entityId') entityId: string
  ): Observable<VideoDimensionData> {
    return this.adminVideoDimensionsService.data$(id, entityId);
  }
}
