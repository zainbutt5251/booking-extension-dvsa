function u() {
    let d = document.body.querySelector(".span-7 p.centre.bold"),
        [m, L] = d.textContent.split("–"),
        G = new Date(m.trim().replace(/(\d+)(st|nd|rd|th)/, "$1")),
        V = new Date(L.trim().replace(/(\d+)(st|nd|rd|th)/, "$1"));
    return { weekStartDate: G, weekEndDate: V };
}
function T(d, m) {
    let { weekStartDate: L, weekEndDate: G } = d,
        { rangeStartDate: V, rangeEndDate: H } = m;
    return (L >= V && G <= H) || (L <= V && G >= V) || (L <= H && G >= H);
}
function g(d, m) {
    let L = T(d, m),
        G = T({ weekStartDate: new Date(d.weekStartDate.getTime() - 604800000), weekEndDate: new Date(d.weekEndDate.getTime() - 604800000) }, m),
        V = T({ weekStartDate: new Date(d.weekStartDate.getTime() + 604800000), weekEndDate: new Date(d.weekEndDate.getTime() + 604800000) }, m);
    return { isWithinRange: L, canGoPrevious: G, canGoNext: V };
}
function p(d) {
    let m = d.match(/id="reserve_[^"]*"[^>]+href="([^"]*)"/g);
    if (!m || m.length === 0) return null;
    let L = m[m.length - 1],
        G = L.indexOf('href="') + 6,
        V = L.lastIndexOf('"');
    return L.substring(G, V);
}
function a(d) {
    let m = /<a\s+href="([^"]*?_eventId=searchForDaySlots[^"]*?)"\s+id="([^"]+)"[^>]*>(?:[\s\S]*?)<span class="hidden">There are <\/span>(\d+)<span\s+class="hidden"\s*>(?:[\s\S]*?)at ([^.]+)\.(?:[\s\S]*?)<\/span/g,
        L = null,
        G = 0,
        V;
    while ((V = m.exec(d)) !== null) {
        let H = parseInt(V[3], 10);
        if (H > G) (G = H), (L = { href: V[1], id: V[2], testsAvailable: H, centerName: V[4].trim() });
    }
    return L;
}
var Kd = [
    { id: "10248", name: "Aberdeen North" },
    { id: "337", name: "Aberdeen North LGV" },
    { id: "1878", name: "Aberdeen South (Cove)" },
    { id: "247", name: "Aberfeldy" },
    { id: "355", name: "Abergavenny" },
    { id: "356", name: "Aberystwyth (Park Avenue)" },
    { id: "254", name: "Airdrie" },
    { id: "696", name: "Alness" },
    { id: "150", name: "Alnwick" },
    { id: "318", name: "Arbroath" },
    { id: "3459", name: "Ashfield" },
    { id: "94", name: "Ashford (Kent)" },
    { id: "1858", name: "Atherton (Manchester)" },
    { id: "42", name: "Aylesbury" },
    { id: "3679", name: "Ayr" },
    { id: "358", name: "Bala" },
    { id: "251", name: "Ballater" },
    { id: "43", name: "Banbury" },
    { id: "242", name: "Banff" },
    { id: "1318", name: "Bangor" },
    { id: "96", name: "Barking (Tanner Street)" },
    { id: "97", name: "Barnet (London)" },
    { id: "171", name: "Barnsley" },
    { id: "360", name: "Barnstaple" },
    { id: "244", name: "Barra" },
    { id: "159", name: "Barrow In Furness" },
    { id: "3985", name: "Barry" },
    { id: "1396", name: "Basildon" },
    { id: "362", name: "Basingstoke" },
    { id: "1416", name: "Bedford" },
    { id: "98", name: "Belvedere (London)" },
    { id: "245", name: "Benbecula Island" },
    { id: "158", name: "Berwick-On-Tweed" },
    { id: "428", name: "Beverley LGV" },
    { id: "1176", name: "Birmingham (Garretts Green)" },
    { id: "22", name: "Birmingham (Kings Heath)" },
    { id: "32", name: "Birmingham (Kingstanding)" },
    { id: "35", name: "Birmingham (Shirley)" },
    { id: "38", name: "Birmingham (South Yardley)" },
    { id: "5585", name: "Bishopbriggs" },
    { id: "17", name: "Bishops Stortford" },
    { id: "1860", name: "Blackburn with Darwen" },
    { id: "161", name: "Blackpool" },
    { id: "44", name: "Bletchley" },
    { id: "151", name: "Blyth" },
    { id: "363", name: "Bodmin" },
    { id: "197", name: "Bolton (Manchester)" },
    { id: "796", name: "Borehamwood (London)" },
    { id: "48", name: "Boston" },
    { id: "183", name: "Bradford (Heaton)" },
    { id: "3742", name: "Bradford (Thornbury)" },
    { id: "365", name: "Brecon" },
    { id: "3715", name: "Bredbury (Manchester)" },
    { id: "100", name: "Brentwood (London)" },
    { id: "366", name: "Bridgend" },
    { id: "175", name: "Bridlington" },
    { id: "6305", name: "Bristol (Avonmouth)" },
    { id: "1357", name: "Bristol (Kingswood)" },
    { id: "246", name: "Brodick (Isle of Arran)" },
    { id: "7805", name: "Bromley (London)" },
    { id: "250", name: "Buckie" },
    { id: "1258", name: "Burgess Hill" },
    { id: "1136", name: "Burton on Trent" },
    { id: "198", name: "Bury (Manchester)" },
    { id: "75", name: "Bury St Edmunds" },
    { id: "216", name: "Buxton" },
    { id: "456", name: "Callander" },
    { id: "372", name: "Camborne" },
    { id: "12", name: "Cambridge (Brookmount Court)" },
    { id: "1256", name: "Cambridge (Hardwick)" },
    { id: "260", name: "Campbeltown" },
    { id: "103", name: "Canterbury" },
    { id: "4585", name: "Cardiff (Llanishen)" },
    { id: "375", name: "Cardigan" },
    { id: "1276", name: "Carlisle" },
    { id: "225", name: "Carlisle LGV (Cars)" },
    { id: "376", name: "Carmarthen" },
    { id: "255", name: "Castle Douglas" },
    { id: "6505", name: "Chadderton" },
    { id: "199", name: "Cheetham Hill (Manchester)" },
    { id: "91", name: "Chelmsford (Hanbury Road)" },
    { id: "377", name: "Cheltenham" },
    { id: "776", name: "Chertsey (London)" },
    { id: "1257", name: "Chester" },
    { id: "56", name: "Chesterfield" },
    { id: "104", name: "Chichester" },
    { id: "105", name: "Chingford (London)" },
    { id: "378", name: "Chippenham" },
    { id: "200", name: "Chorley" },
    { id: "14", name: "Clacton-on-Sea" },
    { id: "15", name: "Colchester" },
    { id: "656", name: "Coventry" },
    { id: "106", name: "Crawley" },
    { id: "213", name: "Crewe" },
    { id: "259", name: "Crieff" },
    { id: "92", name: "Culham LGV" },
    { id: "256", name: "Cumnock" },
    { id: "958", name: "Darlington" },
    { id: "5685", name: "Derby (Alvaston)" },
    { id: "190", name: "Doncaster" },
    { id: "3659", name: "Dorchester" },
    { id: "344", name: "Dreghorn LGV" },
    { id: "24", name: "Dudley" },
    { id: "262", name: "Dumbarton" },
    { id: "265", name: "Dumfries" },
    { id: "340", name: "Dumfries LGV" },
    { id: "3802", name: "Dundee" },
    { id: "7685", name: "Dunfermline (Vine)" },
    { id: "266", name: "Dunoon" },
    { id: "267", name: "Duns" },
    { id: "3717", name: "Durham" },
    { id: "228", name: "Durham LGV" },
    { id: "5165", name: "East Kilbride" },
    { id: "108", name: "Eastbourne" },
    { id: "716", name: "Edinburgh (Currie)" },
    { id: "896", name: "Edinburgh (Musselburgh)" },
    { id: "269", name: "Elgin" },
    { id: "444", name: "Enfield (Brancroft Way)" },
    { id: "996", name: "Enfield (Innova Business Park)" },
    { id: "1056", name: "Erith (London)" },
    { id: "1016", name: "Exeter" },
    { id: "439", name: "Exeter LGV" },
    { id: "1336", name: "Farnborough" },
    { id: "88", name: "Featherstone" },
    { id: "109", name: "Folkestone" },
    { id: "276", name: "Forfar" },
    { id: "277", name: "Fort William" },
    { id: "274", name: "Fraserburgh" },
    { id: "281", name: "Gairloch" },
    { id: "279", name: "Galashiels" },
    { id: "957", name: "Gateshead" },
    { id: "3619", name: "Gillingham" },
    { id: "450", name: "Gillingham LGV" },
    { id: "280", name: "Girvan" },
    { id: "278", name: "Glasgow (Anniesland)" },
    { id: "676", name: "Glasgow (Baillieston)" },
    { id: "936", name: "Glasgow (Shieldhall)" },
    { id: "816", name: "Gloucester" },
    { id: "283", name: "Golspie" },
    { id: "482", name: "Goodmayes (London)" },
    { id: "232", name: "Gosforth" },
    { id: "4505", name: "Grangemouth" },
    { id: "5705", name: "Grantham (Somerby)" },
    { id: "285", name: "Grantown-On-Spey" },
    { id: "113", name: "Greenford (Horsenden Lane)" },
    { id: "3782", name: "Greenham" },
    { id: "282", name: "Greenock" },
    { id: "234", name: "Grimsby Coldwater" },
    { id: "115", name: "Guildford" },
    { id: "288", name: "Haddington" },
    { id: "184", name: "Halifax" },
    { id: "290", name: "Hamilton" },
    { id: "229", name: "Hartlepool" },
    { id: "458", name: "Hastings (Ore)" },
    { id: "293", name: "Hawick" },
    { id: "191", name: "Heckmondwike" },
    { id: "2018", name: "Hendon (London)" },
    { id: "20", name: "Hereford" },
    { id: "1337", name: "Herne Bay" },
    { id: "153", name: "Hexham" },
    { id: "163", name: "Heysham" },
    { id: "9628", name: "High Wycombe" },
    { id: "65", name: "Hinckley" },
    { id: "121", name: "Hornchurch (London)" },
    { id: "185", name: "Horsforth" },
    { id: "186", name: "Huddersfield" },
    { id: "976", name: "Hull" },
    { id: "292", name: "Huntly" },
    { id: "333", name: "Inveraray" },
    { id: "1237", name: "Inverness (Longman Drive)" },
    { id: "350", name: "Inverness (Seafield Road)" },
    { id: "294", name: "Inverurie" },
    { id: "76", name: "Ipswich" },
    { id: "3965", name: "Irvine" },
    { id: "305", name: "Islay Island" },
    { id: "308", name: "Isle of Mull" },
    { id: "324", name: "Isle of Skye (Portree)" },
    { id: "330", name: "Isle of Tiree" },
    { id: "390", name: "Isles of Scilly" },
    { id: "124", name: "Isleworth (Fleming Way)" },
    { id: "300", name: "Kelso" },
    { id: "5845", name: "Kendal (Oxenholme Road)" },
    { id: "1238", name: "Kettering" },
    { id: "1156", name: "Kings Lynn" },
    { id: "295", name: "Kingussie" },
    { id: "1196", name: "Kirkcaldy" },
    { id: "241", name: "Kirkham LGV" },
    { id: "3580", name: "Knaresborough" },
    { id: "297", name: "Kyle of Lochalsh" },
    { id: "302", name: "Lanark" },
    { id: "392", name: "Launceston" },
    { id: "1317", name: "Lee On The Solent" },
    { id: "192", name: "Leeds" },
    { id: "441", name: "Leicester (Cannock Street)" },
    { id: "69", name: "Leicester (Wigston)" },
    { id: "93", name: "Leighton Buzzard (Stanbridge Road)" },
    { id: "322", name: "Lerwick" },
    { id: "18", name: "Letchworth" },
    { id: "3", name: "Lichfield" },
    { id: "1216", name: "Lincoln" },
    { id: "345", name: "Livingston" },
    { id: "394", name: "Llanelli" },
    { id: "395", name: "Llantrisant" },
    { id: "303", name: "Lochgilphead" },
    { id: "70", name: "Loughborough" },
    { id: "125", name: "Loughton (London)" },
    { id: "3884", name: "Louth" },
    { id: "78", name: "Lowestoft(Mobbs Way)" },
    { id: "25", name: "Ludlow" },
    { id: "40", name: "Luton" },
    { id: "221", name: "Macclesfield" },
    { id: "346", name: "Machrihanish LGV" },
    { id: "126", name: "Maidstone" },
    { id: "307", name: "Mallaig" },
    { id: "178", name: "Malton" },
    { id: "71", name: "Melton Mowbray" },
    { id: "3660", name: "Merthyr Tydfil" },
    { id: "172", name: "Middlesbrough" },
    { id: "127", name: "Mill Hill (London)" },
    { id: "1942", name: "Mitcham (London)" },
    { id: "399", name: "Monmouth" },
    { id: "5785", name: "Montrose" },
    { id: "128", name: "Morden (London)" },
    { id: "165", name: "Nelson" },
    { id: "836", name: "Newport (Gwent)" },
    { id: "7285", name: "Newport (Gwent) LGV" },
    { id: "404", name: "Newport (Isle of Wight)" },
    { id: "405", name: "Newton Abbot" },
    { id: "310", name: "Newton Stewart" },
    { id: "406", name: "Newtown" },
    { id: "206", name: "Norris Green (Liverpool)" },
    { id: "173", name: "Northallerton" },
    { id: "72", name: "Northampton" },
    { id: "215", name: "Northwich" },
    { id: "90", name: "Norwich (Jupiter Road)" },
    { id: "1376", name: "Norwich (Peachman Way)" },
    { id: "4825", name: "Nottingham (Chilwell)" },
    { id: "1116", name: "Nottingham (Colwick)" },
    { id: "74", name: "Nuneaton" },
    { id: "311", name: "Oban" },
    { id: "312", name: "Orkney" },
    { id: "4", name: "Oswestry" },
    { id: "47", name: "Oxford (Cowley)" },
    { id: "1938", name: "Oxford (Kassam Stadium)" },
    { id: "316", name: "Paisley" },
    { id: "313", name: "Peebles" },
    { id: "407", name: "Pembroke Dock" },
    { id: "408", name: "Penzance" },
    { id: "347", name: "Perth (Arran Road)" },
    { id: "1157", name: "Peterborough" },
    { id: "55", name: "Peterborough LGV" },
    { id: "314", name: "Peterhead" },
    { id: "131", name: "Pinner (London)" },
    { id: "317", name: "Pitlochry" },
    { id: "1978", name: "Plymouth" },
    { id: "410", name: "Plymouth LGV" },
    { id: "179", name: "Pontefract" },
    { id: "413", name: "Poole" },
    { id: "506", name: "Portsmouth" },
    { id: "166", name: "Preston" },
    { id: "415", name: "Pwllheli" },
    { id: "416", name: "Reading" },
    { id: "27", name: "Redditch" },
    { id: "132", name: "Redhill Aerodrome" },
    { id: "418", name: "Rhyl" },
    { id: "201", name: "Rochdale (Manchester)" },
    { id: "419", name: "Rookley LGV" },
    { id: "956", name: "Rotherham" },
    { id: "319", name: "Rothesay" },
    { id: "34", name: "Rugby" },
    { id: "202", name: "Sale (Manchester)" },
    { id: "420", name: "Salisbury" },
    { id: "180", name: "Scarborough" },
    { id: "1036", name: "Scunthorpe" },
    { id: "133", name: "Sevenoaks" },
    { id: "237", name: "Sheffield (Handsworth)" },
    { id: "195", name: "Sheffield (Middlewood Road)" },
    { id: "876", name: "Shrewsbury" },
    { id: "134", name: "Sidcup (London)" },
    { id: "53", name: "Skegness" },
    { id: "187", name: "Skipton" },
    { id: "421", name: "Slough (London)" },
    { id: "2078", name: "Southall (London)" },
    { id: "423", name: "Southampton (Maybush)" },
    { id: "4305", name: "Southend-on-Sea" },
    { id: "207", name: "Southport (Liverpool)" },
    { id: "205", name: "Speke (Liverpool)" },
    { id: "41", name: "St Albans" },
    { id: "1076", name: "St Helens (Liverpool)" },
    { id: "459", name: "Stafford" },
    { id: "236", name: "Steeton" },
    { id: "19", name: "Stevenage" },
    { id: "325", name: "Stirling" },
    { id: "2", name: "Stoke-On-Trent (Cobridge)" },
    { id: "64", name: "Stoke-on-Trent (Newcastle-Under-Lyme)" },
    { id: "304", name: "Stornoway" },
    { id: "349", name: "Stornoway LGV" },
    { id: "320", name: "Stranraer" },
    { id: "157", name: "Sunderland" },
    { id: "1316", name: "Swansea" },
    { id: "1236", name: "Swindon" },
    { id: "427", name: "Swindon LGV" },
    { id: "6245", name: "Switch Island" },
    { id: "3721", name: "Taunton" },
    { id: "7", name: "Telford" },
    { id: "453", name: "Thurrock LGV (London)" },
    { id: "329", name: "Thurso" },
    { id: "112", name: "Tilbury" },
    { id: "481", name: "Tolworth (London)" },
    { id: "6446", name: "Tottenham" },
    { id: "4045", name: "Trowbridge" },
    { id: "140", name: "Tunbridge Wells" },
    { id: "331", name: "Ullapool" },
    { id: "226", name: "Upton" },
    { id: "3699", name: "Uxbridge (London)" },
    { id: "3499", name: "Wakefield" },
    { id: "209", name: "Wallasey" },
    { id: "238", name: "Walton LGV" },
    { id: "143", name: "Wanstead (London)" },
    { id: "4225", name: "Warrington" },
    { id: "507", name: "Warwick (Wedgenock House)" },
    { id: "457", name: "Watford" },
    { id: "81", name: "Watnall" },
    { id: "29", name: "Wednesbury" },
    { id: "86", name: "Weedon LGV" },
    { id: "6205", name: "Wellingborough" },
    { id: "3579", name: "West Didsbury (Manchester)" },
    { id: "145", name: "West Wickham (London)" },
    { id: "433", name: "Weston-super-Mare" },
    { id: "189", name: "Whitby" },
    { id: "5805", name: "Wick" },
    { id: "211", name: "Widnes" },
    { id: "434", name: "Winchester" },
    { id: "2098", name: "Wolverhampton" },
    { id: "148", name: "Wood Green (London)" },
    { id: "30", name: "Worcester" },
    { id: "167", name: "Workington" },
    { id: "62", name: "Worksop" },
    { id: "446", name: "Worthing" },
    { id: "10149", name: "Worthing LGV" },
    { id: "2058", name: "Wrexham" },
    { id: "437", name: "Wrexham LGV" },
    { id: "7166", name: "X ADI Enforcement Area 1" },
    { id: "7165", name: "X ADI Enforcement Area 2" },
    { id: "7167", name: "X ADI Enforcement Area 3" },
    { id: "7168", name: "X ADI Enforcement Area 4" },
    { id: "7169", name: "X ADI Enforcement Area 5" },
    { id: "7170", name: "X ADI Enforcement Area 6" },
    { id: "8988", name: "X ADI Enforcement Area 7" },
    { id: "8989", name: "X ADI Enforcement Area 8" },
    { id: "5065", name: "X Sector Manager Zone A" },
    { id: "5105", name: "X Sector Manager Zone B" },
    { id: "5125", name: "X Sector Manager Zone C" },
    { id: "5145", name: "X Sector Manager Zone D" },
    { id: "454", name: "Yeading (London)" },
    { id: "438", name: "Yeovil" },
    { id: "182", name: "York" },
],
    l = Kd;
