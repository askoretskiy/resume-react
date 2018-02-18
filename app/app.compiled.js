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

const Application = () => React.createElement(
    "main",
    null,
    React.createElement(
        "h1",
        null,
        "Artem Skoretskiy ",
        React.createElement(
            "span",
            { className: "dense" },
            "//"
        ),
        React.createElement(
            "span",
            { className: "highlight" },
            "full-stack web developer"
        )
    ),
    React.createElement(Photo, null),
    React.createElement(Services, null),
    React.createElement(Contacts, null),
    React.createElement(Profile, null),
    React.createElement(Skills, null),
    React.createElement(Projects, null),
    React.createElement(Timeline, null)
);

const Services = () => React.createElement(
    "section",
    null,
    React.createElement(
        "ul",
        null,
        React.createElement(
            "li",
            null,
            "Backend"
        ),
        React.createElement(
            "li",
            null,
            "Frontend"
        ),
        React.createElement(
            "li",
            null,
            "Cloud services integration"
        ),
        React.createElement(
            "li",
            null,
            "DevOps"
        )
    ),
    React.createElement(
        "h3",
        null,
        "More when needed"
    ),
    React.createElement(
        "ul",
        null,
        React.createElement(
            "li",
            null,
            "Technical lead"
        ),
        React.createElement(
            "li",
            null,
            "Project manager"
        ),
        React.createElement(
            "li",
            null,
            "Business analyst"
        )
    )
);

const Photo = () => React.createElement(
    "section",
    { className: "photo" },
    React.createElement("img", { src: "profile.jpg", className: "photo" })
);

const Profile = () => React.createElement(
    "section",
    null,
    React.createElement(
        "h2",
        null,
        "Profile"
    ),
    React.createElement(
        "ul",
        null,
        React.createElement(
            "li",
            null,
            get_years_since(new Date(1981, 12, 7, 12)),
            " years"
        ),
        React.createElement(
            "li",
            null,
            get_years_since(new Date(2000, 9, 1, 12)),
            " years as software developer"
        ),
        React.createElement(
            "li",
            null,
            "Live in K\xF6ln"
        ),
        React.createElement(
            "li",
            null,
            "Master of Economy"
        ),
        React.createElement(
            "li",
            null,
            "Fluent English"
        ),
        React.createElement(
            "li",
            null,
            "Intermediate German (B2.1)"
        )
    )
);

const Contacts = () => React.createElement(
    "section",
    null,
    React.createElement(
        "h2",
        null,
        "Contacts"
    ),
    React.createElement(
        "ul",
        null,
        React.createElement(
            "li",
            null,
            React.createElement(
                "span",
                { className: "contact_type" },
                "phone"
            ),
            " +49 (0)157 835 40 848"
        ),
        React.createElement(
            "li",
            null,
            React.createElement(
                "span",
                { className: "contact_type" },
                "email"
            ),
            " artem.skoretskiy@gmail.com"
        ),
        React.createElement(
            "li",
            null,
            React.createElement(
                "span",
                { className: "contact_type" },
                "skype"
            ),
            " tonn81"
        )
    )
);

const Skills = () => React.createElement(
    "section",
    null,
    React.createElement(
        "h2",
        null,
        "Skills"
    ),
    React.createElement(
        "ul",
        null,
        React.createElement(
            "li",
            null,
            "Python 3"
        ),
        React.createElement(
            "li",
            null,
            "Django"
        ),
        React.createElement(
            "li",
            null,
            "Django REST framework"
        ),
        React.createElement(
            "li",
            null,
            "JSON REST API"
        ),
        React.createElement(
            "li",
            null,
            "Javascript"
        ),
        React.createElement(
            "li",
            null,
            "ES8"
        ),
        React.createElement(
            "li",
            null,
            "React"
        ),
        React.createElement(
            "li",
            null,
            "Redux"
        ),
        React.createElement(
            "li",
            null,
            "Webpack 3"
        ),
        React.createElement(
            "li",
            null,
            "Babel"
        ),
        React.createElement(
            "li",
            null,
            "React hot-reload"
        ),
        React.createElement(
            "li",
            null,
            "CSS"
        ),
        React.createElement(
            "li",
            null,
            "HTML5"
        ),
        React.createElement(
            "li",
            null,
            "SQL"
        ),
        React.createElement(
            "li",
            null,
            "MySQL"
        ),
        React.createElement(
            "li",
            null,
            "SQLite"
        ),
        React.createElement(
            "li",
            null,
            "PostgreSQL"
        ),
        React.createElement(
            "li",
            null,
            "BASH"
        ),
        React.createElement(
            "li",
            null,
            "AWS S3 (+ upload)"
        ),
        React.createElement(
            "li",
            null,
            "AWS EC2 (+ custom AMIs)"
        ),
        React.createElement(
            "li",
            null,
            "packer"
        ),
        React.createElement(
            "li",
            null,
            "AWS CloudFront"
        ),
        React.createElement(
            "li",
            null,
            "AWS Glacier"
        ),
        React.createElement(
            "li",
            null,
            "ffmpeg"
        ),
        React.createElement(
            "li",
            null,
            "HTML5 video"
        ),
        React.createElement(
            "li",
            null,
            "HLS"
        ),
        React.createElement(
            "li",
            null,
            "DASH"
        ),
        React.createElement(
            "li",
            null,
            "Docker"
        ),
        React.createElement(
            "li",
            null,
            "Docker for Mac"
        ),
        React.createElement(
            "li",
            null,
            "Docker Compose"
        ),
        React.createElement(
            "li",
            null,
            "GitLab CI"
        ),
        React.createElement(
            "li",
            null,
            "Linux"
        ),
        React.createElement(
            "li",
            null,
            "Debian"
        ),
        React.createElement(
            "li",
            null,
            "Alpine"
        ),
        React.createElement(
            "li",
            null,
            "MacOS"
        ),
        React.createElement(
            "li",
            null,
            "PyCharm"
        )
    )
);

const Projects = () => React.createElement(
    "section",
    null,
    React.createElement(
        "h2",
        null,
        "Projects"
    ),
    React.createElement(
        "ul",
        null,
        React.createElement(
            "li",
            null,
            "TODO"
        )
    )
);

const Timeline = () => React.createElement(
    "section",
    null,
    React.createElement(
        "h2",
        null,
        "Timeline"
    ),
    React.createElement(
        "ul",
        null,
        React.createElement(
            "li",
            null,
            "TODO"
        )
    )
);

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(React.createElement(Application, null), document.getElementById('root'));
});
