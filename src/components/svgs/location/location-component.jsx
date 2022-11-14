import './location-component.scss';
const LocationSvg = () => {

    return(
        <div className='LocationSvg'>
           <span className='locationSvg'>
                <svg viewBox="0 0 50 50">
                    <defs>
                        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-pin">
                            <stop stopColor="#2100FF" offset="0%"></stop><stop stopColor="#5501D2" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <g id="Interim-Site" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="Assets" transform="translate(-167.000000, -479.000000)">
                            <g id="Pin" transform="translate(167.000000, 479.000000)">
                                <circle id="Oval-Copy-2" fill="#2a1e4b" opacity="0.5" cx="25" cy="25" r="25"></circle>
                                <path d="M25.3211041,23.7217987 C23.3140172,23.7217987 21.6855091,22.0944157 21.6855091,20.0873287 C21.6855091,18.0791167 23.3140172,16.4506087 25.3211041,16.4506087 C27.3304412,16.4506087 28.9578242,18.0791167 28.9578242,20.0873287 C28.9578242,22.0944157 27.3304412,23.7217987 25.3211041,23.7217987 M33.9766667,21.1533124 C33.9766667,16.3741054 30.1003112,12.5 25.3222292,12.5 C20.5430221,12.5 16.6666667,16.3741054 16.6666667,21.1533124 C16.6666667,22.7306308 17.0975603,24.2061322 17.8322172,25.4802499 L17.8260294,25.4802499 L25.318854,37.2476973 L32.8161789,25.4802499 L32.807741,25.4802499 C33.546898,24.2061322 33.9766667,22.7306308 33.9766667,21.1533124" id="Fill-1" fill="#FFFFFF"></path>
                            </g>
                        </g>
                    </g>
                </svg>
            </span>
            <span className='SvgContentLocation'>
                Kuttikanam, Idukki, Kerala
            </span>
        </div>
    );
}
export default LocationSvg;