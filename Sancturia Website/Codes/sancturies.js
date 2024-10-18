class Sanctuary {
    constructor(id, name, state) {
        this.id = id;
        this.name = name;
        this.state = state;
    }

    getInfo() {
        return `ID: ${this.id}, Sanctuary: ${this.name}, State: ${this.state}`;
    }
}

const sanctuaries = [
    new Sanctuary(1, 'Ranthambore National Park', 'Rajasthan'),
    new Sanctuary(2, 'Kaziranga National Park', 'Assam'),
    new Sanctuary(3, 'Jim Corbett National Park', 'Uttarakhand'),
    new Sanctuary(4, 'Sundarbans National Park', 'West Bengal'),
    new Sanctuary(5, 'Bandhavgarh National Park', 'Madhya Pradesh'),
    new Sanctuary(6, 'Gir National Park', 'Gujarat'),
    new Sanctuary(7, 'Periyar Wildlife Sanctuary', 'Kerala'),
    new Sanctuary(8, 'Manas National Park', 'Assam'),
    new Sanctuary(9, 'Keoladeo National Park', 'Rajasthan'),
    new Sanctuary(10, 'Nagarhole National Park', 'Karnataka'),
    new Sanctuary(11, 'Tadoba Andhari Tiger Reserve', 'Maharashtra'),
    new Sanctuary(12, 'Sariska Tiger Reserve', 'Rajasthan'),
    new Sanctuary(13, 'Panna National Park', 'Madhya Pradesh'),
    new Sanctuary(14, 'Satpura National Park', 'Madhya Pradesh'),
    new Sanctuary(15, 'Kanha National Park', 'Madhya Pradesh'),
    new Sanctuary(16, 'Pench National Park', 'Madhya Pradesh'),
    new Sanctuary(17, 'Mudumalai Wildlife Sanctuary', 'Tamil Nadu'),
    new Sanctuary(18, 'Bhitar Kanika Wildlife Sanctuary', 'Odisha'),
    new Sanctuary(19, 'Chinnar Wildlife Sanctuary', 'Kerala'),
    new Sanctuary(20, 'Bhadra Wildlife Sanctuary', 'Karnataka'),
    new Sanctuary(21, 'Valley of Flowers National Park', 'Uttarakhand'),
    new Sanctuary(22, 'Eravikulam National Park', 'Kerala'),
    new Sanctuary(23, 'Rajaji National Park', 'Uttarakhand'),
    new Sanctuary(24, 'Mukurthi National Park', 'Tamil Nadu'),
    new Sanctuary(25, 'Anamalai Tiger Reserve', 'Tamil Nadu'),
    new Sanctuary(26, 'Desert National Park', 'Rajasthan'),
    new Sanctuary(27, 'Hemis National Park', 'Ladakh'),
    new Sanctuary(28, 'Dandeli Wildlife Sanctuary', 'Karnataka'),
    new Sanctuary(29, 'Simlipal National Park', 'Odisha'),
    new Sanctuary(30, 'Palamau Tiger Reserve', 'Jharkhand'),
    new Sanctuary(31, 'Buxa Tiger Reserve', 'West Bengal'),
    new Sanctuary(32, 'Mouling National Park', 'Arunachal Pradesh'),
    new Sanctuary(33, 'Sundha Mata Wildlife Sanctuary', 'Rajasthan'),
    new Sanctuary(34, 'Bannerghatta National Park', 'Karnataka'),
    new Sanctuary(35, 'Simbalbara National Park', 'Himachal Pradesh'),
    new Sanctuary(36, 'Betla National Park', 'Jharkhand'),
    new Sanctuary(37, 'Mukundra Hills National Park', 'Rajasthan'),
    new Sanctuary(38, 'Great Himalayan National Park', 'Himachal Pradesh'),
    new Sanctuary(39, 'Neora Valley National Park', 'West Bengal'),
    new Sanctuary(40, 'Dudhwa National Park', 'Uttar Pradesh'),
    new Sanctuary(41, 'Nameri National Park', 'Assam'),
    new Sanctuary(42, 'Murlen National Park', 'Mizoram'),
    new Sanctuary(43, 'Ranganathittu Bird Sanctuary', 'Karnataka'),
    new Sanctuary(44, 'Cotigao Wildlife Sanctuary', 'Goa'),
    new Sanctuary(45, 'Kuno Wildlife Sanctuary', 'Madhya Pradesh'),
    new Sanctuary(46, 'Jaldapara National Park', 'West Bengal'),
    new Sanctuary(47, 'Khangchendzonga National Park', 'Sikkim'),
    new Sanctuary(48, 'Orang National Park', 'Assam'),
    new Sanctuary(49, 'Pobitora Wildlife Sanctuary', 'Assam'),
    new Sanctuary(50, 'Dibru-Saikhowa National Park', 'Assam'),
    new Sanctuary(51, 'Silent Valley National Park', 'Kerala'),
    new Sanctuary(52, 'Gulf of Mannar Marine National Park', 'Tamil Nadu'),
    new Sanctuary(53, 'Rupi Bhaba Wildlife Sanctuary', 'Himachal Pradesh'),
    new Sanctuary(54, 'Kalesar National Park', 'Haryana'),
    new Sanctuary(55, 'Karimpuzha Wildlife Sanctuary', 'Kerala'),
    new Sanctuary(56, 'Gorumara National Park', 'West Bengal'),
    new Sanctuary(57, 'Tal Chhapar Wildlife Sanctuary', 'Rajasthan'),
    new Sanctuary(58, 'Kalakad Mundanthurai Tiger Reserve', 'Tamil Nadu'),
    new Sanctuary(59, 'Gandhi Sagar Wildlife Sanctuary', 'Madhya Pradesh'),
    new Sanctuary(60, 'Guindy National Park', 'Tamil Nadu'),
    new Sanctuary(61, 'Mhadei Wildlife Sanctuary', 'Goa'),
    new Sanctuary(62, 'Sasthamkotta Lake Wildlife Sanctuary', 'Kerala'),
    new Sanctuary(63, 'Papikonda National Park', 'Andhra Pradesh'),
    new Sanctuary(64, 'Jambughoda Wildlife Sanctuary', 'Gujarat'),
    new Sanctuary(65, 'Koundinya Wildlife Sanctuary', 'Andhra Pradesh'),
    new Sanctuary(66, 'Sri Venkateswara National Park', 'Andhra Pradesh'),
    new Sanctuary(67, 'Chandaka-Dampara Wildlife Sanctuary', 'Odisha'),
    new Sanctuary(68, 'Mollem National Park', 'Goa'),
    new Sanctuary(69, 'Kumbhalgarh Wildlife Sanctuary', 'Rajasthan'),
    new Sanctuary(70, 'Jawai Bandh Leopard Conservation Reserve', 'Rajasthan'),
    new Sanctuary(71, 'Ghatigaon Wildlife Sanctuary', 'Madhya Pradesh'),
    new Sanctuary(72, 'Nokrek National Park', 'Meghalaya'),
    new Sanctuary(73, 'Mahavir Harina Vanasthali National Park', 'Telangana'),
    new Sanctuary(74, 'Rajiv Gandhi Orang National Park', 'Assam'),
    new Sanctuary(75, 'Sitamata Wildlife Sanctuary', 'Rajasthan'),
    new Sanctuary(76, 'Sharavati Valley Wildlife Sanctuary', 'Karnataka'),
    new Sanctuary(77, 'Vikramshila Gangetic Dolphin Sanctuary', 'Bihar'),
    new Sanctuary(78, 'Eturnagaram Wildlife Sanctuary', 'Telangana'),
    new Sanctuary(79, 'Wayanad Wildlife Sanctuary', 'Kerala'),
    new Sanctuary(80, 'Indira Gandhi Wildlife Sanctuary', 'Tamil Nadu'),
    new Sanctuary(81, 'Topchanchi Wildlife Sanctuary', 'Jharkhand'),
    new Sanctuary(82, 'Gautala Autramghat Wildlife Sanctuary', 'Maharashtra'),
    new Sanctuary(83, 'Mahatma Gandhi Marine National Park', 'Andaman and Nicobar Islands'),
    new Sanctuary(84, 'Sundha Mata Wildlife Sanctuary', 'Rajasthan'),
    new Sanctuary(85, 'Sirohi National Park', 'Manipur'),
    new Sanctuary(86, 'Balaram Ambaji Wildlife Sanctuary', 'Gujarat'),
    new Sanctuary(87, 'Nahargarh Wildlife Sanctuary', 'Rajasthan'),
    new Sanctuary(88, 'Singhori Wildlife Sanctuary', 'Madhya Pradesh'),
    new Sanctuary(89, 'Thol Lake Wildlife Sanctuary', 'Gujarat'),
    new Sanctuary(90, 'Rehekuri Blackbuck Sanctuary', 'Maharashtra'),
    new Sanctuary(91, 'Khijadiya Bird Sanctuary', 'Gujarat'),
    new Sanctuary(92, 'Singalila National Park', 'West Bengal'),
    new Sanctuary(93, 'Ghatprabha Bird Sanctuary', 'Karnataka'),
    new Sanctuary(94, 'Nagzira Wildlife Sanctuary', 'Maharashtra'),
    new Sanctuary(95, 'Sathyamangalam Tiger Reserve', 'Tamil Nadu'),
    new Sanctuary(96, 'Hazaribagh Wildlife Sanctuary', 'Jharkhand'),
    new Sanctuary(97, 'Bison Wildlife Sanctuary', 'Arunachal Pradesh'),
    new Sanctuary(98, 'Ajanta Wildlife Sanctuary', 'Maharashtra'),
    new Sanctuary(99, 'Navegaon National Park', 'Maharashtra'),
    new Sanctuary(100, 'Pench Tiger Reserve', 'Madhya Pradesh')
];

// Example usage:
console.log(sanctuaries[2].getInfo());  // Output: "ID: 1, Sanctuary: Ranthambore National Park, State: Rajasthan"

// Search by name
function findSanctuaryByName(name) {
    return sanctuaries.find(sanctuary => sanctuary.name.toLowerCase() === name.toLowerCase());
}

// Example usage
console.log(findSanctuaryByName('Kaziranga National Park').getInfo());
