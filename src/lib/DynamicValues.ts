import {ICombinedInformation, IDirectMessageItem, IInitialInformation, ITitledListItem} from "./Models";

class DynamicValues {
    static initialInformation: IInitialInformation = {
        iconText: "Al",
        name: "Abdullah Al Faroque",
        occupation: "SQA Engineer (Automation)",
    }

    static directMessageItems: Array<IDirectMessageItem> = [
        {
            name: "WhatsApp",
            link: "https://api.whatsapp.com/send?phone=8801521259370"
        },
        {
            name: "Linkedin",
            link: "https://www.linkedin.com/in/rfnshare"
        },
        {
            name: "Mail",
            link: "mailto:aalfaroque@gmail.com"
        },

    ]

    static about: Array<ITitledListItem> = [
        {
            text: "Information",
            shouldNotSort: true,
            arr: [
                {
                    title: "Name",
                    desc: "Abdullah Al Faroque",
                    logo: "https://cdn-icons-png.flaticon.com/128/1077/1077012.png"
                },
                {
                    title: "Work Experience",
                    desc: "3+ years",
                    logo: "https://cdn-icons-png.flaticon.com/128/3281/3281289.png"
                },
                {
                    title: "Languages",
                    desc: "Bengali, English",
                    logo: "https://cdn-icons-png.flaticon.com/128/3898/3898150.png"
                },
                {
                    title: "Nationality",
                    desc: "Bangladeshi",
                    logo: "https://cdn-icons-png.flaticon.com/128/11701/11701027.png"
                },
                {
                    title: "Resume",
                    desc: "Click the link icon to view/download",
                    link: "https://aalfaroque.tiiny.site/",
                    logo: "https://cdn-icons-png.flaticon.com/128/909/909212.png"
                }
            ]
        },
        {
            text: "Experiences",
            arr: [
                // {
                //     title: "Quality Up services",
                //     desc: "Software Automation Engineer",
                //     logo: "https://media.licdn.com/dms/image/v2/C4E0BAQF0jXoIA9xGNg/company-logo_200_200/company-logo_200_200/0/1630634011354/qups_usa_logo?e=1735776000&v=beta&t=cGGeRVmxCyK8xSaoQIS5-4SlrNr5izCGnhhNwy56Ihs"
                // },
                {
                    title: "Automation Solutionz",
                    desc: "SQA Automation Engineer [Feb 2022 - Aug 2023]",
                    logo: "https://www.zeuz.ai/wp-content/uploads/2019/06/just_logo_ZeuZ-300x298.png"
                },
                {
                    title: "উপায় (UCB Fintech Company Limited)",
                    desc: "SQA Engineer | Executive Officer [Aug 2023 - Jun 2024]",
                    logo: "https://www.upaybd.com/images/Upay-logo-revised-new.png"
                },
                {
                    title: "ReliSource Technologies Ltd",
                    desc: "SQA Engineer [Jun 2024 - Present]",
                    logo: "https://media.licdn.com/dms/image/v2/C560BAQEEj1V4zXZsaA/company-logo_200_200/company-logo_200_200/0/1630647282621/relisource_logo?e=1735776000&v=beta&t=34hZ9bdMeAE3LDtzmJz_LvgWmLIAF69dZJzDzdJsmD0"
                },
            ]
        }
    ]

