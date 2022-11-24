import './speaker-component.scss';
import guestImg from '../../../assets/img/speakers/guest_img.png';
const Speakers = () => {
    return (
        <div className="Speakers">
            <div className="SpeakComp">
                <div className='SpeakerIntro'>
                    <div className='guestImg'>
                        <img src={guestImg} alt="" />
                    </div>
                    <div className="speakerName">
                        <h3>Dr. Mendus Jacob</h3>
                        <p>CEO & MD IPSR Group, Director, M.C.A. Programme, Marian College, Kuttikkanam</p>
                    </div>
                </div>
                <div className='speakerDes'>
                    <p>
                        Prof. Dr. MENDUS JACOB, M.Sc., M.Phil., Ph.D., MIoD, the CEO of IPSR and
                        Valin Technologies, U.K., is an Academician and an Entrepreneur with 25 + years of teaching
                        experience and 15 + years of Industrial experience. He is also the Professor & Director
                        of MCA Programme at Marian College, Kuttikkanam and the former Director of
                        School of Applicable Mathematics, M.G. University.
                        He acted as Chairman and Member of many Academic Bodies constituted by the
                        University and currently serving as the Member, Governing Body of Marian College &
                        Marian International Institute of Management (MIIM), Kuttikkanam.
                        In addition to his capacity as Director, MCA Programme, he is also the Chairman, Board
                        of Studies of MCA Course at Marian College which is granted Autonomy status by the
                        Government. He received the Best Entrepreneur Award from Chief Minister of Kerala and
                        IT Education Excellence Award from the Defence Minister of India. IPSR Solutions Ltd.
                        under the leadership of Dr. Mendus Jacob has bagged ‘Samman Patra’ Award from
                        Ministry of Finance, Government of India and 21 Awards from Red Hat, the leaders in
                        Open Source. He is a Ph.D. in Operations Research and has to his credit a number of National and
                        International publications. He holds the International Certification of Directorship awarded
                        by Institute of Directors and is eligible for becoming the Director of any company globally.
                        He has served as resource person for many National & International Seminars &
                        Conferences in Mathematics, Management and Computer Applications.
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Speakers;