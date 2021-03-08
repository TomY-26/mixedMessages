//Create three arrays for the three different outputs

const output1 = ['An Online', 'An Offline', 'A Personal', 'A Simple', 'A local', 'An Automated', 
'A Machine Operated', 'A Virtual Reality', 'Customer Focused', 'A Paid', 'A Free', 'An Eco-Friendly'];

const output2 = ['Accountants', 'Ad Agency', 'Airline Agency', 'Construction Service', 'Car Dealer', 
'Social Media Service', 'Dog Walking Service', 'Teaching Service', 'Food Delivery Service', 'Food Production Service', 
'Cleaning Service', 'Hotel', 'Graphic Design Service', 'Renewable energy Service', 'Aerospace Development Service', 
'Clothing Design Service', 'LifeStyle Blog', 'Telecommunication Service', 'Estate Agency', 'Retail Service', 
'Restaurant', 'Space Travel Service', 'Financial Advisory Service', 'Teaching A Foreign Language Service', 'Investment Service', 
'Healthcare Service', 'Mental Health Service', 'Fitness Instructor', 'Legal Support Service', 'Careers Advisor', 
'News Delivery Service', 'Research Service', 'Insurance Service', 'Job Search Service', 'Web Design Service', 
'Mobile App Development Service', 'Consultancy Service', 'Online Training Service', 'Life Coach Service', 
'Pet Grooming Service', 'Contact Centre Services', 'Renewable Energy Researcher', 'Climate Change Blog', 'Delivery Service', 
'Meeting Facilitator Service', 'Catering Service', 'Interior Design Service', 'Alternative Supermarket', 
'Automotive Magazine', 'Medical Advisory Service', 'Recruitment Service', 'Home Security Service', 
'Financial Independance Advisor', 'Recycling Services', 'Game Development', 'Streaming Service'];

const output3 = ['for Nurses', 'for Doctors', 'for School Kids', 'for Home Owners', 'for Dog Owners', 'for Cat Owners', 
'for Parents', 'for Entrepreneurs', 'for Overweight Individuals', 'for Designers', 'for Freelancers', 'for Self-Employed', 
'for Personal Trainers', 'for Lorry Drivers', 'for Veterans', 'for Pregnant Women', 'for Students', 'for Elderly', 
'for Homeless People', 'for Construction Workers', 'for Travellers', 'for Millenials', 'for Banks', 'for the Military', 
'for FireFighters', 'for the Police', 'for Lorry Drivers', 'for Petrol Stations', 'for Stay-at-home Parents', 'for Single Parents', 
'for Cleaners', 'for Unemployed', 'for Large Enterprises', 'for Taxi Drivers', 'for Lawyers', 'for Investment Bankers', 
'for Teachers', 'for Small Businesses', 'for Time Share Owners', 'for Property Developers', 'for Managers', 'for Civil Servants', 
'for Website Owners', 'for Environmentalists', 'for Gamers'];

//Create a function that takes the three arrays as arguments and randomises them, then concatenates them into a returned output.

const randomStartup = () => {

  let what = output1[Math.floor(Math.random() * output1.length)];

  let where = output2[Math.floor(Math.random() * output2.length)];

  let who = output3[Math.floor(Math.random() * output3.length)];

    return `${what}, ${where}, ${who}`;

};

console.log(randomStartup());