    static skills: Array<ITitledListItem> = [
        {
            text: "Programming / Markup Languages",
            arr: [
                {
                    title: 'C',
                    logo: 'https://seeklogo.com/images/C/c-logo-672525892C-seeklogo.com.png',
                },
                {
                    title: 'C++',
                    logo: 'https://seeklogo.com/images/C/c-logo-1B1817C041-seeklogo.com.png',
                },
                {
                    title: 'Python',
                    logo: 'https://www.vectorlogo.zone/logos/python/python-icon.svg',
                },
                {
                    title: 'Gherkin',
                    logo: "https://seeklogo.com/images/C/cucumber-logo-D727C551CE-seeklogo.com.png"
                },
            ]
        },
        {
            text: "Databases",
            arr: [
                {
                    title: 'SQL',
                    logo: 'https://github.com/p32929/portfolio-v2/assets/6418354/ffeb437f-0d63-40e5-9bc3-041d5715d67e',
                },

                {
                    title: "PostgreSQL",
                    logo: 'https://github.com/p32929/portfolio-v2/assets/6418354/b0b84cdf-ac60-4f7b-b665-99ea7e8854da'
                },
            ]
        },
        {
            text: "Libraries / Frameworks / Techs",
            arr: [
                {
                    title: 'ZeuZ',
                    logo: 'https://www.guru99.com/images/zeuz-logo-1.png'
                },
                {
                    title: 'Django',
                    logo: 'https://w7.pngwing.com/pngs/10/113/png-transparent-django-web-development-web-framework-python-software-framework-django-text-trademark-logo-thumbnail.png'
                },
                {
                    title: 'Flask',
                    logo: 'https://github.com/p32929/portfolio-v2/assets/6418354/2183bb2b-7680-49f1-a626-b1f647e7d656'
                },
                {
                    title: 'Selenium',
                    logo: 'https://seeklogo.com/images/S/selenium-logo-A1B53CEFB0-seeklogo.com.png'
                },
                {
                    title: 'Robot',
                    logo: 'https://seeklogo.com/images/R/robot-framework-logo-FED576FF0B-seeklogo.com.png'
                },
                {
                    title: 'Playwright',
                    logo: 'https://seeklogo.com/images/P/playwright-logo-22FA8B9E63-seeklogo.com.png'
                },
                {
                    title: 'Cypress',
                    logo: 'https://www.cypress.io/images/layouts/cypress-logo.svg'
                },
                {
                    title: 'Appium',
                    logo: 'https://seeklogo.com/images/A/appium-logo-2AB368AF4A-seeklogo.com.png'
                },
                {
                    title: 'Requests',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Requests_Python_Logo.png'
                },
                {
                    title: 'Postman',
                    logo: 'https://seeklogo.com/images/P/postman-logo-F43375A2EB-seeklogo.com.png'
                },
                {
                    title: 'Jmeter',
                    logo: 'https://seeklogo.com/images/J/jmeter-logo-D9C2DDEEBC-seeklogo.com.png'
                },
                {
                    title: 'Git',
                    logo: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg'
                },

            ]
        },
        {
            text: "Others",
            arr: [
                {
                    title: 'Jira',
                    logo: 'https://cdn.iconscout.com/icon/free/png-128/jira-3628861-3030001.png'
                },
                {
                    title: 'Notion',
                    logo: 'https://seeklogo.com/images/N/notion-app-logo-009B1538E8-seeklogo.com.png'
                },
                {
                    title: 'Figma',
                    logo: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg'
                },
                {
                    title: 'GitHub',
                    logo: 'https://www.vectorlogo.zone/logos/github/github-icon.svg'
                },
                {
                    title: 'Manual Testing',
                    logo: 'https://cdn.iconscout.com/icon/premium/png-512-thumb/manual-testing-2011889-1692320.png'
                },
                {
                    title: 'Automation',
                    logo: 'https://user-images.githubusercontent.com/6418354/155841378-9644305f-c7d1-44f1-bd5f-d626e056601a.png'
                },

            ]
        },
    ]

