'use strict';

const BIRTH_DAY = new Date(1981, 12, 7, 12);
const FIRST_JOB_DAY = new Date(2000, 9, 1, 12);

const DATA = [{
    name: 'Workflow Management System',
    years: {
        2018: 'Web app, Django, Python, RDBMS, SQL, PostgreSQL, SQLite, Redis, BASH, nginx, uWSGI, Gitlab CI, Docker, git, Linux, Alpine, OSX, PyCharm'
    }
}, {
    name: 'CORE',
    years: {
        2018: 'Web app, SPA, Thick client, Django, Python, Django REST Framework, Javascript, ES6, ES7, ES8, ESM, CSS, CSS grid, JS bundle, CSS bundle, yarn, Webpack, Babel, PostCSS, React, JSX, Redux, RDBMS, SQL, PostgreSQL, SQLite, BASH, Redis, nginx, uWSGI, Docker, Gitlab CI, git, Linux, Alpine, OSX, PyCharm',
        2017: 'Web app, SPA, Thick client, Django, Python, Django REST Framework, Javascript, ES6, ES7, ES8, ESM, CSS, CSS grid, JS bundle, CSS bundle, yarn, Webpack, Babel, PostCSS, React, JSX, Redux, RDBMS, SQL, PostgreSQL, SQLite, BASH, Redis, nginx, uWSGI, Docker, Gitlab CI, git, Linux, Alpine, OSX, PyCharm',
        2016: 'Web app, Django, Python, Javascript, RDBMS, SQL, MySQL, SQLite, Docker, Gitlab CI, git, Linux, Debian, nginx, uWSGI, OSX, PyCharm',
        2015: 'Web app, Flask, Python, Docker, Linux, Debian, OSX, PyCharm'
    }
}, {
    name: 'DblExplorer',
    years: {
        2018: 'Web app, Django, Python, Javascript, AMD, JS bundle, CSS bundle, SCSS, Bower, RDBMS, SQL, PostgreSQL, Redis, nginx, uWSGI, Gitlab CI, Docker, git, Linux, Debian, OSX, PyCharm',
        2017: 'Web app, Django, Python, Javascript, AMD, JS bundle, CSS bundle, SCSS, Bower, RDBMS, SQL, PostgreSQL, Redis, nginx, uWSGI, Gitlab CI, Docker, git, Linux, Debian, OSX, PyCharm',
        2016: 'Web app, Django, Python, Javascript, AMD, JS bundle, CSS bundle, SCSS, Bower, RDBMS, SQL, PostgreSQL, Redis, nginx, uWSGI, Gitlab CI, Docker, git, Linux, Debian, OSX, PyCharm'
    }
}, {
    name: 'PCP Termincontrolling',
    years: {
        2017: 'Web app, Django, Python, RDBMS, SQL, PostgreSQL, SQLite, Redis, Gitlab CI, Docker, git, Linux, Alpine, OSX, PyCharm'
    }
}, {
    name: 'Event planner',
    years: {
        2016: 'Web app, Django, Python, RDBMS, SQL, MySQL, Docker, git, OSX, Linux, Debian, PyCharm'
    }
}, {
    name: 'Opera Leipzig VoD',
    years: {
        2016: 'Web app, Django, Python, RDBMS, SQL, PostgreSQL, SQLite, memcached, AWS, AWS S3, AWS Lambda, AWS ElasticTranscode, AWS SQS, nginx, uWSGI, git, Linux, Ubuntu, OSX, PyCharm'
    }
}, {
    name: 'Web Apps Archive',
    years: {
        2015: 'Web app, Docker, BASH, nginx, PyCharm, OSX, git',
        2014: 'Web app, Docker, BASH, nginx, OSX, git'
    }
}, {
    name: 'PicturePipe Client PC',
    years: {
        2017: 'Web kiosk, BASH, Linux, Ubuntu',
        2016: 'Web kiosk, BASH, Linux, Ubuntu',
        2015: 'Web kiosk, BASH, Linux, Ubuntu'
    }
}, {
    name: 'Prequel',
    years: {
        2017: 'Web app, Django, Python, Javascript, CSS, HTML, YAML, Celery, RDBMS, SQL, MySQL, SQLite, memcached, Redis, RabbitMQ, nginx, uWSGI, Fabric, BASH, Gitlab CI, Docker, OSX, PyCharm, Linux, Ubuntu, Debian, git',
        2016: 'Web app, Django, Python, Javascript, CSS, HTML, YAML, Celery, RDBMS, SQL, MySQL, SQLite, memcached, Redis, RabbitMQ, nginx, uWSGI, Fabric, BASH, Gitlab CI, Docker, OSX, PyCharm, Linux, Ubuntu, Debian, git',
        2015: 'Web app, Django, Python, Javascript, CSS, HTML, YAML, Celery, RDBMS, SQL, MySQL, SQLite, memcached, Redis, RabbitMQ, nginx, uWSGI, Fabric, BASH, Docker, OSX, PyCharm, Linux, Ubuntu, Debian, git',
        2014: 'Web app, Django, Python, Javascript, CSS, HTML, YAML, Celery, RDBMS, SQL, MySQL, SQLite, memcached, Redis, RabbitMQ, nginx, uWSGI, Fabric, BASH, OSX, PyCharm, Linux, Ubuntu, git',
        2013: 'Web app, Django, Python, Javascript, CSS, HTML, YAML, Celery, RDBMS, SQL, MySQL, SQLite, memcached, Redis, RabbitMQ, nginx, uWSGI, Fabric, BASH, OSX, Linux, Ubuntu, git'
    }
}, {
    name: 'PicturePipe Encoder',
    years: {
        2018: 'Cloud worker, Python, Celery, RabbitMQ, curl, wget, AWS, AWS S3, AWS EC2, AWS AMI, Packer, ffmpeg, mp4Box, DVD ISO, MPEG DASH, Apple HLS, Docker, BASH, checkinstall, Linux, PyCharm, OSX, Debian, git',
        2017: 'Cloud worker, Python, Celery, RabbitMQ, curl, wget, AWS, AWS S3, AWS EC2, AWS AMI, Packer, ffmpeg, mp4Box, DVD ISO, MPEG DASH, Apple HLS, Docker, BASH, checkinstall, Linux, PyCharm, OSX, Debian, git',
        2016: 'Cloud worker, Python, Celery, RabbitMQ, curl, wget, AWS, AWS S3, AWS EC2, AWS AMI, Packer, ffmpeg, DVD ISO, Docker, BASH, checkinstall, Linux, PyCharm, OSX, Debian, git',
        2015: 'Cloud worker, Python, curl, wget, AWS, AWS S3, AWS EC2, AWS AMI, Packer, ffmpeg, DVD ISO, BASH, checkinstall, Docker, Linux, PyCharm, OSX, Debian, git',
        2014: 'Cloud worker, Python, AWS, AWS S3, AWS EC2, AWS AMI, ffmpeg, DVD ISO, BASH, checkinstall, Docker, Linux, PyCharm, OSX, Debian, git',
        2013: 'Cloud worker, Python, AWS, AWS S3, AWS EC2, AWS AMI, ffmpeg, DVD ISO, BASH, Linux, OSX, Ubuntu, git',
        2012: 'Cloud worker, Python, AWS, AWS S3, AWS EC2, AWS AMI, ffmpeg, DVD ISO, BASH, Linux, OSX, Ubuntu, git'
    }
}, {
    name: 'PicturePipe',
    years: {
        2018: 'Web app, Django, Python, Tastypie, MPEG DASH, Apple HLS, HTML5, CSS, Javascript, BASH, Celery, RabbitMQ, memcached, RDBMS, SQL, MySQL, SQLite, AWS, AWS S3, AWS EC2, AWS CloudFront, Docker, Gitlab CI, OSX, Fabric, uWSGI, nginx, git, Linux, Debian, PyCharm',
        2017: 'Web app, Django, Python, Tastypie, Django REST Framework, MPEG DASH, Apple HLS, HTML5, CSS, Javascript, BASH, Celery, RabbitMQ, memcached, RDBMS, SQL, MySQL, SQLite, AWS, AWS S3, AWS EC2, AWS CloudFront, Docker, Gitlab CI, OSX, Fabric, uWSGI, nginx, git, Linux, Debian, PyCharm',
        2016: 'Web app, Django, Python, Tastypie, Django REST Framework, Flash, HTML5, CSS, Javascript, BASH, Celery, RabbitMQ, memcached, RDBMS, SQL, MySQL, SQLite, AWS, AWS S3, AWS EC2, AWS CloudFront, Docker, Gitlab CI, OSX, Fabric, uWSGI, nginx, git, Linux, Debian, PyCharm',
        2015: 'Web app, Django, Python, Tastypie, Flash, HTML5, CSS, Javascript, BASH, Celery, RabbitMQ, memcached, RDBMS, SQL, MySQL, SQLite, AWS, AWS S3, AWS EC2, AWS CloudFront, Docker, OSX, Fabric, uWSGI, nginx, git, Linux, Debian, PyCharm',
        2014: 'Web app, Django, Python, Tastypie, Flash, HTML5, CSS, Javascript, BASH, Celery, RabbitMQ, memcached, RDBMS, SQL, MySQL, SQLite, AWS, AWS S3, AWS EC2, AWS CloudFront, Docker, OSX, Fabric, uWSGI, nginx, git, Linux, Debian, PyCharm',
        2013: 'Web app, Django, Python, Tastypie, Piston, Django REST Framework, Guardian, Flash, HTML5, CSS, Javascript, BASH, Celery, RabbitMQ, memcached, RDBMS, SQL, MySQL, SQLite, AWS, AWS S3, AWS EC2, AWS CloudFront, OSX, Fabric, uWSGI, nginx, git, Linux, Debian',
        2012: 'Web app, Django, Python, Tastypie, Piston, Django REST Framework, Guardian, Flash, HTML5, CSS, Javascript, BASH, Celery, RabbitMQ, memcached, RDBMS, SQL, MySQL, SQLite, AWS, AWS S3, AWS EC2, AWS CloudFront, OSX, Fabric, uWSGI, nginx, git, Linux, Debian'
    }
}, {
    name: 'Starmeo',
    years: {
        2012: 'Web app, Django, Python, Javascript, Celery, RabbitMQ, AWS, AWS S3, RDBMS, SQL, Fabric, ffmpeg, MySQL, Linux, Ubuntu',
        2011: 'Web app, Django, Python, Javascript, Celery, RabbitMQ, AWS, AWS S3, RDBMS, SQL, Fabric, ffmpeg, MySQL, Linux, Ubuntu'
    }
}, {
    name: 'Syndicate',
    years: {
        2011: 'Web app, Thick client, Javascript, NodeJS, NoSQL, CouchDB, Django, Python, RDBMS, SQL, MySQL, Linux, Ubuntu'
    }
}, {
    name: 'DeinDeal',
    years: {
        2011: 'Web app, Django, Python, Celery, RabbitMQ, Fabric, RDBMS, SQL, MySQL, Linux, Ubuntu',
        2010: 'Web app, Django, Python, Celery, RabbitMQ, Fabric, RDBMS, SQL, MySQL, Linux, Ubuntu'
    }
}, {
    name: 'Twangoo',
    years: {
        2010: 'Web app, Django, Python, Celery, RabbitMQ, memcached, Fabric, uWSGI, nginx, YAML, RDBMS, SQL, MySQL, Linux, Ubuntu'
    }
}, {
    name: 'CMJ',
    years: {
        2010: 'Web app, Ruby on Rails, Ruby, MySQL, Sybase, Solr, Linux, Ubuntu'
    }
}, {
    name: 'ImmersionCast',
    years: {
        2010: 'Web app, Ruby on Rails, Ruby, Flash, RDBMS, SQL, MySQL, nginx, ffmpeg, Linux, Ubuntu',
        2009: 'Web app, Ruby on Rails, Ruby, Flash, RDBMS, SQL, MySQL, nginx, ffmpeg, Linux, Ubuntu'
    },
    features: 'VoD platform, files storage, video processing, video playout + pseudo-streaming, authorized download acceleration'
}, {
    name: 'Pollpigeon',
    years: {
        2009: 'Web app, Django, Python, Javascript, RDBMS, SQL, MySQL, Linux, Ubuntu'
    }
}, {
    name: 'iChat',
    years: {
        2009: 'Web app, Thick client, Javascript, Python, HTTP, HTML5, HTML, CSS, XMPP, Linux, Ubuntu'
    }
}, {
    name: 'Curse Counter',
    years: {
        2009: 'Web app, Ruby on Rails, Ruby, Javascript, RDBMS, SQL, MySQL, Linux, Ubuntu'
    }
}, {
    name: 'TechDrifters',
    years: {
        2009: 'Web app, PHP, Elgg, RDBMS, SQL, MySQL, Linux, Ubuntu'
    },
    features: 'Elgg plugins, Google maps integration'
}, {
    name: 'Trivia',
    years: {
        2009: 'Web app, Ruby on Rails, Ruby, Javascript, Linux, Ubuntu'
    }
}, {
    name: 'SWIX',
    years: {
        2009: 'Web app, Python, Django, Javascript, RDBMS, SQL, MySQL, Linux, Ubuntu, Apache',
        2008: 'Web app, Python, Django, Javascript, RDBMS, SQL, MySQL, Linux, Ubuntu, Apache'
    }
}, {
    name: 'Service Merchant',
    years: {
        2008: 'Web app, Ruby on Rails, Ruby, gems, RDBMS, SQL, Mocks, Integration tests, MySQL, Linux, Ubuntu'
    }
}, {
    name: 'Credit Reports',
    years: {
        2008: 'Web app, Ruby on Rails, Ruby, RDBMS, SQL, MySQL, Linux, Ubuntu'
    }
}, {
    name: 'Planner',
    years: {
        2008: 'Web app, Ruby on Rails, Ruby, RDBMS, SQL, MySQL, Linux, Ubuntu'
    }
}, {
    name: 'Webminer',
    years: {
        2008: 'CLI, Python, HTTP, regex, wget, Linux, Ubuntu',
        2007: 'CLI, Python, HTTP, regex, wget, Linux, Ubuntu',
        2006: 'CLI, Python, HTTP, regex, wget, Linux, Ubuntu'
    },
    features: 'Web crawler, Data pipeline'
}, {
    name: 'CAS',
    years: {
        2006: 'Web app, ASP, JScript, ASP.NET, C#, RDBMS, SQL, MS SQL, TSQL, SQL Server, Selenium, Python, Visual Studio, IIS, RDP, Windows',
        2005: 'Web app, ASP, JScript, ASP.NET, C#, RDBMS, SQL, MS SQL, TSQL, SQL Server, Selenium, Python, Visual Studio, IIS, RDP, Windows'
    },
    features: 'Browser fingerprint'
}, {
    name: 'TAU-Master',
    years: {
        2005: 'Web app, PHP, HTTP, HTML, CSS, RDBMS, SQL, Oracle SQL, PL/SQL, Oracle, Apache, ftp, Linux, Windows',
        2004: 'Web app, PHP, HTTP, HTML, CSS, RDBMS, SQL, Oracle SQL, PL/SQL, Oracle, Apache, ftp, Linux, Windows',
        2003: 'Web app, PHP, HTTP, HTML, CSS, RDBMS, SQL, Oracle SQL, PL/SQL, Oracle, Apache, ftp, Linux, Windows',
        2002: 'Web app, PHP, HTTP, HTML, CSS, RDBMS, SQL, Oracle SQL, PL/SQL, Oracle, Apache, ftp, Linux, Windows',
        2001: 'Web app, PHP, HTTP, HTML, CSS, RDBMS, SQL, Oracle SQL, PL/SQL, Oracle, Apache, ftp, Linux, Windows',
        2000: 'Web app, PHP, HTTP, HTML, CSS, RDBMS, SQL, Oracle SQL, PL/SQL, Oracle, Apache, ftp, Linux, Windows'
    },
    features: 'Homebrew framework'
}, {
    name: 'Online Accounting Course',
    years: {
        2000: 'Web app, PHP, HTML, RDBMS, SQL, Oracle SQL, Oracle, Windows'
    }
}];