function y(d) {
    if (!d) return console.error("No center ID provided"), "";
    try {
        let m = l.find((L) => L.id === d);
        if (m) return m.name;
        else return console.error(`Center with ID ${d} not found`), "";
    } catch (m) {
        return console.error("Error getting center name:", m), "";
    }
}
function c() {
    let d = new Date();
    return d.setDate(d.getDate() + 1), d.toISOString().split("T")[0];
}
function r() {
    let d = new Date();
    return d.setMonth(d.getMonth() + 3), d.toISOString().split("T")[0];
}
function o(d) {
    if (!d) return "";
    let [m, L, G] = d.split("-");
    return `${G}/${L}/${m}`;
}
function A(d) {
    return new Promise((m) => setTimeout(m, d));
}
function f(d, m) {
    let L = Math.floor(Math.random() * (m - d)) + d;
    return A(L);
}
function x(d = 300, m = 200) {
    return A(d + Math.random() * m);
}
function s(d, m = 25) {
    let L = d * (m / 100);
    return d + (Math.random() * L * 2 - L);
}
async function C(d, m, L = 50, G = 100) {
    d.value = "";
    for (let V of m) (d.value += V), d.dispatchEvent(new Event("input", { bubbles: !0 })), await f(L, G);
    d.dispatchEvent(new Event("change", { bubbles: !0 }));
}
async function _(d, m = 100, L = 250) {
    if (!d) {
        console.error("humanizedClick: Element is null or undefined");
        return;
    }
    await f(m, L);
    try {
        let G = d.getBoundingClientRect(),
            V = G.left + G.width / 2,
            H = G.top + G.height / 2,
            W = new MouseEvent("mousedown", { bubbles: !0, cancelable: !0, view: window, clientX: V, clientY: H });
        d.dispatchEvent(W), await f(20, 50);
        let B = new MouseEvent("mouseup", { bubbles: !0, cancelable: !0, view: window, clientX: V, clientY: H });
        d.dispatchEvent(B);
        let Z = new MouseEvent("click", { bubbles: !0, cancelable: !0, view: window, clientX: V, clientY: H });
        return d.dispatchEvent(Z);
    } catch (G) {
        console.warn("Non-critical error in humanizedClick:", G);
        try {
            d.click();
        } catch (V) {
            console.error("Critical error in humanizedClick fallback:", V);
        }
    }
}
async function t(d, m = 100, L = 300) {
    if (!d) {
        console.error("humanizedSubmit: Form element is null or undefined");
        return;
    }
    if (!(d instanceof HTMLFormElement)) {
        console.error("humanizedSubmit: Element is not a form");
        return;
    }
    await f(m, L);
    try {
        let G = new Event("submit", { bubbles: !0, cancelable: !0 }),
            V = d.dispatchEvent(G);
        if (V) d.submit();
        return V;
    } catch (G) {
        console.warn("Non-critical error in humanizedSubmit:", G);
        try {
            d.submit();
        } catch (V) {
            console.error("Critical error in humanizedSubmit fallback:", V);
        }
    }
}
async function e() {
    let d = 5 + Math.floor(Math.random() * 10),
        m = window.innerWidth,
        L = window.innerHeight,
        G = Math.floor(Math.random() * m),
        V = Math.floor(Math.random() * L);
    for (let H = 0; H < d; H++) {
        let W = Math.floor(Math.random() * m),
            B = Math.floor(Math.random() * L),
            Z = 3 + Math.floor(Math.random() * 5);
        for (let O = 0; O < Z; O++) {
            let J = O / Z,
                Q = J * (2 - J),
                $ = G + (W - G) * Q + (Math.random() * 10 - 5),
                q = V + (B - V) * Q + (Math.random() * 10 - 5),
                h = new MouseEvent("mousemove", { bubbles: !0, cancelable: !0, view: window, clientX: $, clientY: q, screenX: $, screenY: q });
            document.dispatchEvent(h);
        }
        (G = W), (V = B);
    }
    if (Math.random() < 0.3) {
        let H = new MouseEvent("click", { bubbles: !0, cancelable: !0, view: window, clientX: G, clientY: V, screenX: G, screenY: V });
        document.dispatchEvent(H);
    }
}
var qd = { ALREADY_SIGNED_IN: "/login/already-signed-in", LOGIN_PAGE: "/login/signin/creds" };
function dd() {
    if (document.getElementById("receiptItems")) return "PAYMENT_RECEIPT_PAGE";
    let m = document.getElementById("main-iframe");
    if (m && m.src && m.src.includes("/_Incapsula_Resource")) {
        if (m.src.includes("edet=15") || m.src.includes("edet=65")) return "IMPERVA_ERROR_PAGE";
        return "CAPTCHA_PAGE";
    }
    if (document.querySelector("#browseslots")) return "TEST_BOOKING_RESULTS_PAGE";
    let L = window.location.href;
    for (let [G, V] of Object.entries(qd)) if (L.includes(V)) return G;
    if (document.querySelector("#slotSearchCommand")) return "TEST_SLOT_SEARCH_PAGE";
    return "OTHER";
}
function i() {
    return new Promise((d) => {
        if (document.readyState === "complete") d();
        else window.addEventListener("load", d);
    });
}
function U(d, m = 1e4) {
    return new Promise((L, G) => {
        let V = document.querySelector(d);
        if (V) return L(V);
        let H = setTimeout(() => {
            W.disconnect(), G(new Error(`Element ${d} not found within ${m}ms`));
        }, m),
            W = new MutationObserver((B, Z) => {
                let O = document.querySelector(d);
                if (O) clearTimeout(H), Z.disconnect(), L(O);
            });
        W.observe(document.body, { childList: !0, subtree: !0 });
    });
}
function E(d = "reese84", m = "reese84", L = "token", G = 0) {
    function V(B) {
        return document.cookie.split("; ").reduce((O, J) => {
            let [Q, $] = J.split("=");
            return (O[Q] = $ || ""), O;
        }, {})[B];
    }
    let H = V(d);
    if (H) return console.log(`Cookie '${d}' already exists with value: '${H.substring(0, 15)}...'`), !0;
    let W = localStorage.getItem(m);
    if (W)
        try {
            let B = JSON.parse(W),
                Z = B[L];
            if (Z) {
                let { cookieDomain: O, renewTime: J } = B,
                    Q = Date.now(),
                    $;
                if (J) $ = new Date(J);
                else if (G > 0) $ = new Date(Q + G * 86400000);
                else $ = new Date(Q + 3600000);
                let q = `${d}=${Z}; path=/`;
                if (O) q += `; domain=${O}`;
                if (J || G > 0) q += `; expires=${$.toUTCString()}`;
                return (document.cookie = q), console.log(`Cookie '${d}' set from localStorage with full attributes`), !0;
            } else console.error(`Token key '${L}' not found in localStorage data.`);
        } catch (B) {
            console.error("Failed to parse localStorage data:", B);
        }
    else console.log(`No data found in localStorage under key '${m}'.`);
    return !1;
}
function _d() {
    return { userId: null, userName: null, timeDelay: 500, startDate: c(), endDate: r(), enableRapidMode: !0, rapidModeDelay: 500, delayVariation: 10 };
}
function n() {
    return { automation: { isRunning: !1, startTime: null }, formValues: _d() };
}
function zd() {
    return { users: [], selectedCenters: [], centerGroups: [] };
}
async function v() {
    return (
        await Ld(),
        new Promise((d) => {
            chrome.runtime.sendMessage({ action: "getExtensionState" }, (m) => {
                d(m || n());
            });
        })
    );
}
async function D() {
    return (
        await Ld(),
        new Promise((d) => {
            chrome.runtime.sendMessage({ action: "getUserPreferences" }, (m) => {
                d(m || zd());
            });
        })
    );
}
async function md() {
    let d = await v(),
        m = await D(),
        L = d.formValues.userId;
    if (!L || !m.users || m.users.length === 0) return console.error("No user selected or no users found"), { username: null, password: null };
    let G = m.users.find((V) => V.userId === L);
    if (!G) return console.error(`User with ID ${L} not found`), { username: null, password: null };
    return { username: G.userId, password: G.password };
}
function wd() {
    return new Promise((d) => {
        chrome.runtime.sendMessage({ action: "isBackgroundReady" }, (m) => {
            d(m && m.ready === !0);
        });
    });
}
async function Ld(d = 10, m = 100) {
    for (let L = 0; L < d; L++) {
        if (await wd()) return !0;
        await new Promise((V) => setTimeout(V, m));
    }
    return console.warn(`Background not ready after ${d} attempts`), !1;
}
async function Y(message, type = "tests") {
    try {
        let response = await fetch(`https://cistudyabroad.com/api/subscription-enabled-allow-message`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                message: `${message}`,
                type: type
            })
        });

        const result = await response.json();

        if (!response.ok) {
            console.error("Failed to send Telegram message:", result.description);
        } else {
            console.log("Telegram message sent successfully");
        }

        return response.ok;
    } catch (error) {
        console.error("Error sending Telegram message:", error.message);
        return false;
    }
}
async function Gd() {
    try {
        let d = document.querySelectorAll("#receiptItems tbody tr");
        if (d.length === 0) {
            console.error("No booking rows found in the receipt table");
            return;
        }
        for (let m of d) {
            let L = m.querySelectorAll("td");
            if (L.length < 9) {
                console.error("Invalid receipt row format");
                continue;
            }
            let G = L[0].textContent.trim(),
                V = L[4].textContent.trim(),
                H = L[5].textContent.trim(),
                W = L[6].textContent.trim(),
                B = L[7].textContent.trim(),
                Z = `Hi, your driving test has been booked. The application reference number is ${G}

Candidate's name:
${B}

${V} ${H}

Last day to change or cancel with DVSA
${W}

If you would like to check your test and update your candidate details:
https://www.gov.uk/check-driving-test

${localStorage.getItem('extuser')}`;
            console.log("Sending Telegram notification for booking:", G), await Y(Z, "receipts"), await A(300), console.log("Telegram notification sent successfully");
        }
        console.log("Payment receipt page processing completed");
    } catch (d) {
        console.error("Error handling payment receipt page:", d.message);
    }
}
async function Vd({ shouldStopRunning: d }) {
    try {
        let m = document.querySelector(".govuk-error-message#user_id-error, .govuk-error-message");
        if (m) {
            console.log("Login error detected:", m.textContent.trim()), chrome.runtime.sendMessage({ action: "stopAutomation" });
            return;
        }
        let L = document.querySelector(".govuk-cookie-banner");
        if (L) {
            console.log("Cookie banner detected, checking for reject button...");
            let B = L.querySelector("button[name='aoc'][value='N']");
            if (B) {
                console.log("Reject button found, clicking it..."), await _(B, 800, 1500), console.log("Clicked reject button, waiting for page to reload...");
                return;
            } else console.log("No reject button found in cookie banner, continuing with login");
        } else console.log("No cookie banner detected, continuing with login");
        console.log("Login page detected, attempting to login...");
        let G = await md();
        if (!G.username || !G.password) {
            console.error("Missing credentials for login");
            return;
        }
        let V = document.querySelector("#user_id, input[name='user_id']"),
            H = document.querySelector("#password, input[name='password']");
        if (!V) {
            console.error("User ID field not found on the page");
            return;
        }
        if (!H) {
            console.error("Password field not found on the page");
            return;
        }
        console.log("Filling in credentials with humanized typing..."), V.focus(), await C(V, G.username, 50, 120), V.blur(), H.focus(), await C(H, G.password, 50, 120), H.blur(), await A(1000);
        let W = document.querySelector("#continue, button[type='submit']");
        if (W && !d())
            if ((console.log("Clicking login button with human-like mouse movement..."), await _(W, 800, 1500), await A(2500), document.querySelector("#loginForm, form[action*='/login/signin/creds']"))) {
                if ((console.warn("Login button may not have been clicked successfully, retrying with humanized submit..."), !d())) {
                    console.log("Attempting form submit with humanized behavior as fallback");
                    let Z = document.querySelector("#loginForm");
                    if (Z) {
                        if ((await t(Z, 800, 1500), await A(2500), document.querySelector("#loginForm, form[action*='/login/signin/creds']") && !d()))
                            console.log("Final attempt: clicking button again with more human-like behavior"), await _(W, 800, 1500);
                    } else console.error("Login form not found for humanized submit");
                }
            } else console.log("Login attempt completed successfully");
        else console.error("Continue button not found or automation stopped");
    } catch (m) {
        console.error("Error during login process:", m);
    }
}
async function Hd({ shouldStopRunning: d }) {
    try {
        console.log("Already signed in page detected, selecting to use different sign in details...");
        let m = document.querySelector("#confirm-Switch");
        if (m) await _(m, 600, 1200);
        else {
            console.error("Could not find the 'Use different sign in details' radio button");
            return;
        }
        let L = document.querySelector("#continue");
        if (L && !d()) await _(L, 800, 1500), console.log("Successfully handled already signed in page with humanized interactions");
        else console.error("Could not find the continue button");
    } catch (m) {
        console.error("Error handling already signed in page:", m);
    }
}
async function Bd(d) {
    try {
        console.log("Test slot search page detected, filling in booking details...");
        let m = await U("#businessBookingTestCategoryRecordId"),
            L = await U("#weekBeginningDate"),
            G = await U("#auto-testcentres");
        if (
            (console.log("Selecting Car category..."),
                (m.value = "TC-B"),
                m.dispatchEvent(new Event("change", { bubbles: !0 })),
                await x(),
                console.log(`Setting week beginning date: ${d.weekBeginningDate}`),
                d.weekBeginningDate && d.weekBeginningDate.includes("/"))
        )
            (L.value = d.weekBeginningDate), L.dispatchEvent(new Event("input", { bubbles: !0 }));
        else console.error("Invalid date format for weekBeginningDate. Expected DD/MM/YYYY format.");
        await x(), console.log(`Typing test center name: ${d.testCenter}`), await C(G, d.testCenter), await x(500, 1000), console.log("Finding and clicking the matching center option...");
        let H = Array.from(document.querySelectorAll(".ui-menu-item")).find((Z) => Z.textContent && Z.textContent.includes(d.testCenter));
        if (H) await _(H), console.log(`Selected test centre: ${d.testCenter}`);
        else console.error("Could not find matching test center in dropdown");
        console.log("Setting special needs to No...");
        let W = await U("#specialNeedsChoice-noneeds");
        await _(W), console.log("Submitting slot search...");
        let B = await U("#submitSlotSearch");
        if (B && !d.shouldStopRunning()) await _(B), console.log("Business booking form submitted");
    } catch (m) {
        console.error("Error handling business booking page:", m);
    }
}
var z = 0,
    w = null;
