//Save temportary file from master file that will be edited down to the desired page range
//Need two temp docs for editing for resume and cover letter

var originalDoc = app.activeDocument;
var tempDoc = new File('C:/Users/lbingle/Desktop/temp.indd')
originalDoc.save(tempDoc)

//Remove pages that are outside of page range
//Note: Javascrip starts page numbering at 0 (aka, page 1 = 0, page 2 =1, page 3 = 2, etc.)

var workDoc = app.open('C:/Users/lbingle/Desktop/temp.indd')
var firstPageNum = 0
var lastPageNum = 2
var allPages = workDoc.pages.everyItem().getElements();
for (var i = 0; i < allPages.length; i++) {
var page = allPages[i];
if (i < firstPageNum || i > lastPageNum) {
page.remove();
}
}
;

//Resume

//Cover Letter

//Export as a PDF
//Note: If you do not recieve the number of pages you expected check the export settings in InDesign. If the export is set to a range this scrip will follow that range setting.
//If export settings are set to a range reset to "all."
var Rfile = new File('C:/Users/lbingle/Desktop/test.pdf');
workDoc.exportFile(ExportFormat.PDF_TYPE, Rfile);

//Remove temp file

