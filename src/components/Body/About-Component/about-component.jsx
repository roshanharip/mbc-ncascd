import './about-component.scss';
import ClgImg from '../../../assets/img/about/about.jpg';
import groupWorkImg from '../../../assets/img/about/groupwork.jpg';
import Shape1 from '../../../assets/img/about/shap1.png';
import DeptImg from '../../../assets/img/about/department.jpg';
import PlaceImg from '../../../assets/img/about/kuttikanam.jpg';
const AboutComponent = () => {
    return (
        <div className='AboutComponent'>
            <div className='AboutC1 AboutC'>
                <section className='NacscdAbout'>
                    <div className='groupImg' >
                        <img src={groupWorkImg} alt="" />
                    </div>
                    <div className='AboutNcascd'>
                        <img src={Shape1} alt="" className='Shape1' />

                        <h1 >
                            NCASCD
                        </h1>
                        <p >
                            The real world offers many models and paradigm for engineers in the area of Computer Science and engineering. National Conference on Advances in Smart Computing and Data Science is organized to bring together, practiontioners, faculty and students to share their research findings, discuss intersting problems and potential solutions and enhance knowledge in recent development in the area of control and computation. The elementary objective of the conference is to highlight upcoming trends in smart computing and data science.
                        </p>
                    </div>
                </section>
            </div>
            <div className='AboutC2 AboutC'>
                <section className='MbccetAbout'>
                    <div className='clgImg'>
                        <img src={ClgImg} alt="" />
                    </div>
                    <div className='AboutInstitute'>
                        <h1>INSTITUTION</h1>
                        <p className='mainins'>
                            Mar Baselios Christian College of Engineering &
                            Technology, Kuttikkanam, Peermade, is a self-financing institution for professional Education, affiliated to Kerala Technological University & Mahatma
                            Gandhi University and approved by All India Council for Technical Education (AICTE), New Delhi. The
                            College is owned and managed by the Malankara
                            Orthodox Syrian Church, which plays a paternal role
                            in the institutions establishment and operations.
                            The institution focuses on offering baccalaureate
                            degree programs in various Engineering streams
                        </p>
                    </div>
                </section>
            </div>
            <div className='AboutC3 AboutC'>
                <section className='DeptAbout'>
                    <div className='deptImg'>
                        <img src={DeptImg} alt="" />
                    </div>
                    <div className="AboutDepartment">
                        <h1>DEPARTMENT</h1>
                        <p>
                            The department of Computer Science and Engineering started functioning in the year of
                            2001 with a mission focused on preparing world
                            class computer professionals through proficient mentors and researchers and to build
                            quality engineers to excel in their profession to
                            satisfy the global needs .The department has
                            well qualified experienced and hardworking
                            faculty who are committed in developing the
                            skills of the student in the field of computer
                            science. The activities conducted in the department are to mould bright young computer science engineers for the top – class companies.
                        </p>
                    </div>
                </section>
            </div>
            <div className='AboutC4 AboutC'>
                <section className='PlaceAbout'>
                    <div className='placeImg'>
                        <img src={PlaceImg} alt="" />
                    </div>
                    <div className="AboutPlace">
                        <h1>KUTTIKANAM</h1>
                        <p>
                            Kuttikkanam is a hill station in Idukki district,
                            Kerala, which is 1100 metres above sea level and
                            surrounded by lush green tea plantations meadows. Kuttikkanam offers a very cool climate to its
                            visitors. Moreover, it is an adventure tourism spot
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}
export default AboutComponent;