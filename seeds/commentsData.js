const { Comments } = require('../models');

const commentsdata = [
    {
        username: 'Eva Lee',
        comment:"I also been there!!!! It's really good:)",
        blog_id:1,
        create_date: 'May 20, 2021 16:00:00',
    },
    {
        username: 'Maud',
        comment:"Thanks for sharing this!!!!Love it!!!",
        blog_id:1,
        create_date: 'May 30, 2021 10:00:00',
    },
    {
        username: 'Cathy',
        comment:"Wooow, definitly need to visit:)",
        blog_id:2,
        create_date: 'Jun 11, 2021 22:00:00',
    },
    {
        username: 'Jing',
        comment:"This trail is awesome!!!",
        blog_id:2,
        create_date: 'Sep 22, 2021 15:00:00',
    },
    {
        username: 'Fran',
        comment:"My dog love it!!!!!",
        blog_id:2,
        create_date: 'Jan 11, 2022 18:00:00',
    },
];

const seedCooments = () => Comments.bulkCreate(commentsdata);

module.exports = seedCooments;
