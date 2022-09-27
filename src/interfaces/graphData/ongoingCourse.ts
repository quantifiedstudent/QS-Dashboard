interface AssignmentsShape {
  openAssignments: number;
  submittedAssignments: number;
}

class Assignments implements AssignmentsShape {
  constructor(props: AssignmentsShape) {
    this.openAssignments = props.openAssignments;
    this.submittedAssignments = props.submittedAssignments;
  }
  openAssignments: number;
  submittedAssignments: number;
}

export default Assignments;
