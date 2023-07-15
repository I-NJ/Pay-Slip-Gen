import React, { useState } from 'react';
import { Page, Text, View, Document, PDFDownloadLink } from '@react-pdf/renderer';
import './PayslipGenerator.css'; // Import the external CSS file

const PayslipGenerator = () => {
  const [employeeName, setEmployeeName] = useState('');
  const [salary, setSalary] = useState('');
  // Add more state variables for other payslip data

  const generatePDF = () => {
    const pdfDoc = (
      <Document>
        <Page size="A4">
          <View>
            <Text>Employee Name: {employeeName}</Text>
            <Text>Salary: {salary}</Text>
            {/* Add more Text components for other payslip data */}
          </View>
        </Page>
      </Document>
    );

    return (
      <PDFDownloadLink document={pdfDoc} fileName="payslip.pdf">
        {({ loading }) =>
          loading ? 'Generating PDF...' : 'Download PDF'
        }
      </PDFDownloadLink>
    );
  };

  return (
    <div className="container">
      <h1 className="title">Payslip Generator</h1>
      <div className="form-group">
        <label className="label">Employee Name:</label>
        <input
          className="input"
          type="text"
          value={employeeName}
          onChange={(e) => setEmployeeName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="label">Salary:</label>
        <input
          className="input"
          type="text"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
      </div>
      {/* Add more input fields for other payslip data */}
      <div className="form-group">
        {generatePDF()}
      </div>
    </div>
  );
};

export default PayslipGenerator;