    static projects: Array<ITitledListItem> = [
        {
            text: "Web Apps",
            arr: [
                {
                    title: "Straight International Limited",
                    logo: "https://www.seekpng.com/png/full/118-1187191_decepticon-vector-straight-line-super-hero-logos.png",
                    desc: 'CMS System',
                    link: "https://github.com/rfnshare/StraightIntLtd"
                },
                {
                    title: "That Quick",
                    logo: "https://i.postimg.cc/xj4kZyjh/logo-footer.png",
                    desc: 'Request any kind of home/office service from this site.',
                    link: "http://www.that-quick.com/"
                },
                {
                    title: "Clean Force",
                    logo: "https://i.postimg.cc/FHQKtTMW/1-Clean-Force.png",
                    desc: 'The one is for cleaning service request site.',
                    link: "https://cleanforce.com.bd/"
                },
                {
                    title: "Property Management System",
                    logo: "https://i.postimg.cc/DZs1JQvR/download.jpg",
                    desc: 'Effective Property Buy and sell management system.',
                    link: "https://github.com/RFNshare/Property-management-System"
                },
                {
                    title: "Buying House Management System",
                    logo: "https://i.postimg.cc/d1Sg3Y05/images.png",
                    desc: 'Buying house accessories buy and sell management system..',
                    link: "https://github.com/RFNshare/Buying-House-Management-System"
                },
                {
                    title: "Medicine Guide",
                    logo: "https://raw.githubusercontent.com/RFNshare/Medicine-Guide/master/img/medicine-icon-9.png",
                    desc: 'A better & more reliable Medicine guide for Customers and pharmacy owner.',
                    link: "https://github.com/RFNshare/Medicine-Guide"
                },


            ]
        },
        {
            text: "Web Automation Scripts",
            arr: [
                {
                    title: "WhatsApp Web UI",
                    link: "https://github.com/rfnshare/Whatsapp-Web-UI-Automation",
                    logo: "https://seeklogo.com/images/W/whatsapp-icon-logo-BDC0A8063B-seeklogo.com.png",
                    desc: "...."
                },
                {
                    title: "ShareBus",
                    link: "https://github.com/rfnshare/Sharebus-Web-UI-Automation",
                    logo: "https://github.com/rfnshare/Sharebus-Web-UI-Automation/blob/main/Resources/sharebus.png?raw=true",
                    desc: "Login, Create a trip & Validate"
                },
                {
                    title: "Pinterest",
                    link: "https://github.com/rfnshare/PinterestAutomation",
                    logo: "https://seeklogo.com/images/P/pinterest-logo-CCDD2FE1E8-seeklogo.com.png",
                    desc: "Basic Functions(Login, Register, CRUD) Automate"
                },
                {
                    title: "KolabTree",
                    link: "https://github.com/rfnshare/KolabTreeUIAutomation",
                    logo: "https://seeklogo.com/images/T/Tree_of_Life-logo-03163AC947-seeklogo.com.png",
                    desc: "Smoke & Regression Pack Automate & Validate"
                },
            ]
        },
        {
            text: "Web Scrapping",
            arr: [
                {
                    title: "Book List",
                    link: "https://github.com/rfnshare/API-Automation-With-Python/tree/main/Web_Scrapping",
                    logo: "https://seeklogo.com/images/B/Better_World_Books-logo-0D2D79288B-seeklogo.com.png",
                    desc: "Post a request call, scrap all books category name with book count"
                },
            ]
        },
        {
            text: "Android/iOS Automation Scripts",
            arr: [
                {
                    title: "Boilerplate",
                    link: "https://github.com/rfnshare/MobileAutomationFramework",
                    logo: "https://seeklogo.com/images/A/appium-logo-2AB368AF4A-seeklogo.com.png",
                    desc: "Mobile Automation Testing Framework using Python & Appium\" - A project structure following the Page Object Model (POM) designed for automated mobile app testing."
                },
                {
                    title: "DaraZ",
                    link: "https://github.com/rfnshare/workspace-laznormal",
                    logo: "https://seeklogo.com/images/D/daraz-logo-7E01DFC36D-seeklogo.com.png",
                    desc: "Switching App Build Status with login.."
                },
                {
                    title: "FoodPanda",
                    link: "https://github.com/rfnshare/FoodPandaMobileJava",
                    logo: "https://seeklogo.com/images/F/foodpanda-logo-551BD51321-seeklogo.com.png",
                    desc: "Basic Android App Functionalities with Login & Registration"
                },
            ]
        },
        {
            text: "API Testing Scripts",
            arr: [
                {
                    title: "Boilerplate",
                    link: "https://github.com/rfnshare/API-Automation-With-Python",
                    logo: "https://seeklogo.com/images/A/aws-logo-584E03651E-seeklogo.com.png",
                    desc: "This is a practice repo where I practice API Automation, Database Connections, AWS CSV ReadWrite & Web Scrapping"
                },
                {
                    title: "Prayers Times",
                    link: "https://github.com/rfnshare/PrayersTimeAPIPython",
                    logo: "https://seeklogo.com/images/Q/quran-logo-E42415D8AF-seeklogo.com.png",
                    desc: "Basic API Request Automate & Validate"
                },
                {
                    title: "Library",
                    link: "https://github.com/rfnshare/API-Automation-With-Python/tree/main/apiAutomation",
                    logo: "https://seeklogo.com/images/H/highcharts-logo-B82D186525-seeklogo.com.png?v=637829616030000000",
                    desc: "CRUD Operations, Auth, Cookies, Upload & Redirect Request Calls"
                },
                {
                    title: "Library Postman API",
                    link: "#",
                    logo: "https://seeklogo.com/images/H/highcharts-logo-B82D186525-seeklogo.com.png?v=637829616030000000",
                    desc: "CRUD Operations, Auth, Cookies, Upload & Redirect Request Calls with Postman. Created Pre-request & Tests"
                },
            ]
        },
        // {
        //     text: "Performance Testing Scripts",
        //     arr: [
        //         {
        //             title: "Upcoming",
        //             link: "",
        //             logo: "",
        //             desc: "The most comprehensive App!"
        //         },
        //         {
        //             title: "Upcoming",
        //             link: "",
        //             logo: "",
        //             desc: "The most comprehensive App!"
        //         },
        //     ]
        // },
        {
            text: "Desktop Apps",
            arr: [
                {
                    title: 'Disaster Management System',
                    logo: 'https://seeklogo.com/images/A/amazon-connect-logo-DA548F7E3F-seeklogo.com.png',
                    desc: 'Created using C#. This application helpful for disaster area donation purpose.',
                    link: 'https://github.com/RFNshare/Disaster-Management-System'
                },
                {
                    title: 'Coffee Shop Management System',
                    logo: 'https://seeklogo.com/images/C/coffee-house-creative-logo-3B1F1F60F9-seeklogo.com.png',
                    desc: 'Created using Java and Swing. This is management system for Coffee shop manager.',
                },
            ]
        },
    ]

