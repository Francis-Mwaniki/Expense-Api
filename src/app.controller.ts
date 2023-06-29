import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('report/:type')
export class AppController {
  @Get()
  getAllIncomeReports() {
    return [];
  }

  @Get(':id')
  getIncomeReportById() {
    const id = 3;
    return {
      id: id,
    };
  }
  @Post()
  createIncomeReport() {
    const report = 'hello';
    return {
      message: `${report} created!`,
    };
  }
  @Put(':id')
  updateIncomeReportById() {
    const id = 4;
    return {
      id: `${id} to be updated!`,
    };
  }
  @Delete(':id')
  deleteIncomeReportById() {
    const id = 4;
    return {
      id: `${id} to be deleted!`,
    };
  }
}
