import PropTypes from "prop-types";

export function Student(props){
  return(
    <>
    <table className="student">
        <tbody>
            <tr>
                <th>Name</th>
                <td>{props.name}</td>
            </tr>
            <tr>
                <th>Age</th>
                <td>{props.age}</td>
            </tr>
            <tr>
                <th>Course</th>
                <td>{props.course}</td>
            </tr>
            <tr>
                <th>Is Working</th>
                <td>{props.working ? "Yes": "No"}</td>
            </tr>
        </tbody>
    </table>

  </>
  )
};

Student.propTypes={
    name: PropTypes.string,
    age: PropTypes.number,
    course: PropTypes.string,
    working: PropTypes.bool,
};
