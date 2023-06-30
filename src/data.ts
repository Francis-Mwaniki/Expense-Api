export enum ReportType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

export const data: Data = {
  report: [
    {
      id: '1',
      amount: 100,
      source: 'salary',
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: '2',
      amount: 200,
      source: 'salary',
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: '3',
      amount: 900,
      source: 'salary',
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.EXPENSE,
    },
  ],
};

interface Data {
  report: {
    id: string;
    amount: number;
    source: string;
    created_at: Date;
    updated_at: Date;
    type: ReportType;
  }[];
}
