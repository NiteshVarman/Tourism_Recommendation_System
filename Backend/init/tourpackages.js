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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/ar1.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/ar2.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/ar3.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/ar4.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/as1.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/as2.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/as3.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/as4.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/br1.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/br2.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/br3.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/br4.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/cg1.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/cg2.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/cg3.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/cg4.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/ga1.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/ga2.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/ga3.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/ga4.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/gj1.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/gj2.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/gj3.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/gj4.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/hr1.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/hr2.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/hr3.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/hr4.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/hp1.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/hp2.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/hp3.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/hp4.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/jh1.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/jh2.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/jh3.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/jh4.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/ka1.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/ka2.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/ka3.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/ka4.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/kl1.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/kl2.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/kl3.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/kl4.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/mh1.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/mh2.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/mh3.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/mh4.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/mp1.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/mp2.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/mp3.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/mp4.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/mn1.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/mn2.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/mn3.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/mn4.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/ml1.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/ml2.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/ml3.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/ml4.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/mz1.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/mz2.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/mz3.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/mz4.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/nl1.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/nl2.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/nl3.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/nl4.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/od1.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/od2.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/od3.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/od4.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/pb1.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/pb2.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/pb3.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/pb4.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/rj1.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/rj2.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/rj3.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/rj4.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/sk1.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/sk2.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/sk3.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/sk4.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/tn1.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/tn2.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/tn3.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/tn4.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/tr1.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/tr2.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/tr3.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/tr4.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/ts1.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/ts2.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/ts3.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/ts4.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/up1.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/up2.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/up3.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/up4.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/uk1.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/uk2.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/uk3.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/uk4.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/wb1.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/wb2.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/wb3.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/wb4.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/an1.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/an2.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/an3.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/an4.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/ch1.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/ch2.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/ch3.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/ch4.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/dd1.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/dd2.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/dd3.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/dd4.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/dl1.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/dl2.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/dl3.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/dl4.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/ks1.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/ks2.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/ks3.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/ks4.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/ld1.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/ld2.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/ld3.png"
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
      "url": "https://landing.journawayholidays.com/wp-content/uploads/2023/01/ld4.png"
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
        "url": "https://upload.wikimedia.org/wikipedia/commons/3/3e/India_Gate_in_New_Delhi_03-2016_img3.jpg"
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
        "url": "https://upload.wikimedia.org/wikipedia/commons/5/5d/Nehru_Science_Center%2C_Mumbai.jpg"
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
        "url": "https://upload.wikimedia.org/wikipedia/commons/d/d5/ISRO_Satellite_Centre_-_Bangalore.jpg"
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
        "url": "https://upload.wikimedia.org/wikipedia/commons/d/db/The_Government_Museum%2C_Chennai.jpg"
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
        "url": "https://upload.wikimedia.org/wikipedia/commons/a/a5/Birla_Science_Museum_Hyderabad.jpg"
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
        "url": "https://upload.wikimedia.org/wikipedia/commons/e/e5/Indian_Museum%2C_Kolkata.jpg"
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
        "url": "https://upload.wikimedia.org/wikipedia/commons/2/27/Fergusson_College_2.jpg"
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
        "url": "https://upload.wikimedia.org/wikipedia/commons/d/da/Science_City_Ahmedabad.jpg"
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
        "url": "https://upload.wikimedia.org/wikipedia/commons/7/7a/Albert_Hall_Museum%2C_Jaipur.jpg"
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
        "url": "https://upload.wikimedia.org/wikipedia/commons/6/64/Bara_Imambara_Lucknow_2014-07_img3.jpg"
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
        "url": "https://upload.wikimedia.org/wikipedia/commons/3/37/Mysore_Palace_Front_View.jpg"
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
        "url": "https://upload.wikimedia.org/wikipedia/commons/1/1f/Konark_Sun_Temple%2C_Odisha%2C_India.jpg"
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
        "url": "https://upload.wikimedia.org/wikipedia/commons/7/7e/Kumhrar_Park%2C_Patna.jpg"
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
        "url": "https://upload.wikimedia.org/wikipedia/commons/d/d1/Shimla_Mall_Road.jpg"
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
        "url": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Kaziranga_rhinos.jpg"
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
        "url": "https://upload.wikimedia.org/wikipedia/commons/4/49/Kashi_Vishwanath_Temple.jpg"
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
        "url": "https://upload.wikimedia.org/wikipedia/commons/d/db/Haridwar_Ganga_Aarti.jpg"
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
        "url": "https://upload.wikimedia.org/wikipedia/commons/1/1d/Tirumala_Venkateswara_temple_gopuram.jpg"
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
        "url": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Golden_Temple%2C_Amritsar.jpg"
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
        "url": "https://upload.wikimedia.org/wikipedia/commons/3/38/Dwarkadhish_Temple_Dwarka.jpg"
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
        "url": "https://upload.wikimedia.org/wikipedia/commons/2/2a/Kedarnath_Temple_2016.jpg"
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
        "url": "https://upload.wikimedia.org/wikipedia/commons/5/54/Shirdi_Sai_Baba.jpg"
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
        "url": "https://upload.wikimedia.org/wikipedia/commons/b/bf/Jagannath_Puri_Temple.jpg"
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
        "url": "https://upload.wikimedia.org/wikipedia/commons/7/72/Ayodhya_Ram_Mandir.jpg"
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
        "url": "https://upload.wikimedia.org/wikipedia/commons/7/75/Meenakshi_Amman_Temple_-_Tower_View.jpg"
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
        "url": "https://upload.wikimedia.org/wikipedia/commons/1/18/Mahakal_Temple_Ujjain.jpg"
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
        "url": "https://upload.wikimedia.org/wikipedia/commons/2/2b/Dakshineswar_Kali_Temple.jpg"
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
        "url": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Kamakhya_Temple%2C_Guwahati.jpg"
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
        "url": "https://upload.wikimedia.org/wikipedia/commons/a/a5/Ramanathaswamy_Temple_Corridor.jpg"
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
        "url": "https://upload.wikimedia.org/wikipedia/commons/1/10/Vaishno_Devi_Bhawan.jpg"
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
      "url": "https://upload.wikimedia.org/wikipedia/commons/6/60/Baga_Beach_Goa.jpg"
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
      "url": "https://upload.wikimedia.org/wikipedia/commons/9/91/Lonavla.jpg"
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
      "url": "https://upload.wikimedia.org/wikipedia/commons/7/7f/Coorg_India.jpg"
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
      "url": "https://upload.wikimedia.org/wikipedia/commons/6/67/Rock_Beach%2C_Pondicherry.jpg"
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
      "url": "https://upload.wikimedia.org/wikipedia/commons/3/35/Munnar_Hillstation.jpg"
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
      "url": "https://upload.wikimedia.org/wikipedia/commons/8/85/Laxman_Jhula%2C_Rishikesh.jpg"
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
      "url": "https://upload.wikimedia.org/wikipedia/commons/7/79/Hawa_Mahal_Palace.jpg"
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
      "url": "https://upload.wikimedia.org/wikipedia/commons/8/86/Darjeeling_Toy_Train.jpg"
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
      "url": "https://upload.wikimedia.org/wikipedia/commons/7/7d/Ooty_Lake_View.jpg"
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
      "url": "https://upload.wikimedia.org/wikipedia/commons/b/bf/Radhanagar_Beach_Andaman.jpg"
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
      "url": "https://upload.wikimedia.org/wikipedia/commons/f/f1/Mahabaleshwar_Hill_View.jpg"
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
      "url": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Shimla_Mall_Road_Winter.jpg"
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
      "url": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Udaipur_City_Palace.jpg"
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
      "url": "https://upload.wikimedia.org/wikipedia/commons/9/97/Mysore_Palace_Lighting.jpg"
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
      "url": "https://upload.wikimedia.org/wikipedia/commons/7/7a/Chikmagalur_Hills_View.jpg"
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
      "url": "https://upload.wikimedia.org/wikipedia/commons/e/e6/Paris_Eiffel_Tower.jpg"
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
      "url": "https://upload.wikimedia.org/wikipedia/commons/3/38/Maldives_Beach.jpg"
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
      "url": "https://upload.wikimedia.org/wikipedia/commons/8/89/Dubai_Skyline.jpg"
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
      "url": "https://upload.wikimedia.org/wikipedia/commons/3/34/Phuket_Beach.jpg"
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
      "url": "https://upload.wikimedia.org/wikipedia/commons/d/d2/Bali_Temple.jpg"
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
      "url": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Singapore_Marina_Bay.jpg"
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
      "url": "https://upload.wikimedia.org/wikipedia/commons/6/6b/Tokyo_Cherry_Blossoms.jpg"
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
      "url": "https://upload.wikimedia.org/wikipedia/commons/7/73/Great_Barrier_Reef.jpg"
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
      "url": "https://upload.wikimedia.org/wikipedia/commons/5/5b/Milford_Sound_New_Zealand.jpg"
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
      "url": "https://upload.wikimedia.org/wikipedia/commons/9/91/Santorini_Sunset.jpg"
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
      "url": "https://upload.wikimedia.org/wikipedia/commons/5/5d/Colosseum_Rome.jpg"
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
      "url": "https://upload.wikimedia.org/wikipedia/commons/6/60/Kruger_National_Park.jpg"
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
      "url": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Giza_Pyramids.jpg"
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
      "url": "https://upload.wikimedia.org/wikipedia/commons/6/6e/London_Big_Ben.jpg"
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
      "url": "https://upload.wikimedia.org/wikipedia/commons/7/74/Niagara_Falls_Canada.jpg"
    },
    "price": 149999,
    "route": "Toronto > Vancouver > Banff National Park",
    "type": "International tour",
    "country": "Canada",
    "duration": "8N/9D"
  }







];

module.exports = { data: tourPackages };
