document.addEventListener('DOMContentLoaded', () => {
    // Sorry for this long ass coordinates location i cant use JSON :c
    const coordinates = {
        "Johor Bahru": { "lat": 1.4927, "lon": 103.7414 },
        "Alor Setar": { "lat": 6.1189, "lon": 100.3604 },
        "Kota Bharu": { "lat": 6.1256, "lon": 102.2950 },
        "Melaka": { "lat": 2.1896, "lon": 102.2550 },
        "Seremban": { "lat": 2.7333, "lon": 101.9585 },
        "Kuantan": { "lat": 3.8075, "lon": 103.3250 },
        "George Town": { "lat": 5.4163, "lon": 100.3327 },
        "Ipoh": { "lat": 4.5960, "lon": 101.0901 },
        "Kangar": { "lat": 6.4412, "lon": 100.1947 },
        "Kota Kinabalu": { "lat": 5.9804, "lon": 116.0734 },
        "Kuching": { "lat": 1.5534, "lon": 110.3594 },
        "Shah Alam": { "lat": 3.0738, "lon": 101.5183 },
        "Kuala Terengganu": { "lat": 5.3281, "lon": 103.1430 },
        "Kuala Lumpur": { "lat": 3.139, "lon": 101.6869 },
        "Putrajaya": { "lat": 2.9266, "lon": 101.6970 },
        "Petaling Jaya": { "lat": 3.0738, "lon": 101.5983 },
        "Miri": { "lat": 4.4012, "lon": 113.9862 },
        "Sibu": { "lat": 2.2905, "lon": 111.8275 },
        "Kota Tinggi": { "lat": 1.7288, "lon": 103.9192 },
        "Tawau": { "lat": 4.2500, "lon": 117.8914 },
        "Sandakan": { "lat": 5.8418, "lon": 118.1172 },
        "Batu Pahat": { "lat": 1.8546, "lon": 102.9330 },
        "Bintulu": { "lat": 3.1667, "lon": 113.0421 },
        "Langkawi": { "lat": 6.3182, "lon": 99.6048 },
        "Labuan": { "lat": 5.2840, "lon": 115.2478 },
        "Seri Manjung": { "lat": 4.2096, "lon": 100.6320 },
        "Kuala Selangor": { "lat": 3.3661, "lon": 101.1835 },
        "Teluk Intan": { "lat": 4.0025, "lon": 101.0163 },
        "Lahad Datu": { "lat": 5.0314, "lon": 118.3172 },
        "Jerantut": { "lat": 3.9534, "lon": 102.3160 },
        "Nilai": { "lat": 2.7356, "lon": 101.7980 },
        "Cyberjaya": { "lat": 2.0105, "lon": 101.6472 },
        "Subang Jaya": { "lat": 3.0704, "lon": 101.5952 },
        "Subang": { "lat": 3.0704, "lon": 101.5952 },
        "Bangi": { "lat": 2.9470, "lon": 101.7840 },
        "Ampang": { "lat": 3.2332, "lon": 101.7497 },
        "Gombak": { "lat": 3.2192, "lon": 101.7402 },
        "Kota Belud": { "lat": 6.4002, "lon": 116.2921 },
        "Dungun": { "lat": 4.7755, "lon": 103.3355 },
        "Puncak Alam": { "lat": 3.1732, "lon": 101.4760 },
        "Tanjung Malim": { "lat": 3.5885, "lon": 101.5007 },
        "Kluang": { "lat": 2.0385, "lon": 103.3252 },
        "Seri Kembangan": { "lat": 3.0203, "lon": 101.7068 },
        "Muar": { "lat": 2.0471, "lon": 102.5691 },
        "Kota Puteri": { "lat": 1.4910, "lon": 103.3953 },
        "Batu Gajah": { "lat": 4.5688, "lon": 101.5486 },
        "Gerik": { "lat": 5.3745, "lon": 101.3870 },
        "Tumpat": { "lat": 6.1586, "lon": 102.2175 },
        "Kampung Gajah": { "lat": 4.2321, "lon": 100.7330 },
        "Gua Musang": { "lat": 4.1761, "lon": 101.8720 },
        "Pulau Pinang": { "lat": 5.4141, "lon": 100.3280 },
        "Sungai Petani": { "lat": 5.6450, "lon": 100.4870 },
        "Pulai": { "lat": 1.5071, "lon": 103.6880 },
        "Kota Damansara": { "lat": 3.1794, "lon": 101.5754 },
        "Cheras": { "lat": 3.1266, "lon": 101.7580 },
        "Puchong": { "lat": 3.0020, "lon": 101.6055 },
        "Rembau": { "lat": 2.6621, "lon": 102.0674 },
        "Pekan": { "lat": 3.3792, "lon": 103.3920 },
        "Semporna": { "lat": 4.4660, "lon": 118.6102 },
        "Kuala Kangsar": { "lat": 4.7575, "lon": 100.9660 },
        "Langgar": { "lat": 6.0902, "lon": 100.4242 },
        "Tebrau": { "lat": 1.5350, "lon": 103.7620 },
        "Jempol": { "lat": 2.6792, "lon": 102.1066 },
        "Gemas": { "lat": 2.9431, "lon": 102.0283 },
        "Sitiawan": { "lat": 4.2450, "lon": 100.6825 },
        "Lumut": { "lat": 4.1800, "lon": 100.6260 },
        "Chukai": { "lat": 4.2382, "lon": 103.4194 },
        "Jitra": { "lat": 6.1643, "lon": 100.7408 },
        "Matu": { "lat": 2.0770, "lon": 111.7760 },
        "Baling": { "lat": 5.6680, "lon": 100.8012 },
        "Taiping": { "lat": 4.8500, "lon": 100.7275 },
        "Kudat": { "lat": 6.8823, "lon": 116.8322 },
        "Sabak Bernam": { "lat": 3.6741, "lon": 100.7833 },
        "Kota Marudu": { "lat": 6.4200, "lon": 116.7192 },
        "Pasir Gudang": { "lat": 1.4469, "lon": 103.4236 },
        "Batu Kawan": { "lat": 5.3044, "lon": 100.4694 },
        "Bandar Tun Razak": { "lat": 3.0523, "lon": 101.7482 },
        "Rawang": { "lat": 3.3110, "lon": 101.5943 },
        "Perai": { "lat": 5.3943, "lon": 100.3981 },
        "Kampar": { "lat": 4.3171, "lon": 101.1833 },
        "Dengkil": { "lat": 2.9675, "lon": 101.7455 },
        "Banting": { "lat": 2.9931, "lon": 101.4847 },
        "Sungai Buloh": { "lat": 3.1791, "lon": 101.5961 },
        "Mersing": { "lat": 2.1621, "lon": 103.8496 },
        "Jasin": { "lat": 2.2544, "lon": 102.5380 },
        "Paya Rumput": { "lat": 2.2285, "lon": 102.2456 },
        "Tanjung Karang": { "lat": 3.4491, "lon": 101.1572 },
        "Tasek Gelugor": { "lat": 5.3935, "lon": 100.4822 },
        "Kampung Perak": { "lat": 4.8133, "lon": 102.8896 },
        "Sekinchan": { "lat": 3.4062, "lon": 101.1415 },
        "Lundu": { "lat": 3.6167, "lon": 109.4964 },
        "Pengerang": { "lat": 1.4228, "lon": 104.2266 },
        "Pasir Mas": { "lat": 6.0030, "lon": 102.1677 },
        "Papar": { "lat": 5.7625, "lon": 115.6975 },
        "Sungai Besar": { "lat": 3.5833, "lon": 100.7667 },
        "Kampung Baharu": { "lat": 3.1390, "lon": 101.6869 },
        "Setiawan": { "lat": 4.2164, "lon": 100.7076 },
        "Kota Kuala Muda": { "lat": 5.5565, "lon": 100.5027 },
        "Titiwangsa": { "lat": 3.1900, "lon": 101.7020 },
        "Selama": { "lat": 5.2888, "lon": 100.7750 },
        "Semenyih": { "lat": 2.9881, "lon": 101.7867 },
        "Klang": { "lat": 3.0333, "lon": 101.4450 },
        "Nusa Jaya": { "lat": 1.4833, "lon": 103.6725 },
        "Sungai Lalang": { "lat": 3.0333, "lon": 101.4667 },
        "Tampin": { "lat": 2.4423, "lon": 102.2314 },
        "Beaufort": { "lat": 5.3592, "lon": 115.7595 },
        "Masjid Tanah": { "lat": 2.4417, "lon": 102.2064 },
        "Kota Gelanggi": { "lat": 3.3069, "lon": 102.4882 },
        "Kota Samarahan": { "lat": 3.2051, "lon": 110.3762 },
        "Samarahan": { "lat": 3.1641, "lon": 110.4071 },
        "Sungai Siput": { "lat": 4.4183, "lon": 101.0972 },
        "Setiu": { "lat": 5.6467, "lon": 102.6307 },
        "Kota Gajah": { "lat": 4.1991, "lon": 101.0190 },
        "Kota Kemuning": { "lat": 3.0690, "lon": 101.5250 },
        "Pulau Indah": { "lat": 3.0280, "lon": 101.6888 },
        "Ulu Tiram": { "lat": 1.5222, "lon": 103.7410 },
        "Kampung Raja": { "lat": 5.7478, "lon": 102.2675 },
        "Mukah": { "lat": 2.9180, "lon": 112.0961 },
        "Sarikei": { "lat": 2.1639, "lon": 111.5469 },
        "Kapit": { "lat": 2.0073, "lon": 112.9291 },
        "Limbang": { "lat": 4.7578, "lon": 115.0172 },
        "Simanggang": { "lat": 1.9880, "lon": 111.5169 },
        "Betong": { "lat": 1.9558, "lon": 111.3765 },
        "Long Lama": { "lat": 3.6405, "lon": 114.3676 },
        "Tatau": { "lat": 3.1927, "lon": 112.7372 },
        "Sebuyau": { "lat": 1.4158, "lon": 110.4422 },
        "Sarawak": { "lat": 1.8661, "lon": 110.3626 },
        "Bau": { "lat": 1.4335, "lon": 110.2821 },
        "Kuching North": { "lat": 1.5712, "lon": 110.3748 },
        "Kuching South": { "lat": 1.5333, "lon": 110.3667 },
        "Padawan": { "lat": 1.5685, "lon": 110.3905 },
        "Dalat": { "lat": 2.1295, "lon": 111.6248 },
        "Pusa": { "lat": 1.9772, "lon": 111.5686 },
        "Niah": { "lat": 3.5024, "lon": 113.5757 },
        "Pakan": { "lat": 2.1578, "lon": 112.4719 },
        "Marudi": { "lat": 4.3667, "lon": 114.0670 },
        "Belaga": { "lat": 2.3736, "lon": 113.3485 },
        "Asajaya": { "lat": 1.4891, "lon": 110.4546 },
        "Serian": { "lat": 1.4833, "lon": 110.4321 },
        "Lawas": { "lat": 4.6792, "lon": 115.2230 },
        "Ngemah": { "lat": 2.1960, "lon": 112.4732 },
        "Selayang": { "lat": 3.2335, "lon": 101.6055 },
        "Kajang": { "lat": 2.9944, "lon": 101.7790 },
        "Hulu Selangor": { "lat": 3.2904, "lon": 101.6850 },
        "Sepang": { "lat": 2.7535, "lon": 101.7505 },
        "Tanjong Karang": { "lat": 3.2482, "lon": 101.2100 },
        "Serdang": { "lat": 3.0282, "lon": 101.6788 },
        "Batu Caves": { "lat": 3.2370, "lon": 101.6861 },
        "Bandar Saujana Putra": { "lat": 2.9508, "lon": 101.5243 },
        "Klang Gates": { "lat": 3.1813, "lon": 101.7393 },
        "Jelebu": { "lat": 2.9234, "lon": 101.6610 },
        "Tanjung Sepat": { "lat": 2.5736, "lon": 101.4070 },
        "Selangor": { "lat": 3.0942, "lon": 101.6827 },
        "Kuala Langat": { "lat": 2.7556, "lon": 101.5071 },
        "Putra Heights": { "lat": 3.0005, "lon": 101.5748 },
        "Bandar Baru Bangi": { "lat": 2.9674, "lon": 101.7900 },
        "Bukit Jelutong": { "lat": 3.1214, "lon": 101.5231 },
        "Sri Kembangan": { "lat": 3.0203, "lon": 101.7068 },
        "Sungai Tua": { "lat": 3.2462, "lon": 101.6417 },
        "Sungai Rasau": { "lat": 3.0139, "lon": 101.5795 },
        "Kampung Subang": { "lat": 3.1347, "lon": 101.5772 },
        "Batu 3": { "lat": 3.1062, "lon": 101.5977 },
        "Glenmarie": { "lat": 3.1117, "lon": 101.5915 },
        "Jinjang": { "lat": 3.1987, "lon": 101.6755 },
        "Bandar Mahkota Cheras": { "lat": 3.0422, "lon": 101.7675 },
        "Kampung Baru Subang": { "lat": 3.1386, "lon": 101.5858 },
        "Bandar Puchong Jaya": { "lat": 3.0164, "lon": 101.6058 },
        "Kampung Pandan": { "lat": 3.1347, "lon": 101.7365 },
        "Sekolah Kebangsaan Taman Templer": { "lat": 3.1664, "lon": 101.6223 },
        "Bandar Sunway": { "lat": 3.0730, "lon": 101.5906 },
        "Pandan Indah": { "lat": 3.1314, "lon": 101.7400 },
        "Bandar Tun Hussein Onn": { "lat": 3.0662, "lon": 101.7870 },
        "Taman Melawati": { "lat": 3.1988, "lon": 101.7594 },
        "Skudai": { "lat": 1.5716, "lon": 103.6288 },
        "Kulai": { "lat": 1.4698, "lon": 103.5885 },
        "Segamat": { "lat": 2.7254, "lon": 102.6306 },
        "Pontian": { "lat": 1.4448, "lon": 103.3842 },
        "Labis": { "lat": 2.3044, "lon": 102.5202 },
        "Simpang Renggam": { "lat": 1.6892, "lon": 103.6101 },
        "Tangkak": { "lat": 2.0441, "lon": 102.5966 },
        "Johor Jaya": { "lat": 1.4923, "lon": 103.7397 },
        "Desaru": { "lat": 1.5628, "lon": 103.9163 },
        "Sungai Rengit": { "lat": 1.3912, "lon": 104.2076 },
        "Kota Iskandar": { "lat": 1.4528, "lon": 103.6834 },
        "Permas Jaya": { "lat": 1.4927, "lon": 103.7914 },
        "Bandar Penawar": { "lat": 1.5036, "lon": 104.0706 },
        "Rengit": { "lat": 1.5986, "lon": 103.6540 },
        "Larkin": { "lat": 1.4822, "lon": 103.7773 },
        "Sungai Abong": { "lat": 2.0521, "lon": 102.5924 },
        "Kota Kecil": { "lat": 2.2163, "lon": 102.8624 },
        "Kempas": { "lat": 1.5234, "lon": 103.6467 },
        "Plentong": { "lat": 1.4733, "lon": 103.7717 },
        "Gelang Patah": { "lat": 1.4332, "lon": 103.6183 },
        "Simpang Lima": { "lat": 1.4895, "lon": 103.7555 },
        "Sedar": { "lat": 1.4353, "lon": 103.6372 },
        "Mawai": { "lat": 1.5021, "lon": 104.0223 },
        "Kota Senai": { "lat": 1.5984, "lon": 103.6541 },
        "Serom": { "lat": 2.0215, "lon": 102.9603 },
        "Endau": { "lat": 2.7268, "lon": 103.1986 },
        "Sedenak": { "lat": 2.5167, "lon": 102.7394 },
        "Bukit Batu": { "lat": 1.4675, "lon": 103.6532 },
        "Jementah": { "lat": 2.5962, "lon": 102.9112 },
        "Layang-Layang": { "lat": 1.7088, "lon": 103.5607 },
        "Sungai Merab": { "lat": 2.9291, "lon": 101.7578 },
        "Yong Peng": { "lat": 2.0263, "lon": 103.0566 },
        "Damansara Damai": { "lat": 3.1667, "lon": 101.6155 },
        "Taman Bukit Rambai": { "lat": 2.252693, "lon": 102.180061 },
        "Temerloh": { "lat": 3.4481, "lon": 102.4163 },
        "Bentong": { "lat": 3.5167, "lon": 101.9000 },
        "Maran": { "lat": 3.6150, "lon": 102.7806 },
        "Raub": { "lat": 3.7921, "lon": 101.8570 },
        "Bera": { "lat": 3.2060, "lon": 102.5500 },
        "Lipis": { "lat": 4.1540, "lon": 101.7693 },
        "Cameron Highlands": { "lat": 4.4753, "lon": 101.3621 },
        "Sungai Lembing": { "lat": 3.2082, "lon": 103.1320 },
        "Kuala Lipis": { "lat": 4.1833, "lon": 101.7667 },
        "Jengka": { "lat": 3.1825, "lon": 102.6480 },
        "Chini": { "lat": 3.3232, "lon": 102.8995 },
        "Benta": { "lat": 4.1985, "lon": 101.7544 },
        "Lanchang": { "lat": 3.4165, "lon": 102.2275 },
        "Paya Besar": { "lat": 3.6224, "lon": 102.7720 },
        "Tanah Rata": { "lat": 4.4747, "lon": 101.3667 },
        "Runchang": { "lat": 4.3877, "lon": 103.2641 },
        "Sempak": { "lat": 3.2333, "lon": 102.8236 },
        "Gambang": { "lat": 3.6513, "lon": 103.1476 },
        "Port Dickson": { "lat": 2.4996, "lon": 101.7591 },
        "Kuala Pilah": { "lat": 2.6930, "lon": 102.2096 },
        "Bahau": { "lat": 2.7092, "lon": 102.4365 },
        "Kota": { "lat": 2.7367, "lon": 101.8161 },
        "Senawang": { "lat": 2.7036, "lon": 101.9468 },
        "Seremban 2": { "lat": 2.7377, "lon": 101.9674 },
        "Pangkalan Panchor": { "lat": 2.8254, "lon": 102.1178 },
        "Linggi": { "lat": 2.4922, "lon": 101.5473 },
        "Salak": { "lat": 2.8192, "lon": 101.8745 },
        "Sungai Ujong": { "lat": 2.7281, "lon": 101.8926 },
        "Kampung Bagan": { "lat": 2.5145, "lon": 101.5660 },
        "Kampung Seri Murni": { "lat": 2.7195, "lon": 101.9426 },
        "Kampung Dato' Abdul Rahman": { "lat": 2.6627, "lon": 101.7960 },
        "Labu": { "lat": 2.7117, "lon": 101.7086 },
        "Batu 6": { "lat": 2.8039, "lon": 101.7790 },
        "Bukit Jalil": { "lat": 3.0569, "lon": 101.6817 },
        "Kota Seriemas": { "lat": 2.7796, "lon": 101.7512 },
        "Sungai Gadut": { "lat": 2.7156, "lon": 101.9489 },
        "Kampung Teras": { "lat": 2.7182, "lon": 101.9476 },
        "Kampung Padang": { "lat": 2.6610, "lon": 101.9148 },
        "Kampung Tanjung": { "lat": 2.6238, "lon": 101.8926 },
        "Kemaman": { "lat": 4.2395, "lon": 103.4285 },
        "Marang": { "lat": 5.2727, "lon": 103.0952 },
        "Hulu Terengganu": { "lat": 5.2173, "lon": 102.8865 },
        "Besut": { "lat": 5.6892, "lon": 102.9734 },
        "Permaisuri": { "lat": 5.3733, "lon": 102.6806 },
        "Tasik Kenyir": { "lat": 5.1910, "lon": 102.6919 },
        "Bukit Besi": { "lat": 4.7010, "lon": 103.1324 },
        "Ajil": { "lat": 5.3413, "lon": 102.8124 },
        "Cukai": { "lat": 4.2124, "lon": 103.4488 },
        "Kuala Berang": { "lat": 5.2300, "lon": 102.8350 },
        "Bukit Payung": { "lat": 5.3861, "lon": 103.0453 },
        "Lang Tengah": { "lat": 5.7332, "lon": 102.6904 },
        "Redang Island": { "lat": 5.7490, "lon": 103.0390 },
        "Paka": { "lat": 4.2432, "lon": 103.4132 },
        "Rantau Abang": { "lat": 5.3317, "lon": 103.1167 },
        "Kampung Bunut": { "lat": 5.1770, "lon": 102.9607 },
        "Kulim": { "lat": 5.3952, "lon": 100.5408 },
        "Kota Setar": { "lat": 6.1265, "lon": 100.3698 },
        "Pendang": { "lat": 6.0215, "lon": 100.4433 },
        "Kubang Pasu": { "lat": 6.1264, "lon": 100.6284 },
        "Gurun": { "lat": 5.7969, "lon": 100.5023 },
        "Padang Terap": { "lat": 6.3035, "lon": 100.6165 },
        "Sik": { "lat": 5.5945, "lon": 100.5880 },
        "Hulu Langat": { "lat": 6.0370, "lon": 100.7990 },
        "Tanjung Dawai": { "lat": 5.6694, "lon": 100.4281 },
        "Kuala Lumpur City Centre": { "lat": 3.1578, "lon": 101.7123 },
        "KLCC": { "lat": 3.1578, "lon": 101.7123 },
        "Bangsar": { "lat": 3.1290, "lon": 101.6709 },
        "Bukit Bintang": { "lat": 3.1480, "lon": 101.7136 },
        "Chinatown": { "lat": 3.1444, "lon": 101.6945 },
        "Setapak": { "lat": 3.1845, "lon": 101.7515 },
        "Sri Petaling": { "lat": 3.0594, "lon": 101.6752 },
        "Kepong": { "lat": 3.1877, "lon": 101.6064 },
        "Pudu": { "lat": 3.1308, "lon": 101.7134 },
        "Lembah Pantai": { "lat": 3.1225, "lon": 101.6707 },
        "Wangsa Maju": { "lat": 3.1885, "lon": 101.7334 },
        "Sentul": { "lat": 3.1886, "lon": 101.6763 },
        "Batu": { "lat": 3.2060, "lon": 101.6827 },
        "Titiwangsa Lake Gardens": { "lat": 3.1828, "lon": 101.6935 },
        "KL Sentral": { "lat": 3.1738, "lon": 101.6557 },
        "Masjid Jamek": { "lat": 3.1440, "lon": 101.6958 },
        "Perdana Botanical Garden": { "lat": 3.1731, "lon": 101.6860 },
        "National Mosque (Masjid Negara)": { "lat": 3.1664, "lon": 101.6885 },
        "Sunway Putra Mall": { "lat": 3.1794, "lon": 101.6950 },
        "Sungei Wang Plaza": { "lat": 3.1475, "lon": 101.7133 },
        "Central Market": { "lat": 3.1485, "lon": 101.6953 },
        "Pavilion Kuala Lumpur": { "lat": 3.1499, "lon": 101.7134 },
        "KL Bird Park": { "lat": 3.1555, "lon": 101.6942 },
        "Jalan Alor": { "lat": 3.1475, "lon": 101.7110 },
        "Mid Valley Megamall": { "lat": 3.1165, "lon": 101.6716 },
        "Bukit Nanas": { "lat": 3.1563, "lon": 101.7045 },
        "KL Tower": { "lat": 3.1514, "lon": 101.7508 },
        "Arau": { "lat": 6.4750, "lon": 100.2054 },
        "Kuala Perlis": { "lat": 6.4467, "lon": 100.1953 },
        "Beseri": { "lat": 6.4346, "lon": 100.2184 },
        "Padang Besar": { "lat": 6.6343, "lon": 100.2377 },
        "Simpang Empat": { "lat": 6.4583, "lon": 100.2191 },
        "Tanjung Perlis": { "lat": 6.4452, "lon": 100.1985 },
        "Kampung Tanjung Keling": { "lat": 6.4523, "lon": 100.2316 },
        "Kampung Padang Luas": { "lat": 6.4239, "lon": 100.2172 },
        "Kampung Telok Bahang": { "lat": 6.4556, "lon": 100.1880 },
        "Butterworth": { "lat": 5.3984, "lon": 100.3714 },
        "Bayan Lepas": { "lat": 5.3056, "lon": 100.2765 },
        "Tanjung Tokong": { "lat": 5.4632, "lon": 100.3140 },
        "Gelugor": { "lat": 5.4040, "lon": 100.3095 },
        "Sungai Dua": { "lat": 5.3669, "lon": 100.3053 },
        "Batu Ferringhi": { "lat": 5.4258, "lon": 100.2396 },
        "Pulau Tikus": { "lat": 5.4280, "lon": 100.3140 },
        "Seberang Perai": { "lat": 5.3973, "lon": 100.3791 },
        "Air Itam": { "lat": 5.4145, "lon": 100.3040 },
        "Penang Hill": { "lat": 5.4299, "lon": 100.2485 },
        "Kepala Batas": { "lat": 5.4462, "lon": 100.3721 },
        "Tanjung Bungah": { "lat": 5.4526, "lon": 100.3017 },
        "Bukit Mertajam": { "lat": 5.3086, "lon": 100.4722 },
        "Nibong Tebal": { "lat": 5.2585, "lon": 100.4690 },
        "Sungai Nibong": { "lat": 5.3020, "lon": 100.2760 },
        "Balik Pulau": { "lat": 5.3236, "lon": 100.2232 },
        "Penanti": { "lat": 5.4012, "lon": 100.4685 },
        "Paya Terubong": { "lat": 5.4235, "lon": 100.3090 },
        "Parit Buntar": { "lat": 4.7260, "lon": 100.5778 },
        "Beruas": { "lat": 4.3333, "lon": 100.6170 },
        "Manjung": { "lat": 4.2553, "lon": 100.6570 }    
    };

    document.getElementById('getWeather').addEventListener('click', async () => {
        const city = document.getElementById('city').value.trim(); 

        try {
            const normalizedCity = city.toLowerCase();
            const foundCity = Object.keys(coordinates).find(key => key.toLowerCase() === normalizedCity);

            console.log(`Searching for city: ${city}`); 

            if (foundCity) {
                fetchWeather(coordinates[foundCity].lat, coordinates[foundCity].lon);
            } else {
                alert(`City "${city}" not found! Please enter a valid Malaysian city.`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to load city coordinates.');
        }
    });

    async function fetchWeather(lat, lon) {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
        console.log(`Fetching weather data from: ${url}`); 
    
        try {
            const response = await fetch(url);
            console.log(`Response Status: ${response.status}`);
    
            if (response.ok) {
                const data = await response.json();
                console.log('Weather Data:', data); 
                displayWeather(data); 
            } else {
                console.error('Error fetching weather data, Status Code:', response.status);
            }
        } catch (error) {
            console.error('Fetch error:', error); 
        }
    }    

    function displayWeather(data) {
        const location = data.latitude && data.longitude 
            ? `Location: ${data.latitude.toFixed(4)}, ${data.longitude.toFixed(4)}`
            : 'Location: N/A';

        const temperature = `Temperature: ${data.current_weather.temperature}°C`;
        const windSpeed = `Wind Speed: ${data.current_weather.windspeed !== undefined ? data.current_weather.windspeed : 'N/A'} m/s`;

        document.getElementById('temperature').innerText = temperature;
        document.getElementById('description').innerText = `Condition: ${getWeatherDescription(data.current_weather.weathercode)}`; 
        document.getElementById('windSpeed').innerText = windSpeed;
        document.getElementById('location').innerText = location; 
    }

    function getWeatherDescription(weatherCode) {
        const weatherDescriptions = {
            0: 'Clear sky',
            1: 'Mainly clear',
            2: 'Partly cloudy',
            3: 'Overcast',
            45: 'Fog',
            48: 'Fog',
            51: 'Drizzle',
            53: 'Rain',
            61: 'Rain showers',
            71: 'Snow',
            81: 'Snow showers',
            95: 'Thunderstorm',
            96: 'Thunderstorm with hail',
            99: 'Thunderstorm with hail'
        };

        return weatherDescriptions[weatherCode] || 'Unknown weather condition';
    }
});

const musicButton = document.getElementById('musicButton');
const backgroundMusic = document.getElementById('backgroundMusic');
const musicStatus = document.getElementById('musicStatus');
let isPlaying = false;

// Music toggle
musicButton.addEventListener('click', function() {
    if (isPlaying) {
        backgroundMusic.pause();
        musicButton.textContent = "Play Music";
        musicStatus.textContent = "First Date on pause";
    } else {
        backgroundMusic.play();
        musicButton.textContent = "Pause Music";
        musicStatus.textContent = "Now playing: First Date by Frad";
    }
    isPlaying = !isPlaying;
});

//  Particles.js
particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