/**********************************************************************************************************************/

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

function* get_keys(items) {
    for (let [key, values] of Object.entries(items)) {
        for (let value of values) {
            yield `${key}:${value}`;
        }
    }
}

const set_minus = (set, values) => {
    values = new Set(values);
    return new Set([...set].filter(value => !values.has(value)));
};

const set_toggle = (set, value) => {
    let result = new Set(set);
    if (!result.delete(value)) {
        result.add(value);
    }
    return result;
};

const any = (generator, fn) => {
    for (let value of generator) {
        if (fn(value)) {
            return true;
        }
    }
    return false;
};

/**********************************************************************************************************************/

class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: new Set(),
            hovered: new Set(),
            clicked: new Set()
        };
    }

    toggle(slug) {
        this.setState(prevState => ({
            expanded: toggle_set(prevState.expanded, slug)
        }));
    }

    enter(key, items) {
        this.setState(prevState => ({
            hovered: new Set([...prevState.hovered, key, ...get_keys(items)])
        }));
    }

    leave(key, items) {
        this.setState(prevState => ({
            hovered: set_minus(prevState.hovered, [key, ...get_keys(items)])
        }));
    }

    click(key, items) {
        this.setState(prevState => ({
            clicked: set_toggle(prevState.clicked, key)
        }));
    }

    render() {
        return React.createElement(
            'main',
            null,
            React.createElement(
                'header',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Artem Skoretskiy, ',
                    get_years_since(BIRTH_DAY)
                )
            ),
            React.createElement(Photo, null),
            React.createElement(Services, null),
            React.createElement(Profile, null),
            React.createElement(Years, { hovered: this.state.hovered, clicked: this.state.clicked,
                enter: this.enter.bind(this), leave: this.leave.bind(this), click: this.click.bind(this) }),
            React.createElement(Keywords, { hovered: this.state.hovered, clicked: this.state.clicked,
                enter: this.enter.bind(this), leave: this.leave.bind(this), click: this.click.bind(this) }),
            React.createElement(Projs, { hovered: this.state.hovered, clicked: this.state.clicked,
                enter: this.enter.bind(this), leave: this.leave.bind(this), click: this.click.bind(this) }),
            React.createElement(Technologies, null),
            React.createElement(Timeline, null),
            React.createElement(Projects, { toggle: this.toggle.bind(this), expanded: this.state.expanded }),
            React.createElement(
                'footer',
                { className: 'gray' },
                '\xA9 ',
                new Date().getFullYear(),
                ' Artem Skoretskiy'
            )
        );
    }
}

