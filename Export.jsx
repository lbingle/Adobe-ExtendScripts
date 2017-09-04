//exports active document to a PDF, still need to figure out how to refer to pages in the document
var Rfile = new File('C:/Users/lbingle/Desktop/test.pdf');
app.activeDocument.exportFile(ExportFormat.PDF_TYPE, Rfile);