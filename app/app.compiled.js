'use strict';

const BIRTH_DAY = new Date(1981, 12, 7, 12);
const FIRST_JOB_DAY = new Date(2000, 9, 1, 12);
const RELEVANT_YEAR = 2017;

const deserialize = text => new Set(text.split(',').map(value => value.trim()));

const DATA = [{
    name: 'Workflow Management System',
    years: {
        2018: 'Web app, Django, Python, ViewFlow, RDBMS, SQL, PostgreSQL, SQLite, Redis, BASH, nginx, uWSGI, Gitlab CI, Docker, git, Linux, Alpine, OSX, PyCharm'
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
        2016: 'Web app, Django, Python, RDBMS, SQL, PostgreSQL, SQLite, memcached, AWS, AWS S3, AWS S3 uploader, AWS Lambda, AWS ElasticTranscode, AWS SQS, nginx, uWSGI, git, Linux, Ubuntu, OSX, PyCharm'
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
        2015: 'Web app, Django, Python, Selenium, Javascript, CSS, HTML, YAML, Celery, RDBMS, SQL, MySQL, SQLite, memcached, Redis, RabbitMQ, nginx, uWSGI, Fabric, BASH, Docker, OSX, PyCharm, Linux, Ubuntu, Debian, git',
        2014: 'Web app, Django, Python, Selenium, Javascript, CSS, HTML, YAML, Celery, RDBMS, SQL, MySQL, SQLite, memcached, Redis, RabbitMQ, nginx, uWSGI, Fabric, BASH, OSX, PyCharm, Linux, Ubuntu, git',
        2013: 'Web app, Django, Python, Selenium, Javascript, CSS, HTML, YAML, Celery, RDBMS, SQL, MySQL, SQLite, memcached, Redis, RabbitMQ, nginx, uWSGI, Fabric, BASH, OSX, Linux, Ubuntu, git'
    }
}, {
    name: 'PicturePipe Encoder',
    years: {
        2018: 'Cloud worker, Python, Celery, RabbitMQ, HTTP, AWS CLI, AWS, AWS S3, AWS EC2, AWS custom AMI, AWS Glacier, Packer, ffmpeg, mp4Box, DVD ISO, MPEG DASH, Apple HLS, Docker, BASH, checkinstall, Linux, PyCharm, OSX, Debian, git',
        2017: 'Cloud worker, Python, Celery, RabbitMQ, HTTP, AWS CLI, AWS, AWS S3, AWS EC2, AWS custom AMI, AWS Glacier, Packer, ffmpeg, mp4Box, DVD ISO, MPEG DASH, Apple HLS, Docker, BASH, checkinstall, Linux, PyCharm, OSX, Debian, git',
        2016: 'Cloud worker, Python, Celery, RabbitMQ, HTTP, AWS CLI, AWS, AWS S3, AWS EC2, AWS custom AMI, Packer, RTMP, ffmpeg, DVD ISO, Docker, BASH, checkinstall, Linux, PyCharm, OSX, Debian, git',
        2015: 'Cloud worker, Python, HTTP, AWS CLI, AWS, AWS S3, AWS EC2, AWS custom AMI, Packer, RTMP, ffmpeg, DVD ISO, BASH, checkinstall, Docker, Linux, PyCharm, OSX, Debian, git',
        2014: 'Cloud worker, Python, AWS, AWS S3, AWS EC2, AWS custom AMI, RTMP, ffmpeg, DVD ISO, BASH, checkinstall, Docker, Linux, PyCharm, OSX, Debian, git',
        2013: 'Cloud worker, Python, AWS, AWS S3, AWS EC2, AWS custom AMI, RTMP, ffmpeg, DVD ISO, BASH, Linux, OSX, Ubuntu, git',
        2012: 'Cloud worker, Python, AWS, AWS S3, AWS EC2, AWS custom AMI, RTMP, ffmpeg, DVD ISO, BASH, Linux, OSX, Ubuntu, git'
    }
}, {
    name: 'PicturePipe',
    years: {
        2018: 'Web app, Django, Python, Tastypie, tox, MPEG DASH, Apple HLS, HTML5, CSS, Javascript, BASH, Celery, RabbitMQ, memcached, RDBMS, SQL, MySQL, SQLite, AWS, AWS S3, AWS S3 uploader, AWS EC2, AWS CloudFront, AWS Glacier, Docker, Gitlab CI, OSX, Fabric, uWSGI, nginx, git, Linux, Debian, PyCharm',
        2017: 'Web app, Django, Python, Tastypie, tox, Django REST Framework, MPEG DASH, Apple HLS, HTML5, CSS, Javascript, BASH, Celery, RabbitMQ, memcached, RDBMS, SQL, MySQL, SQLite, AWS, AWS S3, AWS S3 uploader, AWS EC2, AWS CloudFront, AWS Glacier, Docker, Gitlab CI, OSX, Fabric, uWSGI, nginx, git, Linux, Debian, PyCharm',
        2016: 'Web app, Django, Python, Tastypie, tox, RTMP, Django REST Framework, HTML5, CSS, Javascript, BASH, Celery, RabbitMQ, memcached, RDBMS, SQL, MySQL, SQLite, AWS, AWS S3, AWS S3 uploader, AWS EC2, AWS CloudFront, Docker, Gitlab CI, OSX, Fabric, uWSGI, nginx, git, Linux, Debian, PyCharm',
        2015: 'Web app, Django, Python, Tastypie, tox, RTMP, Selenium, HTML5, CSS, Javascript, BASH, Celery, RabbitMQ, memcached, RDBMS, SQL, MySQL, SQLite, AWS, AWS S3, AWS S3 uploader, AWS EC2, AWS CloudFront, Docker, OSX, Fabric, uWSGI, nginx, git, Linux, Debian, PyCharm',
        2014: 'Web app, Django, Python, Tastypie, tox, RTMP, Selenium, Flash, HTML5, CSS, Javascript, BASH, Celery, RabbitMQ, memcached, RDBMS, SQL, MySQL, SQLite, AWS, AWS S3, AWS S3 uploader, AWS EC2, AWS CloudFront, Docker, OSX, Fabric, uWSGI, nginx, git, Linux, Debian, PyCharm',
        2013: 'Web app, Django, Python, Tastypie, Piston, tox, RTMP, Selenium, Django REST Framework, Guardian, Flash, HTML5, CSS, Javascript, BASH, Celery, RabbitMQ, memcached, RDBMS, SQL, MySQL, SQLite, AWS, AWS S3, AWS S3 uploader, AWS EC2, AWS CloudFront, OSX, Fabric, uWSGI, nginx, git, Linux, Debian',
        2012: 'Web app, Django, Python, Tastypie, Piston, tox, RTMP, Selenium, Django REST Framework, Guardian, Flash, HTML5, CSS, Javascript, BASH, Celery, RabbitMQ, memcached, RDBMS, SQL, MySQL, SQLite, AWS, AWS S3, AWS S3 uploader, AWS EC2, AWS CloudFront, OSX, Fabric, uWSGI, nginx, git, Linux, Debian'
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
        2008: 'Web app, Ruby on Rails, Ruby, gems, RDBMS, SQL, MySQL, Linux, Ubuntu'
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
        2008: 'CLI app, Python, HTTP, regex, Linux, Ubuntu',
        2007: 'CLI app, Python, HTTP, regex, Linux, Ubuntu',
        2006: 'CLI app, Python, HTTP, regex, Linux, Ubuntu'
    },
    features: 'Web crawler, Data pipeline'
}, {
    name: 'CAS',
    years: {
        2006: 'Web app, ASP, JScript, ASP.NET, C#, RDBMS, SQL, MS SQL, T-SQL, SQL Server, Selenium, Python, Visual Studio, IIS, RDP, Windows',
        2005: 'Web app, ASP, JScript, ASP.NET, C#, RDBMS, SQL, MS SQL, T-SQL, SQL Server, Selenium, Python, Visual Studio, IIS, RDP, Windows'
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

const DEPRECATED_KEYWORDS = deserialize('tox, Bower, memcached, Ubuntu, Tastypie, SCSS, MySQL, JS bundle, HTML, Flask, Flash, Fabric, AMD, CSS bundle');

const CATEGORY = deserialize('Web app, CLI app, Thick client, SPA, Cloud worker, Web kiosk');
const FRONTEND = deserialize('Javascript, HTML, HTML5, CSS, SCSS, PostCSS, Webpack, ES6, ES7, ES8, ESM, AMD, Babel, CSS grid, yarn, React, Redux, JSX, Bower, CSS bundle, JS bundle, Flash');
const BACKEND = deserialize('Python, SQL, T-SQL, PL/SQL, Oracle SQL, MS SQL, NodeJS, BASH, Django, C#, ASP.NET, ASP, JScript, Celery, RDBMS, NoSQL, YAML, Tastypie, Django REST Framework, ViewFlow, Guardian, Ruby on Rails, Ruby, PHP, Piston, Selenium, HTTP, gems, tox, Flask, Elgg, XMPP, regex');
const INFRASTRUCTURE = deserialize('RabbitMQ, SQLite, MySQL, PostgreSQL, Oracle, Redis, memcached, Linux, nginx, uWSGI, Alpine, Debian, Ubuntu, Apache, IIS, CouchDB, SQL Server, Sybase, Solr');
const CLOUD = deserialize('AWS, AWS CLI, AWS S3, AWS S3 uploader, AWS EC2, AWS custom AMI, AWS CloudFront, AWS Lambda, AWS SQS, AWS ElasticTranscode, AWS Glacier');
const DEVOPS = deserialize('Docker, Gitlab CI, Packer, checkinstall, Fabric, RDP, ftp');
const VIDEO = deserialize('ffmpeg, mp4Box, Apple HLS, MPEG DASH, DVD ISO, RTMP');

const group_keywords = content => {
    let groups = new Map([['Category', []], ['Front-end', []], ['Backend', []], ['Infrastructure', []], ['Cloud', []], ['DevOps', []], ['Video', []], ['Other', []]]);

    let group, keyword;
    for (let row of content) {
        keyword = row[0];
        if (CATEGORY.has(keyword)) {
            group = 'Category';
        } else if (FRONTEND.has(keyword)) {
            group = 'Front-end';
        } else if (BACKEND.has(keyword)) {
            group = 'Backend';
        } else if (INFRASTRUCTURE.has(keyword)) {
            group = 'Infrastructure';
        } else if (CLOUD.has(keyword)) {
            group = 'Cloud';
        } else if (DEVOPS.has(keyword)) {
            group = 'DevOps';
        } else if (VIDEO.has(keyword)) {
            group = 'Video';
        } else {
            group = 'Other';
        }
        groups.get(group).push(row);
    }
    return groups;
};

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

const index_data = data => {
    const all_projects = new Set();
    const all_years = new Set();
    const all_keywords = new Set();

    for (let project of data) {
        all_projects.add(project.name);
        for (let [year, keywords] of Object.entries(project.years)) {
            all_years.add(year);
            for (let keyword of deserialize(keywords)) {
                all_keywords.add(keyword);
            }
        }
    }

    let projects = new Map([...all_projects].sort().map(project => [project, { years: new Set(), keywords: new Set() }]));
    let years = new Map([...all_years].sort().reverse().map(year => [year, {
        projects: new Set(),
        keywords: new Set()
    }]));
    let keywords = new Map([...all_keywords].sort().map(keyword => [keyword, { projects: new Set(), years: new Set() }]));

    let project;
    let project_obj;
    let year_obj;
    let keyword_obj;
    for (let row of data) {
        project = row.name;
        project_obj = projects.get(project);

        for (let [year, keywords_] of Object.entries(row.years)) {
            year_obj = years.get(year);

            project_obj.years.add(year);
            year_obj.projects.add(project);

            for (let keyword of deserialize(keywords_)) {
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

const is_recent_year = year => Number.parseInt(year) >= RELEVANT_YEAR;
const is_past_year = year => !is_recent_year(year);
const is_recent_years = content => any(content.years, is_recent_year);
const is_past_years = content => any(content.years, is_past_year);
const is_relevant_keyword = (keyword, content) => !DEPRECATED_KEYWORDS.has(keyword) && is_recent_years(content);

/**********************************************************************************************************************/

const DATA_INDEXED = index_data(DATA);

class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show_history: false,
            hovered: new Set(),
            clicked: new Set(),
            subhovered: new Set()
        };
    }

    toggle_history() {
        console.log('toggle history');
        this.setState(prevState => ({
            show_history: !prevState.show_history
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
        this.setState(prevState => {
            let clicked = set_toggle(prevState.clicked, key);
            let subhovered = new Set();

            let k, v;
            for (let row of clicked) {
                [k, v] = row.split(':');
                for (let index_key of get_keys(DATA_INDEXED[k].get(v))) {
                    subhovered.add(index_key);
                }
            }

            return {
                clicked,
                subhovered
            };
        });
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
            React.createElement(
                Years,
                { filter: is_recent_year,
                    hovered: this.state.hovered, clicked: this.state.clicked, subhovered: this.state.subhovered,
                    enter: this.enter.bind(this), leave: this.leave.bind(this), click: this.click.bind(this)
                },
                'Years'
            ),
            React.createElement(
                Keywords,
                { filter: is_relevant_keyword,
                    hovered: this.state.hovered, clicked: this.state.clicked, subhovered: this.state.subhovered,
                    enter: this.enter.bind(this), leave: this.leave.bind(this), click: this.click.bind(this),
                    toggle_history: this.toggle_history.bind(this), show_history: this.state.show_history
                },
                'My stack'
            ),
            React.createElement(
                Projs,
                { filter: (project, content) => is_recent_years(content),
                    hovered: this.state.hovered, clicked: this.state.clicked, subhovered: this.state.subhovered,
                    enter: this.enter.bind(this), leave: this.leave.bind(this), click: this.click.bind(this)
                },
                'Last projects'
            ),
            React.createElement('section', { className: 'past_divider' }),
            React.createElement(
                Years,
                { filter: year => !is_recent_year(year),
                    hovered: this.state.hovered, clicked: this.state.clicked, subhovered: this.state.subhovered,
                    enter: this.enter.bind(this), leave: this.leave.bind(this), click: this.click.bind(this)
                },
                'Past'
            ),
            React.createElement(
                Keywords,
                { filter: (keyword, content) => is_past_years(content),
                    hovered: this.state.hovered, clicked: this.state.clicked, subhovered: this.state.subhovered,
                    enter: this.enter.bind(this), leave: this.leave.bind(this), click: this.click.bind(this),
                    toggle_history: this.toggle_history.bind(this), show_history: this.state.show_history
                },
                'Experience'
            ),
            React.createElement(
                Projs,
                { filter: (project, content) => !is_recent_years(content),
                    hovered: this.state.hovered, clicked: this.state.clicked, subhovered: this.state.subhovered,
                    enter: this.enter.bind(this), leave: this.leave.bind(this), click: this.click.bind(this)
                },
                'Past projects'
            ),
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

const Row = ({ hovered, clicked, subhovered, enter, leave, click, index_key, children, content, is_history }) => React.createElement(
    'li',
    { className: `clickable ${hovered.has(index_key) || subhovered.has(index_key) ? 'selected' : ''} ${clicked.has(index_key) ? 'clicked' : ''} ${is_history ? 'history' : ''}`,
        onMouseEnter: event => enter(index_key, content),
        onMouseLeave: event => leave(index_key, content),
        onClick: event => click(index_key, content)
    },
    children
);

const Years = ({ children, filter, hovered, clicked, subhovered, enter, leave, click }) => React.createElement(
    'section',
    null,
    !children ? null : React.createElement(
        'h2',
        null,
        children
    ),
    React.createElement(
        'ul',
        { className: 'tags' },
        [...DATA_INDEXED.years.entries()].filter(([year, content]) => filter(year, content)).map(([year, content]) => React.createElement(
            Row,
            { key: year, index_key: `years:${year}`, content: content, is_history: !is_recent_year(year),
                hovered: hovered, clicked: clicked, subhovered: subhovered, enter: enter, leave: leave,
                click: click },
            year
        ))
    )
);

const Keywords = ({ children, filter, hovered, clicked, subhovered, enter, leave, click, show_history, toggle_history }) => {
    let content = [...DATA_INDEXED.keywords.entries()].filter(([keyword, content]) => filter(keyword, content));

    return React.createElement(
        'section',
        { className: 'extra-spacing' },
        React.createElement(
            'h2',
            null,
            children
        ),
        [...group_keywords(content).entries()].map(([group, rows]) => React.createElement(
            'div',
            { className: 'column1-3 tags-w-groups' },
            React.createElement(
                'div',
                { className: 'column1-2 colon-after tag-name' },
                group
            ),
            React.createElement(
                'ul',
                { className: 'tags subtags' },
                rows.map(([keyword, content]) => React.createElement(
                    Row,
                    { key: keyword, index_key: `keywords:${keyword}`, content: content,
                        is_history: !is_recent_years(content),
                        hovered: hovered, clicked: clicked, subhovered: subhovered, enter: enter,
                        leave: leave,
                        click: click },
                    keyword
                ))
            )
        ))
    );
};

const Projs = ({ children, hovered, clicked, subhovered, enter, leave, click, filter }) => React.createElement(
    'section',
    null,
    React.createElement(
        'h2',
        null,
        children
    ),
    React.createElement(
        'ul',
        { className: 'tags' },
        [...DATA_INDEXED.projects.entries()].filter(([project, content]) => filter(project, content)).map(([project, content]) => React.createElement(
            Row,
            { key: project, index_key: `projects:${project}`, content: content,
                is_history: !is_recent_years(content),
                hovered: hovered, clicked: clicked, subhovered: subhovered, enter: enter, leave: leave,
                click: click },
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
            'Business analyst'
        ),
        React.createElement(
            'li',
            null,
            'Project manager'
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
            ' years employed as a software developer'
        ),
        React.createElement(
            'li',
            null,
            'Live in K\xF6ln ',
            React.createElement(
                'span',
                { className: 'gray' },
                '(EU Niederlassungserlaubnis)'
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

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(React.createElement(Application, null), document.getElementById('root'));
});