const index_data = data => {
    const all_projects = new Set();
    const all_years = new Set();
    const all_keywords = new Set();

    for (let project of data) {
        all_projects.add(project.name);
        for (let [year, keywords] of Object.entries(project.years)) {
            all_years.add(Number.parseInt(year));
            for (let keyword of keywords.split(',')) {
                all_keywords.add(keyword.trim());
            }
        }
    }

    let projects = new Map([...all_projects].sort().map(project => [project, { years: new Set(), keywords: new Set() }]));
    let years = new Map([...all_years].sort().map(year => [year, { projects: new Set(), keywords: new Set() }]));
    let keywords = new Map([...all_keywords].sort().map(keyword => [keyword, { projects: new Set(), years: new Set() }]));

    let project;
    let project_obj;
    let year_obj;
    let keyword_obj;
    for (let row of data) {
        project = row.name;
        project_obj = projects.get(project);

        for (let [year, keywords_] of Object.entries(row.years)) {
            year = Number.parseInt(year);
            year_obj = years.get(year);

            project_obj.years.add(year);
            year_obj.projects.add(project);

            for (let keyword of keywords_.split(',')) {
                keyword = keyword.trim();
                keyword_obj = keywords.get(keyword);

                project_obj.keywords.add(keyword);
                year_obj.keywords.add(keyword);
                keyword_obj.projects.add(project);
                keyword_obj.years.add(year);
            }
        }
    }

    return { projects, years, keywords };
};

