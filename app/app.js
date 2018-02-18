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
        <footer className="gray">
            &copy; {new Date().getFullYear()} Artem Skoretskiy
        </footer>
    </main>
);


const Services = () => (
    <section className="profile_column1">
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
    <section className="profile_column1">
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
    <ul className="no-list">
        <li>+49 (0)157 835 40 848</li>
        <li>artem.skoretskiy@gmail.com</li>
        <li><span className="gray colon-after">skype</span> tonn81</li>
    </ul>
);


const Technologies = () => (
    <section>
        <h2>Stack</h2>
        <div className="tags-grouped">
            <div className="column1-2 tag-group colon-after">Front-end</div>
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
            <div className="column1-2 tag-group colon-after">Backend</div>
            <ul className="tags">
                <li>Python 3</li>
                <li>Django</li>
                <li>Django i18n</li>
                <li>Celery</li>
                <li>JSON REST API</li>
                <li>Django REST framework</li>
                <li>SQL</li>
                <li>MySQL</li>
                <li>SQLite</li>
                <li>PostgreSQL</li>
                <li>Redis</li>
                <li>RabbitMQ</li>
            </ul>
            <div className="column1-2 tag-group colon-after">Cloud</div>
            <ul className="tags">
                <li>AWS S3</li>
                <li>AWS S3 uploader</li>
                <li>AWS EC2</li>
                <li>AWS custom EMI</li>
                <li>Packer</li>
                <li>AWS CloudFront</li>
                <li>AWS Glacier</li>
            </ul>
            <div className="column1-2 tag-group colon-after">DevOps</div>
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
            <div className="column1-2 tag-group colon-after">Video</div>
            <ul className="tags">
                <li>ffmpeg</li>
                <li>HTML5 video</li>
                <li>HLS</li>
                <li>DASH</li>
                <li>RTMP</li>
            </ul>
            <div className="column1-2 tag-group colon-after">More</div>
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

        <article className="project">
            <h3>CORE</h3>
            <ul className="tags">
                <li>Javascript</li>
                <li>React</li>
                <li>Redux</li>
                <li>Webpack</li>
                <li>Babel</li>
                <li>Python 3</li>
                <li>Django</li>
                <li>Django REST Framework</li>
                <li>PostgreSQL</li>
                <li>Redis</li>
                <li>Docker</li>
                <li>nginx</li>
                <li>uWSGI</li>
                <li>Gitlab CI</li>
            </ul>
            <p>Web application for company's internal processes (billing, time logging, availability, drinks, etc)
                automation. More</p>
        </article>

        <article className="project">
            <h3>Workflow management system</h3>
            <ul className="tags">
                <li>Python 3</li>
                <li>Django</li>
                <li>ViewFlow</li>
                <li>PostgreSQL</li>
                <li>Redis</li>
                <li>Docker</li>
                <li>nginx</li>
                <li>uWSGI</li>
                <li>Gitlab CI</li>
                <li>BPMN</li>
            </ul>
            <p>Web application for company's workflows (processes) automation. [More]</p>
        </article>

        <article className="project">
            <h3>PicturePipe Encoder</h3>
            <ul className="tags">
                <li>Python</li>
                <li>Celery</li>
                <li>RabbitMQ</li>
                <li>ffmpeg</li>
                <li>mp4Box</li>
                <li>Debian</li>
                <li>Docker</li>
                <li>BASH</li>
                <li>AWS CLI</li>
                <li>wget</li>
                <li>curl</li>
                <li>compilation</li>
                <li>EC2</li>
                <li>EC2 custom AMI</li>
                <li>Packer</li>
            </ul>
            <p>Application that transcodes user video into requested format for PicturePipe. [More]</p>
            <ul>
                <li>2018: Integrate proprietary HEVC (h265) encoder</li>
                <li>2018: Benchmark EC2 instance types</li>
                <li>2017: Archive source to AWS Glacier</li>
                <li>2017: Generate Apple HLS assets</li>
                <li>2017: Generate MPEG DASH assets</li>
                <li>???: Download source file by URL (including password)</li>
            </ul>
        </article>

        <article className="project">
            <h3>PicturePipe</h3>
            <ul className="tags">
                <li>Python</li>
                <li>Django</li>
                <li>Tastypie</li>
                <li>Guardian</li>
                <li>MySQL</li>
                <li>memcached</li>
                <li>Docker</li>
                <li>tox</li>
                <li>nginx</li>
                <li>uWSGI</li>
                <li>Selenium</li>
                <li>Gitlab CI</li>
            </ul>
            <p>Web platform for receiving, storing and playing videos and its metadata. [More]</p>
            <ul>
                <li>2017: Play Apple HLS assets</li>
                <li>2017: Play MPEG DASH assets</li>
                <li>2017: Place secure overlay on HTML5 video</li>
                <li>???: Prepare web kiosks based on Linux</li>
                <li>???: Scale number of EC2 instance for PicturePipe Encoder according to load</li>
            </ul>
        </article>

        <article className="project">
            <h3>DblExplorer</h3>
            <ul className="tags">
                <li>Python</li>
                <li>Django</li>
                <li>PostgreSQL</li>
                <li>Redis</li>
                <li>Docker</li>
                <li>nginx</li>
                <li>uWSGI</li>
                <li>Gitlab CI</li>
            </ul>
            <p>Online catalog for electric machines. [More]</p>
        </article>

        <article className="project">
            <h3>PCP Termincontrolling</h3>
            <ul className="tags">
                <li>Python 3</li>
                <li>Django</li>
                <li>PostgreSQL</li>
                <li>Redis</li>
                <li>Docker</li>
                <li>nginx</li>
                <li>uWSGI</li>
                <li>Gitlab CI</li>
            </ul>
            <p>Web application for company's workflows (processes) automation. [More]</p>
        </article>

        <article className="project">
            <h3>Prequel</h3>
            <ul className="tags">
                <li>Python</li>
                <li>Django</li>
                <li>MySQL</li>
                <li>memcached</li>
                <li>Redis</li>
                <li>Docker</li>
                <li>tox</li>
                <li>nginx</li>
                <li>uWSGI</li>
                <li>Gitlab CI</li>
            </ul>
            <p>Web-based videotheque that used PicturePipe as backend. [More]</p>
        </article>
    </section>
);


const Timeline = () => (
    <section>
        <h2>Timeline</h2>
        TODO
    </section>
);


document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Application/>, document.getElementById('root'));
});
