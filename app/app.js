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
        <h1>Artem Skoretskiy <span className="dense">//</span>
            <span className="highlight">full-stack web developer</span></h1>
        <Photo />
        <Services/>
        <Contacts />
        <Profile/>
        <Skills/>
        <Projects/>
        <Timeline/>
    </main>
);


const Services = () => (
    <section>
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
        <img src="profile.jpg" className="photo" />
    </section>
);


const Profile = () => (
    <section>
        <h2>Profile</h2>
        <ul>
            <li>{get_years_since(new Date(1981, 12, 7, 12))} years</li>
            <li>{get_years_since(new Date(2000, 9, 1, 12))} years as software developer</li>
            <li>Live in Köln</li>
            <li>Master of Economy</li>
            <li>Fluent English</li>
            <li>Intermediate German (B2.1)</li>
        </ul>
    </section>
);


const Contacts = () => (
    <section>
        <h2>Contacts</h2>
        <ul>
            <li><span className="contact_type">phone</span> +49 (0)157 835 40 848</li>
            <li><span className="contact_type">email</span> artem.skoretskiy@gmail.com</li>
            <li><span className="contact_type">skype</span> tonn81</li>
        </ul>
    </section>
);


const Skills = () => (
    <section>
        <h2>Skills</h2>
        <ul>
            <li>Python 3</li>
            <li>Django</li>
            <li>Django REST framework</li>
            <li>JSON REST API</li>
            <li>Javascript</li>
            <li>ES8</li>
            <li>React</li>
            <li>Redux</li>
            <li>Webpack 3</li>
            <li>Babel</li>
            <li>React hot-reload</li>
            <li>CSS</li>
            <li>HTML5</li>
            <li>SQL</li>
            <li>MySQL</li>
            <li>SQLite</li>
            <li>PostgreSQL</li>
            <li>BASH</li>
            <li>AWS S3 (+ upload)</li>
            <li>AWS EC2 (+ custom AMIs)</li>
            <li>packer</li>
            <li>AWS CloudFront</li>
            <li>AWS Glacier</li>
            <li>ffmpeg</li>
            <li>HTML5 video</li>
            <li>HLS</li>
            <li>DASH</li>
            <li>Docker</li>
            <li>Docker for Mac</li>
            <li>Docker Compose</li>
            <li>GitLab CI</li>
            <li>Linux</li>
            <li>Debian</li>
            <li>Alpine</li>
            <li>MacOS</li>
            <li>PyCharm</li>
        </ul>
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
