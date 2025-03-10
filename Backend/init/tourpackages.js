const tourPackages = [
  {
    "title": "Exclusive Andhra Heritage Tour",
    "place": "Andhra Pradesh",
    "image": {
      "url": "https://images.pexels.com/photos/238622/pexels-photo-238622.jpeg?cs=srgb&dl=pexels-fmaderebner-238622.jpg&fm=jpg"
    },
    "price": 12999,
    "route": "AP-Tirupati > AP-Vishakhapatnam > AP-Vijayawada",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Andhra Adventure Getaway",
    "place": "Andhra Pradesh",
    "image": {
      "url": "https://img.freepik.com/premium-photo/abandoned-rural-church-evening-russia_132310-760.jpg?ga=GA1.1.769373467.1678357103&semt=ais_hybrid"
    },
    "price": 13999,
    "route": "AP-Amaravati > AP-Vijayawada > AP-Tirupati",
    "type": "Indian tour",
    "country": "India",
    "duration": "3N/4D"
  },
  {
    "title": "Andhra Cultural Extravaganza",
    "place": "Andhra Pradesh",
    "image": {
      "url": "https://img.freepik.com/free-photo/beautiful-view-old-stone-bridge-reflecting-clear-water-river-dawn_181624-50773.jpg?ga=GA1.1.769373467.1678357103&semt=ais_hybrid"
    },
    "price": 14999,
    "route": "AP-Vizag > AP-Guntur > AP-Tirupati",
    "type": "Indian tour",
    "country": "India",
    "duration": "5N/6D"
  },
  {
    "title": "Andhra Royal Journey",
    "place": "Andhra Pradesh",
    "image": {
      "url": "https://img.freepik.com/free-photo/indian-city-buildings-scene_23-2151823020.jpg?ga=GA1.1.769373467.1678357103&semt=ais_hybrid"
    },
    "price": 15999,
    "route": "AP-Vishakhapatnam > AP-Kurnool > AP-Tirupati",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Exclusive Arunachal Adventure",
    "place": "Arunachal Pradesh",
    "image": {
      "url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/85/2c/41/jung-falls.jpg?w=1400&h=1400&s=1"
    },
    "price": 13999,
    "route": "AR-Itanagar > AR-Tawang > AR-Bomdila",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Arunachal Scenic Retreat",
    "place": "Arunachal Pradesh",
    "image": {
      "url": "https://static.toiimg.com/photo/91692789.cms"
    },
    "price": 14999,
    "route": "AR-Tawang > AR-Ziro > AR-Itanagar",
    "type": "Indian tour",
    "country": "India",
    "duration": "3N/4D"
  },
  {
    "title": "Arunachal Nature Expedition",
    "place": "Arunachal Pradesh",
    "image": {
      "url": "https://media.licdn.com/dms/image/v2/D4D12AQG7gHJ1n95xXg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1704173356593?e=2147483647&v=beta&t=qXvst0bV_0umdv_5HBEThUMeP-pzJIAE_5srbnpbsDc"
    },
    "price": 15999,
    "route": "AR-Bomdila > AR-Tawang > AR-Ziro",
    "type": "Indian tour",
    "country": "India",
    "duration": "5N/6D"
  },
  {
    "title": "Arunachal Cultural Journey",
    "place": "Arunachal Pradesh",
    "image": {
      "url": "https://www.zingbus.com/blog/wp-content/uploads/2022/07/arunachal-pradesh.jpg"
    },
    "price": 16999,
    "route": "AR-Itanagar > AR-Bomdila > AR-Tawang",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Assam Wildlife Safari",
    "place": "Assam",
    "image": {
      "url": "https://sandpebblestours.com/wp-content/uploads/2018/11/assam-1.jpg"
    },
    "price": 12999,
    "route": "AS-Guwahati > AS-Kaziranga > AS-Jorhat",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Assam Cultural Expedition",
    "place": "Assam",
    "image": {
      "url": "https://travelsincredibleindia.wordpress.com/wp-content/uploads/2018/05/sikkim.jpg?w=636&h=379"
    },
    "price": 13999,
    "route": "AS-Guwahati > AS-Majuli > AS-Kaziranga",
    "type": "Indian tour",
    "country": "India",
    "duration": "3N/4D"
  },
  {
    "title": "Assam Tea Trails Tour",
    "place": "Assam",
    "image": {
      "url": "https://img.traveltriangle.com/blog/wp-content/uploads/2020/01/cover-PLACES-TO-VISIT-IN-ASSAM.jpg"
    },
    "price": 14999,
    "route": "AS-Kaziranga > AS-Guwahati > AS-Jorhat",
    "type": "Indian tour",
    "country": "India",
    "duration": "5N/6D"
  },
  {
    "title": "Assam Riverine Adventure",
    "place": "Assam",
    "image": {
      "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9KCuHLXcextkifNN-kjWAzRvTuVlJqI-1ZQ&s"
    },
    "price": 15999,
    "route": "AS-Jorhat > AS-Kaziranga > AS-Majuli",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Bihar Spiritual Journey",
    "place": "Bihar",
    "image": {
      "url": "https://static.langimg.com/thumb/85174721/navbharat-times-85174721.jpg?imgsize=181278&width=540&resizemode=3"
    },
    "price": 12999,
    "route": "BR-Patna > BR-Bodh Gaya > BR-Nalanda",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Bihar Heritage Trail",
    "place": "Bihar",
    "image": {
      "url": "https://www.tourmyindia.com/blog//wp-content/uploads/2015/08/sher-shah-suri-tomb-sasaram.jpg"
    },
    "price": 13999,
    "route": "BR-Bodh Gaya > BR-Rajgir > BR-Patna",
    "type": "Indian tour",
    "country": "India",
    "duration": "3N/4D"
  },
  {
    "title": "Bihar Cultural Expedition",
    "place": "Bihar",
    "image": {
      "url": "https://www.akshartours.com/wp-content/uploads/2020/08/Things-to-Do-in-Bihar.jpg"
    },
    "price": 14999,
    "route": "BR-Patna > BR-Rajgir > BR-Bodh Gaya",
    "type": "Indian tour",
    "country": "India",
    "duration": "5N/6D"
  },
  {
    "title": "Bihar Historic Voyage",
    "place": "Bihar",
    "image": {
      "url": "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/01/06/13f515c3c5cc7e4ac169e8bbb0b9e0fb_1000x1000.jpeg"
    },
    "price": 15999,
    "route": "BR-Nalanda > BR-Bodh Gaya > BR-Rajgir",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Chhattisgarh Cultural Expedition",
    "place": "Chhattisgarh",
    "image": {
      "url": "https://indiatravel.com/wp-content/uploads/2022/03/Chhattisgarh-slider-imgggg-1.jpg"
    },
    "price": 12999,
    "route": "CG-Raipur > CG-Jagdalpur > CG-Bastar",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Chhattisgarh Tribal Trail",
    "place": "Chhattisgarh",
    "image": {
      "url": "https://im.hunt.in/cg/Chhatis/About/Tourism/watreed.jpg"
    },
    "price": 13999,
    "route": "CG-Bastar > CG-Dantewada > CG-Raipur",
    "type": "Indian tour",
    "country": "India",
    "duration": "3N/4D"
  },
  {
    "title": "Chhattisgarh Nature Discovery",
    "place": "Chhattisgarh",
    "image": {
      "url": "https://s7ap1.scene7.com/is/image/incredibleindia/1-kutaghat-dam-bilaspur-chhattisgarh-khutaghat-attr-hero?qlt=82&ts=1727011181193"
    },
    "price": 14999,
    "route": "CG-Raipur > CG-Bastar > CG-Jagdalpur",
    "type": "Indian tour",
    "country": "India",
    "duration": "5N/6D"
  },
  {
    "title": "Chhattisgarh Heritage Tour",
    "place": "Chhattisgarh",
    "image": {
      "url": "https://hindi.cdn.zeenews.com/hindi/sites/default/files/2022/07/10/1216097-bhoramdev-mandir-cg.jpg"
    },
    "price": 15999,
    "route": "CG-Jagdalpur > CG-Raipur > CG-Dantewada",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Goa Beach Escape",
    "place": "Goa",
    "image": {
      "url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fc/f0/goa.jpg?w=1200&h=700&s=1"
    },
    "price": 12999,
    "route": "GA-Panjim > GA-Calangute > GA-Margao",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Goa Party and Sun Tour",
    "place": "Goa",
    "image": {
      "url": "https://cdn.guidetour.in/wp-content/uploads/2017/01/goa-1.jpg"
    },
    "price": 13999,
    "route": "GA-Calangute > GA-Panjim > GA-Vasco",
    "type": "Indian tour",
    "country": "India",
    "duration": "3N/4D"
  },
  {
    "title": "Goa Heritage Journey",
    "place": "Goa",
    "image": {
      "url": "https://goa-tourism.org.in/images/places-to-visit/headers/places-to-visit-in-goa-header-goa-tourism.jpg.jpg"
    },
    "price": 14999,
    "route": "GA-Vasco > GA-Calangute > GA-Panjim",
    "type": "Indian tour",
    "country": "India",
    "duration": "5N/6D"
  },
  {
    "title": "Goa Coastal Adventure",
    "place": "Goa",
    "image": {
      "url": "https://www.oyorooms.com/travel-guide/wp-content/uploads/2021/08/BlogImage-16Aug_Goa_Image-3-1.jpg"
    },
    "price": 15999,
    "route": "GA-Margao > GA-Panjim > GA-Calangute",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Gujarat Heritage Expedition",
    "place": "Gujarat",
    "image": {
      "url": "https://www.trawell.in/admin/images/upload/899428835Somnath_Main.jpg"
    },
    "price": 12999,
    "route": "GJ-Ahmedabad > GJ-Gandhinagar > GJ-Surat",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Gujarat Cultural Sojourn",
    "place": "Gujarat",
    "image": {
      "url": "https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20241125090809.jpg"   
    },
    "price": 13999,
    "route": "GJ-Surat > GJ-Kutch > GJ-Ahmedabad",
    "type": "Indian tour",
    "country": "India",
    "duration": "3N/4D"
  },
  {
    "title": "Gujarat Royal Tour",
    "place": "Gujarat",
    "image": {
      "url": "https://assets.traveltriangle.com/blog/wp-content/uploads/2016/09/Rani-ki-Vav-Gujarat.jpg"
    },
    "price": 14999,
    "route": "GJ-Kutch > GJ-Ahmedabad > GJ-Surat",
    "type": "Indian tour",
    "country": "India",
    "duration": "5N/6D"
  },
  {
    "title": "Gujarat Explorer Package",
    "place": "Gujarat",
    "image": {
      "url": "https://www.tourmyindia.com/blog//wp-content/uploads/2020/11/Feature-Akshardham-Temple.jpg"
    },
    "price": 15999,
    "route": "GJ-Gandhinagar > GJ-Ahmedabad > GJ-Kutch",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Haryana Cultural Sojourn",
    "place": "Haryana",
    "image": {
      "url": "https://www.indiatravelblog.com/attachments/destinations/19-1-Tourist-Destinations-in-Haryana.jpg"
    },
    "price": 12999,
    "route": "HR-Kurukshetra > HR-Gurgaon > HR-Faridabad",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Haryana Heritage Tour",
    "place": "Haryana",
    "image": {
      "url": "https://cdnbbsr.s3waas.gov.in/s37b7a53e239400a13bd6be6c91c4f6c4e/uploads/bfi_thumb/2020051445-qnwxknqjzn58mnyk4y7zr34z5x6on790ogl9q7drxq.jpg"
    },
    "price": 13999,
    "route": "HR-Gurgaon > HR-Kurukshetra > HR-Faridabad",
    "type": "Indian tour",
    "country": "India",
    "duration": "3N/4D"
  },
  {
    "title": "Haryana Urban Exploration",
    "place": "Haryana",
    "image": {
      "url": "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2021/06/Surajkund-Crafts-Fair-Haryana.jpg?resize=800%2C600&ssl=1"
    },
    "price": 14999,
    "route": "HR-Kurukshetra > HR-Faridabad > HR-Gurgaon",
    "type": "Indian tour",
    "country": "India",
    "duration": "5N/6D"
  },
  {
    "title": "Haryana Discovery Package",
    "place": "Haryana",
    "image": {
      "url": "https://assets.architecturaldigest.in/photos/600850011b516d492c3ab45e/master/w_1600%2Cc_limit/noor-mahal-karnal-haryana-interior-design_4.jpg"
    },
    "price": 15999,
    "route": "HR-Faridabad > HR-Kurukshetra > HR-Gurgaon",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Himachal Scenic Retreat",
    "place": "Himachal Pradesh",
    "image": {
      "url": "https://assets-news.housing.com/news/wp-content/uploads/2022/07/28105830/Top-10-tourist-places-to-visit-in-Himachal-Pradesh-09.jpg"
    },
    "price": 12999,
    "route": "HP-Shimla > HP-Manali > HP-Dharamshala",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Himachal Adventure Tour",
    "place": "Himachal Pradesh",
    "image": {
      "url": "https://www.tripsavvy.com/thmb/TFMyJPWEgRUMjCjVF3knXi2kaa0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1248778184-a6a7af47fb944d919f379793044b4533.jpg"
    },
    "price": 13999,
    "route": "HP-Manali > HP-Dalhousie > HP-Shimla",
    "type": "Indian tour",
    "country": "India",
    "duration": "3N/4D"
  },
  {
    "title": "Himachal Hill Expedition",
    "place": "Himachal Pradesh",
    "image": {
      "url": "https://drifttravel.com/wp-content/uploads/2023/11/bhimakali-temple-sarahan-himachal-pradesh-2022-03-17-06-25-11-utc-copy-640x411.webp"
    },
    "price": 14999,
    "route": "HP-Dharamshala > HP-Manali > HP-Shimla",
    "type": "Indian tour",
    "country": "India",
    "duration": "5N/6D"
  },
  {
    "title": "Himachal Heritage Journey",
    "place": "Himachal Pradesh",
    "image": {
      "url": "https://travelsincredibleindia.wordpress.com/wp-content/uploads/2018/02/himachal-pradesh-tourism.jpg"
    },
    "price": 15999,
    "route": "HP-Shimla > HP-Dharamshala > HP-Manali",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Jharkhand Explorer Tour",
    "place": "Jharkhand",
    "image": {
      "url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/c3/cc/4c/dassam-falls.jpg?w=1200&h=-1&s=1"
    },
    "price": 12999,
    "route": "JH-Ranchi > JH-Jamshedpur > JH-Deoghar",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Jharkhand Cultural Expedition",
    "place": "Jharkhand",
    "image": {
      "url": "https://www.akshartours.com/wp-content/uploads/2020/07/Best-Place-to-Visit-in-Jharkhand.jpg"
    },
    "price": 13999,
    "route": "JH-Deoghar > JH-Ranchi > JH-Dhanbad",
    "type": "Indian tour",
    "country": "India",
    "duration": "3N/4D"
  },
  {
    "title": "Jharkhand Heritage Trail",
    "place": "Jharkhand",
    "image": {
      "url": "https://www.tourmyindia.com/blog//wp-content/uploads/2015/10/Best-Places-to-Visit-in-Jharkhand.jpg"
    },
    "price": 14999,
    "route": "JH-Jamshedpur > JH-Deoghar > JH-Ranchi",
    "type": "Indian tour",
    "country": "India",
    "duration": "5N/6D"
  },
  {
    "title": "Jharkhand Discovery Package",
    "place": "Jharkhand",
    "image": {
      "url": "https://www.samindiatour.com/blog/wp-content/uploads/2022/08/The-Most-Beautiful-Hill-Stations-in-Jharkhand.jpg"
    },
    "price": 15999,
    "route": "JH-Ranchi > JH-Dhanbad > JH-Jamshedpur",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Karnataka Cultural Trail",
    "place": "Karnataka",
    "image": {
      "url": "https://www.tusktravel.com/blog/wp-content/uploads/2023/08/Places-to-Visit-in-Karnataka-in-September.jpg"
    },
    "price": 12999,
    "route": "KA-Bangalore > KA-Mysore > KA-Coorg",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Karnataka Heritage Explorer",
    "place": "Karnataka",
    "image": {
      "url": "https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/best-places-to-visit-in-karnataka.jpg"
    },
    "price": 13999,
    "route": "KA-Mysore > KA-Hampi > KA-Bangalore",
    "type": "Indian tour",
    "country": "India",
    "duration": "3N/4D"
  },
  {
    "title": "Karnataka Royal Adventure",
    "place": "Karnataka",
    "image": {
      "url": "https://www.asparkholidays.com/uploads/45331_palaces-heaven-on-earth-1.jpg"
    },
    "price": 14999,
    "route": "KA-Coorg > KA-Bangalore > KA-Mysore",
    "type": "Indian tour",
    "country": "India",
    "duration": "5N/6D"
  },
  {
    "title": "Karnataka Explorer Package",
    "place": "Karnataka",
    "image": {
      "url": "https://blog.thomascook.in/wp-content/uploads/2017/09/Untitled-design-20-min.jpg"
    },
    "price": 15999,
    "route": "KA-Hampi > KA-Mysore > KA-Coorg",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Kerala Backwater Bliss",
    "place": "Kerala",
    "image": {
      "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYrRRbKv7V5wxI9HeywAnYR5NA-Gku19ak1Q&s"
    },
    "price": 12999,
    "route": "KL-Kochi > KL-Munnar > KL-Alleppey",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Kerala Spice and Scenic Tour",
    "place": "Kerala",
    "image": {
      "url": "https://storage.googleapis.com/stateless-www-justwravel-com/2024/11/b062cce8-top-10-1024x576.jpg"
    },
    "price": 13999,
    "route": "KL-Munnar > KL-Kochi > KL-Thiruvananthapuram",
    "type": "Indian tour",
    "country": "India",
    "duration": "3N/4D"
  },
  {
    "title": "Kerala Cultural Odyssey",
    "place": "Kerala",
    "image": {
      "url": "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/15/ed4e5844df8201e480059b18e40f5947_1000x1000.jpg"
    },
    "price": 14999,
    "route": "KL-Alleppey > KL-Munnar > KL-Kochi",
    "type": "Indian tour",
    "country": "India",
    "duration": "5N/6D"
  },
  {
    "title": "Kerala Heritage Retreat",
    "place": "Kerala",
    "image": {
      "url": "https://traveltradejournal.com/wp-content/uploads/2022/03/Kerala.jpg"
    },
    "price": 15999,
    "route": "KL-Thiruvananthapuram > KL-Kochi > KL-Alleppey",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Maharashtra Urban & Heritage Tour",
    "place": "Maharashtra",
    "image": {
      "url": "https://www.trawell.in/images/pics/maharashtra_best_main.jpg"
    },
    "price": 12999,
    "route": "MH-Mumbai > MH-Pune > MH-Nashik",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Maharashtra Royal Expedition",
    "place": "Maharashtra",
    "image": {
      "url": "https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/mumbai-maharashtra.jpg"
    },
    "price": 13999,
    "route": "MH-Pune > MH-Aurangabad > MH-Mumbai",
    "type": "Indian tour",
    "country": "India",
    "duration": "3N/4D"
  },
  {
    "title": "Maharashtra Cultural Journey",
    "place": "Maharashtra",
    "image": {
      "url": "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/98000/98046-Elephanta-Caves.jpg"
    },
    "price": 14999,
    "route": "MH-Nashik > MH-Mumbai > MH-Pune",
    "type": "Indian tour",
    "country": "India",
    "duration": "5N/6D"
  },
  {
    "title": "Maharashtra Explorer Package",
    "place": "Maharashtra",
    "image": {
      "url": "https://maharashtratourism.gov.in/wp-content/uploads/2023/11/MAHABALESHWAR-2.jpg"
    },
    "price": 15999,
    "route": "MH-Aurangabad > MH-Nashik > MH-Pune",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "MP Heritage and Wildlife Expedition",
    "place": "Madhya Pradesh",
    "image": {
      "url": "https://www.ghumoindiacommunity.com/wp-content/uploads/2023/07/1572436388_madhya_pradesh_web.jpg"
    },
    "price": 12999,
    "route": "MP-Bhopal > MP-Indore > MP-Gwalior",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "MP Cultural Journey",
    "place": "Madhya Pradesh",
    "image": {
      "url": "https://media.istockphoto.com/id/528284252/photo/kjaruharo-temples-india.jpg?s=612x612&w=0&k=20&c=-iWM83PbINoAS5i_06cVjIDpe_yT0cE3uw0_iPoeWHM="
    },
    "price": 13999,
    "route": "MP-Indore > MP-Khajuraho > MP-Bhopal",
    "type": "Indian tour",
    "country": "India",
    "duration": "3N/4D"
  },
  {
    "title": "MP Historic Tour",
    "place": "Madhya Pradesh",
    "image": {
      "url": "https://img.traveltriangle.com/blog/wp-content/uploads/2020/01/cover-for-Places-To-Visit-In-Madhya-Pradesh-In-May_16-Jan.jpg"
    },
    "price": 14999,
    "route": "MP-Gwalior > MP-Bhopal > MP-Indore",
    "type": "Indian tour",
    "country": "India",
    "duration": "5N/6D"
  },
  {
    "title": "MP Explorer Package",
    "place": "Madhya Pradesh",
    "image": {
      "url": "https://www.clubmahindra.com/blog/media/section_images/desktop36-ae7b82167f82441.jpg"
    },
    "price": 15999,
    "route": "MP-Khajuraho > MP-Gwalior > MP-Bhopal",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Manipur Cultural Discovery",
    "place": "Manipur",
    "image": {
      "url": "https://travelfromindia.com/assets/uploads/news-115.jpg"
    },
    "price": 12999,
    "route": "MN-Imphal > MN-Bishnupur > MN-Moreh",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Manipur Heritage Tour",
    "place": "Manipur",
    "image": {
      "url": "https://manipurtourism.gov.in/wp-content/uploads/2020/08/MM.jpg"
    },
    "price": 13999,
    "route": "MN-Bishnupur > MN-Ukhrul > MN-Imphal",
    "type": "Indian tour",
    "country": "India",
    "duration": "3N/4D"
  },
  {
    "title": "Manipur Scenic Adventure",
    "place": "Manipur",
    "image": {
      "url": "https://www.capertravelindia.com/images/manipur-3.jpg"
    },
    "price": 14999,
    "route": "MN-Moreh > MN-Imphal > MN-Bishnupur",
    "type": "Indian tour",
    "country": "India",
    "duration": "5N/6D"
  },
  {
    "title": "Manipur Explorer Package",
    "place": "Manipur",
    "image": {
      "url": "https://im.hunt.in/cg/man/About/Tourism/CCpur_Waterfall.jpg"
    },
    "price": 15999,
    "route": "MN-Ukhrul > MN-Moreh > MN-Imphal",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Meghalaya Nature Escape",
    "place": "Meghalaya",
    "image": {
      "url": "https://www.meghalayatourism.in/wp-content/uploads/2020/07/Dawki-Shnongpdeng-1.jpg"
    },
    "price": 12999,
    "route": "ML-Shillong > ML-Cherrapunji > ML-Mawlynnong",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Meghalaya Scenic Tour",
    "place": "Meghalaya",
    "image": {
      "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMMEvDJWxisx-ud_YvgkpFAlLVHQWh7Q_i4w&s"
    },
    "price": 13999,
    "route": "ML-Cherrapunji > ML-Mawsynram > ML-Shillong",
    "type": "Indian tour",
    "country": "India",
    "duration": "3N/4D"
  },
  {
    "title": "Meghalaya Cultural Expedition",
    "place": "Meghalaya",
    "image": {
      "url": "https://media2.thrillophilia.com/images/photos/000/128/694/original/1528271874_shutterstock_634408664.jpg?w=753&h=450&dpr=1.5"
    },
    "price": 14999,
    "route": "ML-Shillong > ML-Mawsynram > ML-Cherrapunji",
    "type": "Indian tour",
    "country": "India",
    "duration": "5N/6D"
  },
  {
    "title": "Meghalaya Explorer Package",
    "place": "Meghalaya",
    "image": {
      "url": "https://www.esikkimtourism.in/wp-content/uploads/2018/07/Meghalaya-Shillong.jpg"
    },
    "price": 15999,
    "route": "ML-Mawlynnong > ML-Shillong > ML-Cherrapunji",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Mizoram Hidden Gems Tour",
    "place": "Mizoram",
    "image": {
      "url": "https://www.ibef.org/assets/images/states/Mizoram-2.jpg"
    },
    "price": 12999,
    "route": "MZ-Aizawl > MZ-Lunglei > MZ-Champhai",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Mizoram Scenic Retreat",
    "place": "Mizoram",
    "image": {
      "url": "https://www.holidify.com/images/bgImages/MIZORAM.jpg"
    },
    "price": 13999,
    "route": "MZ-Lunglei > MZ-Saiha > MZ-Aizawl",
    "type": "Indian tour",
    "country": "India",
    "duration": "3N/4D"
  },
  {
    "title": "Mizoram Cultural Journey",
    "place": "Mizoram",
    "image": {
      "url": "https://images.herzindagi.info/image/2023/Apr/mizoram-card.jpg"
    },
    "price": 14999,
    "route": "MZ-Champhai > MZ-Aizawl > MZ-Lunglei",
    "type": "Indian tour",
    "country": "India",
    "duration": "5N/6D"
  },
  {
    "title": "Mizoram Explorer Package",
    "place": "Mizoram",
    "image": {
      "url": "https://easternroutes.com/wp-content/uploads/2019/02/Mizoram_the_Land_of_Blue_Mountain.jpg"
    },
    "price": 15999,
    "route": "MZ-Saiha > MZ-Champhai > MZ-Aizawl",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Nagaland Cultural Immersion",
    "place": "Nagaland",
    "image": {
      "url": "https://images.herzindagi.info/image/2023/Apr/places-to-visit-in-nagaland.jpg"
    },
    "price": 12999,
    "route": "NL-Kohima > NL-Dimapur > NL-Mokokchung",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Nagaland Scenic Journey",
    "place": "Nagaland",
    "image": {
      "url": "https://images.wanderon.in/blogs/new/2024/05/mon-in-nagaland.jpg"
    },
    "price": 13999,
    "route": "NL-Dimapur > NL-Wokha > NL-Kohima",
    "type": "Indian tour",
    "country": "India",
    "duration": "3N/4D"
  },
  {
    "title": "Nagaland Heritage Tour",
    "place": "Nagaland",
    "image": {
      "url": "https://www.purvidiscovery.com/uploads/nagaland-abode-pristine-beauty-north-east-india1.jpg"
    },
    "price": 14999,
    "route": "NL-Kohima > NL-Wokha > NL-Dimapur",
    "type": "Indian tour",
    "country": "India",
    "duration": "5N/6D"
  },
  {
    "title": "Nagaland Explorer Package",
    "place": "Nagaland",
    "image": {
      "url": "https://img-cdn.thepublive.com/fit-in/640x430/filters:format(webp)/pratidin/media/post_attachments/pratidintime/2023-03/6467facc-c93d-4fc8-9b75-f4457070c12a/Copy_of_Pratidin_Template__10_.jpg"
    },
    "price": 15999,
    "route": "NL-Mokokchung > NL-Kohima > NL-Wokha",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Odisha Temple Trail",
    "place": "Odisha",
    "image": {
      "url": "https://ihplb.b-cdn.net/wp-content/uploads/2021/11/puri.jpg"
    },
    "price": 12999,
    "route": "OD-Bhubaneswar > OD-Puri > OD-Konark",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Odisha Cultural Sojourn",
    "place": "Odisha",
    "image": {
      "url": "https://assets-news.housing.com/news/wp-content/uploads/2022/07/24234249/ODISHA-FEATURE-compressed.jpg"
    },
    "price": 13999,
    "route": "OD-Puri > OD-Cuttack > OD-Bhubaneswar",
    "type": "Indian tour",
    "country": "India",
    "duration": "3N/4D"
  },
  {
    "title": "Odisha Heritage Tour",
    "place": "Odisha",
    "image": {
      "url": "https://ihplb.b-cdn.net/wp-content/uploads/2021/11/konark.jpg"
    },
    "price": 14999,
    "route": "OD-Konark > OD-Bhubaneswar > OD-Puri",
    "type": "Indian tour",
    "country": "India",
    "duration": "5N/6D"
  },
  {
    "title": "Odisha Explorer Package",
    "place": "Odisha",
    "image": {
      "url": "https://plutotours.in/places/wp-content/uploads/2024/03/13.-Duduma-Waterfalls-in-Koraput-1.webp"
    },
    "price": 15999,
    "route": "OD-Cuttack > OD-Konark > OD-Puri",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Punjab Cultural Heritage Tour",
    "place": "Punjab",
    "image": {
      "url": "https://media2.thrillophilia.com/images/photos/000/152/188/original/1581765398_amritsar-3083693.jpg?w=753&h=450&dpr=1.5"
    },
    "price": 12999,
    "route": "PB-Amritsar > PB-Chandigarh > PB-Ludhiana",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Punjab Spiritual Sojourn",
    "place": "Punjab",
    "image": {
      "url": "https://onlinetravelbucket.wordpress.com/wp-content/uploads/2018/04/mohali.jpg?w=663"
    },
    "price": 13999,
    "route": "PB-Chandigarh > PB-Amritsar > PB-Jalandhar",
    "type": "Indian tour",
    "country": "India",
    "duration": "3N/4D"
  },
  {
    "title": "Punjab Heritage Expedition",
    "place": "Punjab",
    "image": {
      "url": "https://www.mytourplans.com/storage/blogs/120623060445-bhatinda-compressed.jpg"
    },
    "price": 14999,
    "route": "PB-Amritsar > PB-Jalandhar > PB-Ludhiana",
    "type": "Indian tour",
    "country": "India",
    "duration": "5N/6D"
  },
  {
    "title": "Punjab Explorer Package",
    "place": "Punjab",
    "image": {
      "url": "https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/chandigarh.jpg"
    },
    "price": 15999,
    "route": "PB-Ludhiana > PB-Amritsar > PB-Chandigarh",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Rajasthan Royal Heritage Tour",
    "place": "Rajasthan",
    "image": {
      "url": "https://media.istockphoto.com/id/511119416/photo/indian-landmark-gadi-sagar-in-rajasthan.jpg?s=612x612&w=0&k=20&c=dO7TbXh3sd6_QmgcF_nYi6ynyIAvPI5STavwzCDyWTI="
    },
    "price": 12999,
    "route": "RJ-Jaipur > RJ-Udaipur > RJ-Jodhpur",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Rajasthan Desert Safari",
    "place": "Rajasthan",
    "image": {
      "url": "https://udaipurkiran.com/wp-content/uploads/2023/04/Rajasthan-Tourism.jpg"
    },
    "price": 13999,
    "route": "RJ-Jodhpur > RJ-Jaisalmer > RJ-Jaipur",
    "type": "Indian tour",
    "country": "India",
    "duration": "3N/4D"
  },
  {
    "title": "Rajasthan Cultural Extravaganza",
    "place": "Rajasthan",
    "image": {
      "url": "https://www.tourmyindia.com/states/rajasthan/image/best-places-to-visit-rajasthan.webp"
    },
    "price": 14999,
    "route": "RJ-Udaipur > RJ-Jodhpur > RJ-Jaipur",
    "type": "Indian tour",
    "country": "India",
    "duration": "5N/6D"
  },
  {
    "title": "Rajasthan Explorer Package",
    "place": "Rajasthan",
    "image": {
      "url": "https://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/city/menu/KR_CityPalace01.jpg"
    },
    "price": 15999,
    "route": "RJ-Jaipur > RJ-Jaisalmer > RJ-Udaipur",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Sikkim Himalayan Retreat",
    "place": "Sikkim",
    "image": {
      "url": "https://media.easemytrip.com/media/Blog/India/637350613416802581/637350613416802581qElw1X.png"
    },
    "price": 12999,
    "route": "SK-Gangtok > SK-Pelling > SK-Namchi",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Sikkim Scenic Sojourn",
    "place": "Sikkim",
    "image": {
      "url": "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/20/bf6039b029d0658a6b199d36785af271_1000x1000.jpeg"
    },
    "price": 13999,
    "route": "SK-Pelling > SK-Ravangla > SK-Gangtok",
    "type": "Indian tour",
    "country": "India",
    "duration": "3N/4D"
  },
  {
    "title": "Sikkim Cultural Tour",
    "place": "Sikkim",
    "image": {
      "url": "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2024/02/01155129/Pelling.jpg"
    },
    "price": 14999,
    "route": "SK-Gangtok > SK-Ravangla > SK-Pelling",
    "type": "Indian tour",
    "country": "India",
    "duration": "5N/6D"
  },
  {
    "title": "Sikkim Explorer Package",
    "place": "Sikkim",
    "image": {
      "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4qUBlqXC-j9qnJSVFFt24fdA9SycwpIbwtg&s"
    },
    "price": 15999,
    "route": "SK-Namchi > SK-Gangtok > SK-Ravangla",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Tamil Nadu Cultural Odyssey",
    "place": "Tamil Nadu",
    "image": {
      "url": "https://www.tamilnadutourism.tn.gov.in/virtualtour-pkg/img/thanjavur_virtualtour.jpg"
    },
    "price": 12999,
    "route": "TN-Chennai > TN-Madurai > TN-Ooty",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Tamil Nadu Heritage Tour",
    "place": "Tamil Nadu",
    "image": {
      "url": "https://www.tamilnadutourism.tn.gov.in/virtualtour-pkg/img/mamallapuram_virtualtour.jpg"
    },
    "price": 13999,
    "route": "TN-Madurai > TN-Kanyakumari > TN-Chennai",
    "type": "Indian tour",
    "country": "India",
    "duration": "3N/4D"
  },
  {
    "title": "Tamil Nadu Scenic Escape",
    "place": "Tamil Nadu",
    "image": {
      "url": "https://donnawanderer.com/wp-content/uploads/2022/03/Kanyakumari.jpg"
    },
    "price": 14999,
    "route": "TN-Ooty > TN-Madurai > TN-Chennai",
    "type": "Indian tour",
    "country": "India",
    "duration": "5N/6D"
  },
  {
    "title": "Tamil Nadu Explorer Package",
    "place": "Tamil Nadu",
    "image": {
      "url": "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2022/05/Coimbatore-Tamil-Nadu.jpg?resize=1200%2C968&ssl=1"
    },
    "price": 15999,
    "route": "TN-Kanyakumari > TN-Chennai > TN-Madurai",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Tripura Heritage Expedition",
    "place": "Tripura",
    "image": {
      "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_MZKNLFcXHEk_AWh5lE0XRbOo1W05aWaOUw&s"
    },
    "price": 12999,
    "route": "TR-Agartala > TR-Udaipur > TR-Dharmanagar",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Tripura Cultural Journey",
    "place": "Tripura",
    "image": {
      "url": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Ujjayanta_palace_Tripura_State_Museum_Agartala_India.jpg"
    },
    "price": 13999,
    "route": "TR-Udaipur > TR-Kailasahar > TR-Agartala",
    "type": "Indian tour",
    "country": "India",
    "duration": "3N/4D"
  },
  {
    "title": "Tripura Explorer Package",
    "place": "Tripura",
    "image": {
      "url": "https://etimg.etb2bimg.com/thumb/msid-99783071,imgsize-1628992,width-1200,height=765,overlay-ettravel/destination/states/tripura-to-invest-inr-1000-crore-to-boost-tourism-infrastructure.jpg"
    },
    "price": 14999,
    "route": "TR-Dharmanagar > TR-Agartala > TR-Udaipur",
    "type": "Indian tour",
    "country": "India",
    "duration": "5N/6D"
  },
  {
    "title": "Tripura Adventure Tour",
    "place": "Tripura",
    "image": {
      "url": "https://www.tusktravel.com/blog/wp-content/uploads/2023/06/unique-things-to-do-in-tripura.jpg"
    },
    "price": 15999,
    "route": "TR-Kailasahar > TR-Dharmanagar > TR-Agartala",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Telangana Royal Tour",
    "place": "Telangana",
    "image": {
      "url": "https://images.nativeplanet.com/img/2015/01/08-1420715094-bidar1.jpg"
    },
    "price": 12999,
    "route": "TS-Hyderabad > TS-Warangal > TS-Nizamabad",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Telangana Cultural Sojourn",
    "place": "Telangana",
    "image": {
      "url": "https://static-blog.treebo.com/wp-content/uploads/2022/10/Ramappa-Temple-1024x675.jpg"
    },
    "price": 13999,
    "route": "TS-Warangal > TS-Karimnagar > TS-Hyderabad",
    "type": "Indian tour",
    "country": "India",
    "duration": "3N/4D"
  },
  {
    "title": "Telangana Heritage Expedition",
    "place": "Telangana",
    "image": {
      "url": "https://www.treebo.com/blog/wp-content/uploads/2022/10/Blog-Header-2.jpg"
    },
    "price": 14999,
    "route": "TS-Nizamabad > TS-Hyderabad > TS-Warangal",
    "type": "Indian tour",
    "country": "India",
    "duration": "5N/6D"
  },
  {
    "title": "Telangana Explorer Package",
    "place": "Telangana",
    "image": {
      "url": "https://assets-news.housing.com/news/wp-content/uploads/2022/08/18075254/telangana-top-destinations-places-to-visit-FEATURE-compressed.jpg"
    },
    "price": 15999,
    "route": "TS-Karimnagar > TS-Hyderabad > TS-Warangal",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "UP Historical & Cultural Tour",
    "place": "Uttar Pradesh",
    "image": {
      "url": "https://www.tourmyindia.com/socialimg/uttarpradesh-tourism.jpg"
    },
    "price": 12999,
    "route": "UP-Agra > UP-Varanasi > UP-Lucknow",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "UP Spiritual Journey",
    "place": "Uttar Pradesh",
    "image": {
      "url": "https://static.toiimg.com/photo/62251292.cms"
    },
    "price": 13999,
    "route": "UP-Varanasi > UP-Prayagraj > UP-Agra",
    "type": "Indian tour",
    "country": "India",
    "duration": "3N/4D"
  },
  {
    "title": "UP Heritage Expedition",
    "place": "Uttar Pradesh",
    "image": {
      "url": "https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/tourist-places-uttar-pradesh.jpg"
    },
    "price": 14999,
    "route": "UP-Lucknow > UP-Agra > UP-Varanasi",
    "type": "Indian tour",
    "country": "India",
    "duration": "5N/6D"
  },
  {
    "title": "UP Explorer Package",
    "place": "Uttar Pradesh",
    "image": {
      "url": "https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/vrindavan-up.jpg"
    },
    "price": 15999,
    "route": "UP-Prayagraj > UP-Lucknow > UP-Agra",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Uttarakhand Hill Retreat",
    "place": "Uttarakhand",
    "image": {
      "url": "https://www.corbett-national-park.com/socialimg/uttarakhand-tourism.jpg"
    },
    "price": 12999,
    "route": "UK-Dehradun > UK-Mussoorie > UK-Rishikesh",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Uttarakhand Adventure Tour",
    "place": "Uttarakhand",
    "image": {
      "url": "https://travelogyindia.b-cdn.net/storage/app/upload/auli.jpg"
    },
    "price": 13999,
    "route": "UK-Mussoorie > UK-Nainital > UK-Dehradun",
    "type": "Indian tour",
    "country": "India",
    "duration": "3N/4D"
  },
  {
    "title": "Uttarakhand Spiritual Journey",
    "place": "Uttarakhand",
    "image": {
      "url": "https://www.asparkholidays.com/uploads/80594_Uttarakhand%20Tour.jpg"
    },
    "price": 14999,
    "route": "UK-Rishikesh > UK-Dehradun > UK-Mussoorie",
    "type": "Indian tour",
    "country": "India",
    "duration": "5N/6D"
  },
  {
    "title": "Uttarakhand Explorer Package",
    "place": "Uttarakhand",
    "image": {
      "url": "https://static.toiimg.com/photo/63317260.cms"
    },
    "price": 15999,
    "route": "UK-Nainital > UK-Rishikesh > UK-Dehradun",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "West Bengal Cultural Sojourn",
    "place": "West Bengal",
    "image": {
      "url": "https://www.aryavrittravels.com/wp-content/uploads/2024/02/Places-to-Visit-in-West-Bengal.jpg"
    },
    "price": 12999,
    "route": "WB-Kolkata > WB-Darjeeling > WB-Sundarbans",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "West Bengal Heritage Tour",
    "place": "West Bengal",
    "image": {
      "url": "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2024/01/Places-to-Visit-West-Bengal-in-March.jpg?fit=1200%2C800&ssl=1"
    },
    "price": 13999,
    "route": "WB-Darjeeling > WB-Shantiniketan > WB-Kolkata",
    "type": "Indian tour",
    "country": "India",
    "duration": "3N/4D"
  },
  {
    "title": "West Bengal Explorer Package",
    "place": "West Bengal",
    "image": {
      "url": "https://www.akshartours.com/wp-content/uploads/2020/06/Best-Time-to-Visit-West-Bengal-02.jpg"
    },
    "price": 14999,
    "route": "WB-Sundarbans > WB-Kolkata > WB-Darjeeling",
    "type": "Indian tour",
    "country": "India",
    "duration": "5N/6D"
  },
  {
    "title": "West Bengal Cultural Expedition",
    "place": "West Bengal",
    "image": {
      "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUmxxA-Ap8ZLlfLtWck6UXpINfePNtDAVSag&s"
    },
    "price": 15999,
    "route": "WB-Shantiniketan > WB-Darjeeling > WB-Kolkata",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Andaman Island Escape",
    "place": "Andaman & Nicobar",
    "image": {
      "url": "https://www.tourmyindia.com/blog/wp-content/uploads/2021/09/Best-Places-to-Visit-in-Andaman.jpg"
    },
    "price": 12999,
    "route": "AN-Port Blair > AN-Havelock Island > AN-Neil Island",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Andaman Coastal Adventure",
    "place": "Andaman & Nicobar",
    "image": {
      "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR067qfQL8TY-i2pOsXbDIZIQwVhfhR1rci8w&s"
    },
    "price": 13999,
    "route": "AN-Havelock Island > AN-Ross Island > AN-Port Blair",
    "type": "Indian tour",
    "country": "India",
    "duration": "3N/4D"
  },
  {
    "title": "Andaman Explorer Package",
    "place": "Andaman & Nicobar",
    "image": {
      "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5HAxAx8GwDEoouc2sDlUqQpvaJPz61e3kDA&s"
    },
    "price": 14999,
    "route": "AN-Neil Island > AN-Port Blair > AN-Havelock Island",
    "type": "Indian tour",
    "country": "India",
    "duration": "5N/6D"
  },
  {
    "title": "Andaman Scenic Retreat",
    "place": "Andaman & Nicobar",
    "image": {
      "url": "https://www.indiantempletour.com/wp-content/uploads/2022/08/Andaman-and-Nicobar-Islands-Package-1.jpg"
    },
    "price": 15999,
    "route": "AN-Ross Island > AN-Neil Island > AN-Havelock Island",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Chandigarh Urban Retreat",
    "place": "Chandigarh",
    "image": {
      "url": "https://www.holidify.com/images/cmsuploads/compressed/attr_1391_20210713122024.jpg"
    },
    "price": 12999,
    "route": "CH-Chandigarh > CH-Sukhna Lake > CH-Rock Garden",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Chandigarh Cultural Tour",
    "place": "Chandigarh",
    "image": {
      "url": "https://media.holidify.com/images/cmsuploads/compressed/hgknvathof3c1_20241129151412.jpg"
    },
    "price": 13999,
    "route": "CH-Rock Garden > CH-Chandigarh > CH-Zakir Hussain Rose Garden",
    "type": "Indian tour",
    "country": "India",
    "duration": "3N/4D"
  },
  {
    "title": "Chandigarh Explorer Package",
    "place": "Chandigarh",
    "image": {
      "url": "https://www.holidaylandmark.com/blog/wp-content/uploads/2024/08/Chandigarh.jpg"
    },
    "price": 14999,
    "route": "CH-Chandigarh > CH-Zakir Hussain Rose Garden > CH-Rock Garden",
    "type": "Indian tour",
    "country": "India",
    "duration": "5N/6D"
  },
  {
    "title": "Chandigarh Discovery Tour",
    "place": "Chandigarh",
    "image": {
      "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmjOVwOTyy0-qp24okeU4_ICIs1I8U8qhu3w&s"
    },
    "price": 15999,
    "route": "CH-Sukhna Lake > CH-Chandigarh > CH-Rock Garden",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Daman & Diu Beach Getaway",
    "place": "Daman and Diu",
    "image": {
      "url": "https://s3.india.com/wp-content/uploads/2024/06/Feature-Image-_-Daman-and-diu.jpg?impolicy=Medium_Widthonly&w=350&h=263"
    },
    "price": 12999,
    "route": "DD-Daman > DD-Diu > DD-Nagoa Beach",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Daman & Diu Coastal Retreat",
    "place": "Daman and Diu",
    "image": {
      "url": "https://tripventure.in/wp-content/uploads/2024/08/Travel-to-Daman-and-Diu-A-Comprehensive-Guide.jpg "
    },
    "price": 13999,
    "route": "DD-Diu > DD-Jampore Beach > DD-Daman",
    "type": "Indian tour",
    "country": "India",
    "duration": "3N/4D"
  },
  {
    "title": "Daman & Diu Explorer Package",
    "place": "Daman and Diu",
    "image": {
      "url": "https://www.tourmyindia.com/socialimg/daman-diu-tourism.jpg"
    },
    "price": 14999,
    "route": "DD-Nagoa Beach > DD-Daman > DD-Diu",
    "type": "Indian tour",
    "country": "India",
    "duration": "5N/6D"
  },
  {
    "title": "Daman & Diu Discovery Tour",
    "place": "Daman and Diu",
    "image": {
      "url": "https://static.toiimg.com/thumb/msid-96107709,width-1070,height-580,resizemode-75/96107709,pt-32,y_pad-40/96107709.jpg"
    },
    "price": 15999,
    "route": "DD-Jampore Beach > DD-Nagoa Beach > DD-Daman",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Delhi Heritage and Urban Tour",
    "place": "Delhi",
    "image": {
      "url": "https://www.planetware.com/photos-large/IND/india-delhi-red-fort.jpg"
    },
    "price": 12999,
    "route": "DL-New Delhi > DL-Red Fort > DL-Qutub Minar",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Delhi Cultural Exploration",
    "place": "Delhi",
    "image": {
      "url": "https://www.holidify.com/images/bgImages/DELHI.jpg"
    },
    "price": 13999,
    "route": "DL-Qutub Minar > DL-India Gate > DL-New Delhi",
    "type": "Indian tour",
    "country": "India",
    "duration": "3N/4D"
  },
  {
    "title": "Delhi Explorer Package",
    "place": "Delhi",
    "image": {
      "url": "https://tripxl.com/blog/wp-content/uploads/2024/09/Places-To-Visit-In-Delhi-Cover-Photo-840x425.jpg"
    },
    "price": 14999,
    "route": "DL-Red Fort > DL-New Delhi > DL-Qutub Minar",
    "type": "Indian tour",
    "country": "India",
    "duration": "5N/6D"
  },
  {
    "title": "Delhi Discovery Tour",
    "place": "Delhi",
    "image": {
      "url": "https://www.hotelkabli.com/img/tour/louts.jpg"
    },
    "price": 15999,
    "route": "DL-India Gate > DL-Red Fort > DL-New Delhi",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Dadra and Nagar Haveli Scenic Tour",
    "place": "Dadra and Nagar Haveli",
    "image": {
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/dn1.png"
    },
    "price": 12999,
    "route": "DN-Silvassa > DN-Dadra > DN-Nagar Haveli",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Dadra and Nagar Haveli Heritage Tour",
    "place": "Dadra and Nagar Haveli",
    "image": {
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/dn2.png"
    },
    "price": 13999,
    "route": "DN-Dadra > DN-Silvassa > DN-Nagar Haveli",
    "type": "Indian tour",
    "country": "India",
    "duration": "3N/4D"
  },
  {
    "title": "Dadra and Nagar Haveli Explorer Package",
    "place": "Dadra and Nagar Haveli",
    "image": {
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/dn3.png"
    },
    "price": 14999,
    "route": "DN-Silvassa > DN-Nagar Haveli > DN-Dadra",
    "type": "Indian tour",
    "country": "India",
    "duration": "5N/6D"
  },
  {
    "title": "Dadra and Nagar Haveli Discovery Tour",
    "place": "Dadra and Nagar Haveli",
    "image": {
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/dn4.png"
    },
    "price": 15999,
    "route": "DN-Dadra > DN-Nagar Haveli > DN-Silvassa",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Exclusive Kashmir Retreat Package",
    "place": "Kashmir",
    "image": {
      "url": "https://www.bontravelindia.com/wp-content/uploads/2021/12/Best-Places-to-Visit-in-Kashmir-Dal-Lake-scaled.jpg"
    },
    "price": 12999,
    "route": "KS-Srinagar > KS-Gulmarg > KS-Pahalgam",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Kashmir Valley Explorer",
    "place": "Kashmir",
    "image": {
      "url": "https://www.holidify.com/images/cmsuploads/compressed/attr_986_20200729162341.jpg"
    },
    "price": 13999,
    "route": "KS-Srinagar > KS-Pahalgam > KS-Gulmarg",
    "type": "Indian tour",
    "country": "India",
    "duration": "3N/4D"
  },
  {
    "title": "Kashmir Adventure Tour",
    "place": "Kashmir",
    "image": {
      "url": "https://im.hunt.in/cg/jk/About/Tourism/jamm.jpg"
    },
    "price": 14999,
    "route": "KS-Gulmarg > KS-Srinagar > KS-Pahalgam",
    "type": "Indian tour",
    "country": "India",
    "duration": "5N/6D"
  },
  {
    "title": "Kashmir Explorer Package",
    "place": "Kashmir",
    "image": {
      "url": "https://www.akshartours.com/wp-content/uploads/2020/09/Things-to-Do-in-Jammu-and-Kashmir.jpg"
    },
    "price": 15999,
    "route": "KS-Pahalgam > KS-Gulmarg > KS-Srinagar",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Lakshadweep Island Hopping Tour",
    "place": "Lakshadweep",
    "image": {
      "url": "https://miro.medium.com/v2/resize:fit:1200/0*wWfIKxAcCGjtKCgE.jpg"
    },
    "price": 12999,
    "route": "LD-Kavaratti > LD-Agatti > LD-Minicoy",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Lakshadweep Beach Escape",
    "place": "Lakshadweep",
    "image": {
      "url": "https://www.thestatesman.com/wp-content/uploads/2024/01/lakshadweep-tourism.jpg"
    },
    "price": 13999,
    "route": "LD-Agatti > LD-Andrott > LD-Kavaratti",
    "type": "Indian tour",
    "country": "India",
    "duration": "3N/4D"
  },
  {
    "title": "Lakshadweep Explorer Package",
    "place": "Lakshadweep",
    "image": {
      "url": "https://blog.explurger.com/wp-content/uploads/2024/01/Bangaram-Island-1-1.jpg"
    },
    "price": 14999,
    "route": "LD-Minicoy > LD-Kavaratti > LD-Agatti",
    "type": "Indian tour",
    "country": "India",
    "duration": "5N/6D"
  },
  {
    "title": "Lakshadweep Cultural Retreat",
    "place": "Lakshadweep",
    "image": {
      "url": "https://res.cloudinary.com/dyiffrkzh/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_center,h_400,q_auto,w_700/v1688718561/banbanjara/qxosucugqhanvnky4dss.jpg"
    },
    "price": 15999,
    "route": "LD-Andrott > LD-Minicoy > LD-Kavaratti",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Puducherry Cultural & Beach Tour",
    "place": "Puducherry",
    "image": {
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/pd1.png"
    },
    "price": 12999,
    "route": "PD-Puducherry > PD-Auroville > PD-Paradise Beach",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },
  {
    "title": "Puducherry Heritage Tour",
    "place": "Puducherry",
    "image": {
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/pd2.png"
    },
    "price": 13999,
    "route": "PD-Auroville > PD-Chunnambar Boat House > PD-Puducherry",
    "type": "Indian tour",
    "country": "India",
    "duration": "3N/4D"
  },
  {
    "title": "Puducherry Explorer Package",
    "place": "Puducherry",
    "image": {
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/pd3.png"
    },
    "price": 14999,
    "route": "PD-Paradise Beach > PD-Puducherry > PD-Auroville",
    "type": "Indian tour",
    "country": "India",
    "duration": "5N/6D"
  },
  {
    "title": "Puducherry Discovery Tour",
    "place": "Puducherry",
    "image": {
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/pd4.png"
    },
    "price": 15999,
    "route": "PD-Chunnambar Boat House > PD-Auroville > PD-Puducherry",
    "type": "Indian tour",
    "country": "India",
    "duration": "4N/5D"
  },




    {
      "title": "Delhi Historical Study Tour",
      "place": "Delhi",
      "image": {
        "url": "https://confusedparent.in/wp-content/uploads/2018/10/National-Museum-Delhi.jpg"
      },
      "price": 12999,
      "route": "Delhi > Agra > Jaipur",
      "type": "Educational tour",
      "country": "India",
      "duration": "3N/4D"
    },
    {
      "title": "Mumbai Science & Technology Exploration",
      "place": "Mumbai",
      "image": {
        "url": "https://confusedparent.in/wp-content/uploads/2019/04/Nehru-Planetarium.jpg"
      },
      "price": 13999,
      "route": "Mumbai > Pune > Lonavala",
      "type": "Educational tour",
      "country": "India",
      "duration": "4N/5D"
    },
    {
      "title": "Bangalore IT & Space Research Tour",
      "place": "Bangalore",
      "image": {
        "url": "https://assets-news.housing.com/news/wp-content/uploads/2022/08/25004235/names-of-places-in-Bangalore-FEATURE-compressed.jpg"
      },
      "price": 14999,
      "route": "Bangalore > Mysore > Coorg",
      "type": "Educational tour",
      "country": "India",
      "duration": "5N/6D"
    },
    {
      "title": "Chennai Cultural & Literary Expedition",
      "place": "Chennai",
      "image": {
        "url": "https://media-cdn.tripadvisor.com/media/photo-s/0e/f0/3b/16/the-welcome-effect.jpg"
      },
      "price": 11999,
      "route": "Chennai > Mahabalipuram > Pondicherry",
      "type": "Educational tour",
      "country": "India",
      "duration": "3N/4D"
    },
    {
      "title": "Hyderabad Science & Cultural Tour",
      "place": "Hyderabad",
      "image": {
        "url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/48/ec/54/hasrat-mohani-district.jpg?w=500&h=500&s=1"
      },
      "price": 12999,
      "route": "Hyderabad > Warangal > Nizamabad",
      "type": "Educational tour",
      "country": "India",
      "duration": "4N/5D"
    },
    {
      "title": "Kolkata Heritage & Literature Tour",
      "place": "Kolkata",
      "image": {
        "url": "https://media-cdn.tripadvisor.com/media/photo-s/0d/c1/3a/52/science-city.jpg"
      },
      "price": 11999,
      "route": "Kolkata > Shantiniketan > Howrah",
      "type": "Educational tour",
      "country": "India",
      "duration": "3N/4D"
    },
    {
      "title": "Pune Educational & Historical Tour",
      "place": "Pune",
      "image": {
        "url": "https://www.edutour.org.in/wp-content/uploads/2016/09/Pune-Tour.jpg"
      },
      "price": 13999,
      "route": "Pune > Nashik > Ahmednagar",
      "type": "Educational tour",
      "country": "India",
      "duration": "4N/5D"
    },
    {
      "title": "Ahmedabad Science & Heritage Study Tour",
      "place": "Ahmedabad",
      "image": {
        "url": "https://s7ap1.scene7.com/is/image/incredibleindia/science-city-ahmedabad-gujarat-hero-hs?qlt=82&ts=1726735158700"
      },
      "price": 12999,
      "route": "Ahmedabad > Gandhinagar > Vadodara",
      "type": "Educational tour",
      "country": "India",
      "duration": "3N/4D"
    },
    {
      "title": "Jaipur History & Architecture Tour",
      "place": "Jaipur",
      "image": {
        "url": "https://confusedparent.in/wp-content/uploads/2019/05/Jantar-Mantar-Observatory-1024x683.jpg"
      },
      "price": 11999,
      "route": "Jaipur > Ajmer > Pushkar",
      "type": "Educational tour",
      "country": "India",
      "duration": "3N/4D"
    },
    {
      "title": "Lucknow Cultural & History Exploration",
      "place": "Lucknow",
      "image": {
        "url": "https://lucknowpulse.com/wp-content/uploads/2023/05/ig-planetarium-1-1.jpg"
      },
      "price": 12999,
      "route": "Lucknow > Varanasi > Allahabad",
      "type": "Educational tour",
      "country": "India",
      "duration": "4N/5D"
    },
    {
      "title": "Mysore Royal History & Cultural Tour",
      "place": "Mysore",
      "image": {
        "url": "https://cdn.britannica.com/27/242227-050-48358A10/Mysore-Palace-Mysuru-Karnataka-India.jpg"
      },
      "price": 12999,
      "route": "Mysore > Srirangapatna > Coorg",
      "type": "Educational tour",
      "country": "India",
      "duration": "3N/4D"
    },
    {
      "title": "Bhubaneswar Archaeological & Heritage Tour",
      "place": "Bhubaneswar",
      "image": {
        "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUWLPg1vHW2AfKowaeA-c4h1QS4t77zELOGQ&s"
      },
      "price": 13999,
      "route": "Bhubaneswar > Puri > Konark",
      "type": "Educational tour",
      "country": "India",
      "duration": "4N/5D"
    },
    {
      "title": "Patna Historical & Museum Tour",
      "place": "Patna",
      "image": {
        "url": "https://res.cloudinary.com/local-tourism/images/c_scale,w_648,h_339,dpr_2/f_webp,q_auto/v1684314821/Post/The%20Best%20Places%20to%20Visit%20in%20Patna:%20A%20Traveler's%20Guide/Golghar_jsgzmf/Golghar_jsgzmf.webp?_i=AA"
      },
      "price": 12999,
      "route": "Patna > Bodh Gaya > Nalanda",
      "type": "Educational tour",
      "country": "India",
      "duration": "3N/4D"
    },
    {
      "title": "Shimla Environmental & Ecotourism Study",
      "place": "Shimla",
      "image": {
        "url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/0f/81/51/advance-study-shimla.jpg?w=500&h=500&s=1"
      },
      "price": 13999,
      "route": "Shimla > Kufri > Manali",
      "type": "Educational tour",
      "country": "India",
      "duration": "4N/5D"
    },
    {
      "title": "Guwahati Natural & Cultural Studies Tour",
      "place": "Guwahati",
      "image": {
        "url": "https://nexplore.org/blog/wp-content/uploads/2023/04/Assam-State-Museum-e1681654893168-1024x734.jpg"
      },
      "price": 14999,
      "route": "Guwahati > Kaziranga > Shillong",
      "type": "Educational tour",
      "country": "India",
      "duration": "5N/6D"
    },


  
    {
      "title": "Varanasi Kashi Vishwanath Darshan",
      "place": "Varanasi",
      "image": {
        "url": "https://img.staticmb.com/mbcontent/images/crop/uploads/2024/4/places-to-visit-in-varanasi_0_1200.jpg"
      },
      "price": 14999,
      "route": "Varanasi > Sarnath > Gaya",
      "type": "Devotional tour",
      "country": "India",
      "duration": "3N/4D"
    },
    {
      "title": "Haridwar & Rishikesh Ganga Aarti Tour",
      "place": "Haridwar",
      "image": {
        "url": "https://rishikeshdaytour.com/blog/wp-content/uploads/2020/12/Haridwar-A-Historical-and-Mythological-City-1.jpg"
      },
      "price": 13999,
      "route": "Haridwar > Rishikesh > Devprayag",
      "type": "Devotional tour",
      "country": "India",
      "duration": "4N/5D"
    },
    {
      "title": "Tirupati Balaji Pilgrimage",
      "place": "Tirupati",
      "image": {
        "url": "https://tirupatibalajitravels.co.in/wp-content/uploads/2024/01/balaji-temple-1.webp"
      },
      "price": 15999,
      "route": "Tirupati > Srikalahasti > Kanipakam",
      "type": "Devotional tour",
      "country": "India",
      "duration": "3N/4D"
    },
    {
      "title": "Amritsar Golden Temple & Sikh Heritage",
      "place": "Amritsar",
      "image": {
        "url": "https://blogs.tripzygo.in/wp-content/uploads/2025/01/places-to-visit-in-amritsar.jpg"
      },
      "price": 12999,
      "route": "Amritsar > Anandpur Sahib > Wagah Border",
      "type": "Devotional tour",
      "country": "India",
      "duration": "3N/4D"
    },
    {
      "title": "Dwarka & Somnath Jyotirlinga Yatra",
      "place": "Dwarka",
      "image": {
        "url": "https://ihplb.b-cdn.net/wp-content/uploads/2020/11/Swami-Narayan-Temple-640x430.jpg"
      },
      "price": 16999,
      "route": "Dwarka > Somnath > Girnar",
      "type": "Devotional tour",
      "country": "India",
      "duration": "4N/5D"
    },
    {
      "title": "Badrinath & Kedarnath Char Dham Yatra",
      "place": "Uttarakhand",
      "image": {
        "url": "https://static2.tripoto.com/media/filter/tst/img/1033536/TripDocument/1574352537_nikon_105_01.jpeg"
      },
      "price": 24999,
      "route": "Haridwar > Kedarnath > Badrinath",
      "type": "Devotional tour",
      "country": "India",
      "duration": "7N/8D"
    },
    {
      "title": "Shirdi Sai Baba Darshan",
      "place": "Shirdi",
      "image": {
        "url": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhmgbfy2KiDoEOKXQ2XTiAMw0l3nc0JisOT3uPMVi1H5DhkcAQZzP-33J6oWhQKjaQCfCDl6pfV7dMgZkLMic8GAyYPWNQW1wzwt_CAWM2-VaUxt252I-TFiCO39j1yEzNggHqO6fSj-rtP_4JSJleKpIYyJWT2G30_8oGPuw07cpAZZ6v87Q4qRWixyTsk/s550/SAi.png"
      },
      "price": 12999,
      "route": "Shirdi > Nashik > Trimbakeshwar",
      "type": "Devotional tour",
      "country": "India",
      "duration": "3N/4D"
    },
    {
      "title": "Puri Jagannath Temple Pilgrimage",
      "place": "Puri",
      "image": {
        "url": "https://i.pinimg.com/736x/bc/2e/31/bc2e3178e1b4cb6d9a825824fbee9507.jpg"
      },
      "price": 13999,
      "route": "Puri > Konark > Bhubaneswar",
      "type": "Devotional tour",
      "country": "India",
      "duration": "4N/5D"
    },
    {
      "title": "Ayodhya Ram Mandir Tour",
      "place": "Ayodhya",
      "image": {
        "url": "https://tourtoreview.com/wp-content/uploads/2024/02/places-to-visit-in-Ayodhya.webp"
      },
      "price": 11999,
      "route": "Ayodhya > Prayagraj > Chitrakoot",
      "type": "Devotional tour",
      "country": "India",
      "duration": "3N/4D"
    },
    {
      "title": "Madurai Meenakshi Temple Pilgrimage",
      "place": "Madurai",
      "image": {
        "url": "https://www.tourmyindia.com/states/tamilnadu/images/aayiram-kaal-mandapam.jpg"
      },
      "price": 13999,
      "route": "Madurai > Rameswaram > Kanyakumari",
      "type": "Devotional tour",
      "country": "India",
      "duration": "4N/5D"
    },
    {
      "title": "Ujjain Mahakaleshwar Jyotirlinga Tour",
      "place": "Ujjain",
      "image": {
        "url": "https://www.bontravelindia.com/wp-content/uploads/2024/01/Ujjain-Tourism-Best-Places-to-Visit-in-Ujjain.jpg"
      },
      "price": 12999,
      "route": "Ujjain > Omkareshwar > Indore",
      "type": "Devotional tour",
      "country": "India",
      "duration": "3N/4D"
    },
    {
      "title": "Kolkata Kali Temple & Dakshineswar Tour",
      "place": "Kolkata",
      "image": {
        "url": "https://upload.wikimedia.org/wikipedia/commons/3/32/Dakhineshwar_Temple_beside_the_Hoogly%2C_West_Bengal.JPG"
      },
      "price": 11999,
      "route": "Kolkata > Dakshineswar > Belur Math",
      "type": "Devotional tour",
      "country": "India",
      "duration": "3N/4D"
    },
    {
      "title": "Kamakhya Temple Guwahati Tour",
      "place": "Guwahati",
      "image": {
        "url": "https://t.eucdn.in/tourism/lg-jpg/kamakhya-devi-temple-5020865.jpg"
      },
      "price": 13999,
      "route": "Guwahati > Kamakhya > Shillong",
      "type": "Devotional tour",
      "country": "India",
      "duration": "4N/5D"
    },
    {
      "title": "Rameswaram Jyotirlinga & Pilgrimage Tour",
      "place": "Rameswaram",
      "image": {
        "url": "https://travelindiatravel.in/wp-content/uploads/2022/10/img5.jpg"
      },
      "price": 15999,
      "route": "Rameswaram > Kanyakumari > Madurai",
      "type": "Devotional tour",
      "country": "India",
      "duration": "4N/5D"
    },
    {
      "title": "Vaishno Devi Yatra",
      "place": "Katra",
      "image": {
        "url": "https://www.kashmirtourpackage.org/blog/wp-content/uploads/2024/01/Vaishno-Devi-Temple.jpg"
      },
      "price": 16999,
      "route": "Katra > Jammu > Patnitop",
      "type": "Devotional tour",
      "country": "India",
      "duration": "5N/6D"
    },
  

  
  {
    "title": "Goa Beach Weekend Getaway",
    "place": "Goa",
    "image": {
      "url": "https://cdn.thegoavilla.com/image/CID_0538_540e2897a539b33077f2dad6a65623de.jpg"
    },
    "price": 9999,
    "route": "Goa > Baga Beach > Palolem Beach",
    "type": "Weekend tour",
    "country": "India",
    "duration": "2N/3D"
  },
  {
    "title": "Lonavala & Khandala Hill Escape",
    "place": "Lonavala",
    "image": {
      "url": "https://hblimg.mmtcdn.com/content/hubble/img/lonavaladestimgs/mmt/activities/t_ufs/m_Rajmachi_Fort_Lonavala_1_l_480_640.jpg"
    },
    "price": 7499,
    "route": "Mumbai > Lonavala > Khandala",
    "type": "Weekend tour",
    "country": "India",
    "duration": "2N/3D"
  },
  {
    "title": "Coorg Coffee Plantation Retreat",
    "place": "Coorg",
    "image": {
      "url": "https://www.theindia.co.in/blog/wp-content/uploads/2019/07/View-of-Coorg-1.jpg"
    },
    "price": 8499,
    "route": "Bangalore > Coorg > Abbey Falls",
    "type": "Weekend tour",
    "country": "India",
    "duration": "2N/3D"
  },
  {
    "title": "Pondicherry French Heritage Getaway",
    "place": "Pondicherry",
    "image": {
      "url": "https://www.asparkholidays.com/uploads/72592_pandichery-1.png"
    },
    "price": 7999,
    "route": "Chennai > Pondicherry > Auroville",
    "type": "Weekend tour",
    "country": "India",
    "duration": "2N/3D"
  },
  {
    "title": "Munnar Tea Estate Weekend Retreat",
    "place": "Munnar",
    "image": {
      "url": "https://assets.traveltriangle.com/blog/wp-content/uploads/2014/11/tea-gardens-munnar-cover.jpg"
    },
    "price": 8999,
    "route": "Kochi > Munnar > Mattupetty Dam",
    "type": "Weekend tour",
    "country": "India",
    "duration": "2N/3D"
  },
  {
    "title": "Rishikesh Adventure & Yoga Tour",
    "place": "Rishikesh",
    "image": {
      "url": "https://www.oyorooms.com/travel-guide/wp-content/uploads/2021/05/10.png"
    },
    "price": 8499,
    "route": "Delhi > Haridwar > Rishikesh",
    "type": "Weekend tour",
    "country": "India",
    "duration": "2N/3D"
  },
  {
    "title": "Jaipur Pink City Weekend Tour",
    "place": "Jaipur",
    "image": {
      "url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/d3/a8/57/images-30-largejpg.jpg?w=500&h=-1&s=1"
    },
    "price": 9499,
    "route": "Delhi > Jaipur > Amber Fort",
    "type": "Weekend tour",
    "country": "India",
    "duration": "2N/3D"
  },
  {
    "title": "Darjeeling Himalayan Toy Train Ride",
    "place": "Darjeeling",
    "image": {
      "url": "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/23/d78745e603cd28bcb03d90f73c4d5fed_1000x1000.jpg"
    },
    "price": 10499,
    "route": "Kolkata > Darjeeling > Tiger Hill",
    "type": "Weekend tour",
    "country": "India",
    "duration": "2N/3D"
  },
  {
    "title": "Ooty & Coonoor Nilgiri Hills Tour",
    "place": "Ooty",
    "image": {
      "url": "https://www.abhibus.com/blog/wp-content/uploads/2023/05/Top-20-Places-to-Visit-in-Ooty-in-2023-That-You-Never-Miss-in-Lifetime-scaled.jpg"
    },
    "price": 9499,
    "route": "Coimbatore > Ooty > Coonoor",
    "type": "Weekend tour",
    "country": "India",
    "duration": "2N/3D"
  },
  {
    "title": "Andaman Islands Beach Weekend",
    "place": "Andaman & Nicobar",
    "image": {
      "url": "https://onlinetourandtravel.com/wp-content/uploads/2020/06/Andaman-blog.jpg"
    },
    "price": 15999,
    "route": "Port Blair > Havelock Island > Neil Island",
    "type": "Weekend tour",
    "country": "India",
    "duration": "3N/4D"
  },
  {
    "title": "Mahabaleshwar Strawberry Farm Getaway",
    "place": "Mahabaleshwar",
    "image": {
      "url": "https://media.assettype.com/outlooktraveller%2F2023-08%2Ff8eada68-8751-42c3-98a2-c5e75e6d3610%2Fshutterstock_1666668379.jpg"
    },
    "price": 7999,
    "route": "Pune > Mahabaleshwar > Panchgani",
    "type": "Weekend tour",
    "country": "India",
    "duration": "2N/3D"
  },
  {
    "title": "Shimla & Kufri Snow Weekend Tour",
    "place": "Shimla",
    "image": {
      "url": "https://www.clubmahindra.com/blog/media/section_images/shuttersto-1a47b83e6a03271.jpg"
    },
    "price": 9999,
    "route": "Delhi > Shimla > Kufri",
    "type": "Weekend tour",
    "country": "India",
    "duration": "2N/3D"
  },
  {
    "title": "Udaipur Lake & Heritage Weekend Tour",
    "place": "Udaipur",
    "image": {
      "url": "https://udaipurtourism.co.in/images/places-to-visit/headers/2-days-udaipur-top-places-to-visit-udaipur-header-udaipur-tourism-cr-xsaltor.jpg"
    },
    "price": 9999,
    "route": "Jaipur > Udaipur > Mount Abu",
    "type": "Weekend tour",
    "country": "India",
    "duration": "2N/3D"
  },
  {
    "title": "Mysore Palace & Bandipur Safari Tour",
    "place": "Mysore",
    "image": {
      "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT83RDq6DqyMmv9nKsxl6zOoikIKAp4FR-iag&s"
    },
    "price": 10999,
    "route": "Bangalore > Mysore > Bandipur",
    "type": "Weekend tour",
    "country": "India",
    "duration": "2N/3D"
  },
  {
    "title": "Chikmagalur Coffee Estate Weekend",
    "place": "Chikmagalur",
    "image": {
      "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGMd9V4u4Oi7jXqRm8xh7SW7BO-yYKza83Iw&s"
    },
    "price": 8999,
    "route": "Bangalore > Chikmagalur > Mullayanagiri",
    "type": "Weekend tour",
    "country": "India",
    "duration": "2N/3D"
  },



  
  {
    "title": "Paris & Swiss Alps Tour",
    "place": "Paris & Switzerland",
    "image": {
      "url": "https://www.planetware.com/photos-large/CH/switzerland-matterhorn.jpg"
    },
    "price": 129999,
    "route": "Paris > Zurich > Interlaken",
    "type": "International tour",
    "country": "France & Switzerland",
    "duration": "7N/8D"
  },
  {
    "title": "Maldives Luxury Beach Getaway",
    "place": "Maldives",
    "image": {
      "url": "https://images.wanderon.in/blogs/new/2023/10/gondola-ride-in-autumn-in-kashmir-2023-10-18t185429.618-min.png"
    },
    "price": 99999,
    "route": "Male > Maafushi > Addu Atoll",
    "type": "International tour",
    "country": "Maldives",
    "duration": "4N/5D"
  },
  {
    "title": "Dubai Desert & City Adventure",
    "place": "Dubai",
    "image": {
      "url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/e2/fd/e2/photo0jpg.jpg?w=1200&h=700&s=1"
    },
    "price": 79999,
    "route": "Dubai > Abu Dhabi > Sharjah",
    "type": "International tour",
    "country": "UAE",
    "duration": "5N/6D"
  },
  {
    "title": "Thailand Island Hopping",
    "place": "Thailand",
    "image": {
      "url": "https://www.holidify.com/images/bgImages/PHI-PHI-ISLANDS.jpg"
    },
    "price": 69999,
    "route": "Bangkok > Phuket > Krabi",
    "type": "International tour",
    "country": "Thailand",
    "duration": "6N/7D"
  },
  {
    "title": "Bali Cultural & Beach Retreat",
    "place": "Bali",
    "image": {
      "url": "https://media2.thrillophilia.com/images/photos/000/106/267/original/1530258837_shutterstock_725111986.jpg?w=753&h=450&dpr=1.5"
    },
    "price": 84999,
    "route": "Denpasar > Ubud > Nusa Penida",
    "type": "International tour",
    "country": "Indonesia",
    "duration": "5N/6D"
  },
  {
    "title": "Singapore & Sentosa Island Tour",
    "place": "Singapore",
    "image": {
      "url": "https://media1.thrillophilia.com/filestore/20fc6mpand4ahbvv07gqlwap0dje_shutterstock_558424639.jpg"
    },
    "price": 74999,
    "route": "Singapore > Sentosa > Gardens by the Bay",
    "type": "International tour",
    "country": "Singapore",
    "duration": "4N/5D"
  },
  {
    "title": "Japan Cherry Blossom Experience",
    "place": "Tokyo & Kyoto",
    "image": {
      "url": "https://media1.thrillophilia.com/filestore/sfph4dv7mc8lgzow9zjbspez2lvb_1618899444_shutterstock_667925704.jpg?w=753&h=450&dpr=2.0"
    },
    "price": 139999,
    "route": "Tokyo > Kyoto > Osaka",
    "type": "International tour",
    "country": "Japan",
    "duration": "7N/8D"
  },
  {
    "title": "Australia Great Barrier Reef Tour",
    "place": "Australia",
    "image": {
      "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi_b6C54YsRCm5ckcWdeDjp-eLi3FObvtMbw&s"
    },
    "price": 159999,
    "route": "Sydney > Gold Coast > Great Barrier Reef",
    "type": "International tour",
    "country": "Australia",
    "duration": "8N/9D"
  },
  {
    "title": "New Zealand Adventure & Nature Tour",
    "place": "New Zealand",
    "image": {
      "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm5yYckqcOLuG2MjDuEHNi2D8UIgg64rr5gw&s"
    },
    "price": 149999,
    "route": "Auckland > Queenstown > Milford Sound",
    "type": "International tour",
    "country": "New Zealand",
    "duration": "7N/8D"
  },
  {
    "title": "Greece Santorini & Athens Tour",
    "place": "Greece",
    "image": {
      "url": "https://media2.thrillophilia.com/images/photos/000/369/600/original/1615900869_shutterstock_1168009126.jpg?w=753&h=450&dpr=1.5"
    },
    "price": 119999,
    "route": "Athens > Santorini > Mykonos",
    "type": "International tour",
    "country": "Greece",
    "duration": "6N/7D"
  },
  {
    "title": "Italy Historical & Romantic Tour",
    "place": "Italy",
    "image": {
      "url": "https://willagetravel.com/uploads/0000/154/2022/09/29/pisa-tower-in-italy-tourism-1.jpg"
    },
    "price": 139999,
    "route": "Rome > Venice > Florence",
    "type": "International tour",
    "country": "Italy",
    "duration": "7N/8D"
  },
  {
    "title": "South Africa Wildlife Safari",
    "place": "South Africa",
    "image": {
      "url": "https://www.planetware.com/wpimages/2020/07/south-africa-top-attractions-intro-paragraph-giraffes-sunset.jpg"
    },
    "price": 159999,
    "route": "Cape Town > Johannesburg > Kruger National Park",
    "type": "International tour",
    "country": "South Africa",
    "duration": "8N/9D"
  },
  {
    "title": "Egypt Pyramids & Nile Cruise",
    "place": "Egypt",
    "image": {
      "url": "https://cdn.britannica.com/13/170813-131-B69A007D/Great-Pyramid-of-Cheops-Giza-Egypt.jpg"
    },
    "price": 109999,
    "route": "Cairo > Luxor > Nile Cruise",
    "type": "International tour",
    "country": "Egypt",
    "duration": "6N/7D"
  },
  {
    "title": "London & Scotland Explorer",
    "place": "United Kingdom",
    "image": {
      "url": "https://www.planetware.com/wpimages/2023/01/england-london-top-attractions-things-to-do-intro-paragraph-big-ben-thames-bridge.jpg"
    },
    "price": 129999,
    "route": "London > Edinburgh > Isle of Skye",
    "type": "International tour",
    "country": "United Kingdom",
    "duration": "7N/8D"
  },
  {
    "title": "Canada Rockies & Niagara Falls Tour",
    "place": "Canada",
    "image": {
      "url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/a3/8b/5f/niagara-falls.jpg?w=1200&h=1200&s=1"
    },
    "price": 149999,
    "route": "Toronto > Vancouver > Banff National Park",
    "type": "International tour",
    "country": "Canada",
    "duration": "8N/9D"
  }







];

module.exports = { data: tourPackages };
