import './advisoryboard-component.scss';
const AdvisoryBoard = () => {
    return(
        <div className="advisoryBoard">
            <h1>Advisory Board</h1>
            <table className="rwd-table">
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>University/College</th>
                    </tr>
                    <tr>
                        <td data-th="Name">Dr . Satyanarayanam Reddy Kalli</td>
                        <td data-th="Designation">Professor</td>
                        <td data-th="University">Jain University, Banglore</td>
                    </tr>
                    <tr>
                        <td data-th="Name">Dr . V Sampath Kumar</td>
                        <td data-th="Designation">Professor</td>
                        <td data-th="University">Dept.of Electronics & Instrumentation , VJEC Kannur</td>
                    </tr>
                    <tr>
                        <td data-th="Name">Dr.Anto Sahaya Dhas</td>
                        <td data-th="Designation">Professor</td>
                        <td data-th="University">Electronics & Communication Engineering ,VJEC Kannur</td>
                    </tr>
                    <tr>
                        <td data-th="Name">Dr.S A Kalaiselvan</td>
                        <td data-th="Designation">Associate Professor</td>
                        <td data-th="University">CSE Dept,AVN Institute of Engineering & Technology ,Hyderabad </td>
                    </tr>
                    <tr>
                        <td data-th="Name">Dr.Anoop K J</td>
                        <td data-th="Designation">Dean-Academics</td>
                        <td data-th="University">Electronics & Communication Engineering ,MBCCET</td>
                    </tr>
                    <tr>
                        <td data-th="Name">Dr. G Glan Devadhas</td>
                        <td data-th="Designation">Professor</td>
                        <td data-th="University">Electronics & Instrumentation Dept ,VJEC Kannur</td>
                    </tr>
                    <tr>
                        <td data-th="Name">Dr. Latha Parthiban</td>
                        <td data-th="Designation">Assistant Professor</td>
                        <td data-th="University">Computer Science & Engineering, University College, Pondicherry</td> 
                    </tr>
                    <tr>
                        <td data-th="Name">Dr. A. Antonidoss</td>
                        <td data-th="Designation">Associate Professor</td>
                        <td data-th="University">Dept of CSE,Hindustan University of Technology & Science ,Chennai</td>
                
                    </tr>
                    <tr>
                        <td data-th="Name">Dr. Teena Joseph</td>
                        <td data-th="Designation">Associate Professor</td>
                        <td data-th="University">Computer Science & Engineering, MBCCET</td>
                    </tr>
                </tbody>
            </table>  
        </div>
    );
}
export default AdvisoryBoard;