'use strict';

const BIRTH_DAY = new Date(1981, 12, 7, 12);
const FIRST_JOB_DAY = new Date(2000, 9, 1, 12);

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


const toggle_set = (set, value) => {
    let new_set = new Set(set);
    if (!new_set.delete(value)) {
        new_set.add(value);
    }
    return new_set;
};


class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: new Set(),
        };
    }

    toggle(slug) {
        this.setState(prevState => ({expanded: toggle_set(prevState.expanded, slug)}));
    }

    render() {
        return (
            <main>
                <header>
                    <h1>Artem Skoretskiy, {get_years_since(BIRTH_DAY)}</h1>
                </header>
                <Photo/>
                <Services/>
                <Profile/>
                <Technologies/>
                <Timeline/>
                <Projects toggle={this.toggle.bind(this)} expanded={this.state.expanded}/>
                <footer className="gray">
                    &copy; {new Date().getFullYear()} Artem Skoretskiy
                </footer>
            </main>
        );
    }
}


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
            <li>{get_years_since(FIRST_JOB_DAY)} years as [paid] software developer</li>
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
                <li>Ubuntu</li>
            </ul>
        </div>
    </section>
);


const DATA = [
    {
        name: 'Workflow Management System',
        years: {
            2018: 'Web app, Django, Python, RDBMS, SQL, PostgreSQL, SQLite, Redis, BASH, nginx, uWSGI, Gitlab CI, Docker, git, Linux, Alpine, OSX, PyCharm',
        },
    },
    {
        name: 'CORE',
        years: {
            2018: 'Web app, SPA, Thick client, Django, Python, Django REST Framework, Javascript, ES6, ES7, ES8, ESM, CSS, CSS grid, JS bundle, CSS bundle, yarn, Webpack, Babel, PostCSS, React, JSX, Redux, RDBMS, SQL, PostgreSQL, SQLite, BASH, Redis, nginx, uWSGI, Docker, Gitlab CI, git, Linux, Alpine, OSX, PyCharm',
            2017: 'Web app, SPA, Thick client, Django, Python, Django REST Framework, Javascript, ES6, ES7, ES8, ESM, CSS, CSS grid, JS bundle, CSS bundle, yarn, Webpack, Babel, PostCSS, React, JSX, Redux, RDBMS, SQL, PostgreSQL, SQLite, BASH, Redis, nginx, uWSGI, Docker, Gitlab CI, git, Linux, Alpine, OSX, PyCharm',
            2016: 'Web app, Django, Python, Javascript, RDBMS, SQL, MySQL, SQLite, Docker, Gitlab CI, git, Linux, Debian, nginx, uWSGI, OSX, PyCharm',
            2015: 'Web app, Flask, Python, Docker, Linux, Debian, OSX, PyCharm',
        },
    },
    {
        name: 'DblExplorer',
        years: {
            2018: 'Web app, Django, Python, Javascript, AMD, JS bundle, CSS bundle, SCSS, Bower, RDBMS, SQL, PostgreSQL, Redis, nginx, uWSGI, Gitlab CI, Docker, git, Linux, Debian, OSX, PyCharm',
            2017: 'Web app, Django, Python, Javascript, AMD, JS bundle, CSS bundle, SCSS, Bower, RDBMS, SQL, PostgreSQL, Redis, nginx, uWSGI, Gitlab CI, Docker, git, Linux, Debian, OSX, PyCharm',
            2016: 'Web app, Django, Python, Javascript, AMD, JS bundle, CSS bundle, SCSS, Bower, RDBMS, SQL, PostgreSQL, Redis, nginx, uWSGI, Gitlab CI, Docker, git, Linux, Debian, OSX, PyCharm',
        },
    },
    {
        name: 'PCP Termincontrolling',
        years: {
            2017: 'Web app, Django, Python, RDBMS, SQL, PostgreSQL, SQLite, Redis, Gitlab CI, Docker, git, Linux, Alpine, OSX, PyCharm',
        },
    },
    {
        name: 'Event planner',
        years: {
            2016: 'Web app, Django, Python, RDBMS, SQL, MySQL, Docker, git, OSX, Linux, Debian, PyCharm',
        },
    },
    {
        name: 'Opera Leipzig VoD',
        years: {
            2016: 'Web app, Django, Python, RDBMS, SQL, PostgreSQL, SQLite, memcached, AWS, AWS S3, AWS Lambda, AWS Elastictranscode, AWS SQS, nginx, uWSGI, git, Linux, Ubuntu, OSX, PyCharm',
        },
    },
    {
        name: 'Web Apps Archive',
        years: {
            2015: 'Web app, Docker, BASH, nginx, PyCharm, OSX, git',
            2014: 'Web app, Docker, BASH, nginx, OSX, git',
        },
    },
    {
        name: 'PicturePipe Client PC',
        years: {
            2017: 'Web kiosk, BASH, Linux, Ubuntu',
            2016: 'Web kiosk, BASH, Linux, Ubuntu',
            2015: 'Web kiosk, BASH, Linux, Ubuntu',
        },
    },
    {
        name: 'Prequel',
        years: {
            2017: 'Web app, Django, Python, Javascript, CSS, HTML, YAML, Celery, RDBMS, SQL, MySQL, SQLite, memcached, Redis, RabbitMQ, nginx, uWSGI, Fabric, BASH, Gitlab CI, Docker, OSX, PyCharm, Linux, Ubuntu, Debian, git',
            2016: 'Web app, Django, Python, Javascript, CSS, HTML, YAML, Celery, RDBMS, SQL, MySQL, SQLite, memcached, Redis, RabbitMQ, nginx, uWSGI, Fabric, BASH, Gitlab CI, Docker, OSX, PyCharm, Linux, Ubuntu, Debian, git',
            2015: 'Web app, Django, Python, Javascript, CSS, HTML, YAML, Celery, RDBMS, SQL, MySQL, SQLite, memcached, Redis, RabbitMQ, nginx, uWSGI, Fabric, BASH, Docker, OSX, PyCharm, Linux, Ubuntu, Debian, git',
            2014: 'Web app, Django, Python, Javascript, CSS, HTML, YAML, Celery, RDBMS, SQL, MySQL, SQLite, memcached, Redis, RabbitMQ, nginx, uWSGI, Fabric, BASH, OSX, PyCharm, Linux, Ubuntu, git',
            2013: 'Web app, Django, Python, Javascript, CSS, HTML, YAML, Celery, RDBMS, SQL, MySQL, SQLite, memcached, Redis, RabbitMQ, nginx, uWSGI, Fabric, BASH, OSX, Linux, Ubuntu, git',
        }
    },
    {
        name: 'PicturePipe Encoder',
        years: {
            2018: 'Cloud worker, Python, Celery, RabbitMQ, curl, wget, AWS, AWS S3, AWS EC2, AWS AMI, Packer, ffmpeg, mp4Box, DVD, MPEG DASH, Apple HLS, Docker, BASH, checkinstall, Linux, PyCharm, OSX, Debian, git',
            2017: 'Cloud worker, Python, Celery, RabbitMQ, curl, wget, AWS, AWS S3, AWS EC2, AWS AMI, Packer, ffmpeg, mp4Box, DVD, MPEG DASH, Apple HLS, Docker, BASH, checkinstall, Linux, PyCharm, OSX, Debian, git',
            2016: 'Cloud worker, Python, Celery, RabbitMQ, curl, wget, AWS, AWS S3, AWS EC2, AWS AMI, Packer, ffmpeg, DVD, Docker, BASH, checkinstall, Linux, PyCharm, OSX, Debian, git',
            2015: 'Cloud worker, Python, curl, wget, AWS, AWS S3, AWS EC2, AWS AMI, Packer, ffmpeg, DVD, BASH, checkinstall, Docker, Linux, PyCharm, OSX, Debian, git',
            2014: 'Cloud worker, Python, AWS, AWS S3, AWS EC2, AWS AMI, ffmpeg, DVD, BASH, checkinstall, Docker, Linux, PyCharm, OSX, Debian, git',
            2013: 'Cloud worker, Python, AWS, AWS S3, AWS EC2, AWS AMI, ffmpeg, DVD, BASH, Linux, OSX, Ubuntu, git',
            2012: 'Cloud worker, Python, AWS, AWS S3, AWS EC2, AWS AMI, ffmpeg, DVD, BASH, Linux, OSX, Ubuntu, git',
        },
    },
    {
        name: 'PicturePipe',
        years: {
            2018: 'Web app, Django, Python, Tastypie, MPEG DASH, Apple HLS, HTML5, CSS, Javascript, BASH, Celery, RabbitMQ, memcached, RDBMS, SQL, MySQL, SQLite, AWS, AWS S3, AWS EC2, AWS CloudFront, Docker, Gitlab CI, OSX, Fabric, uWSGI, nginx, git, Linux, Debian, PyCharm',
            2017: 'Web app, Django, Python, Tastypie, Django REST Framework, MPEG DASH, Apple HLS, HTML5, CSS, Javascript, BASH, Celery, RabbitMQ, memcached, RDBMS, SQL, MySQ, SQLiteL, AWS, AWS S3, AWS EC2, AWS CloudFront, Docker, Gitlab CI, OSX, Fabric, uWSGI, nginx, git, Linux, Debian, PyCharm',
            2016: 'Web app, Django, Python, Tastypie, Django REST Framework, Flash, HTML5, CSS, Javascript, BASH, Celery, RabbitMQ, memcached, RDBMS, SQL, MySQL, SQLite, AWS, AWS S3, AWS EC2, AWS CloudFront, Docker, Gitlab CI, OSX, Fabric, uWSGI, nginx, git, Linux, Debian, PyCharm',
            2015: 'Web app, Django, Python, Tastypie, Flash, HTML5, CSS, Javascript, BASH, Celery, RabbitMQ, memcached, RDBMS, SQL, MySQL, SQLite, AWS, AWS S3, AWS EC2, AWS CloudFront, Docker, OSX, Fabric, uWSGI, nginx, git, Linux, Debian, PyCharm',
            2014: 'Web app, Django, Python, Tastypie, Flash, HTML5, CSS, Javascript, BASH, Celery, RabbitMQ, memcached, RDBMS, SQL, MySQL, SQLite, AWS, AWS S3, AWS EC2, AWS CloudFront, Docker, OSX, Fabric, uWSGI, nginx, git, Linux, Debian, PyCharm',
            2013: 'Web app, Django, Python, Tastypie, Piston, Django REST Framework, Guardian, Flash, HTML5, CSS, Javascript, BASH, Celery, RabbitMQ, memcached, RDBMS, SQL, MySQL, SQLite, AWS, AWS S3, AWS EC2, AWS CloudFront, OSX, Fabric, uWSGI, nginx, git, Linux, Debian',
            2012: 'Web app, Django, Python, Tastypie, Piston, Django REST Framework, Guardian, Flash, HTML5, CSS, Javascript, BASH, Celery, RabbitMQ, memcached, RDBMS, SQL, MySQL, SQLite, AWS, AWS S3, AWS EC2, AWS CloudFront, OSX, Fabric, uWSGI, nginx, git, Linux, Debian',
        },
    },
    {
        name: 'Starmeo',
        years: {
            2012: 'Web app, Django, Python, Javascript, Celery, RabbitMQ, AWS, AWS S3, RDBMS, SQL, Fabric, ffmpeg, MySQL, Linux, Ubuntu',
            2011: 'Web app, Django, Python, Javascript, Celery, RabbitMQ, AWS, AWS S3, RDBMS, SQL, Fabric, ffmpeg, MySQL, Linux, Ubuntu',
        },
    },
    {
        name: 'Syndicate',
        years: {
            2011: 'Web app, Thick client, Javascript, NodeJS, NoSQL, CouchDB, Django, Python, RDBMS, SQL, MySQL, Linux, Ubuntu',
        },
    },
    {
        name: 'DeinDeal',
        years: {
            2011: 'Web app, Django, Python, Celery, RabbitMQ, Fabric, RDBMS, SQL, MySQL, Linux, Ubuntu',
            2010: 'Web app, Django, Python, Celery, RabbitMQ, Fabric, RDBMS, SQL, MySQL, Linux, Ubuntu',
        },
    },
    {
        name: 'Twangoo',
        years: {
            2010: 'Web app, Django, Python, Celery, RabbitMQ, memcached, Fabric, uWSGI, nginx, YAML, RDBMS, SQL, MySQL, Linux, Ubuntu',
        },
    },
    {
        name: 'CMJ',
        years: {
            2010: 'Web app, Ruby on Rails, Ruby, MySQL, Sybase, Solr, Linux, Ubuntu',
        },
    },
    {
        name: 'ImmersionCast',
        years: {
            2010: 'Web app, Ruby on Rails, Ruby, Flash, RDBMS, SQL, MySQL, nginx, ffmpeg, Linux, Ubuntu',
            2009: 'Web app, Ruby on Rails, Ruby, Flash, RDBMS, SQL, MySQL, nginx, ffmpeg, Linux, Ubuntu',
        },
        features: 'VoD platform, files storage, video processing, video playout + pseudo-streaming, authorized download acceleration',
    },
    {
        name: 'Pollpigeon',
        years: {
            2009: 'Web app, Django, Python, Javascript, RDBMS, SQL, MySQL, Linux, Ubuntu',
        },
    },
    {
        name: 'iChat',
        years: {
            2009: 'Web app, Thick client, Javascript, Python, HTTP, HTML5, HTML, CSS, XMPP, Linux, Ubuntu',
        },
    },
    {
        name: 'Curse Counter',
        years: {
            2009: 'Web app, Ruby on Rails, Ruby, Javascript, RDBMS, SQL, MySQL, Linux, Ubuntu',
        },
    },
    {
        name: 'TechDrifters',
        years: {
            2009: 'Web app, PHP, Elgg, RDBMS, SQL, MySQL, Linux, Ubuntu',
        },
        features: 'Elgg plugins, Google maps integration',
    },
    {
        name: 'Trivia',
        years: {
            2009: 'Web app, Ruby on Rails, Ruby, Javascript, Linux, Ubuntu',
        },
    },
    {
        name: 'SWIX',
        years: {
            2009: 'Web app, Python, Django, Javascript, RDBMS, SQL, MySQL, Linux, Ubuntu, Apache',
            2008: 'Web app, Python, Django, Javascript, RDBMS, SQL, MySQL, Linux, Ubuntu, Apache',
        },
    },
    {
        name: 'Service Merchant',
        years: {
            2008: 'Web app, Ruby on Rails, Ruby, gems, RDBMS, SQL, Mocks, Integration tests, MySQL, Linux, Ubuntu',
        },
    },
    {
        name: 'Credit Reports',
        years: {
            2008: 'Web app, Ruby on Rails, Ruby, DSL, RDBMS, SQL, MySQL, Linux, Ubuntu, SVN',
        },
    },
    {
        name: 'Planner',
        years: {
            2008: 'Web app, Ruby on Rails, Ruby, RDBMS, SQL, MySQL, Linux, Ubuntu, SVN',
        },
    },
    {
        name: 'Webminer',
        years: {
            2008: 'CLI, Python, HTTP, regex, wget, Linux, Ubuntu, SVN',
            2007: 'CLI, Python, HTTP, regex, wget, Linux, Ubuntu, SVN',
            2006: 'CLI, Python, HTTP, regex, wget, Linux, Ubuntu, SVN',
        },
        features: 'Web crawler, Data pipeline',
    },
    {
        name: 'CAS',
        years: {
            2006: 'Web app, ASP, JScript, ASP.NET, C#, RDBMS, SQL, MS SQL, TSQL, SQL Server, Selenium, Python, CVS, Visual Studio, IIS, RDP, Windows',
            2005: 'Web app, ASP, JScript, ASP.NET, C#, RDBMS, SQL, MS SQL, TSQL, SQL Server, Selenium, Python, CVS, Visual Studio, IIS, RDP, Windows',
        },
        features: 'Browser fingerprint',
    },
    {
        name: 'TAU-Master',
        years: {
            2005: 'Web app, PHP, HTTP, HTML, CSS, RDBMS, SQL, Oracle SQL, PL/SQL, Oracle, Apache, ftp, Linux, Windows',
            2004: 'Web app, PHP, HTTP, HTML, CSS, RDBMS, SQL, Oracle SQL, PL/SQL, Oracle, Apache, ftp, Linux, Windows',
            2003: 'Web app, PHP, HTTP, HTML, CSS, RDBMS, SQL, Oracle SQL, PL/SQL, Oracle, Apache, ftp, Linux, Windows',
            2002: 'Web app, PHP, HTTP, HTML, CSS, RDBMS, SQL, Oracle SQL, PL/SQL, Oracle, Apache, ftp, Linux, Windows',
            2001: 'Web app, PHP, HTTP, HTML, CSS, RDBMS, SQL, Oracle SQL, PL/SQL, Oracle, Apache, ftp, Linux, Windows',
            2000: 'Web app, PHP, HTTP, HTML, CSS, RDBMS, SQL, Oracle SQL, PL/SQL, Oracle, Apache, ftp, Linux, Windows',
        },
        features: 'Homebrew framework',
    },
    {
        name: 'Online Accounting Course',
        years: {
            2000: 'Web app, PHP, HTML, RDBMS, SQL, Oracle SQL, Oracle, Windows',
        },
    },
];