const DATA_INDEXED = index_data(DATA);

const Row = ({ hovered, clicked, enter, leave, click, index_key, children, content }) => React.createElement(
    'li',
    { className: `clickable ${hovered.has(index_key) ? 'selected' : ''} ${clicked.has(index_key) ? 'clicked' : ''}`,
        onMouseEnter: event => enter(index_key, content),
        onMouseLeave: event => leave(index_key, content),
        onClick: event => click(index_key, content)
    },
    children
);

const Years = ({ hovered, clicked, enter, leave, click }) => React.createElement(
    'section',
    null,
    React.createElement(
        'h2',
        null,
        'Years'
    ),
    React.createElement(
        'ul',
        { className: 'tags' },
        [...DATA_INDEXED.years.entries()].map(([year, content]) => React.createElement(
            Row,
            { key: year, index_key: `years:${year}`, content: content,
                hovered: hovered, clicked: clicked, enter: enter, leave: leave, click: click },
            year
        ))
    )
);

const Keywords = ({ hovered, clicked, enter, leave, click }) => React.createElement(
    'section',
    null,
    React.createElement(
        'h2',
        null,
        'Keywords'
    ),
    React.createElement(
        'ul',
        { className: 'tags' },
        [...DATA_INDEXED.keywords.entries()].map(([keyword, content]) => React.createElement(
            Row,
            { key: keyword, index_key: `keywords:${keyword}`, content: content,
                hovered: hovered, clicked: clicked, enter: enter, leave: leave, click: click },
            keyword
        ))
    )
);

