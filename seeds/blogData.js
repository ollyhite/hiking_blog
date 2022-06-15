const { Blog } = require('../models');

const blogdata = [
  {
    title: 'Sky Pond via Glacier Gorge Trail',
    short_describe:"Discover this 15.1-km out-and-back trail near Estes Park, Colorado. Generally considered a challenging route, it takes an average of 4 h 32 min to complete. This is a very popular area for hiking and snowshoeing, so you'll likely encounter other people while exploring. The best times to visit this trail are June through October. You'll need to leave pups at home — dogs aren't allowed on this trail.",
    article:"• Rocky Mountain National Park charges a fee to enter. You can also purchase a park-specific annual pass. For more information, please see https://www.nps.gov/romo/planyourvisit/fees.htm \n Featuring some of the best views in all of Rocky Mountain National Park, the hike to Sky Pond is sure to leave you breathless. Beginning at the Glacier Gorge Trailhead along Bear Lake Road, this route will take you by Alberta Falls, The Loch (also known as Loch Vale), Timberline Falls, and more! \n Shortly after setting off along the Glacier Gorge Trail, you'll come to Alberta Falls. For much of the climb, you'll have Glacier Creek at your left hand side. Once you reach The Loch, this stream becomes known as the Icy Brook. Next, you'll come to the trail junction for Andrews Glacier leading to the right. At this point, the Sky Pond is just ahead and is located shortly after reaching the Lake of Glass. This final stretch of the trail has incredible views of Taylor Glacier and the jagged peaks of the Rockies. \n This route takes you by some of the prettiest alpine lakes in the national park. For this reason, these trails and the parking lot fill up fast. It is recommended that you arrive early in the morning and consider taking the free shuttle to access the Bear Lake area instead of driving. \n If hiking this route in the winter, it is highly recommended that you bring microspikes and trekking poles. When hiking in these conditions, this hike is likely closer to a hard difficulty rating. You may want to bring the offline downloaded map since visitors have reported the trail can be hard to follow.",
    filename:'sky-pond.jpeg',
    create_date: 'April 20, 2021 07:00:00',
  },
  {
    title: 'Royal Arch Trail',
    short_describe:"Try this 5.0-km out-and-back trail near Boulder, Colorado. Generally considered a challenging route, it takes an average of 2 h 21 min to complete. This is a very popular area for hiking, snowshoeing, and trail running, so you'll likely encounter other people while exploring. The best times to visit this trail are March through October. Dogs are welcome and may be off-leash in some areas.",
    article:"Located just off Baseline Road, this fantastic hike features great views and gives you the opportunity to get up close and personal with the incredible rock formations that have come to characterize the city of Boulder. This trail starts near the ranger cottage at the Chautauqua Park Trailhead. Start hiking along the Bluebell Trail and head south. You could also follow the Chautauqua Trail and eventually meet up with this route at the Bluebell Shelter by way of the Bluebell-Baird Trail. \n After crossing a grassy meadow, you'll enter a lush pine forest. Start paying attention to signs for Royal Arch as a number of other trails branch off. You'll know you're going the right way when you get to the flagstone staircase. Much of the elevation gain on this route comes on the climb to Sentinel Pass. Once you reach this point, you're about a half mile away from the Royal Arch. \n The destination, Royal Arch, is a favorite among locals. However, this amazing rocky feature requires climbing many stairs to the top before arriving at this geological wonder! Along the way you'll have great views of the jagged, rugged, Flatirons and the open valley of Boulder, CO. Some of the highlights include wildflowers, some of the most unique rock formations in the Rocky Mountains, and an initial well-packed baked earth entry trail.",
    filename:'royal-arch-trail.jpeg',
    create_date: 'April 30, 2022 07:00:00',
  },
];

const seedBlog = () => Blog.bulkCreate(blogdata);

module.exports = seedBlog;