const Projects = ({toggle, expanded}) => (
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
            <p>Application that transcodes user video into requested format for PicturePipe.
                <ToggleLink slug="pp-encoder-features" toggle={toggle} expanded={expanded}/>
            </p>

            {!expanded.has('pp-encoder-features') ? null : (
                <ul>
                    <li>2018: Integrate proprietary HEVC (h265) encoder</li>
                    <li>2018: Benchmark EC2 instance types</li>
                    <li>2017: Archive source to AWS Glacier</li>
                    <li>2017: Generate Apple HLS assets</li>
                    <li>2017: Generate MPEG DASH assets</li>
                    <li>???: Download source file by URL (including password)</li>
                </ul>
            )}
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


const Timeline = () => {
    let years = [];
    const first_year = FIRST_JOB_DAY.getFullYear();
    for (let year = new Date().getFullYear(); year >= first_year; year--) {
        years.push(year);
    }
    return (
        <section>
            <h2>Timeline</h2>
            <ul className="tags">
                {years.map(year => (
                    <li>{year}</li>
                ))}
            </ul>
        </section>
    );
};

const ToggleLink = ({toggle, expanded, slug}) => {
    let slug_expanded = expanded.has(slug);
    return (
        <a href="#" className={`toggle ${slug_expanded ? 'less' : 'more'}`} onClick={e => {
            toggle(slug);
            e.preventDefault();
        }}>{slug_expanded ? 'Less' : 'More'}</a>
    )
};


document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Application/>, document.getElementById('root'));
});
