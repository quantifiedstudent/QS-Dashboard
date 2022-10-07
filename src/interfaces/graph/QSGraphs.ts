import { GraphType } from "./Graph";

/**
 * <summary>
 *  This class defines every graph you can choose on the dashboard
 * </summary>
 *
 * @param: Label -> the label line will have
 * @param: Type -> the type the graph will have e.g line, bar, pie etc.
 * @param: endpoint -> the api endpoint the data for the graph comes from
 */
export class QsGraph {
  static readonly GRADE = new QsGraph("grade", GraphType.LINE, "allGrades");

  private constructor(
    public readonly label: string,
    public readonly type: GraphType,
    public readonly endpoint: string
  ) {}
}
