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
        "header",
        null,
        React.createElement(
            "h1",
            null,
            "Artem Skoretskiy, ",
            get_years_since(new Date(1981, 12, 7, 12))
        )
    ),
    React.createElement(Photo, null),
    React.createElement(Services, null),
    React.createElement(Profile, null),
    React.createElement(Technologies, null),
    React.createElement(Projects, null),
    React.createElement(Timeline, null),
    React.createElement(
        "footer",
        null,
        "\xA9 ",
        new Date().getFullYear(),
        " Artem Skoretskiy"
    )
);

const Services = () => React.createElement(
    "section",
    { className: "services" },
    React.createElement(
        "h2",
        { className: "highlight" },
        "Full-stack web developer"
    ),
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
    React.createElement("img", { src: "profile.jpg", className: "photo" }),
    React.createElement(Contacts, null)
);

const Profile = () => React.createElement(
    "section",
    { className: "profile" },
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
            get_years_since(new Date(2000, 9, 1, 12)),
            " years as software developer"
        ),
        React.createElement(
            "li",
            null,
            "Live in K\xF6ln ",
            React.createElement(
                "span",
                { className: "gray" },
                "(Niederlassungserlaubnis)"
            )
        ),
        React.createElement(
            "li",
            null,
            "Master of Economy"
        ),
        React.createElement(
            "li",
            null,
            "Intermediate German ",
            React.createElement(
                "span",
                { className: "gray" },
                "(B2.1)"
            )
        ),
        React.createElement(
            "li",
            null,
            "Fluent English"
        )
    )
);

const Contacts = () => React.createElement(
    "ul",
    { className: "contacts" },
    React.createElement(
        "li",
        null,
        "+49 (0)157 835 40 848"
    ),
    React.createElement(
        "li",
        null,
        "artem.skoretskiy@gmail.com"
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
);

const Technologies = () => React.createElement(
    "section",
    null,
    React.createElement(
        "h2",
        null,
        "Stack"
    ),
    React.createElement(
        "div",
        { className: "tags-grouped" },
        React.createElement(
            "div",
            { className: "tag-group" },
            "Front-end"
        ),
        React.createElement(
            "ul",
            { className: "tags" },
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
                "JSX"
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
                "yarn"
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
            )
        ),
        React.createElement(
            "div",
            { className: "tag-group" },
            "Backend"
        ),
        React.createElement(
            "ul",
            { className: "tags" },
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
                "JSON REST API"
            ),
            React.createElement(
                "li",
                null,
                "Django REST framework"
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
                "Redis"
            )
        ),
        React.createElement(
            "div",
            { className: "tag-group" },
            "Cloud"
        ),
        React.createElement(
            "ul",
            { className: "tags" },
            React.createElement(
                "li",
                null,
                "AWS S3"
            ),
            React.createElement(
                "li",
                null,
                "AWS S3 uploader"
            ),
            React.createElement(
                "li",
                null,
                "AWS EC2"
            ),
            React.createElement(
                "li",
                null,
                "AWS custom EMI"
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
            )
        ),
        React.createElement(
            "div",
            { className: "tag-group" },
            "DevOps"
        ),
        React.createElement(
            "ul",
            { className: "tags" },
            React.createElement(
                "li",
                null,
                "BASH"
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
                "nginx"
            ),
            React.createElement(
                "li",
                null,
                "uWSGI"
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
                "compilation"
            )
        ),
        React.createElement(
            "div",
            { className: "tag-group" },
            "Video"
        ),
        React.createElement(
            "ul",
            { className: "tags" },
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
                "RTMP"
            )
        ),
        React.createElement(
            "div",
            { className: "tag-group" },
            "More"
        ),
        React.createElement(
            "ul",
            { className: "tags" },
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