const Projs = ({ hovered, clicked, enter, leave, click }) => React.createElement(
    'section',
    null,
    React.createElement(
        'h2',
        null,
        'Projects'
    ),
    React.createElement(
        'ul',
        { className: 'tags' },
        [...DATA_INDEXED.projects.entries()].map(([project, content]) => React.createElement(
            Row,
            { key: project, index_key: `projects:${project}`, content: content,
                hovered: hovered, clicked: clicked, enter: enter, leave: leave, click: click },
            project
        ))
    )
);

const Services = () => React.createElement(
    'section',
    { className: 'profile_column1' },
    React.createElement(
        'h2',
        { className: 'highlight' },
        'Full-stack web developer'
    ),
    React.createElement(
        'ul',
        null,
        React.createElement(
            'li',
            null,
            'Backend'
        ),
        React.createElement(
            'li',
            null,
            'Frontend'
        ),
        React.createElement(
            'li',
            null,
            'Cloud services integration'
        ),
        React.createElement(
            'li',
            null,
            'DevOps'
        )
    ),
    React.createElement(
        'h3',
        null,
        'More when needed'
    ),
    React.createElement(
        'ul',
        null,
        React.createElement(
            'li',
            null,
            'Technical lead'
        ),
        React.createElement(
            'li',
            null,
            'Project manager'
        ),
        React.createElement(
            'li',
            null,
            'Business analyst'
        )
    )
);

const Photo = () => React.createElement(
    'section',
    { className: 'photo' },
    React.createElement('img', { src: 'profile.jpg', className: 'photo' }),
    React.createElement(Contacts, null)
);

const Profile = () => React.createElement(
    'section',
    { className: 'profile_column1' },
    React.createElement(
        'h2',
        null,
        'Profile'
    ),
    React.createElement(
        'ul',
        null,
        React.createElement(
            'li',
            null,
            get_years_since(FIRST_JOB_DAY),
            ' years as [paid] software developer'
        ),
        React.createElement(
            'li',
            null,
            'Live in K\xF6ln ',
            React.createElement(
                'span',
                { className: 'gray' },
                '(Niederlassungserlaubnis)'
            )
        ),
        React.createElement(
            'li',
            null,
            'Master of Economy'
        ),
        React.createElement(
            'li',
            null,
            'Intermediate German ',
            React.createElement(
                'span',
                { className: 'gray' },
                '(B2.1)'
            )
        ),
        React.createElement(
            'li',
            null,
            'Fluent English'
        )
    )
);

const Contacts = () => React.createElement(
    'ul',
    { className: 'no-list' },
    React.createElement(
        'li',
        null,
        '+49 (0)157 835 40 848'
    ),
    React.createElement(
        'li',
        null,
        'artem.skoretskiy@gmail.com'
    ),
    React.createElement(
        'li',
        null,
        React.createElement(
            'span',
            { className: 'gray colon-after' },
            'skype'
        ),
        ' tonn81'
    )
);

