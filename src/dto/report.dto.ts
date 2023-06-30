import { Exclude, Expose } from 'class-transformer';
import {
  IsNumber,
  IsString,
  IsPositive,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { ReportType } from 'src/data';
//FIXME:
export class createIncomeReportDto {
  @IsNumber()
  @IsPositive()
  amount: number;

  @IsString()
  @IsNotEmpty()
  source: string;
}
export class updateIncomeReportDto {
  @IsOptional()
  @IsNumber()
  amount: number;
  @IsOptional()
  @IsNotEmpty()
  source: string;
}

/* responses */
export class ReportResponseDto {
  id: string;
  source: string;
  /* exposing what is right */
  @Expose({ name: 'createdAt' })
  transformCreatedAt() {
    return this.created_at;
  }
  @Exclude()
  created_at: Date;

  @Exclude()
  updated_at: Date;
  amount: number;
  type: ReportType;

  constructor(partial: Partial<ReportResponseDto>) {
    Object.assign(this, partial);
  }
}
