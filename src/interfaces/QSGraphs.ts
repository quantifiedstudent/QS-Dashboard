import { GraphType } from "./Graph";

export interface GraphProps {
  QsGraph: QsGraph;
}

export class QsGraph {
  static readonly GRADE = new QsGraph("grade", GraphType.line, "allGrades");

  private constructor(
    public readonly label: string,
    public readonly type: GraphType,
    public readonly endpoint: string
  ) {}
}
