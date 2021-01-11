<canvas id="barcode"></canvas>
<svg id="code128"></svg>

JsBarcode("#code128", "555128985374");

JsBarcode("#barcode")
  .options({font: "CODE128"}) // Will affect all barcodes
  .blank(20) // Create space between the barcodes
  .render();