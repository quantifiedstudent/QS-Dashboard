type comparison = { value: number; comparedTo: string };

export interface TotalGraphShape {
  total?: number;
  comparison?: Array<comparison>;
}

export class TotalGraph implements TotalGraphShape {
  total: number;
  comparison: Array<comparison>;

  constructor(props: TotalGraphShape) {
    this.total = props.total || 0;
    this.comparison = props.comparison || new Array<comparison>();
  }
}
