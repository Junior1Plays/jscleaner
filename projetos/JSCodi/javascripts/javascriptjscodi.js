// JSCodi v1.0
// Encode & Decode

// Encode
function encode(string) {

    // Lower-case

    if(string.includes("a") === true) {
        var string = string.replaceAll("a", "{");
    }
    if(string.includes("b") === true) {
        var string = string.replaceAll("b", "ۑ");
    }
    if(string.includes("c") === true) {
        var string = string.replaceAll("c", "[");
    }
    if(string.includes("d") === true) {
        var string = string.replaceAll("d", "'");
    }
    if(string.includes("e") === true) {
        var string = string.replaceAll("e", '"');
    }
    if(string.includes("f") === true) {
        var string = string.replaceAll("f", ">");
    }
    if(string.includes("g") === true) {
        var string = string.replaceAll("g", "~");
    }
    if(string.includes("h") === true) {
        var string = string.replaceAll("h", "^");
    }
    if(string.includes("i") === true) {
        var string = string.replaceAll("i", "-");
    }
    if(string.includes("j") === true) {
        var string = string.replaceAll("j", "§");
    }
    if(string.includes("k") === true) {
        var string = string.replaceAll("k", "]");
    }
    if(string.includes("l") === true) {
        var string = string.replaceAll("l", "+");
    }
    if(string.includes("m") === true) {
        var string = string.replaceAll("m", "=");
    }
    if(string.includes("n") === true) {
        var string = string.replaceAll("n", "/");
    }
    if(string.includes("ª") === true) {
        var string = string.replaceAll("o", "ª");
    }
    if(string.includes("p") === true) {
        var string = string.replaceAll("p", "*");
    }
    if(string.includes("q") === true) {
        var string = string.replaceAll("q", "<");
    }
    if(string.includes("r") === true) {
        var string = string.replaceAll("r", "(");
    }
    if(string.includes("s") === true) {
        var string = string.replaceAll("s", "º");
    }
    if(string.includes("t") === true) {
        var string = string.replaceAll("t", "・");
    }
    if(string.includes("u") === true) {
        var string = string.replaceAll("u", "°");
    }
    if(string.includes("v") === true) {
        var string = string.replaceAll("v", "£");
    }
    if(string.includes("w") === true) {
        var string = string.replaceAll("w", "|");
    }
    if(string.includes("x") === true) {
        var string = string.replaceAll("x", "%");
    }
    if(string.includes("y") === true) {
        var string = string.replaceAll("y", "#");
    }
    if(string.includes("z") === true) {
        var string = string.replaceAll("z", "@");
    }

    // Capital letters

    if(string.includes("A") === true) {
        var string = string.replaceAll("A", "¤");
    }
    if(string.includes("B") === true) {
        var string = string.replaceAll("B", "¶");
    }
    if(string.includes("C") === true) {
        var string = string.replaceAll("C", "þ");
    }
    if(string.includes("D") === true) {
        var string = string.replaceAll("D", "æ");
    }
    if(string.includes("E") === true) {
        var string = string.replaceAll("E", 'Ø');
    }
    if(string.includes("F") === true) {
        var string = string.replaceAll("F", "♦");
    }
    if(string.includes("G") === true) {
        var string = string.replaceAll("G", "♥");
    }
    if(string.includes("H") === true) {
        var string = string.replaceAll("H", "♣");
    }
    if(string.includes("I") === true) {
        var string = string.replaceAll("I", "±");
    }
    if(string.includes("J") === true) {
        var string = string.replaceAll("J", "¦");
    }
    if(string.includes("K") === true) {
        var string = string.replaceAll("K", "฿");
    }
    if(string.includes("L") === true) {
        var string = string.replaceAll("L", "༊");
    }
    if(string.includes("M") === true) {
        var string = string.replaceAll("M", "ᐃ");
    }
    if(string.includes("N") === true) {
        var string = string.replaceAll("N", "ᐳ");
    }
    if(string.includes("O") === true) {
        var string = string.replaceAll("O", "»");
    }
    if(string.includes("P") === true) {
        var string = string.replaceAll("P", "¿");
    }
    if(string.includes("Q") === true) {
        var string = string.replaceAll("Q", "¬");
    }
    if(string.includes("R") === true) {
        var string = string.replaceAll("R", "®");
    }
    if(string.includes("S") === true) {
        var string = string.replaceAll("S", "µ");
    }
    if(string.includes("T") === true) {
        var string = string.replaceAll("T", "ǂ");
    }
    if(string.includes("U") === true) {
        var string = string.replaceAll("U", "Ɂ");
    }
    if(string.includes("V") === true) {
        var string = string.replaceAll("V", "Θ");
    }
    if(string.includes("W") === true) {
        var string = string.replaceAll("W", "۩");
    }
    if(string.includes("X") === true) {
        var string = string.replaceAll("X", "߷");
    }
    if(string.includes("Y") === true) {
        var string = string.replaceAll("Y", "இ");
    }
    if(string.includes("Z") === true) {
        var string = string.replaceAll("Z", "෴");
    }

    // Numbers

    if(string.includes("0") === true) {
        var string = string.replaceAll("0", "‽");
    }
    if(string.includes("1") === true) {
        var string = string.replaceAll("1", "⁇");
    }
    if(string.includes("2") === true) {
        var string = string.replaceAll("2", "‱");
    }
    if(string.includes("3") === true) {
        var string = string.replaceAll("3", "₪");
    }
    if(string.includes("4") === true) {
        var string = string.replaceAll("4", "℗");
    }
    if(string.includes("5") === true) {
        var string = string.replaceAll("5", "℣");
    }
    if(string.includes("6") === true) {
        var string = string.replaceAll("6", "∎");
    }
    if(string.includes("7") === true) {
        var string = string.replaceAll("7", "∑");
    }
    if(string.includes("8") === true) {
        var string = string.replaceAll("8", "↺");
    }
    if(string.includes("9") === true) {
        var string = string.replaceAll("9", "⌂");
    }

    // Tiny Accents

    if(string.includes("á") === true) {
        var string = string.replaceAll("á", "҉");
    }
    if(string.includes("à") === true) {
        var string = string.replaceAll("à", "҈");
    }
    if(string.includes("ã") === true) {
        var string = string.replaceAll("ã", "҇");
    }
    if(string.includes("â") === true) {
        var string = string.replaceAll("â", "҂");
    }
    if(string.includes("é") === true) {
        var string = string.replaceAll("é", "ӿ");
    }
    if(string.includes("è") === true) {
        var string = string.replaceAll("è", "ҩ");
    }
    if(string.includes("ê") === true) {
        var string = string.replaceAll("ê", "ѹ");
    }
    if(string.includes("í") === true) {
        var string = string.replaceAll("í", "Ѿ");
    }
    if(string.includes("ì") === true) {
        var string = string.replaceAll("ì", "҄");
    }
    if(string.includes("ó") === true) {
        var string = string.replaceAll("ó", "Ҵ");
    }
    if(string.includes("ò") === true) {
        var string = string.replaceAll("ò", "૦");
    }
    if(string.includes("ô") === true) {
        var string = string.replaceAll("ô", "ץ");
    }
    if(string.includes("õ") === true) {
        var string = string.replaceAll("õ", "۝");
    }
    if(string.includes("ú") === true) {
        var string = string.replaceAll("ú", "అ");
    }
    if(string.includes("ù") === true) {
        var string = string.replaceAll("ù", "ಈ");
    }
    if(string.includes("û") === true) {
        var string = string.replaceAll("û", "ඬ");
    }
    if(string.includes("ç") === true) {
        var string = string.replaceAll("ç", "ඣ");
    }
    
    // Capital Accents
    
    if(string.includes("Á") === true) {
        var string = string.replaceAll("Á", "⦿");
    }
    if(string.includes("À") === true) {
        var string = string.replaceAll("À", "⦷");
    }
    if(string.includes("Ã") === true) {
        var string = string.replaceAll("Ã", "⑧");
    }
    if(string.includes("Â") === true) {
        var string = string.replaceAll("Â", "┗");
    }
    if(string.includes("É") === true) {
        var string = string.replaceAll("É", "ⵘ");
    }
    if(string.includes("È") === true) {
        var string = string.replaceAll("È", "ⵣ");
    }
    if(string.includes("Ê") === true) {
        var string = string.replaceAll("Ê", "♔");
    }
    if(string.includes("Í") === true) {
        var string = string.replaceAll("Í", "◪");
    }
    if(string.includes("Ì") === true) {
        var string = string.replaceAll("Ì", "⚩");
    }
    if(string.includes("Ó") === true) {
        var string = string.replaceAll("Ó", "♰");
    }
    if(string.includes("Ò") === true) {
        var string = string.replaceAll("Ò", "♹");
    }
    if(string.includes("Ô") === true) {
        var string = string.replaceAll("Ô", "⚌");
    }
    if(string.includes("Õ") === true) {
        var string = string.replaceAll("Õ", "⨁");
    }
    if(string.includes("Ú") === true) {
        var string = string.replaceAll("Ú", "Ⰴ");
    }
    if(string.includes("Ù") === true) {
        var string = string.replaceAll("Ù", "Ⱎ");
    }
    if(string.includes("Û") === true) {
        var string = string.replaceAll("Û", "Ⱇ");
    }
    if(string.includes("Ç") === true) {
        var string = string.replaceAll("Ç", "ⴹ");
    }

    // Punctuation

    if(string.includes(".") === true) {
        var string = string.replaceAll(".", "´");
    }
    if(string.includes(",") === true) {
        var string = string.replaceAll(",", "`");
    }
    if(string.includes(":") === true) {
        var string = string.replaceAll(":", "〩");
    }
    if(string.includes(";") === true) {
        var string = string.replaceAll(";", "〨");
    }
    if(string.includes("?") === true) {
        var string = string.replaceAll("?", "⺈");
    }
    if(string.includes("!") === true) {
        var string = string.replaceAll("!", "⺌");
    }

    document.querySelector('input[name=output]').value = string;
}

