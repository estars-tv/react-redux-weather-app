import React, {Component} from 'react';
import './styles/main.css';
import Search from './containers/search';
import History from './containers/history';

class App extends Component {
    render() {
        return (
            <div className='background'>
                <div className='container'>
                    <Search/>

                    <svg id="back">
                        <radialGradient id="SVGID_1_" cx="0" cy="0" r="320.8304" gradientUnits="userSpaceOnUse">
                            <stop offset="0" style={{stopColor: '#FFDE17', stopOpacity: 0.7}}/>
                            <stop offset="1" style={{stopColor: '#FFF200', stopPpacity: 0}}/>
                        </radialGradient>
                        <path id="sunburst" d="M0,319.7c-18.6,0-37.3-1.6-55.5-4.8L-7.8,41.4c5.1,0.9,10.6,0.9,15.7,0L56,314.8C37.6,318,18.8,319.7,0,319.7z
	 M-160.8,276.6c-32.5-18.8-61.3-42.9-85.5-71.6L-34,26.2c3.4,4.1,7.4,7.4,12,10.1L-160.8,276.6z M161.3,276.4L22.1,36.2
	c4.5-2.6,8.6-6,12-10.1l212.6,178.5C222.5,233.4,193.8,257.6,161.3,276.4z M-302.5,108.3C-315.4,73-321.9,36-322-1.8l277.6-0.5
	c0,5.3,0.9,10.4,2.7,15.2L-302.5,108.3z M302.6,107.8L41.8,12.8c1.7-4.7,2.6-9.7,2.6-14.9c0-0.3,0-0.6,0-1H322l0-1.3l0,1.9
	C322,35.4,315.5,72.5,302.6,107.8z M-41.8-17.5l-261-94.5c12.8-35.4,31.6-68,55.8-96.9L-34.1-30.8C-37.5-26.8-40.1-22.3-41.8-17.5z
	 M41.7-17.7c-1.8-4.8-4.4-9.3-7.8-13.3l212-179.2c24.3,28.8,43.3,61.3,56.3,96.6L41.7-17.7z M-22.2-40.8l-139.6-240
	c32.7-19,68.1-32,105.2-38.6L-8-46.1C-13-45.2-17.8-43.4-22.2-40.8z M22-40.9c-4.4-2.6-9.2-4.3-14.2-5.1l47.1-273.6
	c37.2,6.4,72.7,19.2,105.4,38L22-40.9z"/>
                    </svg>
                    <nav>
                        <ul>
                            <li><a id='button-snow' className='active'><i className='wi wi-snow'></i></a></li>
                            <li><a id='button-wind'><i className='wi wi-strong-wind'></i></a></li>
                            <li><a id='button-rain'><i className='wi wi-rain'></i></a></li>
                            <li><a id='button-thunder'><i className='wi wi-lightning'></i></a></li>
                            <li><a id='button-sun'><i className='wi wi-day-sunny'></i></a></li>
                        </ul>
                    </nav>
                    <div id='card' className='weather'>
                        <svg id='inner'>
                            <defs>
                                <path id='leaf'
                                      d='M41.9,56.3l0.1-2.5c0,0,4.6-1.2,5.6-2.2c1-1,3.6-13,12-15.6c9.7-3.1,19.9-2,26.1-2.1c2.7,0-10,23.9-20.5,25 c-7.5,0.8-17.2-5.1-17.2-5.1L41.9,56.3z'/>
                            </defs>
                            <circle id='sun' style={{fill: '#F7ED47', cx: 0, cy: 0, r: 50}}/>
                            <g id='layer3'></g>
                            <g id='cloud3' className='cloud'></g>
                            <g id='layer2'></g>
                            <g id='cloud2' className='cloud'></g>
                            <g id='layer1'></g>
                            <g id='cloud1' className='cloud'></g>
                        </svg>
                        <div className='details'>
                            <div className='temp'>20<span>c</span></div>
                            <div className='right'>
                                <div id='date'>Monday 22 August</div>
                                <div id='summary'></div>
                            </div>

                        </div>
                    </div>
                    <svg id='outer'></svg>

                    <History/>
                </div>
            </div>
        );
    }
}

export default App;