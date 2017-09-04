//exports active document to a PDF, simplifies script with added variable, still need to figure out how to refer to pages in the document
var Rfile = new File('C:/Users/lbingle/Desktop/test.pdf');
var myDoc = app.activeDocument;
myDoc.exportFile(ExportFormat.PDF_TYPE, Rfile);