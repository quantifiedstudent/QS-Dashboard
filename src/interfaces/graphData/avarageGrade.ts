interface AvarageGradeShape {
  avarageGrade: number;
  latestGrade: number;
}

class AvarageGrade implements AvarageGradeShape {
  constructor(props: AvarageGradeShape) {
    this.avarageGrade = props.avarageGrade;
    this.latestGrade = props.latestGrade;
  }
  avarageGrade: number;
  latestGrade: number;
}

export default AvarageGrade;
