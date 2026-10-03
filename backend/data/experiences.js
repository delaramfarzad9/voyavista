// VoyaVista seed data
// Research checked against official visitor/attraction sources.
// Prices and opening times can change, so users should verify officialUrl before travel.

const experiences = [
  {
    id: 1,
    slug: "seven-sisters-coastal-walk",
    title: "Seven Sisters Coastal Walk",
    location: "Seven Sisters",
    region: "East Sussex",
    country: "England",
    category: "Outdoor",

    description:
      "Walk beside the Seven Sisters' white chalk cliffs and enjoy wide views across the English Channel.",

    longDescription:
      "Seven Sisters Country Park is one of the best-known coastal landscapes in southern England, with chalk cliffs, river valley scenery and access to the South Downs. It is especially good for walking, photography and a relaxed outdoor day. The country park itself is open year-round, although car parks, the visitor centre and other facilities have seasonal hours.",

    activities: ["Coastal walking", "Photography", "Nature"],

    image: "/images/experiences/seven-sisters.png",
    imageCredit: "AI-generated illustration",

    price: 0,
    priceInfo:
      "Free to visit. Parking is currently £3.50 up to 2 hours, £5 up to 4 hours, or £7 for more than 4 hours.",

    rating: null,
    ratingSource: null,

    openingInfo:
      "Country park open all year. Car parks generally open from dawn to dusk; seasonal visitor-centre and facilities hours apply.",

    address:
      "Seven Sisters Country Park, Exceat, Seaford, East Sussex BN25 4AD",

    officialUrl: "https://www.sevensisters.org.uk/",
    bookable: false,
  },

  {
    id: 2,
    slug: "edinburgh-castle",
    title: "Edinburgh Castle",
    location: "Edinburgh",
    region: "City of Edinburgh",
    country: "Scotland",
    category: "Culture",

    description:
      "Explore Edinburgh's historic hilltop fortress, royal buildings and panoramic views over the city.",

    longDescription:
      "Edinburgh Castle dominates the city skyline from Castle Rock and brings together royal, military and national history in one place. Highlights include the Honours of Scotland, historic royal rooms, museums and the One o'Clock Gun. The castle recommends allowing at least two hours, and advance booking is strongly recommended because popular dates can sell out.",

    activities: ["History", "Architecture", "Sightseeing"],

    image: "/images/experiences/edinburgh-castle.png",
    imageCredit: "AI-generated illustration",

    price: 23.5,
    priceInfo:
      "Adult online ticket currently £23.50; adult walk-up £26. Prices are subject to change.",

    rating: null,
    ratingSource: null,

    openingInfo:
      "1 Apr-30 Sep: 09:30-18:00, last entry 17:00. 1 Oct-23 Dec and most winter dates: 09:30-17:00, last entry 16:00. Closed 25-26 Dec.",

    address: "Castlehill, Edinburgh EH1 2NG",

    officialUrl: "https://www.edinburghcastle.scot/",
    bookable: true,
  },

  {
    id: 3,
    slug: "eryri-national-park",
    title: "Eryri National Park",
    location: "Eryri",
    region: "North Wales",
    country: "Wales",
    category: "Outdoor",

    description:
      "Explore mountains, lakes and walking routes across Eryri, including paths around Yr Wyddfa.",

    longDescription:
      "Eryri National Park contains an extensive network of mountain and valley walks, including routes to Yr Wyddfa, Wales' highest mountain. The National Park Authority manages more than a thousand miles of approved paths. Routes to Yr Wyddfa are strenuous and require suitable fitness, clothing and navigation awareness; parking can be limited, so the Sherpa'r Wyddfa bus is often the better option.",

    activities: ["Hiking", "Mountain scenery", "Photography"],

    image: "/images/experiences/eryri-national-park.png",
    imageCredit: "AI-generated illustration",

    price: 0,
    priceInfo:
      "The National Park is free to access. Parking, buses, attractions and the mountain railway are charged separately.",

    rating: null,
    ratingSource: null,

    openingInfo:
      "The landscape is open year-round. Conditions, car parks, buses and individual visitor facilities vary by location and season.",

    address: "Eryri National Park, North Wales",

    officialUrl: "https://eryri.gov.wales/",
    bookable: false,
  },

  {
    id: 4,
    slug: "giants-causeway",
    title: "Giant's Causeway",
    location: "Bushmills",
    region: "County Antrim",
    country: "Northern Ireland",
    category: "Nature",

    description:
      "See the Giant's Causeway's interlocking basalt columns on Northern Ireland's dramatic north coast.",

    longDescription:
      "The Giant's Causeway is a UNESCO World Heritage Site famous for thousands of basalt columns formed by ancient volcanic activity. You can walk to the stones without buying the National Trust Visitor Experience, while the paid Visitor Experience includes the visitor centre, parking, guided storytelling tours and audio guides. Coastal weather can change quickly, so suitable footwear and layers are sensible.",

    activities: ["Coastal walking", "Geology", "Photography"],

    image: "/images/experiences/giants-causeway.png",
    imageCredit: "AI-generated illustration",

    price: 0,
    priceInfo:
      "Walking access to the stones is free. National Trust Visitor Experience adult admission currently starts at £16 and includes on-site parking and visitor-centre services.",

    rating: null,
    ratingSource: null,

    openingInfo:
      "Coastline generally dawn to dusk. Visitor Centre hours vary by date; in early October 2026 it is 09:00-17:00.",

    address:
      "44 Causeway Road, Bushmills, County Antrim BT57 8SU",

    officialUrl:
      "https://www.nationaltrust.org.uk/visit/northern-ireland/giants-causeway",

    bookable: true,
  },

  {
    id: 5,
    slug: "stonehenge",
    title: "Stonehenge",
    location: "Amesbury",
    region: "Wiltshire",
    country: "England",
    category: "Culture",

    description:
      "Visit one of Britain's most famous prehistoric monuments and explore its wider ancient landscape.",

    longDescription:
      "Stonehenge combines the world-famous stone circle with an exhibition, reconstructed Neolithic houses and access to the surrounding prehistoric landscape. English Heritage recommends advance booking, and a shuttle links the visitor centre with the monument, although walking through the landscape is also possible. National Trust England members can visit free with advance booking and valid membership.",

    activities: ["History", "Archaeology", "Walking"],

    image: "/images/experiences/stonehenge.png",
    imageCredit: "AI-generated illustration",

    price: 27.03,
    priceInfo:
      "Standard adult advance ticket without donation is currently £27.03; date/time bands vary and on-the-day prices are higher.",

    rating: null,
    ratingSource: null,

    openingInfo:
      "Currently generally 09:30-17:00, with last admission earlier than closing. Special-event and solstice hours can differ.",

    address: "Near Amesbury, Wiltshire SP4 7DE",

    officialUrl:
      "https://www.english-heritage.org.uk/visit/places/stonehenge/",

    bookable: true,
  },
    {
    id: 6,
    slug: "tower-of-london",
    title: "Tower of London",
    location: "London",
    region: "Greater London",
    country: "England",
    category: "Culture",

    description:
      "Explore London's historic fortress, the Crown Jewels and centuries of royal and military history.",

    longDescription:
      "The Tower of London has served as a fortress, royal palace, prison and treasury. A standard visit can include the Crown Jewels, medieval and Tudor spaces, ravens and Yeoman Warder tours. Historic Royal Palaces recommends allowing roughly two to three hours, and some internal areas can occasionally close for ceremonies or operational reasons.",

    activities: ["History", "Architecture", "Sightseeing"],

    image: "/images/experiences/tower-of-london.png",
    imageCredit: "AI-generated illustration",

    price: 38,
    priceInfo:
      "Adult admission is currently around £38 excluding donation; verify the selected date before visiting.",

    rating: null,
    ratingSource: null,

    openingInfo:
      "Hours vary by day. Around early October 2026, opening is generally 09:00 or 10:00 to 17:30, with last entry around 16:30.",

    address: "Tower of London, London EC3N 4AB",

    officialUrl: "https://www.hrp.org.uk/tower-of-london/",
    bookable: true,
  },

  {
    id: 7,
    slug: "madame-tussauds-london",
    title: "Madame Tussauds London",
    location: "London",
    region: "Greater London",
    country: "England",
    category: "Culture",

    description:
      "Explore themed zones with lifelike wax figures, immersive sets and entertainment experiences.",

    longDescription:
      "Madame Tussauds London combines more than 150 wax figures with themed environments and interactive attractions. Standard admission includes timed entry and major in-house experiences such as the Spirit of London ride and selected immersive zones. Prices are dynamic, so booking online in advance is normally cheaper than paying at the door.",

    activities: ["Wax museum", "Photography", "Entertainment"],

    image: "/images/experiences/madame-tussauds-london.png",
    imageCredit: "AI-generated illustration",

    price: 27,
    priceInfo:
      "Adult standard tickets currently start from £27 online; walk-up price is £39. Prices vary with demand.",

    rating: null,
    ratingSource: null,

    openingInfo:
      "Opening hours vary by date. Many October 2026 dates are around 10:00-18:00, with last entry about two hours before closing.",

    address: "Marylebone Road, London NW1 5LR",

    officialUrl: "https://www.madametussauds.com/london/",
    bookable: true,
  },

  {
    id: 8,
    slug: "roman-baths",
    title: "The Roman Baths",
    location: "Bath",
    region: "Somerset",
    country: "England",
    category: "Culture",

    description:
      "Explore the ancient Roman bathing complex built around Bath's natural thermal springs.",

    longDescription:
      "The Roman Baths preserve one of the best-known Roman archaeological sites in Britain, centred on the thermal spring that made Bath an important settlement. Visitors can see the Great Bath, temple remains, museum collections and objects connected with the cult of Sulis Minerva. The site is in central Bath and is easy to combine with the Abbey and the surrounding historic streets.",

    activities: ["Roman history", "Museum", "Architecture"],

    image: "/images/experiences/roman-baths.png",
    imageCredit: "AI-generated illustration",

    price: null,
    priceInfo:
      "Admission uses date-based pricing. Adult prices vary by season and weekday/weekend, so check the official ticket calendar for the visit date.",

    rating: null,
    ratingSource: null,

    openingInfo:
      "1 Sep-31 Oct 2026: daily 09:00-18:00, last admission 17:00. Closed Christmas Day and Boxing Day; other seasonal hours vary.",

    address: "Abbey Church Yard, Bath BA1 1LZ",

    officialUrl: "https://www.romanbaths.co.uk/",
    bookable: true,
  },

  {
    id: 9,
    slug: "warwick-castle",
    title: "Warwick Castle",
    location: "Warwick",
    region: "Warwickshire",
    country: "England",
    category: "Culture",

    description:
      "Explore a medieval castle, towers, grounds and seasonal live shows in Warwick.",

    longDescription:
      "Warwick Castle combines a major historic castle with large grounds, exhibitions and live entertainment. Depending on the season, a day ticket may include bird-of-prey displays, siege-machine shows and other attractions, while some experiences such as the Castle Dungeon cost extra. Opening days and entertainment schedules vary substantially through the year, so checking the date-specific calendar matters.",

    activities: ["Castle", "History", "Live shows"],

    image: "/images/experiences/warwick-castle.png",
    imageCredit: "AI-generated illustration",

    price: 26,
    priceInfo:
      "One-day admission currently starts from £26 when booked in advance; on-the-day price is around £31.",

    rating: null,
    ratingSource: null,

    openingInfo:
      "Usually opens from 10:00 on operating days; closing time varies by date. Some off-season dates are closed.",

    address: "Castle Hill, Warwick CV34 4QU",

    officialUrl: "https://www.warwick-castle.com/",
    bookable: true,
  },

  {
    id: 10,
    slug: "goodwood-driving-experience",
    title: "Goodwood Driving Experience",
    location: "Goodwood",
    region: "West Sussex",
    country: "England",
    category: "Adventure",

    description:
      "Drive at historic Goodwood through a choice of performance, classic and off-road experiences.",

    longDescription:
      "Goodwood Motor Circuit offers a range of driving experiences rather than one single fixed package. Options include performance driving, classic cars, junior sessions and off-road experiences, with different vehicles, durations and prices. It is best treated as a bookable experience where visitors choose a specific package and date from Goodwood's current programme.",

    activities: ["Motorsport", "Driving", "Classic cars"],

    image: "/images/experiences/goodwood-driving.png",
    imageCredit: "AI-generated illustration",

    price: null,
    priceInfo:
      "Prices depend on the chosen experience. As one current example, the Off-Road Driving Experience is advertised from £149 per vehicle.",

    rating: null,
    ratingSource: null,

    openingInfo:
      "No single daily visitor timetable applies; driving experiences run on selected dates and times.",

    address:
      "Goodwood Motor Circuit, Chichester, West Sussex PO18 0PH",

    officialUrl:
      "https://www.goodwood.com/motorsport/driving-experiences/",

    bookable: true,
  },  {
    id: 11,
    slug: "tinwood-vineyard-tour",
    title: "Tinwood Vineyard Tour & Tasting",
    location: "Chichester",
    region: "West Sussex",
    country: "England",
    category: "Food & Drink",

    description:
      "Tour a Sussex vineyard and finish with a tutored tasting of English sparkling wine.",

    longDescription:
      "Tinwood Estate runs guided vineyard tours and tastings near Chichester. The standard experience lasts about 1.5 hours and includes a walk through the vines, an introduction to English sparkling wine production and a tutored tasting of three glasses. The estate also offers non-alcoholic mocktail alternatives, and food can be bought separately from the Vineyard Kitchen.",

    activities: ["Vineyard tour", "Wine tasting", "Food"],

    image: "/images/experiences/tinwood-vineyard.png",
    imageCredit: "AI-generated illustration",

    price: 21,
    priceInfo:
      "Standard vineyard tour and tasting is currently £21 per person and includes three glasses of sparkling wine.",

    rating: null,
    ratingSource: null,

    openingInfo:
      "Tours run on scheduled dates and times throughout the year; check the live availability calendar and arrive about 15 minutes early.",

    address:
      "Tinwood Farm, Halnaker, Chichester, West Sussex PO18 0NE",

    officialUrl:
      "https://www.tinwoodestate.com/experience/vineyard-tours/",

    bookable: true,
  },

  {
    id: 12,
    slug: "shah-jahan-mosque",
    title: "Shah Jahan Mosque",
    location: "Woking",
    region: "Surrey",
    country: "England",
    category: "Culture",

    description:
      "Visit Britain's oldest purpose-built mosque, completed in 1889 and now Grade I listed.",

    longDescription:
      "The Shah Jahan Mosque in Woking was built in 1889 and is recognised as Britain's first purpose-built mosque. It remains an active place of worship as well as a historic building. Individual visitors are welcome, while schools, colleges and larger groups can arrange a guided tour and educational talk in advance.",

    activities: ["Architecture", "History", "Cultural heritage"],

    image: "/images/experiences/shah-jahan-mosque.png",
    imageCredit: "AI-generated illustration",

    price: 0,
    priceInfo:
      "No general admission fee is advertised. Contact the mosque in advance for organised guided visits.",

    rating: null,
    ratingSource: null,

    openingInfo:
      "The mosque states that it is open seven days a week and visitors are welcome. Visit respectfully around prayer times; arranged tours should be booked in advance.",

    address: "149 Oriental Road, Woking GU22 7BA",

    officialUrl: "https://shahjahanmosque.org.uk/",
    bookable: false,
  },

  {
    id: 13,
    slug: "bibury-arlington-row",
    title: "Bibury & Arlington Row",
    location: "Bibury",
    region: "Gloucestershire",
    country: "England",
    category: "Culture",

    description:
      "Walk through Bibury and see the historic stone cottages of Arlington Row beside the River Coln.",

    longDescription:
      "Bibury is one of the Cotswolds' most photographed villages, and Arlington Row is its best-known group of historic stone cottages. The attraction is mainly an outdoor village walk rather than a ticketed visitor site, so the experience is about the streetscape, river, historic buildings and surrounding Cotswold scenery. Parking can be limited at busy times, so quieter periods are more comfortable.",

    activities: ["Village walk", "Photography", "Heritage"],

    image: "/images/experiences/bibury.png",
    imageCredit: "AI-generated illustration",

    price: 0,
    priceInfo:
      "Free to walk through the village and view Arlington Row from public areas.",

    rating: null,
    ratingSource: null,

    openingInfo:
      "Outdoor public areas do not have formal attraction opening hours. Be considerate of residents and private property.",

    address: "Arlington Row, Bibury, Cirencester GL7 5NJ",

    officialUrl:
      "https://www.nationaltrust.org.uk/visit/gloucestershire-cotswolds/bibury",

    bookable: false,
  },

  {
    id: 14,
    slug: "rudys-pizza-ancoats",
    title: "Rudy's Pizza Ancoats",
    location: "Manchester",
    region: "Greater Manchester",
    country: "England",
    category: "Food & Drink",

    description:
      "Eat Neapolitan-style pizza at the original Rudy's location in Manchester's Ancoats neighbourhood.",

    longDescription:
      "Rudy's Ancoats is the original branch of the Manchester-born pizzeria. The restaurant focuses on traditional Neapolitan-style pizza with slowly fermented dough, San Marzano tomatoes and fior di latte mozzarella, baked quickly at high temperature. It works well as a food stop while exploring Ancoats and the northern side of central Manchester.",

    activities: ["Pizza", "Dining", "Manchester"],

    image: "/images/experiences/rudys-ancoats.png",
    imageCredit: "AI-generated illustration",

    price: null,
    priceInfo:
      "À-la-carte restaurant pricing; check the current menu rather than treating it as a fixed admission price.",

    rating: null,
    ratingSource: null,

    openingInfo:
      "Monday-Saturday 11:45-22:00; Sunday 11:45-21:00, according to the current official location information.",

    address: "9 Cotton Street, Ancoats, Manchester",

    officialUrl: "https://www.rudyspizza.co.uk/location/ancoats/",
    bookable: true,
  },

  {
    id: 15,
    slug: "eden-project",
    title: "Eden Project",
    location: "Bodelva",
    region: "Cornwall",
    country: "England",
    category: "Nature",

    description:
      "Explore the Eden Project's huge planted biomes, indoor rainforest and outdoor gardens in Cornwall.",

    longDescription:
      "The Eden Project is built around huge planted biomes in a former clay pit, including a tropical rainforest environment and Mediterranean landscapes. A general ticket also works as an annual pass for repeat entry during the following year. Opening hours change through the season, and advance timed booking is strongly recommended during busy periods.",

    activities: ["Gardens", "Rainforest", "Nature"],

    image: "/images/experiences/eden-project.png",
    imageCredit: "AI-generated illustration",

    price: 35.5,
    priceInfo:
      "Adult general admission is currently £35.50 in advance or £39.50 on the day.",

    rating: null,
    ratingSource: null,

    openingInfo:
      "Hours vary by date. From 28 September to 16 October 2026, ticket desks are 10:00-14:30 and Eden closes at 16:00; later autumn dates differ.",

    address: "Eden Project, Bodelva, Cornwall PL24 2SG",

    officialUrl: "https://www.edenproject.com/",
    bookable: true,
  },
    {
    id: 16,
    slug: "jacobite-steam-train",
    title: "The Jacobite Steam Train",
    location: "Fort William",
    region: "Scottish Highlands",
    country: "Scotland",
    category: "Adventure",

    description:
      "Ride a steam-hauled return journey between Fort William and Mallaig through Highland scenery.",

    longDescription:
      "The Jacobite is a heritage rail journey between Fort William and Mallaig, crossing some of the West Highlands' best-known scenery and passing over the Glenfinnan Viaduct. It is sold as a return experience rather than a one-way service. The operator publishes separate morning and afternoon departures, and dates can change while the seasonal timetable is being finalised.",

    activities: ["Steam train", "Scenic journey", "Photography"],

    image: "/images/experiences/jacobite-steam-train.png",
    imageCredit: "AI-generated illustration",

    price: 69,
    priceInfo:
      "2026 standard adult day return is £69; first class adult day return is £105.",

    rating: null,
    ratingSource: null,

    openingInfo:
      "Seasonal service. Published 2026 timetable shows morning departure from Fort William at 10:10 and afternoon departure at 12:50, but operating dates are still listed as TBC.",

    address:
      "Fort William railway area, Fort William, Highland",

    officialUrl: "https://westcoastrailways.co.uk/jacobite",
    bookable: true,
  },

  {
    id: 17,
    slug: "york-minster",
    title: "York Minster",
    location: "York",
    region: "North Yorkshire",
    country: "England",
    category: "Culture",

    description:
      "Explore York Minster's medieval architecture, stained glass and more than two thousand years of history.",

    longDescription:
      "York Minster is one of Europe's great medieval cathedrals and is still an active place of worship. A sightseeing visit can include the vast nave, stained glass, historic spaces and archaeological layers beneath the building, while additional tours can access areas such as the tower. Because it is a working church, sightseeing access sometimes changes for services and events.",

    activities: ["Architecture", "History", "Sightseeing"],

    image: "/images/experiences/york-minster.png",
    imageCredit: "AI-generated illustration",

    price: 13,
    priceInfo:
      "Official visitor information currently lists ticket prices ranging from £13 to £28 depending on the type of visit.",

    rating: null,
    ratingSource: null,

    openingInfo:
      "Open throughout the year for worship, events and sightseeing, but access varies. Current visitor information shows first admission at 09:30 and last admission at 16:00; always check the visit calendar.",

    address: "York Minster, Deangate, York YO1 7HH",

    officialUrl: "https://yorkminster.org/visit/",
    bookable: true,
  },

  {
    id: 18,
    slug: "windermere-lake-cruise",
    title: "Windermere Lake Cruise",
    location: "Bowness-on-Windermere",
    region: "Cumbria",
    country: "England",
    category: "Nature",

    description:
      "Cruise on Windermere with flexible routes between Bowness, Ambleside, Lakeside and other piers.",

    longDescription:
      "Windermere Lake Cruises operates several sightseeing routes across England's largest natural lake, with departures from major piers including Bowness, Ambleside and Lakeside. Tickets range from short circular cruises to longer hop-on, hop-off options, making the experience easy to adapt to a half-day or full-day visit. Timetables change seasonally, so the exact departure schedule should be checked for the travel date.",

    activities: ["Boat cruise", "Scenery", "Photography"],

    image: "/images/experiences/windermere-cruise.png",
    imageCredit: "AI-generated illustration",

    price: 14.8,
    priceInfo:
      "Current scenic cruise prices start from about £14.80; for example, the Islands circular cruise from Bowness starts from £14.80.",

    rating: null,
    ratingSource: null,

    openingInfo:
      "Seasonal timetable with multiple daily departures. Check the date-specific timetable before travel.",

    address:
      "Bowness Pier, Bowness-on-Windermere, Cumbria",

    officialUrl: "https://www.windermere-lakecruises.co.uk/",
    bookable: true,
  },

  {
    id: 19,
    slug: "portmeirion-village",
    title: "Portmeirion Village",
    location: "Portmeirion",
    region: "Gwynedd",
    country: "Wales",
    category: "Culture",

    description:
      "Explore Portmeirion's colourful architecture, gardens, woodland and estuary views on the North Wales coast.",

    longDescription:
      "Portmeirion was created by architect Clough Williams-Ellis between 1925 and 1976 as an experiment in building within a beautiful landscape without spoiling it. Today the village combines distinctive architecture, gardens, woodland paths, cafés, shops and views over the Dwyryd Estuary. Facilities vary between the main and winter seasons, and some dates are affected by private events or seasonal preparations.",

    activities: ["Architecture", "Gardens", "Walking"],

    image: "/images/experiences/portmeirion.png",
    imageCredit: "AI-generated illustration",

    price: null,
    priceInfo:
      "Day-ticket prices vary; the official site recommends buying online in advance at peak times. Under-5s are free.",

    rating: null,
    ratingSource: null,

    openingInfo:
      "Open for day visitors on most dates, but seasonal facilities vary. Closed to day guests on 25-26 December 2026; check date-specific opening times before travelling.",

    address:
      "Portmeirion, Penrhyndeudraeth, Gwynedd LL48 6ER",

    officialUrl: "https://portmeirion.wales/visit",
    bookable: true,
  },

  {
    id: 20,
    slug: "titanic-belfast",
    title: "Titanic Belfast",
    location: "Belfast",
    region: "County Antrim",
    country: "Northern Ireland",
    category: "Culture",

    description:
      "Discover Titanic's story in Belfast through immersive galleries in the city's historic Titanic Quarter.",

    longDescription:
      "Titanic Belfast tells the story of RMS Titanic in the city where the ship was designed and built. The main Titanic Experience uses galleries, displays and immersive interpretation, and standard admission also includes SS Nomadic. Entry is timed, and advance booking is recommended during busy periods.",

    activities: [
      "Maritime history",
      "Museum",
      "Interactive exhibits",
    ],

    image: "/images/experiences/titanic-belfast.png",
    imageCredit: "AI-generated illustration",

    price: 24.95,
    priceInfo:
      "Adult online Titanic Experience ticket is currently £24.95; walk-up adult price is £26.95. SS Nomadic is included.",

    rating: null,
    ratingSource: null,

    openingInfo:
      "Seasonal hours. In October 2026 Titanic Belfast is generally open 08:50-18:00, with last admission 1 hour 40 minutes before closing.",

    address:
      "1 Olympic Way, Queen's Road, Titanic Quarter, Belfast BT3 9EP",

    officialUrl: "https://www.titanicbelfast.com/",
    bookable: true,
  },
];

export default experiences;