const Technologies = () => React.createElement(
    'section',
    null,
    React.createElement(
        'h2',
        null,
        'Stack'
    ),
    React.createElement(
        'div',
        { className: 'tags-grouped' },
        React.createElement(
            'div',
            { className: 'column1-2 tag-group colon-after' },
            'Front-end'
        ),
        React.createElement(
            'ul',
            { className: 'tags' },
            React.createElement(
                'li',
                null,
                'Javascript'
            ),
            React.createElement(
                'li',
                null,
                'ES8'
            ),
            React.createElement(
                'li',
                null,
                'React'
            ),
            React.createElement(
                'li',
                null,
                'JSX'
            ),
            React.createElement(
                'li',
                null,
                'Redux'
            ),
            React.createElement(
                'li',
                null,
                'Webpack 3'
            ),
            React.createElement(
                'li',
                null,
                'Babel'
            ),
            React.createElement(
                'li',
                null,
                'yarn'
            ),
            React.createElement(
                'li',
                null,
                'React hot-reload'
            ),
            React.createElement(
                'li',
                null,
                'CSS'
            ),
            React.createElement(
                'li',
                null,
                'HTML5'
            )
        ),
        React.createElement(
            'div',
            { className: 'column1-2 tag-group colon-after' },
            'Backend'
        ),
        React.createElement(
            'ul',
            { className: 'tags' },
            React.createElement(
                'li',
                null,
                'Python 3'
            ),
            React.createElement(
                'li',
                null,
                'Django'
            ),
            React.createElement(
                'li',
                null,
                'Django i18n'
            ),
            React.createElement(
                'li',
                null,
                'Celery'
            ),
            React.createElement(
                'li',
                null,
                'JSON REST API'
            ),
            React.createElement(
                'li',
                null,
                'Django REST framework'
            ),
            React.createElement(
                'li',
                null,
                'SQL'
            ),
            React.createElement(
                'li',
                null,
                'MySQL'
            ),
            React.createElement(
                'li',
                null,
                'SQLite'
            ),
            React.createElement(
                'li',
                null,
                'PostgreSQL'
            ),
            React.createElement(
                'li',
                null,
                'Redis'
            ),
            React.createElement(
                'li',
                null,
                'RabbitMQ'
            )
        ),
        React.createElement(
            'div',
            { className: 'column1-2 tag-group colon-after' },
            'Cloud'
        ),
        React.createElement(
            'ul',
            { className: 'tags' },
            React.createElement(
                'li',
                null,
                'AWS S3'
            ),
            React.createElement(
                'li',
                null,
                'AWS S3 uploader'
            ),
            React.createElement(
                'li',
                null,
                'AWS EC2'
            ),
            React.createElement(
                'li',
                null,
                'AWS custom EMI'
            ),
            React.createElement(
                'li',
                null,
                'Packer'
            ),
            React.createElement(
                'li',
                null,
                'AWS CloudFront'
            ),
            React.createElement(
                'li',
                null,
                'AWS Glacier'
            )
        ),
        React.createElement(
            'div',
            { className: 'column1-2 tag-group colon-after' },
            'DevOps'
        ),
        React.createElement(
            'ul',
            { className: 'tags' },
            React.createElement(
                'li',
                null,
                'BASH'
            ),
            React.createElement(
                'li',
                null,
                'Docker'
            ),
            React.createElement(
                'li',
                null,
                'Docker for Mac'
            ),
            React.createElement(
                'li',
                null,
                'Docker Compose'
            ),
            React.createElement(
                'li',
                null,
                'GitLab CI'
            ),
            React.createElement(
                'li',
                null,
                'nginx'
            ),
            React.createElement(
                'li',
                null,
                'uWSGI'
            ),
            React.createElement(
                'li',
                null,
                'Linux'
            ),
            React.createElement(
                'li',
                null,
                'Debian'
            ),
            React.createElement(
                'li',
                null,
                'Alpine'
            ),
            React.createElement(
                'li',
                null,
                'compilation'
            )
        ),
        React.createElement(
            'div',
            { className: 'column1-2 tag-group colon-after' },
            'Video'
        ),
        React.createElement(
            'ul',
            { className: 'tags' },
            React.createElement(
                'li',
                null,
                'ffmpeg'
            ),
            React.createElement(
                'li',
                null,
                'HTML5 video'
            ),
            React.createElement(
                'li',
                null,
                'HLS'
            ),
            React.createElement(
                'li',
                null,
                'DASH'
            ),
            React.createElement(
                'li',
                null,
                'RTMP'
            )
        ),
        React.createElement(
            'div',
            { className: 'column1-2 tag-group colon-after' },
            'More'
        ),
        React.createElement(
            'ul',
            { className: 'tags' },
            React.createElement(
                'li',
                null,
                'MacOS'
            ),
            React.createElement(
                'li',
                null,
                'PyCharm'
            ),
            React.createElement(
                'li',
                null,
                'Ubuntu'
            )
        )
    )
);

