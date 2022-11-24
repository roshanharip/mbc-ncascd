import './technicalc-component.scss';
const TechnicalC = () => {
    return (
        <div className="TechnicalC">
            <h1>Technical Committee</h1>
            <table className="rwd-table">
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>University/College</th>

                    </tr>
                    <tr>
                        <td data-th="Name">
                            Prof Rahul Ajithkumar
                        </td>
                        <td data-th="Designation">
                            Assistant Professor
                        </td>
                        <td data-th="University">
                            MBCCET
                        </td>

                    </tr>
                    <tr>
                        <td data-th="Name">
                            Mr Deepu Jacob
                        </td>
                        <td data-th="Designation">
                            System Administrator
                        </td>
                        <td data-th="University">
                            MBCCET
                        </td>


                    </tr>
                </tbody>
            </table>

        </div>
    );
}
export default TechnicalC;