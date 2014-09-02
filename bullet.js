var BulletJS = {
    getValue: function (str) {
        if (str === "[T]") {
            return true;
        } else if (str === "[F]") {
            return false;
        } else if (str !== "" && str == +str) {
            return +str;
        } else if (str[0] === "[" && str[str.length - 1] == "]") {
            var element = [];
            str = str.substring(1, str.length - 1);
            str = str.split(",");
            for (var i = 0; i < str.length; i++) {
                element.push(this.getValue(this.trim(str[i])));
            }
            return element;
        } else {
            return str;
        }
    },
    trim: function (str) {
        return str.replace(/^\s*/, "").replace(/\s*$/, "");
    },
    parse: function (content) {
        var result = {},
            lines = content.split("#"),
            index;
        lines.splice(0, 1);
        for (var i = 0; i < lines.length; i++) {
            lines[i] = this.trim(lines[i]);
            index = lines[i].indexOf(" ");
            result[lines[i].substring(0, index)] = this.getValue(this.trim(lines[i].substring(index + 1)));
        }
        return result;
    }
};

var test = "#name bullet#num 0.1#text beta#online [T]#array [123,443,34, string!]";
var myObject = BulletJS.parse(test);
console.log(myObject);