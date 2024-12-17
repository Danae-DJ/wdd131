// Set the current year and last modified date
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").innerHTML = `&copy;${currentYear}`;
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Hamburger menu functionality
const hambutton = document.querySelector("#hambutton");
const navmenu = document.querySelector("#navmenu");

hambutton.addEventListener("click", () => {
    navmenu.classList.toggle("show");
});

// Curiosities text-changing functionality
const curiosities = [
    "Cycling improves your mood and reduces stress!",
    "Did you know? The bicycle is the most efficient form of human transportation!",
    "Regular cycling can increase your cardiovascular fitness by 20%.",
    "Cycling to work saves money and helps the environment.",
];

let curiosityIndex = 0;
function changeCuriosity() {
    document.getElementById("curiosity-text").textContent = curiosities[curiosityIndex];
    curiosityIndex = (curiosityIndex + 1) % curiosities.length;
}
setInterval(changeCuriosity, 10000);

//cards bicycles
const bicycles = [
    {
        imageUrl: "https://m.media-amazon.com/images/I/91GrFEi03+L._AC_SX679_.jpg",
        bicycleName: "Road Bikes",
        description: "Lightweight with narrow tires and drop handlebars. Best for paved roads and speed. Ideal for endurance riding, racing, or fitness.",
        shopUrl: "https://www.amazon.com/Schwinn-Kedzie-700c-Fixie-Bicycle/dp/B01GZSMBW0/ref=sr_1_1?crid=18FZY6QB1NM8M&dib=eyJ2IjoiMSJ9.j4-AJ2C67_K-MxYhIXnPZyg_T__RleLfgHjlKmlGfEC2uqCtX6ztCZbMpT1W2meW8kCWGVrZ2t-TSNi07GHlDk9Wkk9XsJyvswJE1hdjOj0uC5eavjop5ky6ImgSiS--06WTinYAGSfTSn2fgyvDPmKve82GvaPqAORwdwq2ujr9yiapds0SoLBMHdzZgfCyt_EZPzASkST-DJN-qBgPgoy8UISTbRP0r04fpPKs0es.HFb3YJJCAVcrD24ewstoTS2C7aMbgrVzarj06CnNnJo&dib_tag=se&keywords=Road%2BBikes&qid=1734247234&sprefix=road%2Bbikes%2Caps%2C150&sr=8-1&th=1"
    },

    {
        imageUrl: "https://m.media-amazon.com/images/I/71w7wgGUeVL.__AC_SY300_SX300_QL70_FMwebp_.jpg",
        bicycleName: "Mountain Bikes (MTB)",
        description: "Sturdy frame, wide tires, and suspension (front, rear, or both). Designed for off-road trails and rough terrain. Variants: Cross-country, trail, downhill, and enduro bikes.",
        shopUrl: "https://www.amazon.com/Dynacraft-Mountain-Wheels-Shifter-Handbrakes/dp/B07PJ75V97/ref=sr_1_1?crid=2HS4KSA0LRRKB&dib=eyJ2IjoiMSJ9.mf_dVE2Voy6BPI2tfjJhMdBW7sBX8Wom2FplnaU3A0Q_HqlS6ynCMPQ78eF2bMcILBdD349wTEPr1c0RFrzZSdLJQjbmmh70kt3VWNVLN8Kp7k1CWW91K3Z1MYKRc1mCuAkewgWF_0Ea5jazW11V4F-Oy-xSkmDe-djEvWYkePaP-LJg7xPtW6ZLVGKmXowfufcdAviMoieM1INcbZDDY3WBXctSFDbpc__HzpZdbdU.o8oCn04-JB8yfC7Ws_TCBZjdjGIg4Iz1krOh309v9Ws&dib_tag=se&keywords=Mountain%2BBikes&qid=1734248703&sprefix=mountain%2Bbikes%2Caps%2C198&sr=8-1&th=1"
    },

    {
        imageUrl: "https://m.media-amazon.com/images/I/81S8kWI8GYS._AC_SX679_.jpg",
        bicycleName: "Hybrid Bikes",
        description: "Blend of road and mountain bike features. Comfortable upright position, suitable for commuting and light off-road trails.",
        shopUrl: "https://www.amazon.com/Schwinn-Comfort-Hybrid-20-Inch-S5230D/dp/B08239VFK6/ref=sr_1_1?crid=2IY7Y2VMCO92&dib=eyJ2IjoiMSJ9.uiXye_6gkkj_ykWuG8ztPip7jNvtl8h8i-cI_klU5ZK5vYh_eC23rKlOycKQ6Tkjx_1PI12pW4N4I7XBzyaoFpFZqQk3DTwA8ND4SJ13Bzbqvoei9GmUnsqCQFMf4KlfVUsp208SQwHcv6S0_z4dSDbp_y8ieRisPEqYnyJ6HsJiYDc525bndmDid3jY8KcYTnxhBsF94K7kNnm7WMr2Mm9fZISSx-KAIIMVosFnUu4.erDuaqYRz7o49PmU5WNga0w4kWbhn7piu_HgZCzYQGc&dib_tag=se&keywords=Hybrid%2BBikes&qid=1734248923&sprefix=hybrid%2Bbikes%2Caps%2C227&sr=8-1&th=1"
    },

    {
        imageUrl: "https://m.media-amazon.com/images/I/71A+CvW-4BL._AC_SX679_.jpg",
        bicycleName: "Gravel Bikes",
        description: "Drop handlebars like a road bike but wider tires for unpaved roads. Versatile for mixed surfaces and adventure riding.",
        shopUrl: "https://www.amazon.com.mx/GRAVEL-Bicicleta-Asphalt-Velocidades-Aerodin%C3%A1mico/dp/B0BWL6YDVP/ref=asc_df_B0BWL6YDVP/?tag=gledskshopmx-20&linkCode=df0&hvadid=709970325020&hvpos=&hvnetw=g&hvrand=10922232006455435053&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9047084&hvtargid=pla-2298259578474&mcid=c694aebf623e37ac859467cf35781e7c&gad_source=1&th=1&psc=1"
    },

    {
        imageUrl: "https://m.media-amazon.com/images/I/71mWGUHjJ6L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        bicycleName: "BMX Bikes",
        description: "Compact and durable for stunts, tricks, and racing. Single-speed with small wheels and high maneuverability.",
        shopUrl: "https://www.amazon.com/Throne-Cycles-29er-24-Bicycles/dp/B0CTS3TNGQ/ref=sr_1_7?crid=27F7QAN81ZMV4&dib=eyJ2IjoiMSJ9.0JJYZLxqHcQ2ryfVJDAeqTWfrTU5N1MnJ_t7mFGyR5WIXBC-mZuUauh6WHF3sadBrjwU1I0K-OqxDN4fOeDlffnGWTQTabLHLEJRMqSBxAFZqG4aqshbdoqJPsOuZJ3itAqf9u_nrKRhlu6EN7l6U2aprDmEAVmnJJKNro1k48W8FnB4ls7sG0gVFW_vFPmH511f0Nkqew1Llx4FWG61Gf7ZK2JF79kpjftIr37v4lQ.uyvfhdv8j1cS884ZvVH4gRnYlTXyQR4c_4h_TWDWoEU&dib_tag=se&keywords=bmx%2Bbikes%2Bfor%2Badults&qid=1734249921&sprefix=BMX%2BBikes%2B%2Caps%2C361&sr=8-7&th=1"
    },

    {
        imageUrl: "https://i.ebayimg.com/images/g/3v8AAOSwzRFnL3q-/s-l960.webp",
        bicycleName: "Track Bikes",
        description: "Fixed gear with no brakes. Designed for velodrome racing.",
        shopUrl: "https://www.ebay.com/itm/405256309164?chn=ps&var=675544086588&norover=1&mkevt=1&mkrid=21562-222008-2056-1&mkcid=2&itemid=675544086588_405256309164&targetid=325425753764&device=c&mktype=pla&googleloc=9047084&poi=&campaignid=21384589900&mkgroupid=164552185618&rlsatarget=pla-325425753764&abcId=&merchantid=5348000646&gad_source=1&gclid=CjwKCAiAmfq6BhAsEiwAX1jsZ8NbRxS4icz4LfV5giNzPbrUxVlfLPM9Ny11HHbSUURNgyeutxIIuhoCAe8QAvD_BwE"
    },

    {
        imageUrl: "https://m.media-amazon.com/images/I/81adTdDMxRL._AC_SX679_.jpg",
        bicycleName: "Touring Bikes",
        description: "Built for long distances with racks for carrying gear. Sturdy and comfortable for multi-day rides.",
        shopUrl: "https://www.amazon.com.mx/Benotto-Bicicleta-Turismo-Aguila-Plateada/dp/B0BHTRKZN1/ref=asc_df_B0BHTRKZN1/?tag=gledskshopmx-20&linkCode=df0&hvadid=709861350687&hvpos=&hvnetw=g&hvrand=10030429337680235660&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9047084&hvtargid=pla-2282741148615&psc=1&mcid=f4668e8dab733714b86e505e19f6015c&gad_source=1"
    },

    {
        imageUrl: "https://m.media-amazon.com/images/I/71Q6r0yLE6L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        bicycleName: "Electric Bikes (e-Bikes)",
        description: "Equipped with a motor to assist pedaling. Suitable for commuting, recreation, or mountain biking.",
        shopUrl: "https://www.amazon.com/VITILAN-3-0-Electric-Suspension-Removable/dp/B0DB5RBRT1/ref=sr_1_4?crid=9B12Z27FA6KB&dib=eyJ2IjoiMSJ9.cmtzIt6XtPMgtVorkqnAdXAVGiX8ZrZI0hKlA0XWcRrA9YMlu_d3pG5_p_TunP7yqAx8mmwsPP-Bh4d8hTY-G_bOdlztPDc6RkTBWoBloMdmz67VNQ8JNufIVeDgz64ACVhUEZXKA0cwCEX_VWAvUMKqZoG8--eHFGzk_2v4xHdw6okOeRGSI9IUofSmCP9Juva2ah7NZMSAnxsBEvKY499kwClqZOLWwUBteLhoKZA.dISUAY2-wlv6ST17B_Sza_zAz3K96JDCLx3aLse1UsA&dib_tag=se&keywords=Electric+Bikes&qid=1734251898&sprefix=electric+bikes+%2Caps%2C415&sr=8-4"
    },

    {
        imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_640247-MLU75010446376_032024-F.webp",
        bicycleName: "Fat Bikes",
        description: "Oversized tires for sand, snow, or loose terrain. Great for extreme environments.",
        shopUrl: "https://www.mercadolibre.com.mx/bicicleta-fat-bike-mongoose-dolomite-r26-7v-freno-disco-hidraulico-color-negroazul/p/MLM13183253?pdp_filters=item_id%3AMLM1918531728&from=gshop&matt_tool=43527145&matt_word=&matt_source=google&matt_campaign_id=19660263080&matt_ad_group_id=154438376628&matt_match_type=&matt_network=g&matt_device=c&matt_creative=647515866468&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735123306&matt_product_id=MLM13183253-product&matt_product_partition_id=2189754530543&matt_target_id=pla-2189754530543&gad_source=1&gclid=CjwKCAiAmfq6BhAsEiwAX1jsZ9Q1sXBHlN_VjFcd11U1Ob3ELTZnObv5xu83kK-Ar2o2k864pH-4XhoCjWgQAvD_BwE"
    },

    
]


const bicycleCards = document.getElementById("bicycle-cards");
bicycles.forEach(bike => {
    const card = `
        <div>
            <img src="${bike.imageUrl}" alt="${bike.bicycleName}" width="200">
            <h3>${bike.bicycleName}</h3>
            <p>${bike.description}</p>
            <a href="${bike.shopUrl}" target="_blank">Shop Now</a>
        </div>`;
    bicycleCards.innerHTML += card;
});