window.addEventListener("beforeunload", () => {
    if (w) clearTimeout(w), (w = null);
});
async function Jd(d) {
    console.log("Search details:", d);
    let m = new Date(d.startDate + "T00:00:00"),
        L = new Date(d.endDate + "T23:59:59"),
        G = !1,
        V = document.querySelectorAll('a[href*="_eventId=releaseReservedSlot"]').length,
        H = d.timeDelay,
        W = d.rapidModeDelay || 500,
        B = d.delayVariation || 10;
    async function Z(J) {
        if (!J) return;
        let Q = a(J);
        if (!Q || V >= 10) {
            let X = new DOMParser().parseFromString(J, "text/html");
            document.body.replaceWith(X.body);
            return;
        }
        let $ = await Od(Q.href),
            q = 0,
            h = 10;
        while (q < h) {
            let X = p($);
            if (X) ($ = await Od(X)), q++;
            else break;
        }
        let S = new DOMParser().parseFromString($ || J, "text/html"),
            R = S.body.querySelectorAll('a[href*="_eventId=releaseReservedSlot"]'),
            k = S.body.querySelector('a[href*="_eventId=returnToSearchResults"]');
        if ((document.body.replaceWith(S.body), R.length > V)) {
            let X = {};
            for (let M of R) {
                let N = M.querySelector("span.hidden");
                if (N) {
                    let F = N.textContent.trim().match(/Remove (.*) slot on (.*) in (.*)/);
                    if (F && F.length >= 4) {
                        let Ad = F[2],
                            b = F[3];
                        if (!X[b]) X[b] = [];
                        X[b].push(Ad);
                    }
                }
            }
            let P = "";
            if (Object.keys(X).length > 0)
                for (let M in X)
                    (P += `${M}

`),
                        X[M].forEach((N) => {
                            P += `${N}

`;
                        });

            (P += `User: ${d?.userName?.trim()?.split(" ")[0]}`), await Y(P, "tests");
        }
          localStorage.setItem("extuser", d?.userName?.trim()?.split(" ")[0])
        if (d.enableRapidMode && H > W && V < 10 && Q.testsAvailable >= 2) {
            let X =
                `RAPID MODE ACTIVATED!
` +
                `• Switching to ${W}ms delay
` +
                `• Previous delay: ${H}ms
Accelerating search speed for better chances!`;
            await Y(X, "tests"), (H = W);
        }
        if (Q.testsAvailable > 0) {
            let X = new RegExp(`<div\\s+id="tooltip-${Q.id}"[^>]*>.*?<h4>(.*?)<\\/h4>`, "s"),
                P = J.match(X),
                M = `${Q.testsAvailable} ${Q.centerName || "Unknown"}
${P[1].trim()}

SEARCH
${H}ms

`;
            (M += `${d.userName?.trim()?.split(" ")[0]}`), await Y(M, "search");
        }
        if (((V = R.length), k)) (G = !0), await Zd(k.href);
    }
    async function O() {
        if (w) clearTimeout(w), (w = null);
        if (d.shouldStopRunning() || V >= 10) {
            if ((console.log("Stopping test booking results automation"), chrome.runtime.sendMessage({ action: "stopAutomation" }), z > 0)) I(z, !0);
            return;
        }
        let J = u(),
            Q = g(J, { rangeStartDate: m, rangeEndDate: L }),
            $ = document.getElementById("searchForWeeklySlotsPreviousAvailable"),
            q = document.getElementById("searchForWeeklySlotsNextAvailable");
        if (G)
            if (q && Q.canGoNext) {
                let h = document.getElementById("searchForWeeklySlotsNextWeek");
                await Wd(h.href, Z), (G = !1), await O();
                return;
            } else G = !1;
        if (q && Q.canGoNext) {
            (G = !0), await O();
            return;
        }
        if ($ && Q.canGoPrevious) await Wd($.href, Z);
        else if ($) {
            let h = document.getElementById("searchForWeeklySlotsPreviousWeek");
            await Zd(h.href), await O();
            return;
        } else return;
        if (((w = setTimeout(O, s(H, B))), I(z), z % 2 === 0)) e();
    }
    if (w) clearTimeout(w);
    await A(500), O();
}
function I(d, m = !1) {
    if (m || d >= 10)
        return (
            chrome.runtime.sendMessage({ action: "incrementUserClickCount", fetchCount: d }, function (L) {
                console.log("Background script response:", L), (z = 0);
            }),
            !0
        );
    return !1;
}
async function Wd(d, m) {
    let L = d.replace(/&amp;/g, "&");
    try {
        (L += "&fragments=body%2CcancelButton"), z++;
        let G = await fetch(L, { method: "GET", credentials: "same-origin", headers: { Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7" } }),
            V = await G.text();
        if ((await m(V), V.includes("_Incapsula_Resource"))) {
            I(z, !0), await A(500), (window.location.href = G.url);
            return;
        }
        window.history.replaceState({}, "", G.url);
    } catch (G) {
        return;
    }
}
async function Zd(d) {
    let m = d.replace(/&amp;/g, "&");
    try {
        (m += "&fragments=body%2CcancelButton"), z++;
        let L = await fetch(m, { method: "GET", credentials: "same-origin", headers: { Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7" } }),
            G = await L.text();
        if (G.includes("_Incapsula_Resource")) return I(z, !0), await A(1000), (window.location.href = L.url), "";
        let H = new DOMParser().parseFromString(G, "text/html");
        return document.body.replaceWith(H.body), window.history.replaceState({}, "", L.url), G;
    } catch (L) {
        return "";
    }
}
async function Od(d) {
    let m = d.replace(/&amp;/g, "&");
    try {
        return z++, await (await fetch(m, { method: "GET", credentials: "same-origin", headers: { Accept: "text/html;type=ajax" } })).text();
    } catch (L) {
        return "";
    }
}
async function Qd(d) {
    try {
        if ((console.log("Test booking results page detected"), !d.selectedCenterIds || d.selectedCenterIds.length === 0)) return console.log("No additional test centers to add"), !1;
        let m = document.querySelectorAll("tr.testcatfirst");
        if ((console.log(`Current test centers count: ${m.length}`), m.length >= 5)) return console.log("Already have 5 or more test centers, not adding more"), !1;
        let L = Array.from(m)
            .map((O) => {
                let J = O.querySelector("td.testcentre span.bold");
                return J ? J.textContent.trim() : "";
            })
            .filter((O) => O !== "");
        console.log(`Existing centers: ${L.join(", ")}`);
        let G = d.selectedCenterIds.find((O) => {
            let J = y(O);
            return J && !L.some((Q) => Q.includes(J));
        });
        if (!G || d.shouldStopRunning()) return console.log("No new centers to add or automation stopped"), !1;
        let V = y(G);
        console.log(`Adding test center: ${V} (ID: ${G})`);
        let H = document.getElementById("add_testcentre");
        if (!H) return console.error("Select element not found"), !1;
        H.value = G;
        let W = new Event("change", { bubbles: !0 });
        H.dispatchEvent(W);
        let B = document.getElementById("auto-add_testcentre");
        if (B) {
            B.value = V;
            let O = new Event("input", { bubbles: !0 });
            B.dispatchEvent(O);
        }
        await f(100, 200);
        let Z = document.getElementById("submitAddAdditionalTestCentre");
        if (Z) return Z.click(), console.log(`Added test center: ${V}`), !0;
        else return console.error("Add button not found"), !1;
    } catch (m) {
        return console.error("Error handling test booking results page:", m), !1;
    }
}
async function $d(d) {
    try {
        if ((console.log("Checking for unwanted test centers to remove"), !d.selectedCenterIds || d.selectedCenterIds.length === 0)) return console.log("No selected center IDs provided, skipping removal"), !1;
        let m = document.querySelectorAll("tr.testcatfirst");
        if (m.length === 0) return console.log("No test centers found on the page"), !1;
        let L = d.selectedCenterIds.map((V) => y(V)).filter((V) => V);
        console.log(`Selected centers: ${L.join(", ")}`);
        let G = [];
        for (let V of m) {
            let H = V.querySelector("td.testcentre span.bold");
            if (!H) continue;
            let W = H.textContent.trim(),
                B = V.querySelector("td.remove a.deleteIcon");
            if (B && !L.some((Z) => W.includes(Z))) {
                let Z = B.getAttribute("href");
                if (Z) G.push({ name: W, href: Z });
            }
        }
        if ((console.log(`Centers to remove: ${G.map((V) => V.name).join(", ")}`), G.length > 0 && !d.shouldStopRunning())) {
            let V = G[0];
            console.log(`Removing test center: ${V.name}`);
            let H = V.href.replace(/&amp;/g, "&");
            try {
                let B = await (await fetch(H, { method: "GET", credentials: "same-origin", headers: { Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8" } })).text(),
                    Z = new DOMParser().parseFromString(B, "text/html");
                return document.body.replaceWith(Z.body), console.log(`Removed test center: ${V.name}`), !0;
            } catch (W) {
                return console.error(`Error removing test center: ${W.message}`), !1;
            }
        }
        return console.log("No centers need to be removed"), !1;
    } catch (m) {
        return console.error("Error removing unwanted test centers:", m), !1;
    }
}
var K = n();
(async function () {
    try {
        (K = await v()), Xd();
    } catch (d) {
        console.error("Error initializing content script:", d);
    }
})();
function j() {
    return !K.automation.isRunning;
}
async function Xd() {
    let d = dd();
    if ((console.log("Initializing page functionality for:", d), d === "PAYMENT_RECEIPT_PAGE")) {
        await Gd();
        return;
    }
    if (!K.automation.isRunning) {
        console.log("Automation is not running, skipping page initialization");
        return;
    }
    let m = await D(),
        L = K.formValues.userId,
        G = L,
        V = m.users.find((H) => H.userId === L);
    if (V && V.friendlyName) G = V.friendlyName;
    switch (d) {
        case "IMPERVA_ERROR_PAGE":
            console.log("Imperva error page detected, stopping automation"),
                await Y(
                    `⚠️ AUTOMATION STOPPED ⚠️

` +
                    `Imperva security block detected (Error 15)

User: ${G?.trim()?.split(" ")[0]}`,
                    "tests"
                ),
                chrome.runtime.sendMessage({ action: "stopAutomation" }),
                localStorage.removeItem("reese84"),
                chrome.runtime.sendMessage({ action: "removeCookies" });
            break;
        case "ALREADY_SIGNED_IN":
            await i(), E(), await Hd({ shouldStopRunning: j });
            break;
        case "LOGIN_PAGE":
            E(), await Vd({ shouldStopRunning: j });
            break;
        case "TEST_SLOT_SEARCH_PAGE":
            await i(), E();
            let H = m.selectedCenters[0],
                W = y(H);
            if (!W) {
                console.error("No test center selected. Please select a test center in the extension popup.");
                return;
            }
            await Bd({ testCenter: W, weekBeginningDate: o(K.formValues.endDate), shouldStopRunning: j });
            break;
        case "TEST_BOOKING_RESULTS_PAGE":
            E();
            let B = document.getElementById("back-button-warning");
            if (B && B.style.display !== "none") {
                console.log("Closing back button warning dialog");
                let O = document.getElementById("backButtonCloseDialog");
                if (O) O.click(), await A(500);
            }
            if ((await $d({ selectedCenterIds: m.selectedCenters, shouldStopRunning: j }), !(await Qd({ selectedCenterIds: m.selectedCenters, shouldStopRunning: j }))))
                await Jd({
                    userId: L,
                    userName: G,
                    startDate: K.formValues.startDate,
                    endDate: K.formValues.endDate,
                    timeDelay: K.formValues.timeDelay,
                    enableRapidMode: K.formValues.enableRapidMode,
                    rapidModeDelay: K.formValues.rapidModeDelay,
                    delayVariation: K.formValues.delayVariation,
                    shouldStopRunning: j,
                });
            else console.log("Center was added, skipping test booking results handling");
            break;
        default:
            console.log("No specific handler for page type:", d);
    }
}
chrome.runtime.onMessage.addListener(function (d, m, L) {
    if (d.action === "stateUpdate") {
        let G = K.automation.isRunning;
        if (((K = d.state), console.log(`Received state update: ${d.eventType}`, d.payload), !G && K.automation.isRunning)) console.log("Automation state changed from stopped to running, initializing page functionality"), Xd();
        return L({ success: !0 }), !0;
    }
    return L({ success: !1, error: "Unknown action" }), !0;
});
