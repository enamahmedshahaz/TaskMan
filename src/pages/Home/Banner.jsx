import { Link } from 'react-router-dom';
import img1 from '../../assets/images/banner/banner1.png';
import img2 from '../../assets/images/banner/banner2.png';
import img3 from '../../assets/images/banner/banner3.png';

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] mt-5 mb-5">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold'>Kickstart Your Productivity!</h2>
                        <p>Plan your day with precision. Organize tasks in the To-Do banner to ensure nothing slips through the cracks. Your journey to productivity starts here!</p>
                        <div>
                            <Link to="/dashboard/ManageTasks" ><button className="btn btn-primary mr-5">Let’s Explore</button></Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold'>Power through Progress!</h2>
                        <p>Witness your tasks come to life in the In Progress banner. Move seamlessly between ongoing projects and keep the momentum going. Stay in control, stay ahead!</p>
                        <div>
                            <Link to="/dashboard/ManageTasks" ><button className="btn btn-primary mr-5">Let’s Explore</button></Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold'>Celebrate Achievements!</h2>
                        <p>Bask in the glow of success! The Completed banner is your wall of triumph. Showcase your completed tasks and relish the satisfaction of a job well done. Ready to make your mark?</p>
                        <div>
                            <Link to="/dashboard/ManageTasks" ><button className="btn btn-primary mr-5">Let’s Explore </button></Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;