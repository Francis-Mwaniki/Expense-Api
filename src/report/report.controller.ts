import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Param,
  Body,
  HttpCode,
  ParseUUIDPipe,
  ParseEnumPipe,
} from '@nestjs/common';
import { ReportType } from '../data';
import {
  ReportResponseDto,
  createIncomeReportDto,
  updateIncomeReportDto,
} from '../dto/report.dto';
import { ReportService } from './report.service';

@Controller('report/:type')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Get()
  getAllIncomeReports(
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
  ): ReportResponseDto[] {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return this.reportService.getAllIncomeReports(reportType);
  }

  @Get(':id')
  getIncomeReportById(
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
    @Param('id', ParseUUIDPipe) id: string,
  ): ReportResponseDto {
    return this.reportService.getIncomeReportById(type, id);
  }
  @Post()
  createIncomeReport(
    @Body() { amount, source }: createIncomeReportDto,
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
  ): ReportResponseDto {
    return this.reportService.createIncomeReport(type, { amount, source });
  }
  @Put(':id')
  updateIncomeReportById(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() { amount, source }: updateIncomeReportDto,
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
  ): ReportResponseDto {
    return this.reportService.updateIncomeReportById(type, id, {
      amount,
      source,
    });
  }
  @HttpCode(204)
  @Delete(':id')
  deleteIncomeReportById(
    @Param('id', ParseUUIDPipe) id: string,
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
  ) {
    return this.reportService.deleteIncomeReportById(type, id);
  }
}