const Projects = ({ toggle, expanded }) => React.createElement(
    'section',
    null,
    React.createElement(
        'h2',
        null,
        'Projects'
    ),
    React.createElement(
        'article',
        { className: 'project' },
        React.createElement(
            'h3',
            null,
            'CORE'
        ),
        React.createElement(
            'ul',
            { className: 'tags' },
            React.createElement(
                'li',
                null,
                'Javascript'
            ),
            React.createElement(
                'li',
                null,
                'React'
            ),
            React.createElement(
                'li',
                null,
                'Redux'
            ),
            React.createElement(
                'li',
                null,
                'Webpack'
            ),
            React.createElement(
                'li',
                null,
                'Babel'
            ),
            React.createElement(
                'li',
                null,
                'Python 3'
            ),
            React.createElement(
                'li',
                null,
                'Django'
            ),
            React.createElement(
                'li',
                null,
                'Django REST Framework'
            ),
            React.createElement(
                'li',
                null,
                'PostgreSQL'
            ),
            React.createElement(
                'li',
                null,
                'Redis'
            ),
            React.createElement(
                'li',
                null,
                'Docker'
            ),
            React.createElement(
                'li',
                null,
                'nginx'
            ),
            React.createElement(
                'li',
                null,
                'uWSGI'
            ),
            React.createElement(
                'li',
                null,
                'Gitlab CI'
            )
        ),
        React.createElement(
            'p',
            null,
            'Web application for company\'s internal processes (billing, time logging, availability, drinks, etc) automation. More'
        )
    ),
    React.createElement(
        'article',
        { className: 'project' },
        React.createElement(
            'h3',
            null,
            'Workflow management system'
        ),
        React.createElement(
            'ul',
            { className: 'tags' },
            React.createElement(
                'li',
                null,
                'Python 3'
            ),
            React.createElement(
                'li',
                null,
                'Django'
            ),
            React.createElement(
                'li',
                null,
                'ViewFlow'
            ),
            React.createElement(
                'li',
                null,
                'PostgreSQL'
            ),
            React.createElement(
                'li',
                null,
                'Redis'
            ),
            React.createElement(
                'li',
                null,
                'Docker'
            ),
            React.createElement(
                'li',
                null,
                'nginx'
            ),
            React.createElement(
                'li',
                null,
                'uWSGI'
            ),
            React.createElement(
                'li',
                null,
                'Gitlab CI'
            ),
            React.createElement(
                'li',
                null,
                'BPMN'
            )
        ),
        React.createElement(
            'p',
            null,
            'Web application for company\'s workflows (processes) automation. [More]'
        )
    ),
    React.createElement(
        'article',
        { className: 'project' },
        React.createElement(
            'h3',
            null,
            'PicturePipe Encoder'
        ),
        React.createElement(
            'ul',
            { className: 'tags' },
            React.createElement(
                'li',
                null,
                'Python'
            ),
            React.createElement(
                'li',
                null,
                'Celery'
            ),
            React.createElement(
                'li',
                null,
                'RabbitMQ'
            ),
            React.createElement(
                'li',
                null,
                'ffmpeg'
            ),
            React.createElement(
                'li',
                null,
                'mp4Box'
            ),
            React.createElement(
                'li',
                null,
                'Debian'
            ),
            React.createElement(
                'li',
                null,
                'Docker'
            ),
            React.createElement(
                'li',
                null,
                'BASH'
            ),
            React.createElement(
                'li',
                null,
                'AWS CLI'
            ),
            React.createElement(
                'li',
                null,
                'wget'
            ),
            React.createElement(
                'li',
                null,
                'curl'
            ),
            React.createElement(
                'li',
                null,
                'compilation'
            ),
            React.createElement(
                'li',
                null,
                'EC2'
            ),
            React.createElement(
                'li',
                null,
                'EC2 custom AMI'
            ),
            React.createElement(
                'li',
                null,
                'Packer'
            )
        ),
        React.createElement(
            'p',
            null,
            'Application that transcodes user video into requested format for PicturePipe.',
            React.createElement(ToggleLink, { slug: 'pp-encoder-features', toggle: toggle, expanded: expanded })
        ),
        !expanded.has('pp-encoder-features') ? null : React.createElement(
            'ul',
            null,
            React.createElement(
                'li',
                null,
                '2018: Integrate proprietary HEVC (h265) encoder'
            ),
            React.createElement(
                'li',
                null,
                '2018: Benchmark EC2 instance types'
            ),
            React.createElement(
                'li',
                null,
                '2017: Archive source to AWS Glacier'
            ),
            React.createElement(
                'li',
                null,
                '2017: Generate Apple HLS assets'
            ),
            React.createElement(
                'li',
                null,
                '2017: Generate MPEG DASH assets'
            ),
            React.createElement(
                'li',
                null,
                '???: Download source file by URL (including password)'
            )
        )
    ),
    React.createElement(
        'article',
        { className: 'project' },
        React.createElement(
            'h3',
            null,
            'PicturePipe'
        ),
        React.createElement(
            'ul',
            { className: 'tags' },
            React.createElement(
                'li',
                null,
                'Python'
            ),
            React.createElement(
                'li',
                null,
                'Django'
            ),
            React.createElement(
                'li',
                null,
                'Tastypie'
            ),
            React.createElement(
                'li',
                null,
                'Guardian'
            ),
            React.createElement(
                'li',
                null,
                'MySQL'
            ),
            React.createElement(
                'li',
                null,
                'memcached'
            ),
            React.createElement(
                'li',
                null,
                'Docker'
            ),
            React.createElement(
                'li',
                null,
                'tox'
            ),
            React.createElement(
                'li',
                null,
                'nginx'
            ),
            React.createElement(
                'li',
                null,
                'uWSGI'
            ),
            React.createElement(
                'li',
                null,
                'Selenium'
            ),
            React.createElement(
                'li',
                null,
                'Gitlab CI'
            )
        ),
        React.createElement(
            'p',
            null,
            'Web platform for receiving, storing and playing videos and its metadata. [More]'
        ),
        React.createElement(
            'ul',
            null,
            React.createElement(
                'li',
                null,
                '2017: Play Apple HLS assets'
            ),
            React.createElement(
                'li',
                null,
                '2017: Play MPEG DASH assets'
            ),
            React.createElement(
                'li',
                null,
                '2017: Place secure overlay on HTML5 video'
            ),
            React.createElement(
                'li',
                null,
                '???: Prepare web kiosks based on Linux'
            ),
            React.createElement(
                'li',
                null,
                '???: Scale number of EC2 instance for PicturePipe Encoder according to load'
            )
        )
    ),
    React.createElement(
        'article',
        { className: 'project' },
        React.createElement(
            'h3',
            null,
            'DblExplorer'
        ),
        React.createElement(
            'ul',
            { className: 'tags' },
            React.createElement(
                'li',
                null,
                'Python'
            ),
            React.createElement(
                'li',
                null,
                'Django'
            ),
            React.createElement(
                'li',
                null,
                'PostgreSQL'
            ),
            React.createElement(
                'li',
                null,
                'Redis'
            ),
            React.createElement(
                'li',
                null,
                'Docker'
            ),
            React.createElement(
                'li',
                null,
                'nginx'
            ),
            React.createElement(
                'li',
                null,
                'uWSGI'
            ),
            React.createElement(
                'li',
                null,
                'Gitlab CI'
            )
        ),
        React.createElement(
            'p',
            null,
            'Online catalog for electric machines. [More]'
        )
    ),
    React.createElement(
        'article',
        { className: 'project' },
        React.createElement(
            'h3',
            null,
            'PCP Termincontrolling'
        ),
        React.createElement(
            'ul',
            { className: 'tags' },
            React.createElement(
                'li',
                null,
                'Python 3'
            ),
            React.createElement(
                'li',
                null,
                'Django'
            ),
            React.createElement(
                'li',
                null,
                'PostgreSQL'
            ),
            React.createElement(
                'li',
                null,
                'Redis'
            ),
            React.createElement(
                'li',
                null,
                'Docker'
            ),
            React.createElement(
                'li',
                null,
                'nginx'
            ),
            React.createElement(
                'li',
                null,
                'uWSGI'
            ),
            React.createElement(
                'li',
                null,
                'Gitlab CI'
            )
        ),
        React.createElement(
            'p',
            null,
            'Web application for company\'s workflows (processes) automation. [More]'
        )
    ),
    React.createElement(
        'article',
        { className: 'project' },
        React.createElement(
            'h3',
            null,
            'Prequel'
        ),
        React.createElement(
            'ul',
            { className: 'tags' },
            React.createElement(
                'li',
                null,
                'Python'
            ),
            React.createElement(
                'li',
                null,
                'Django'
            ),
            React.createElement(
                'li',
                null,
                'MySQL'
            ),
            React.createElement(
                'li',
                null,
                'memcached'
            ),
            React.createElement(
                'li',
                null,
                'Redis'
            ),
            React.createElement(
                'li',
                null,
                'Docker'
            ),
            React.createElement(
                'li',
                null,
                'tox'
            ),
            React.createElement(
                'li',
                null,
                'nginx'
            ),
            React.createElement(
                'li',
                null,
                'uWSGI'
            ),
            React.createElement(
                'li',
                null,
                'Gitlab CI'
            )
        ),
        React.createElement(
            'p',
            null,
            'Web-based videotheque that used PicturePipe as backend. [More]'
        )
    )
);

const Timeline = () => {
    let years = [];
    const first_year = FIRST_JOB_DAY.getFullYear();
    for (let year = new Date().getFullYear(); year >= first_year; year--) {
        years.push(year);
    }
    return React.createElement(
        'section',
        null,
        React.createElement(
            'h2',
            null,
            'Timeline'
        ),
        React.createElement(
            'ul',
            { className: 'tags' },
            years.map(year => React.createElement(
                'li',
                null,
                year
            ))
        )
    );
};

const ToggleLink = ({ toggle, expanded, slug }) => {
    let slug_expanded = expanded.has(slug);
    return React.createElement(
        'a',
        { href: '#', className: `toggle ${slug_expanded ? 'less' : 'more'}`, onClick: e => {
                toggle(slug);
                e.preventDefault();
            } },
        slug_expanded ? 'Less' : 'More'
    );
};

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(React.createElement(Application, null), document.getElementById('root'));
});