    static contacts: Array<ITitledListItem> = [
        {
            text: "Contact me",
            arr: [
                {
                    title: 'WhatsApp ( Recommended )',
                    logo: 'https://user-images.githubusercontent.com/6418354/155842184-b064bf36-de8e-4317-8f8e-cb7755eed995.png',
                    link: 'https://api.whatsapp.com/send?phone=8801521259370',
                    desc: "+8801521259370"
                },
                {
                    title: 'Email',
                    logo: 'https://cdn3d.iconscout.com/3d/premium/thumb/email-address-4437044-3684811.png',
                    desc: 'aalfaroque@gmail.com',
                    link: 'mailto:aalfaroque@gmail.com'
                },
                {
                    title: 'Linkedin',
                    logo: 'https://user-images.githubusercontent.com/6418354/155841027-8698cb12-7ddd-4604-a4ea-c618ddbc1cd8.png',
                    desc: '@rfnshare',
                    link: 'https://www.linkedin.com/in/rfnshare/'
                },
            ]
        },
        {
            text: "Others",
            arr: [
                {
                    title: 'GitHub',
                    logo: 'https://cdn-icons-png.flaticon.com/128/1051/1051275.png',
                    link: 'https://github.com/rfnshare/'
                },
                {
                    title: 'LinkedIn',
                    logo: 'https://user-images.githubusercontent.com/6418354/155841027-8698cb12-7ddd-4604-a4ea-c618ddbc1cd8.png',
                    link: 'https://www.linkedin.com/in/rfnshare/'
                },
                {
                    title: 'Twitter',
                    logo: 'https://user-images.githubusercontent.com/6418354/155841031-532d5d6e-797a-4da1-8064-48d266b69ab2.png',
                    link: 'https://twitter.com/rfnshare'
                },

            ]
        },
    ]
}

// 
// Don't change anything below this line
// 
export const combinedInformation: ICombinedInformation = {
    initialInformation: DynamicValues.initialInformation,
    directMessageItems: DynamicValues.directMessageItems,
    routes: [
        {
            name: "About",
            items: DynamicValues.about,
        },
        {
            name: "Skills",
            items: DynamicValues.skills,
        },
        {
            name: "Projects",
            items: DynamicValues.projects,
        },
        {
            name: "Contact",
            items: DynamicValues.contacts,
        },
    ]
}