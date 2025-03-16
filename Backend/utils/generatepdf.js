const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

const generateBookingPDF = (bookingDetails, res) => {
    const doc = new PDFDocument();
    const fileName = `Booking_${bookingDetails.orderId}.pdf`;
    const filePath = path.join(__dirname, "../pdfs", fileName);

    // Ensure the pdfs directory exists
    if (!fs.existsSync(path.join(__dirname, "../pdfs"))) {
        fs.mkdirSync(path.join(__dirname, "../pdfs"));
    }

    // Pipe the PDF to a file
    const stream = fs.createWriteStream(filePath);
    doc.pipe(stream);

    // Title
    doc.fontSize(20).text("Booking Confirmation", { align: "center" });
    doc.moveDown();

    // Details
    doc.fontSize(12).text(`Order ID: ${bookingDetails.orderId}`);
    doc.text(`Transaction ID: ${bookingDetails.transactionId}`);
    doc.text(`User ID: ${bookingDetails.user}`);
    doc.text(`Listing ID: ${bookingDetails.listing}`);
    doc.text(`Amount Paid: ₹${bookingDetails.amount}`);
    doc.text(`Date: ${bookingDetails.date}`);
    doc.text(`Time: ${bookingDetails.time}`);
    doc.text(`Number of Adults: ${bookingDetails.numAdults}`);
    doc.text(`Number of Children: ${bookingDetails.numChildren}`);
    doc.text(`Guest Names: ${bookingDetails.guestNames.join(", ")}`);
    doc.text(`Contact Number: ${bookingDetails.contactNumber}`);
    doc.text(`Alternate Contact Number: ${bookingDetails.altContactNumber}`);
    doc.text(`Address: ${bookingDetails.address}`);
    doc.text(`Payment Status: ${bookingDetails.paymentStatus}`);
    doc.text(`Payment Date: ${bookingDetails.paymentDate}`);
    doc.text(`Payment Time: ${bookingDetails.paymentTime}`);
    doc.moveDown();

    doc.text("Thank you for booking with us!", { align: "center" });

    doc.end();

    // Wait for the PDF to finish writing, then send it
    stream.on("finish", () => {
        res.download(filePath, fileName, (err) => {
            if (err) console.error("Error downloading PDF:", err);
            fs.unlinkSync(filePath); // Delete file after sending
        });
    });
};

module.exports = generateBookingPDF;
