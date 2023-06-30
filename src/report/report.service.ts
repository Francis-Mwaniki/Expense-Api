import { Injectable } from '@nestjs/common';
import { ReportType, data } from '../data';
import { v4 as uuid } from 'uuid';
import { ReportResponseDto } from '../dto/report.dto';

interface Report {
  amount: number;
  source: string;
}
interface updateReport {
  amount?: number;
  source?: string;
}
@Injectable()
export class ReportService {
  getAllIncomeReports(type: string): ReportResponseDto[] {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return data.report
      .filter((report) => report.type === reportType)
      .map((report) => new ReportResponseDto(report));
  }
  getIncomeReportById(type: string, id: string): ReportResponseDto {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;

    const report = data.report
      .filter((report) => report.type === type)
      .find((report) => report.id === id);
    if (!report) return;
    else {
      return new ReportResponseDto(report);
    }
  }
  createIncomeReport(type: string, body: Report): ReportResponseDto {
    const newReport = {
      id: uuid(),
      amount: body.amount,
      source: body.source,
      created_at: new Date(),
      updated_at: new Date(),
      type: type === 'income' ? ReportType.INCOME : ReportType.EXPENSE,
    };
    data.report.push(newReport);
    return new ReportResponseDto(newReport);
  }
  updateIncomeReportById(
    type: string,
    id: string,
    body: updateReport,
  ): ReportResponseDto {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    const report = data.report.find((report) => report.id === id);
    id = report.id;
    report.amount = body.amount;
    report.source = body.source;
    report.updated_at = new Date();
    report.type = reportType;
    return new ReportResponseDto(report);
  }
  deleteIncomeReportById(type: string, id: string) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    const report = data.report.find((report) => report.id === id);
    data.report = data.report.filter((report) => report.id !== id);
    return report;
  }
}
