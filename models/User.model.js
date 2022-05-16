const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");


// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  age: {
    type: Number,
  },

  genre: { 
    type: [String],
    required: false,
    enum: ["Male", "Female", "Transgender", "Non-binary/non-conforming", "Prefer not to respond"]
  },

  country: {
    type: [String],
    required: false,
    enum: ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"],
  },

  interests: {
    type: [String],
    required: false,
    enum: [
      '3D printing',
      'Amateur radio',
      'Scrapbook',
      'Acting',
      'Baton twirling',
      'Board games',
      'Book restoration',
      'Cabaret',
      'Calligraphy',
      'Candle making',
      'Computer programming',
      'Coffee roasting',
      'Cooking',
      'Colouring',
      'Cosplaying',
      'Couponing',
      'Creative writing',
      'Crocheting',
      'Cryptography',
      'Dance',
      'Digital arts',
      'Drama',
      'Drawing',
      'Do it yourself',
      'Electronics',
      'Embroidery',
      'Fashion',
      'Flower arranging',
      'Foreign language learning',
      'Gaming',
      'Tabletop games',
      'Role-playing games',
      'Gambling',
      'Genealogy',
      'Glassblowing',
      'Gunsmithing',
      'Homebrewing',
      'Ice skating',
      'Jewelry making',
      'Jigsaw puzzles',
      'Juggling',
      'Knapping',
      'Knitting',
      'Kabaddi',
      'Knife making',
      'Lacemaking',
      'Lapidary',
      'Leather crafting',
      'Lego building',
      'Lockpicking',
      'Machining',
      'Macrame',
      'Metalworking',
      'Magic',
      'Model building',
      'Listening to music',
      'Origami',
      'Painting',
      'Playing musical instruments',
      'Pet',
      'Poi',
      'Pottery',
      'Puzzles',
      'Quilting',
      'Reading',
      'Scrapbooking',
      'Sculpting',
      'Sewing',
      'Singing',
      'Sketching',
      'Soapmaking',
      'Sports',
      'Stand-up comedy',
      'Sudoku',
      'Table tennis',
      'Taxidermy',
      'Video gaming',
      'Watching movies',
      'Web surfing',
      'Whittling',
      'Wood carving',
      'Woodworking',
      'World Building',
      'Writing',
      'Yoga',
      'Yo-yoing',
      'Air sports',
      'Archery',
      'Architecture',
      'Astronomy',
      'Backpacking',
      'Base jumping',
      'Baseball',
      'Basketball',
      'Beekeeping',
      'Bird watching',
      'Blacksmithing',
      'Board sports',
      'Bodybuilding',
      'Brazilian jiu-jitsu',
      'Community',
      'Cycling',
      'Dowsing',
      'Driving',
      'Fishing',
      'Football',
      'Flying',
      'Flying disc',
      'Foraging',
      'Gardening',
      'Geocaching',
      'Ghost hunting',
      'Graffiti',
      'Handball',
      'Hiking',
      'Hooping',
      'Horseback riding',
      'Hunting',
      'Inline skating',
      'Jogging',
      'Kayaking',
      'Kite flying',
      'Kitesurfing',
      'Larping',
      'Letterboxing',
      'Metal detecting',
      'Motor sports',
      'Mountain biking',
      'Mountaineering',
      'Mushroom hunting',
      'Mycology',
      'Netball',
      'Nordic skating',
      'Orienteering',
      'Paintball',
      'Parkour',
      'Photography',
      'Polo',
      'Rafting',
      'Rappelling',
      'Rock climbing',
      'Roller skating',
      'Rugby',
      'Running',
      'Sailing',
      'Sand art',
      'Scouting',
      'Scuba diving',
      'Sculling',
      'Rowing',
      'Shooting',
      'Shopping',
      'Skateboarding',
      'Skiing',
      'Skim Boarding',
      'Skydiving',
      'Slacklining',
      'Snowboarding',
      'Stone skipping',
      'Surfing',
      'Swimming',
      'Taekwondo',
      'Tai chi',
      'Urban exploration',
      'Vacation',
      'Vehicle restoration',
      'Water sports'
    ]
  },

  userPhotoUrl: {
    type: String,
    default:
      "https://simulacionymedicina.es/wp-content/uploads/2015/11/default-avatar-300x300-1.jpg",
  }
});

const User = model("User", userSchema);

module.exports = User;


