'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "28ce2d05f8cae689fee5c512ce989bdd",
"/": "28ce2d05f8cae689fee5c512ce989bdd",
"main.dart.js": "a241f52dbebed17f39c2a83928810bac",
"GinoAppsLLC.github.io/web/index.html": "28ce2d05f8cae689fee5c512ce989bdd",
"GinoAppsLLC.github.io/web/main.dart.js": "fe7b746bafd4c84908e4e7357f9aa541",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/web/index.html": "28ce2d05f8cae689fee5c512ce989bdd",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/web/main.dart.js": "fe7b746bafd4c84908e4e7357f9aa541",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/web/manifest.json": "b098d55a747e68376dbec693dc2c4a43",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/web/assets/AssetManifest.json": "c08e1c5059e9a194a3683e4f5eee43ed",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/web/assets/NOTICES": "dc5f2c1ff5e343cde6403c518fe94239",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/web/assets/FontManifest.json": "580ff1a5d08679ded8fcf5c6848cece7",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/web/assets/csv/sample.csv": "5e406b532f86816139921266071439a9",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/web/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/web/assets/assets/correct.flr": "fe98c36d8fb380ec8f0f4d4614b55894",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/web/assets/assets/wrong.flr": "86c786c9c19e4c48a90e90e63ac03e34",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/web/assets/assets/GinoappsLogo.png": "9a652dfbb977436babaf1069ba381455",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/.git/config": "2b56defe71ffd9be11ca1730a0698254",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/.git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/.git/objects/05/f61d271c3e6ee62cf84bffef06d6044b975420": "8b9c63fa4ba54dcffb8efd1672a56560",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/.git/objects/fd/deae5134a72739cdc7c460ca815da9bf91e11e": "72dfe66e607b0d634e5765404b19713e",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/.git/objects/e3/fa9beec84a819f8f308a73fda0288445c59b13": "cb3a65850e078762fac775e8d4937458",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/.git/objects/ca/ee84781c1fe307261fe49e7d4191b27cd45b2a": "3e2ec533c6ca98210427c1f95109117f",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/.git/objects/fb/8e42ccc964b5756313f51398b29d9cfd906b6f": "ec2e9a6ea578f8e43a9dab46a7c61910",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/.git/objects/7e/6e491681e5c28f4d3cd40cf600d410aa93cd9b": "0163d9a208963a72388189068d200e95",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/.git/objects/2a/e8a8dbad8685858514dbf491d6be5ba1626e06": "02ef971cd3a711f90b128f204c7f966b",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/.git/objects/88/619b33ebfc3bc3d657d9eddf1db3c1fe4bf689": "e2b021987dfcba102f6bab3afae16a9b",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/.git/objects/9a/a07a7ec900d27d1637709c968580d18dfae00c": "d124ae78fa895040680d32999206e7cb",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/.git/objects/06/fb63f280540d1e50df7eb0e964cd2e19785f7e": "1cdbb1a314f4f516942f01244bd272bb",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/.git/objects/55/1a95e27336babc27b2d204250a801305829934": "3c98f3ab2db85d3a08589fec2c202446",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/.git/objects/90/4b55ce958aabcb50199695ae49fc637a130764": "ab5141e7e872a527d245ed564b41411a",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/.git/objects/b1/69687786f068c01e18397bc0a864ca53e80d37": "6fb2666119c8f62d7bf0e241567d64e3",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/.git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/.git/objects/a1/ee7a91b7b8fea8507f35d1fd17542220970735": "a1980c2de3de8f061cb64a6005b665a0",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/.git/objects/79/0a82600d805ddc99a80858f623fa5c38f2c247": "96dfa9569e8ddec628e4f7616ef4277f",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/.git/objects/83/dd836467ce70a72393a9522117efe05b872eb1": "cd53091301aa6ece0e62dc7efe8ee831",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/.git/objects/4a/c656d03888d06c8a77238c230dc2c5a04cfe99": "d2fada8bee98a2d75ead8dad7f92f692",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/.git/objects/4f/f25b2acf4e354d14a0987c4cbc28388afd9ecf": "4316ed82bf08e9431f8ab1c4fa0e9ca2",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/.git/objects/12/9f9c8a9b263591bd55bd397d7195a9f5fe5ed3": "0649431171a24ec5e1da0f4ba90a7781",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/.git/logs/HEAD": "a01cde0bdde9b58e8be85baf5a53bfab",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/.git/logs/refs/heads/master": "a01cde0bdde9b58e8be85baf5a53bfab",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/.git/logs/refs/remotes/origin/HEAD": "a01cde0bdde9b58e8be85baf5a53bfab",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/.git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/.git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/.git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/.git/refs/heads/master": "6b79136a07f7e2c0854358012ad45c29",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/.git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/.git/index": "7736525ec921e1a173dd3225a818ac57",
"GinoAppsLLC.github.io/web/GinoAppsLLC.github.io/.git/packed-refs": "261eee28c996d0395050d84dc78d0eb2",
"GinoAppsLLC.github.io/web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"GinoAppsLLC.github.io/web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"GinoAppsLLC.github.io/web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"GinoAppsLLC.github.io/web/manifest.json": "b098d55a747e68376dbec693dc2c4a43",
"GinoAppsLLC.github.io/web/assets/AssetManifest.json": "c08e1c5059e9a194a3683e4f5eee43ed",
"GinoAppsLLC.github.io/web/assets/NOTICES": "dc5f2c1ff5e343cde6403c518fe94239",
"GinoAppsLLC.github.io/web/assets/FontManifest.json": "580ff1a5d08679ded8fcf5c6848cece7",
"GinoAppsLLC.github.io/web/assets/csv/sample.csv": "5e406b532f86816139921266071439a9",
"GinoAppsLLC.github.io/web/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"GinoAppsLLC.github.io/web/assets/assets/correct.flr": "fe98c36d8fb380ec8f0f4d4614b55894",
"GinoAppsLLC.github.io/web/assets/assets/wrong.flr": "86c786c9c19e4c48a90e90e63ac03e34",
"GinoAppsLLC.github.io/web/assets/assets/GinoappsLogo.png": "9a652dfbb977436babaf1069ba381455",
"GinoAppsLLC.github.io/.git/config": "2b56defe71ffd9be11ca1730a0698254",
"GinoAppsLLC.github.io/.git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
"GinoAppsLLC.github.io/.git/objects/0c/7ccfd701983969d01c2153711c2ef149931784": "080c6ebebe09f4c183e851cf754e5b1e",
"GinoAppsLLC.github.io/.git/objects/05/f61d271c3e6ee62cf84bffef06d6044b975420": "8b9c63fa4ba54dcffb8efd1672a56560",
"GinoAppsLLC.github.io/.git/objects/fd/deae5134a72739cdc7c460ca815da9bf91e11e": "72dfe66e607b0d634e5765404b19713e",
"GinoAppsLLC.github.io/.git/objects/e3/fa9beec84a819f8f308a73fda0288445c59b13": "cb3a65850e078762fac775e8d4937458",
"GinoAppsLLC.github.io/.git/objects/ca/ee84781c1fe307261fe49e7d4191b27cd45b2a": "3e2ec533c6ca98210427c1f95109117f",
"GinoAppsLLC.github.io/.git/objects/fb/8e42ccc964b5756313f51398b29d9cfd906b6f": "ec2e9a6ea578f8e43a9dab46a7c61910",
"GinoAppsLLC.github.io/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"GinoAppsLLC.github.io/.git/objects/1f/c092bf19a1a9a977c40421eb36d1985d3e8e6c": "85ae8b2d60a9de4288ec7bf65cfe169b",
"GinoAppsLLC.github.io/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"GinoAppsLLC.github.io/.git/objects/7e/6e491681e5c28f4d3cd40cf600d410aa93cd9b": "0163d9a208963a72388189068d200e95",
"GinoAppsLLC.github.io/.git/objects/2a/e8a8dbad8685858514dbf491d6be5ba1626e06": "02ef971cd3a711f90b128f204c7f966b",
"GinoAppsLLC.github.io/.git/objects/88/619b33ebfc3bc3d657d9eddf1db3c1fe4bf689": "e2b021987dfcba102f6bab3afae16a9b",
"GinoAppsLLC.github.io/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"GinoAppsLLC.github.io/.git/objects/9a/a07a7ec900d27d1637709c968580d18dfae00c": "d124ae78fa895040680d32999206e7cb",
"GinoAppsLLC.github.io/.git/objects/06/fb63f280540d1e50df7eb0e964cd2e19785f7e": "1cdbb1a314f4f516942f01244bd272bb",
"GinoAppsLLC.github.io/.git/objects/55/1a95e27336babc27b2d204250a801305829934": "3c98f3ab2db85d3a08589fec2c202446",
"GinoAppsLLC.github.io/.git/objects/90/4b55ce958aabcb50199695ae49fc637a130764": "ab5141e7e872a527d245ed564b41411a",
"GinoAppsLLC.github.io/.git/objects/b1/69687786f068c01e18397bc0a864ca53e80d37": "6fb2666119c8f62d7bf0e241567d64e3",
"GinoAppsLLC.github.io/.git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
"GinoAppsLLC.github.io/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"GinoAppsLLC.github.io/.git/objects/a1/ee7a91b7b8fea8507f35d1fd17542220970735": "a1980c2de3de8f061cb64a6005b665a0",
"GinoAppsLLC.github.io/.git/objects/e0/27554e514d8015af4df5d7628317af2e2b9ef0": "4e4262340a449f53c1d44302ec293086",
"GinoAppsLLC.github.io/.git/objects/79/0a82600d805ddc99a80858f623fa5c38f2c247": "96dfa9569e8ddec628e4f7616ef4277f",
"GinoAppsLLC.github.io/.git/objects/83/dd836467ce70a72393a9522117efe05b872eb1": "cd53091301aa6ece0e62dc7efe8ee831",
"GinoAppsLLC.github.io/.git/objects/4a/c656d03888d06c8a77238c230dc2c5a04cfe99": "d2fada8bee98a2d75ead8dad7f92f692",
"GinoAppsLLC.github.io/.git/objects/4f/f25b2acf4e354d14a0987c4cbc28388afd9ecf": "4316ed82bf08e9431f8ab1c4fa0e9ca2",
"GinoAppsLLC.github.io/.git/objects/12/9f9c8a9b263591bd55bd397d7195a9f5fe5ed3": "0649431171a24ec5e1da0f4ba90a7781",
"GinoAppsLLC.github.io/.git/objects/49/fb61c514a62fc615e8319fcbdbc1d5ae9e3bc5": "9ce87c81c5e0efc2eb5fd48d5cc4dbf0",
"GinoAppsLLC.github.io/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"GinoAppsLLC.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"GinoAppsLLC.github.io/.git/logs/HEAD": "801fbde796b6bbe09bdad86ccb1adbf2",
"GinoAppsLLC.github.io/.git/logs/refs/heads/master": "801fbde796b6bbe09bdad86ccb1adbf2",
"GinoAppsLLC.github.io/.git/logs/refs/remotes/origin/HEAD": "421b4a774103db3e6770f3eb9c84e3eb",
"GinoAppsLLC.github.io/.git/logs/refs/remotes/origin/master": "38c143fd4085b1a9ec9aefe14720f71d",
"GinoAppsLLC.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"GinoAppsLLC.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"GinoAppsLLC.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"GinoAppsLLC.github.io/.git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
"GinoAppsLLC.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"GinoAppsLLC.github.io/.git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
"GinoAppsLLC.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"GinoAppsLLC.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"GinoAppsLLC.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"GinoAppsLLC.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"GinoAppsLLC.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"GinoAppsLLC.github.io/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"GinoAppsLLC.github.io/.git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"GinoAppsLLC.github.io/.git/refs/heads/master": "5add18b98eca4ac510bb1b853b004c56",
"GinoAppsLLC.github.io/.git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
"GinoAppsLLC.github.io/.git/refs/remotes/origin/master": "5add18b98eca4ac510bb1b853b004c56",
"GinoAppsLLC.github.io/.git/index": "54edd0063ff17f2bebaaa80a61e7de7b",
"GinoAppsLLC.github.io/.git/packed-refs": "261eee28c996d0395050d84dc78d0eb2",
"GinoAppsLLC.github.io/.git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b098d55a747e68376dbec693dc2c4a43",
"assets/images/sample.png": "af4e72de142faf8f2ae17c709f377511",
"assets/AssetManifest.json": "f4034e0ec4e3557bafae238921f185c4",
"assets/ios/Flutter/App.framework/flutter_assets/AssetManifest.json": "c08e1c5059e9a194a3683e4f5eee43ed",
"assets/ios/Flutter/App.framework/flutter_assets/FontManifest.json": "580ff1a5d08679ded8fcf5c6848cece7",
"assets/NOTICES": "dc5f2c1ff5e343cde6403c518fe94239",
"assets/FontManifest.json": "580ff1a5d08679ded8fcf5c6848cece7",
"assets/csv/sample.csv": "2dad8188b89605f4fdd4cd5ff5b2f7a9",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/correct.flr": "fe98c36d8fb380ec8f0f4d4614b55894",
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
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
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
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
