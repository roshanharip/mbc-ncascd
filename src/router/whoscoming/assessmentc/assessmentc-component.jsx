import './assessmentc-component.scss';
const AssessmentC = () => {
    return (
        <div className="AssessmentC">
            <h1>Assessment Board</h1>
            <table className="rwd-table">
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>University/College</th>
                    </tr>
                    <tr>
                        <td data-th="Name">Dr. Joby P P</td>
                        <td data-th="Designation">Professor & HOD</td>
                        <td data-th="University">Dept.of CSE, SJCET Palai</td>
                    </tr>
                    <tr>
                        <td data-th="Name">Dr . Mathew K K</td>
                        <td data-th="Designation">Principal</td>
                        <td data-th="University">Mount Zion College Of Engineering Kadammanitta</td>
                    </tr>
                    <tr>
                        <td data-th="Name">Dr . Jubilant J Kizhakkethottam</td>
                        <td data-th="Designation">Professor & HOD</td>
                        <td data-th="University">Dept.of CSE, SaintGits College Kottayam</td>
                    </tr>
                    <tr>
                        <td data-th="Name">Dr. A. Antonidoss</td>
                        <td data-th="Designation">Associate Professor</td>
                        <td data-th="University">Dept of CSE,Hindustan University of Technology & Science ,Chennai</td>
                    </tr>
                    <tr>
                        <td data-th="Name">Dr.Karthik Ganesh</td>
                        <td data-th="Designation">Professor</td>
                        <td data-th="University">CSE Dept,SCAD College of Engineering & Technology ,Tirunelveli</td>
                    </tr>
                    <tr>
                        <td data-th="Name">Dr.Sreejith Mohan</td>
                        <td data-th="Designation">Associate Professor</td>
                        <td data-th="University">Dept of ME ,Sreebuddha College of Engineering Pattor</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default AssessmentC;