type comparison = { value: number; comparedTo: string };

export interface TotalGraphShape {
  total: number;
}

export class TotalGraph implements TotalGraphShape {
  total: number;

  constructor(props: TotalGraphShape) {
    this.total = props.total;
  }
}
