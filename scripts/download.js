const downloadPDF = () => {
  // Path to the folder where the PDF files are stored
  const fileURL = "../download/Muhammad-Arslan.pdf";

  // Create a temporary anchor element
  const anchor = document.createElement("a");
  anchor.style.display = "none";
  document.body.appendChild(anchor);

  // Set the anchor's href attribute to the file URL
  anchor.href = fileURL;

  // Set the anchor's download attribute to the desired filename
  anchor.download = "Muhammad-Arslan.pdf";

  // Trigger a click event on the anchor element to start the download
  anchor.click();

  // Clean up by removing the anchor element
  document.body.removeChild(anchor);
};
