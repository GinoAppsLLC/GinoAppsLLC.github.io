'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "7c002dca36422fff5b387fa06bcd7f96",
"index.html": "8ba3496ff5ea6d0fc23951bcec036da9",
"/": "8ba3496ff5ea6d0fc23951bcec036da9",
"main.dart.js": "260f70b9e413aa97ef3706abef7fb144",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "88728e6bccbab045fb9c8787b36f3bdb",
"assets/images/7_9_1_w3.png": "598677b926bcf71884dcfa0a53ecabb9",
"assets/images/7_9_1_w2.png": "2239c967d914c9fb7bd161d76e3492c3",
"assets/images/7_9_1_w1.png": "2f104367ffd956b1963d573b57b6c7ed",
"assets/images/16_26_5_w1.png": "ae6f1e2e3863696d5f1ab67a87983abf",
"assets/images/16_26_5_w3.png": "f454567ff85c22f6e6bf0c24753a8d40",
"assets/images/4_8.png": "b6e024d28c3bbfffe99d4f19ca588bae",
"assets/images/4_9.png": "20630b74bcf1d3f1203f628ccc000c88",
"assets/images/16_26_5_w2.png": "b01380ce506cc28dabc654072cbefee6",
"assets/images/7_61_4_w1.png": "de7f7d1af511213534f9e6eb2cc9928e",
"assets/images/7_61_4_w3.png": "7e353050210eea09d5841f075bfc8efc",
"assets/images/7_61_4_w2.png": "fbfd4827c4d8cec0512b6656961f8741",
"assets/images/16_26_3_w2.png": "d2bcba70ee351c6ef6fcaf7c1f2d697c",
"assets/images/16_26_3_w3.png": "0f617212e1efedbef4c2530725035b40",
"assets/images/16_26_3_w1.png": "dfdc2dc7c2db92db1bee89a59f5accf0",
"assets/images/7_62.png": "2eb3c3ae2029d403cd0fdf02ffd90c80",
"assets/images/16_26_2_c.png": "dfdc2dc7c2db92db1bee89a59f5accf0",
"assets/images/7_61_3_w1.png": "cf361c60f7413231b175c2c832acdcbb",
"assets/images/7_61_3_w3.png": "7e353050210eea09d5841f075bfc8efc",
"assets/images/7_61_3_w2.png": "fbfd4827c4d8cec0512b6656961f8741",
"assets/images/7_9_2_w2.png": "2b8a1f45bb0c3601d811266c5aab431e",
"assets/images/16_26_4_c.png": "0f617212e1efedbef4c2530725035b40",
"assets/images/16_26_4_w2.png": "b01380ce506cc28dabc654072cbefee6",
"assets/images/16_26_4_w3.png": "011a0d9f7e5762f06af170a84ce10f27",
"assets/images/7_9_2_w3.png": "598677b926bcf71884dcfa0a53ecabb9",
"assets/images/7_61_4_c.png": "cf361c60f7413231b175c2c832acdcbb",
"assets/images/7_9_2_w1.png": "4d7d33485585c8a55b4e47adea53329c",
"assets/images/7_9_2_c.png": "2f104367ffd956b1963d573b57b6c7ed",
"assets/images/16_26_4_w1.png": "ffbe541b672c8f0308a5b23daa2d887c",
"assets/images/7_61_5_w2.png": "cf361c60f7413231b175c2c832acdcbb",
"assets/images/7_61_5_w3.png": "7e353050210eea09d5841f075bfc8efc",
"assets/images/7_61_5_w1.png": "de7f7d1af511213534f9e6eb2cc9928e",
"assets/images/16_26_3_c.png": "011a0d9f7e5762f06af170a84ce10f27",
"assets/images/7_61_3_c.png": "de7f7d1af511213534f9e6eb2cc9928e",
"assets/images/16_26_2_w1.png": "d2bcba70ee351c6ef6fcaf7c1f2d697c",
"assets/images/16_26_5_c.png": "d2bcba70ee351c6ef6fcaf7c1f2d697c",
"assets/images/16_26_2_w3.png": "dad28f30579823f89f0c6671b59434b8",
"assets/images/7_61_5_c.png": "fbfd4827c4d8cec0512b6656961f8741",
"assets/images/16_26_2_w2.png": "d04e86a489662e5d6a0301de42fb58ae",
"assets/images/7_9_1_c.png": "4d7d33485585c8a55b4e47adea53329c",
"assets/AssetManifest.json": "d7dd78e69b29545e52189f80d03d2602",
"assets/NOTICES": "e2a1169a059f5b3f7586f7cfe69b5811",
"assets/FontManifest.json": "125d24b492fee8e60a6091ecd4d3407b",
"assets/csv/question.csv": "1940af8c8ffbdb891f84fe69d7c6445f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/font/hiragino_kakugo_w8.ttc": "172834353faac408e42f463f684de8e3",
"assets/font/hiragino_kakugo_w3.ttc": "48cf63fff677199e6e51f8129f37b4c7",
"assets/font/hiragino_kakugo_w4.ttc": "c9f4ee9c1148e2e776e3d61b015bee01",
"assets/font/hiragino_kakugo_w5.ttc": "ca811207baf02997d1b03b2c26573c9b",
"assets/font/hiragino_kakugo_w7.ttc": "bbcb5991f0f2c9ef01a750e620ed2484",
"assets/font/hiragino_kakugo_w6.ttc": "06d756eadffa98ceaf596ddf486840d6",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/correct.flr": "fa065ec83e453c14037913fd98b4816f",
"assets/assets/wrong.flr": "86c786c9c19e4c48a90e90e63ac03e34",
"assets/assets/GinoAppsLogo.png": "9a652dfbb977436babaf1069ba381455"
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
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
