'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "3e8deb514b42cd27d9fb452376fcccc3",
".git/config": "d9a638613f78e57afba69684d90cc73e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "42041db79eee94a922bd7add177e080f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0d051e5932c6a7615d238efa7e0d66e4",
".git/logs/refs/heads/main": "82228c58dde0260c6309e111257d6c40",
".git/logs/refs/remotes/origin/main": "7ea027eacf32d5c347d397b581b5dc91",
".git/objects/08/2a83fcfaf2a549a0316fe71e3d464e9e430faf": "cbee352969c932bde310d007844a773f",
".git/objects/0b/9eadaa9c489dbb6130535481036b2313badbc8": "0e7d63b8700ae5c0af690ea37f81341d",
".git/objects/0d/57f936c8bea0d4f7703f2258d8d32c4f1c26ae": "4c7681755ccd78908f87dabe4ffe087f",
".git/objects/11/c333e0c13f8a349d8e6840285620455bb3af4d": "15cf62934a1efe97a7cda3b0e1648989",
".git/objects/13/e210177e2a9bfa92cb4a551c9dce314984b587": "10744d1ec84f366f190ede04cfd1f065",
".git/objects/18/08d64e62d967131c068059b7228987c4edc1e2": "05fcf3d97999bc7fadb0c07df300bcf6",
".git/objects/18/b1630e5215ffe3497a5d081ccbf9d964c13f10": "763fbb974e7bc863d380cae44ff1e678",
".git/objects/1b/d21e179ee31430e04a094c5b2f7190128d739f": "05540cac5fb6a936bafb9fb2e49364e3",
".git/objects/1d/9c6ee0c66d786a8ce761f5711441db600ca5a9": "51a8aafa2a6c4017b7233dcfec7ef055",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/9a06104f99b6c13901f4f32e076d5151043b6d": "06835de3f5bc852f274f21f61141c4b2",
".git/objects/29/7003ab92feb89d6a236fa9636c64a501312da1": "eaee4d486f36fa75d85f59b0486371ac",
".git/objects/2d/583c7dc55bc37f8d5298b0cd48c1e108adef52": "5b7df31ccc8494f4da0573cd4b1777bb",
".git/objects/2f/d3705c164e81df95e01e25b7f7abe85d102f6a": "2241ffefe30d3a2b0773b577de7550a4",
".git/objects/30/1645420d41909e7c8e084c7d4254d393dd4bda": "02b7a0b7197e8b0a002a261cd30d27e6",
".git/objects/37/6bf8d013509a651e3281ab51c6cdc79ebf6d3b": "dc413af609d5d176c961d7e071cd2bc5",
".git/objects/37/eecce7010fe62b00ff7d0c3f782609d90795d9": "57e66c18bbbc93e30a7ad2bea1faf4d7",
".git/objects/42/58d8be8ff827cedd9f1b27a0f4a564432e1c6f": "1293d0926d621c63ffda8cb2ec7ff228",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/986e6f3379a0f4cbba6b264d8c4315de7da6dc": "96929d7fcb4d63ca01c72724b1bbe167",
".git/objects/49/e7b6bb4d3a9f4f5d8387d9f53130008b50198d": "9408c027c50e4313b5961c5b1c54e920",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/4a/950f16a581b55bcc0458760cb7aeb15aa30a98": "4ea08a055fec3887cca779933998cb98",
".git/objects/50/0e2794d9f1bb782464b441c9a28069a01aa879": "59426e781c253d6321defd028d3bbe8c",
".git/objects/51/3b13f618ccba12e988b407ac9a09613cdc2090": "32a80c198b50a0ceaf647af62acfcc20",
".git/objects/5e/35e65b7fd650df01ad1de21e4f13f1e10aa0fd": "578adb7e42efb86aa134b9d87d201d8d",
".git/objects/66/ceb0bd3cd9e24affb4b709fcd7384a3ab69e0c": "f4edc223dd19aa8e155aeaf0b75828fd",
".git/objects/6b/2870467848e512932e959a273709d66a36131d": "ab3d6a0a162f45712c98321a145567a2",
".git/objects/6b/d9a63e5a834d23e554cd5a5b06f8aaf934db00": "710b6c151c49b8bd382cc9dee96bb75f",
".git/objects/6e/fe1b2cffb5e4d6acff733e19598223748a2c8e": "5271c7da639b4b208f255a0ecc528d82",
".git/objects/72/68b8811c9a954531b76667857b1ca1e9377cbd": "0931b0e02ca06ade9ff7c58c77ee414d",
".git/objects/74/17bb59188cb8271fe05b2170497432aa682c3f": "3aeb757905ab302a64030e64a9417649",
".git/objects/75/a640ace9dfdb7fa534756c7415d37789cef412": "a18e07d845055d3b4d84ca9d23c58744",
".git/objects/77/ebf8eb7c970f1c64464acefdbaa3ebd69fda09": "1b6de86e61c3ac8bf08b654104959d04",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/7cd37b4540d0bb662ac4a1286f26dd05fd987b": "efb7cc9e37b0fb902f020d16b1ceeef1",
".git/objects/7c/4aadf0efe64ea20738c0d49fa7c5fd4defc51d": "33191c27866c250bdd39586d68de9420",
".git/objects/7d/a0e7b2f3451e170b47d3410a932136dae147c9": "942c98d5448051b093bd4b6f89d08884",
".git/objects/7e/1a83aa4b99f143d89a96b4fff0fdfaff7d5c63": "43901cd13e9753cd668310134a441543",
".git/objects/7e/4a1bdc8634ac2e79560cea93596a50f08d9895": "00715bb41fbc3c58f6e83c22e0ac424d",
".git/objects/7f/c379b474124a544a25fcf31e9c67fbef73e218": "d635d8ad8b26687b5cfbcff2849950ca",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/60c29a1e4a0cdaa1631bb28a7b85ac4af426ab": "f0a11e6ee30d89f557a8ac1d957f9cb1",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/ab0f0b850a907313950b3358cf82f7889c101a": "cde48dd859193fc418d62560cf6c89d2",
".git/objects/90/36c46e77638a69ebc5aee3bd85e81087e2e83c": "a03e7ca2d179d68cffe4578c61d1088c",
".git/objects/91/7efa6a0477a6742d8665fa5a0e478474240ebf": "67f2cb232842499c664cfcbbe2049e03",
".git/objects/93/29be506b2ac73d3652266c3e3f93fb36b18600": "3da16e3d8802fca930f64bc41021c151",
".git/objects/93/8b75575f3024d4df890bebd7f9a47397a5894c": "6ccdac0681e955039e146a35a94f8d7d",
".git/objects/9a/5283756799f81ccd112043db1174cf4cc8e9f2": "28014e10e802ddd5045f3ce80bb75ba9",
".git/objects/9e/b388799a61b4b4909a56258bd2e18500b9382f": "09084897889c45ac0d5e42a5ee2ff511",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/af/97371da0f07abc18cb1e00a93ac05d9f16106d": "9f314cc12af651f9af8d464ade791bcc",
".git/objects/b0/03e15ce82cee67e77e70150045da9611e26338": "c338dd64d0af8dafaa2e4c46902775b3",
".git/objects/b3/66047046f5fb11db17e7a6a8396e6bea1c7050": "6f6ffd089aef773982137792f1a92142",
".git/objects/b4/767e9a9782ef846346face75bb3dacf4a390ec": "c64db0247c24e3483c98c784549258ac",
".git/objects/b4/9fdc9fcd338e9834cf713bc7934e5af97e35d2": "8c656d018d64d1f5c9e6b382bfa22416",
".git/objects/b6/b81563c6dc47fca7d5bfcd66855b6379a45167": "2c1b8e6cfbaeb6471623b700d6a28c94",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
".git/objects/c3/7f089963958a44b3f38b68667289d4bc8b199b": "3b031b51b737f2cf60e6a605e8439920",
".git/objects/c5/2446e0c8f7b0d53fcc75a00ef274871b3f92e6": "700c34d2685c05c735a222497595a6e0",
".git/objects/c5/73d8d9d8d685a5318f9b7c44dc0642b611cdb2": "d8864918dcfd984ec834b919425ebde4",
".git/objects/ca/4a6ecd59f38fc580baa1eba2205d5bbcc9266a": "ac7f13fe30c8cfa70ff72a800f82a32a",
".git/objects/d0/35638991da795ba99c501e9cfe6a5445470bfe": "95df1296a664d6d743934abb67e3a009",
".git/objects/d3/7d631730c5915ec11418d9815ef8744b9f2c95": "08d887f5dd8e74f78a37774491d156c7",
".git/objects/d5/8894a310ce9ef3b254104ea7cae0c29f0ef704": "0a28664a073567fe81f77588bc198711",
".git/objects/da/760e7d5ebaadb05496ce20d5ffb31d1aa14392": "3ccb85672540ab5d7224f0cb382e84e5",
".git/objects/df/00f6543ae9fea5f8c107eeafe38739242b5d99": "4114ca5f607cb1b6639a94ee617a5bd2",
".git/objects/e4/6ad0333d5489e337dc53dd89ea2aa5245e523f": "2130c601ae793a6836de056eedef1574",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/c4eee5a94853a6056b4f6785d0332ff2e6550d": "0eb46a73dc49e97609ddeeaefc32e05f",
".git/objects/ea/a8fc6ce8df58ca06c3b5120a9240c0218be3f7": "8eb72b7dc2a11c22f3e86a38e2c2dde4",
".git/objects/ec/2f24ffb8b520c7b64ca53ab14e77156014972e": "1df31d88abb45785d1d610e9b3ebee81",
".git/objects/ed/8becfdfafece9c2f4324eea53f0cd916e28051": "3a3fed21e7813e904c814357c28f9855",
".git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/fb/f360e62af66686860e666e9a02326fc07a0063": "2f87d3b3b303a77aecd3753cdcb5dad2",
".git/objects/fc/d084536bb3560050545f159ac4c5ff7ea12802": "d7c2bdc4af347f58b8666defc51ff09c",
".git/refs/heads/main": "759a967776abd6285c8f879df007bb13",
".git/refs/remotes/origin/main": "759a967776abd6285c8f879df007bb13",
"assets/AssetManifest.json": "a40817aacd8912104e7310dbd539ec55",
"assets/assets/audios/country.mp3": "93171c9a47d85d208076d869c69ca346",
"assets/assets/fonts/Poppins-Black.otf": "d5c1d5b27ca7c248e996ed36fddb2db1",
"assets/assets/fonts/Poppins-BlackItalic.otf": "242874089c5dd06f4746659b06e98f51",
"assets/assets/fonts/Poppins-Bold.otf": "e47421f9b8cec2661620743c53475c8d",
"assets/assets/fonts/Poppins-BoldItalic.otf": "39e02f68500b45efdf9d87f5770ca2cc",
"assets/assets/fonts/Poppins-ExtraBold.otf": "162a9aeb6c2ca8567f36a62f0d06da07",
"assets/assets/fonts/Poppins-ExtraBoldItalic.otf": "7b3f71ddeecbd98147bbfa4fcb5563b3",
"assets/assets/fonts/Poppins-ExtraLight.otf": "4918ffef121897b111a9cd50fa23ba34",
"assets/assets/fonts/Poppins-ExtraLightItalic.otf": "f62f58e8db33aaf6904dced1b2727cce",
"assets/assets/fonts/Poppins-Italic.otf": "64e838b9ef3275db2341f1b023caf63a",
"assets/assets/fonts/Poppins-Light.otf": "02c5a7af5427f03f93cd9094334ee181",
"assets/assets/fonts/Poppins-LightItalic.otf": "8dc38b6da4179fb6fbd123d815240bb7",
"assets/assets/fonts/Poppins-Medium.otf": "f88c443f02135a3ba091560e76ed767f",
"assets/assets/fonts/Poppins-MediumItalic.otf": "d11c31441864d4a8048a9763160f561b",
"assets/assets/fonts/Poppins-Regular.otf": "de2dd9339ae7636475fcd91b3ed0e24f",
"assets/assets/fonts/Poppins-SemiBold.otf": "b0b3d360d13a9649222edd1d844dfc9c",
"assets/assets/fonts/Poppins-SemiBoldItalic.otf": "9582ae7be5223034f369a722f052e448",
"assets/assets/fonts/Poppins-Thin.otf": "21792aea22dc450c1b24a2ffc656f6e0",
"assets/assets/fonts/Poppins-ThinItalic.otf": "42619485450df68137b1729c2cd128d2",
"assets/assets/fonts/SIL%2520Open%2520Font%2520License.txt": "c6159befcc4dca607b22b20f1295a901",
"assets/assets/icons/behance.svg": "1487dff57f5c15131037cb6965a4d0bf",
"assets/assets/icons/check.svg": "bce7a581bb999caac446c9138a57a401",
"assets/assets/icons/download.svg": "b73e60f4b685a08f6d9b2bd8bf272da0",
"assets/assets/icons/dribble.svg": "cf842513f50591eb280695ad14bfa409",
"assets/assets/icons/github.svg": "49b7a0f6543674cc4743ec1a9f02e368",
"assets/assets/icons/linkedin.svg": "02d123877cbe42d29360718a5d35b687",
"assets/assets/icons/pro.svg": "f129adb449f5877618adea3c88960b17",
"assets/assets/icons/twitter.svg": "3e25ad9135318357a6603c2c1f005206",
"assets/assets/icons/youtube.svg": "928eeec69f76c8406690e9ff62b7b22a",
"assets/assets/images/quote.png": "1a0aa9a06293ac5689bc32012e0e13e6",
"assets/assets/images/sp.gif": "b30add104cf7c41ef27aed7aeda5bcb6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "9f2a15120c75623d1cf5cb2efeb66c01",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/rflutter_alert/assets/images/2.0x/close.png": "abaa692ee4fa94f76ad099a7a437bd4f",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_error.png": "2da9704815c606109493d8af19999a65",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_info.png": "612ea65413e042e3df408a8548cefe71",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_success.png": "7d6abdd1b85e78df76b2837996749a43",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_warning.png": "e4606e6910d7c48132912eb818e3a55f",
"assets/packages/rflutter_alert/assets/images/3.0x/close.png": "98d2de9ca72dc92b1c9a2835a7464a8c",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_error.png": "15ca57e31f94cadd75d8e2b2098239bd",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_info.png": "e68e8527c1eb78949351a6582469fe55",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_success.png": "1c04416085cc343b99d1544a723c7e62",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_warning.png": "e5f369189faa13e7586459afbe4ffab9",
"assets/packages/rflutter_alert/assets/images/close.png": "13c168d8841fcaba94ee91e8adc3617f",
"assets/packages/rflutter_alert/assets/images/icon_error.png": "f2b71a724964b51ac26239413e73f787",
"assets/packages/rflutter_alert/assets/images/icon_info.png": "3f71f68cae4d420cecbf996f37b0763c",
"assets/packages/rflutter_alert/assets/images/icon_success.png": "8bb472ce3c765f567aa3f28915c1a8f4",
"assets/packages/rflutter_alert/assets/images/icon_warning.png": "ccfc1396d29de3ac730da38a8ab20098",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "32e1e836c0046a4bf857af0fb558d403",
"/": "32e1e836c0046a4bf857af0fb558d403",
"main.dart.js": "2c8485705a392224aed53283758521e6",
"manifest.json": "f56640b39255c1f19f9cbc03eb6872a4",
"version.json": "23b67aa0b3185bf629d2f5e67ec4e986"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