// Decode
function decode(string) {

    // Lower-case

    if(string.includes("{") === true) {
        var string = string.replaceAll("{", "a");
    }
    if(string.includes("ۑ") === true) {
        var string = string.replaceAll("ۑ", "b");
    }
    if(string.includes("[") === true) {
        var string = string.replaceAll("[", "c");
    }
    if(string.includes("'") === true) {
        var string = string.replaceAll("'", "d");
    }
    if(string.includes('"') === true) {
        var string = string.replaceAll('"', "e");
    }
    if(string.includes(">") === true) {
        var string = string.replaceAll(">", "f");
    }
    if(string.includes("~") === true) {
        var string = string.replaceAll("~", "g");
    }
    if(string.includes("^") === true) {
        var string = string.replaceAll("^", "h");
    }
    if(string.includes("-") === true) {
        var string = string.replaceAll("-", "i");
    }
    if(string.includes("§") === true) {
        var string = string.replaceAll("§", "j");
    }
    if(string.includes("]") === true) {
        var string = string.replaceAll("]", "k");
    }
    if(string.includes("+") === true) {
        var string = string.replaceAll("+", "l");
    }
    if(string.includes("=") === true) {
        var string = string.replaceAll("=", "m");
    }
    if(string.includes("/") === true) {
        var string = string.replaceAll("/", "n");
    }
    if(string.includes("ª") === true) {
        var string = string.replaceAll("ª", "o");
    }
    if(string.includes("*") === true) {
        var string = string.replaceAll("*", "p");
    }
    if(string.includes("<") === true) {
        var string = string.replaceAll("<", "q");
    }
    if(string.includes("(") === true) {
        var string = string.replaceAll("(", "r");
    }
    if(string.includes("º") === true) {
        var string = string.replaceAll("º", "s");
    }
    if(string.includes("・") === true) {
        var string = string.replaceAll("・", "t");
    }
    if(string.includes("°") === true) {
        var string = string.replaceAll("°", "u");
    }
    if(string.includes("£") === true) {
        var string = string.replaceAll("£", "v");
    }
    if(string.includes("|") === true) {
        var string = string.replaceAll("|", "w");
    }
    if(string.includes("%") === true) {
        var string = string.replaceAll("%", "x");
    }
    if(string.includes("#") === true) {
        var string = string.replaceAll("#", "y");
    }
    if(string.includes("@") === true) {
        var string = string.replaceAll("@", "z");
    }

    // Capital letters

    if(string.includes("¤") === true) {
        var string = string.replaceAll("¤", "A");
    }
    if(string.includes("¶") === true) {
        var string = string.replaceAll("¶", "B");
    }
    if(string.includes("þ") === true) {
        var string = string.replaceAll("þ", "C");
    }
    if(string.includes("æ") === true) {
        var string = string.replaceAll("æ", "D");
    }
    if(string.includes('Ø') === true) {
        var string = string.replaceAll('Ø', "E");
    }
    if(string.includes("♦") === true) {
        var string = string.replaceAll("♦", "F");
    }
    if(string.includes("♥") === true) {
        var string = string.replaceAll("♥", "G");
    }
    if(string.includes("♣") === true) {
        var string = string.replaceAll("♣", "H");
    }
    if(string.includes("±") === true) {
        var string = string.replaceAll("±", "I");
    }
    if(string.includes("¦") === true) {
        var string = string.replaceAll("¦", "J");
    }
    if(string.includes("฿") === true) {
        var string = string.replaceAll("฿", "K");
    }
    if(string.includes("༊") === true) {
        var string = string.replaceAll("༊", "L");
    }
    if(string.includes("ᐃ") === true) {
        var string = string.replaceAll("ᐃ", "M");
    }
    if(string.includes("ᐳ") === true) {
        var string = string.replaceAll("ᐳ", "N");
    }
    if(string.includes("»") === true) {
        var string = string.replaceAll("»", "O");
    }
    if(string.includes("¿") === true) {
        var string = string.replaceAll("¿", "P");
    }
    if(string.includes("¬") === true) {
        var string = string.replaceAll("¬", "Q");
    }
    if(string.includes("®") === true) {
        var string = string.replaceAll("®", "R");
    }
    if(string.includes("µ") === true) {
        var string = string.replaceAll("µ", "S");
    }
    if(string.includes("ǂ") === true) {
        var string = string.replaceAll("ǂ", "T");
    }
    if(string.includes("Ɂ") === true) {
        var string = string.replaceAll("Ɂ", "U");
    }
    if(string.includes("Θ") === true) {
        var string = string.replaceAll("Θ", "V");
    }
    if(string.includes("۩") === true) {
        var string = string.replaceAll("۩", "W");
    }
    if(string.includes("߷") === true) {
        var string = string.replaceAll("߷", "X");
    }
    if(string.includes("இ") === true) {
        var string = string.replaceAll("இ", "Y");
    }
    if(string.includes("෴") === true) {
        var string = string.replaceAll("෴", "Z");
    }

    // Numbers

    if(string.includes("‽") === true) {
        var string = string.replaceAll("‽", "0");
    }
    if(string.includes("⁇") === true) {
        var string = string.replaceAll("⁇", "1");
    }
    if(string.includes("‱") === true) {
        var string = string.replaceAll("‱", "2");
    }
    if(string.includes("₪") === true) {
        var string = string.replaceAll("₪", "3");
    }
    if(string.includes("℗") === true) {
        var string = string.replaceAll("℗", "4");
    }
    if(string.includes("℣") === true) {
        var string = string.replaceAll("℣", "5");
    }
    if(string.includes("∎") === true) {
        var string = string.replaceAll("∎", "6");
    }
    if(string.includes("∑") === true) {
        var string = string.replaceAll("∑", "7");
    }
    if(string.includes("↺") === true) {
        var string = string.replaceAll("↺", "8");
    }
    if(string.includes("⌂") === true) {
        var string = string.replaceAll("⌂", "9");
    }

    // Tiny Accents

    if(string.includes("҉") === true) {
        var string = string.replaceAll("҉", "á");
    }
    if(string.includes("҈") === true) {
        var string = string.replaceAll("҈", "à");
    }
    if(string.includes("҇") === true) {
        var string = string.replaceAll("҇", "ã");
    }
    if(string.includes("҂") === true) {
        var string = string.replaceAll("҂", "â");
    }
    if(string.includes("ӿ") === true) {
        var string = string.replaceAll("ӿ", "é");
    }
    if(string.includes("ҩ") === true) {
        var string = string.replaceAll("ҩ", "è");
    }
    if(string.includes("ѹ") === true) {
        var string = string.replaceAll("ѹ", "ê");
    }
    if(string.includes("Ѿ") === true) {
        var string = string.replaceAll("Ѿ", "í");
    }
    if(string.includes("҄") === true) {
        var string = string.replaceAll("҄", "ì");
    }
    if(string.includes("Ҵ") === true) {
        var string = string.replaceAll("Ҵ", "ó");
    }
    if(string.includes("૦") === true) {
        var string = string.replaceAll("૦", "ò");
    }
    if(string.includes("ץ") === true) {
        var string = string.replaceAll("ץ", "ô");
    }
    if(string.includes("۝") === true) {
        var string = string.replaceAll("۝", "õ");
    }
    if(string.includes("అ") === true) {
        var string = string.replaceAll("అ", "ú");
    }
    if(string.includes("ಈ") === true) {
        var string = string.replaceAll("ಈ", "ù");
    }
    if(string.includes("ඬ") === true) {
        var string = string.replaceAll("ඬ", "û");
    }
    if(string.includes("ඣ") === true) {
        var string = string.replaceAll("ඣ", "ç");
    }

    // Capital Accents

    if(string.includes("⦿") === true) {
        var string = string.replaceAll("⦿", "Á");
    }
    if(string.includes("⦷") === true) {
        var string = string.replaceAll("⦷", "À");
    }
    if(string.includes("⑧") === true) {
        var string = string.replaceAll("⑧", "Ã");
    }
    if(string.includes("┗") === true) {
        var string = string.replaceAll("┗", "Â");
    }
    if(string.includes("ⵘ") === true) {
        var string = string.replaceAll("ⵘ", "É");
    }
    if(string.includes("ⵣ") === true) {
        var string = string.replaceAll("ⵣ", "È");
    }
    if(string.includes("♔") === true) {
        var string = string.replaceAll("♔", "Ê");
    }
    if(string.includes("◪") === true) {
        var string = string.replaceAll("◪", "Í");
    }
    if(string.includes("⚩") === true) {
        var string = string.replaceAll("⚩", "Ì");
    }
    if(string.includes("♰") === true) {
        var string = string.replaceAll("♰", "Ó");
    }
    if(string.includes("♹") === true) {
        var string = string.replaceAll("♹", "Ò");
    }
    if(string.includes("⚌") === true) {
        var string = string.replaceAll("⚌", "Ô");
    }
    if(string.includes("⨁") === true) {
        var string = string.replaceAll("⨁", "Õ");
    }
    if(string.includes("Ⰴ") === true) {
        var string = string.replaceAll("Ⰴ", "Ú");
    }
    if(string.includes("Ⱎ") === true) {
        var string = string.replaceAll("Ⱎ", "Ù");
    }
    if(string.includes("Ⱇ") === true) {
        var string = string.replaceAll("Ⱇ", "Û");
    }
    if(string.includes("ⴹ") === true) {
        var string = string.replaceAll("ⴹ", "Ç");
    }
    
    // Punctuation

    if(string.includes("´") === true) {
        var string = string.replaceAll("´", ".");
    }
    if(string.includes("`") === true) {
        var string = string.replaceAll("`", ",");
    }
    if(string.includes("〩") === true) {
        var string = string.replaceAll("〩", ":");
    }
    if(string.includes("〨") === true) {
        var string = string.replaceAll("〨", ";");
    }
    if(string.includes("⺈") === true) {
        var string = string.replaceAll("⺈", "?");
    }
    if(string.includes("⺌") === true) {
        var string = string.replaceAll("⺌", "!");
    }

    document.querySelector('input[name=output]').value = string;
}