export class ResultWrapper {
  public constructor(
    public status: boolean,
    public code: number,
    public message: string,
    public data: DataBean
  ) {}
}

export class DataBean {
  public constructor(
    public totalSize: number,
    public items: any[]
  ) {}
}
