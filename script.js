function textAppear(textID) {
  document.getElementById("upgradestext").style.display = "none";
  document.getElementById("farmtext").style.display = "none";
  // no disables come after here please :)
  document.getElementById(textID).style.display = "inline.block";
}
