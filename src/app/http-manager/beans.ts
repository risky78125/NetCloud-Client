export class ResultWrapper {
  public constructor(
    public status: boolean,
    public code: number,
    public message: string,
    public data: any
  ) {}
}

export class DataBean {
  public constructor(
    public totalSize: number,
    public pageSize: number,
    public items: any[]
  ) {}
}
