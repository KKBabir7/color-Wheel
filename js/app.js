document.addEventListener("DOMContentLoaded", function () {
    const colorWheel = document.getElementById("colorWheel");
    const hexColorInfo = document.getElementById("HEXColor");
    const rgbColorInfo = document.getElementById("RGBColor");
    const colorCircle = document.getElementById("colorCircle");

    function createColorDiv(color, className) {
        const colorDiv = document.createElement("div");
        colorDiv.className = `colorDiv ${className}`;
        const additionalContainer = document.createElement("div");
        additionalContainer.className = "additionalContainer";

        for (let j = 0; j < 12; j++) {
            const additionalDiv = document.createElement("div");
            additionalDiv.className = "additionalDiv";
            const ratio = j / 11;
            const gradientColor = interpolateColor(color, '#ffffff', ratio);
            additionalDiv.style.borderTopColor = gradientColor.hex;
            additionalDiv.addEventListener("mousemove", function (event) {
                moveColorCircle(event, gradientColor.hex);
            });
            colorDiv.addEventListener("mouseout", function () {
                      colorCircle.style.display = "none";
                  });
            additionalDiv.addEventListener("click", function () {
                displayColorInfo(gradientColor);
                document.getElementById("colorInfo").style.backgroundColor=gradientColor.hex
                document.getElementById("colorInfo").style.display='flex'
            });
            additionalContainer.appendChild(additionalDiv);
        }

        colorDiv.appendChild(additionalContainer);
        colorWheel.appendChild(colorDiv);
    }
    createColorDiv("#3F509C", "color01");
    createColorDiv("#0A50A0", "color02");
    createColorDiv("#0474B8", "color03");
    createColorDiv("#0B86C9", "color04");
    createColorDiv("#00AB9B", "color05");
    createColorDiv("#47AB93", "color06");
    createColorDiv("#65C08D", "color07");
    createColorDiv("#8DC140", "color08");
    createColorDiv("#C4D941", "color09");
    createColorDiv("#FCED23", "color10");
    createColorDiv("#F8D700", "color11");
    createColorDiv("#F9B617", "color12");
    createColorDiv("#F5A023", "color13");
    createColorDiv("#F2811F", "color14");
    createColorDiv("#ED5926", "color15");
    createColorDiv("#EA2328", "color16");
    createColorDiv("#E71B46", "color17");
    createColorDiv("#D83A72", "color18");
    createColorDiv("#CE4682", "color19");
    createColorDiv("#B04599", "color20");
    createColorDiv("#8F3F97", "color21");

    function interpolateColor(color1, color2, ratio) {
        const hex = function (x) {
            x = x.toString(16);
            return (x.length === 1) ? '0' + x : x;
        };
        const r1 = parseInt(color1.substring(1, 3), 16);
        const g1 = parseInt(color1.substring(3, 5), 16);
        const b1 = parseInt(color1.substring(5, 7), 16);

        const r2 = parseInt(color2.substring(1, 3), 16);
        const g2 = parseInt(color2.substring(3, 5), 16);
        const b2 = parseInt(color2.substring(5, 7), 16);

        const r = Math.ceil(r1 * (1 - ratio) + r2 * ratio);
        const g = Math.ceil(g1 * (1 - ratio) + g2 * ratio);
        const b = Math.ceil(b1 * (1 - ratio) + b2 * ratio);

        const hexColor = '#' + hex(r) + hex(g) + hex(b);
        return {
            hex: hexColor,
            rgb: `rgb(${r}, ${g}, ${b})`
        };
    }
    function moveColorCircle(event, color) {
      colorCircle.style.left = event.clientX + 'px';
          colorCircle.style.top = event.clientY + 'px';
          colorCircle.style.background = color;
          colorCircle.style.display = "block";
    }

    function displayColorInfo(color) {
        hexColorInfo.textContent = ` ${color.hex}`;
        rgbColorInfo.textContent = ` ${color.rgb}`;
    }
});

function HexCopied(){
setTimeout(function() {
  document.getElementById('confirmColorCode').style.top="-200px" 
                          }, 2000);
 document.getElementById('confirmColorCode').style.top="30px"
 document.getElementById('mainColorName').innerHTML='HEX'
}
function RgbCopied(){
setTimeout(function() {
  document.getElementById('confirmColorCode').style.top="-200px" 
                          }, 2000);
 document.getElementById('confirmColorCode').style.top="30px"
 document.getElementById('mainColorName').innerHTML='RGB'
}