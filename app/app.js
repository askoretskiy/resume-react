'use strict';

const get_years_since = date => get_full_years(date, new Date());

const get_full_years = (start, end) => {
    let years = end.getFullYear() - start.getFullYear();

    if (end.getMonth() > start.getMonth()) {
        return years;
    } else if (end.getMonth() < start.getMonth()) {
        return years - 1;
    } else if (end.getDate() > start.getDate()) {
        return years;
    } else if (end.getDate() < start.getDate()) {
        return years - 1;
    } else {
        return years;
    }
};


const Application = () => (
    <main>
        <header>
            <h1>Artem Skoretskiy, {get_years_since(new Date(1981, 12, 7, 12))}</h1>
        </header>
        <Photo/>
        <Services/>
        <Profile/>
        <Technologies/>
        <Projects/>
        <Timeline/>
        <footer>
            &copy; {new Date().getFullYear()} Artem Skoretskiy
        </footer>
    </main>
);


const Services = () => (
    <section className="services">
        <h2 className="highlight">Full-stack web developer</h2>
        <ul>
            <li>Backend</li>
            <li>Frontend</li>
            <li>Cloud services integration</li>
            <li>DevOps</li>
        </ul>
        <h3>More when needed</h3>
        <ul>
            <li>Technical lead</li>
            <li>Project manager</li>
            <li>Business analyst</li>
        </ul>
    </section>
);


const Photo = () => (
    <section className="photo">
        <img src="profile.jpg" className="photo"/>
        <Contacts/>
    </section>
);


const Profile = () => (
    <section className="profile">
        <h2>Profile</h2>
        <ul>
            <li>{get_years_since(new Date(2000, 9, 1, 12))} years as software developer</li>
            <li>Live in Köln <span className="gray">(Niederlassungserlaubnis)</span></li>
            <li>Master of Economy</li>
            <li>Intermediate German <span className="gray">(B2.1)</span></li>
            <li>Fluent English</li>
        </ul>
    </section>
);


const Contacts = () => (
    <ul className="contacts">
        <li>+49 (0)157 835 40 848</li>
        <li>artem.skoretskiy@gmail.com</li>
        <li><span className="contact_type">skype</span> tonn81</li>
    </ul>
);


const Technologies = () => (
    <section>
        <h2>Stack</h2>
        <div className="tags-grouped">
            <div className="tag-group">Front-end</div>
                <ul className="tags">
                    <li>Javascript</li>
                    <li>ES8</li>
                    <li>React</li>
                    <li>JSX</li>
                    <li>Redux</li>
                    <li>Webpack 3</li>
                    <li>Babel</li>
                    <li>yarn</li>
                    <li>React hot-reload</li>
                    <li>CSS</li>
                    <li>HTML5</li>
                </ul>
            <div className="tag-group">Backend</div>
                <ul className="tags">
                    <li>Python 3</li>
                    <li>Django</li>
                    <li>JSON REST API</li>
                    <li>Django REST framework</li>
                    <li>SQL</li>
                    <li>MySQL</li>
                    <li>SQLite</li>
                    <li>PostgreSQL</li>
                    <li>Redis</li>
                </ul>
            <div className="tag-group">Cloud</div>
                <ul className="tags">
                    <li>AWS S3</li>
                    <li>AWS S3 uploader</li>
                    <li>AWS EC2</li>
                    <li>AWS custom EMI</li>
                    <li>packer</li>
                    <li>AWS CloudFront</li>
                    <li>AWS Glacier</li>
                </ul>
            <div className="tag-group">DevOps</div>
                <ul className="tags">
                    <li>BASH</li>
                    <li>Docker</li>
                    <li>Docker for Mac</li>
                    <li>Docker Compose</li>
                    <li>GitLab CI</li>
                    <li>nginx</li>
                    <li>uWSGI</li>
                    <li>Linux</li>
                    <li>Debian</li>
                    <li>Alpine</li>
                    <li>compilation</li>
                </ul>
            <div className="tag-group">Video</div>
                <ul className="tags">
                    <li>ffmpeg</li>
                    <li>HTML5 video</li>
                    <li>HLS</li>
                    <li>DASH</li>
                    <li>RTMP</li>
                </ul>
            <div className="tag-group">More</div>
                <ul className="tags">
                    <li>MacOS</li>
                    <li>PyCharm</li>
                </ul>
        </div>
    </section>
);


const Projects = () => (
    <section>
        <h2>Projects</h2>
        <ul>
            <li>TODO</li>
        </ul>
    </section>
);


const Timeline = () => (
    <section>
        <h2>Timeline</h2>
        <ul>
            <li>TODO</li>
        </ul>
    </section>
);


document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Application/>, document.getElementById('root'));
});
