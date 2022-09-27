interface GradeShape {
  grade: number;
}

class Grade implements GradeShape {
  constructor(props: GradeShape) {
    this.grade = props.grade;
  }
  grade: number;
}

export default Grade;
