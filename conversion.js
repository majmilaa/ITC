document.getElementById("computeFtoC").addEventListener("click", function() {
    let f = document.getElementById("f").value * 1;
    let celsius = (f - 32) * 5 / 9;
    document.getElementById("c").value = celsius.toFixed(2);
});

document.getElementById("computeCtoF").addEventListener("click", function() {
    let c1 = document.getElementById("c1").value * 1;
    let fahrenheit = (c1 * (9 / 5)) + 32;
    document.getElementById("f1").value = fahrenheit.toFixed(2);
});

document.getElementById("computeMtoFt").addEventListener("click", function() {
    let m = document.getElementById("m").value * 1;
    let feet = m * 3.281;
    document.getElementById("ft").value = feet.toFixed(4);
});

document.getElementById("computeFttoM").addEventListener("click", function() {
    let ft1 = document.getElementById("ft1").value * 1;
    let meters = ft1 / 3.281;
    document.getElementById("m1").value = meters.toFixed(4);
});
