import JSZip from "jszip";
import Docxtemplater from "docxtemplater";

const fs = require("fs");
const path = require("path");

export function createDocument() {
  const content = fs.readFileSync(path.resolve("docs/template.docx"), "binary");
  var zip = new JSZip(content);

  var doc = new Docxtemplater();
  doc.loadZip(zip);

  //set the templateVariables
  doc.setData({
    first_name: "John",
    last_name: "Doe",
    phone: "0652455478",
    description: "New Website",
    test_variable: "Panzer D"
  });

  try {
    // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
    doc.render();
    console.log("Rendering completed");
  } catch (error) {
    var e = {
      message: error.message,
      name: error.name,
      stack: error.stack,
      properties: error.properties
    };
    console.log(JSON.stringify({ error: e }));
    // The error thrown here contains additional information when logged with JSON.stringify (it contains a property object).
    throw error;
  }

  var buf = doc.getZip().generate({ type: "nodebuffer" });

  // buf is a nodejs buffer, you can either write it to a file or do anything else with it.
  fs.writeFileSync(path.resolve("docs/output.docx"), buf);
}
