import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/latest.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const GOOGLE_FORM_SHARE_LINK = "https://docs.google.com/forms/d/15EPp8FRlJwUWv-4NEoW3NNeYZoBjAn0A3t-XOaMXe5c/viewform?usp=drivesdk";
const GOOGLE_FORM_EMBED_LINK = "https://docs.google.com/forms/d/e/15EPp8FRlJwUWv-4NEoW3NNeYZoBjAn0A3t-XOaMXe5c/viewform?embedded=true";

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [showFormModal, setShowFormModal] = useState(false);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        <Row style={{ justifyContent: "center", position: "relative", marginBottom: 16 }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            rel="noreferrer noopener"
            style={{ maxWidth: "250px" }}
            aria-label="Download CV"
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume" style={{ justifyContent: "center" }}>
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", marginTop: 16 }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            rel="noreferrer noopener"
            style={{ maxWidth: "250px" }}
            aria-label="Download CV"
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        {/* Get in touch section */}
        <Row style={{ justifyContent: "center", marginTop: 28 }}>
          <Col md={8} lg={6}>
            <Card className="quote-card-view" style={{ padding: "18px" }}>
              <Card.Body>
                <h5 className="purple" style={{ marginBottom: 12 }}>
                  Get in touch
                </h5>
                <p style={{ marginBottom: 14 }}>
                  I’d love to hear from you! Please fill out the form below to get in touch.
                </p>

                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <Button
                    variant="outline-primary"
                    href={GOOGLE_FORM_SHARE_LINK}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Open contact form in new tab"
                    style={{ minWidth: 180 }}
                  >
                    Open Form (new tab)
                  </Button>

                  <Button
                    variant="primary"
                    onClick={() => setShowFormModal(true)}
                    aria-label="Fill form inline"
                    style={{ minWidth: 180 }}
                  >
                    Fill Form Here
                  </Button>
                </div>

                <small style={{ display: "block", marginTop: 12, color: "#6c757d" }}>
                  For quick contact, either open the form in a new tab or fill it inline.
                </small>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Modal for embedded Google Form */}
        <Modal
          show={showFormModal}
          onHide={() => setShowFormModal(false)}
          size="lg"
          aria-labelledby="google-form-modal"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="google-form-modal">Contact Form</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ minHeight: 400 }}>
            <div style={{ position: "relative", paddingBottom: "75%", height: 0, overflow: "hidden" }}>
              <iframe
                title="Google Form"
                src={GOOGLE_FORM_EMBED_LINK}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: 0,
                }}
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                aria-label="Embedded Google Form"
              />
            </div>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
}

export default ResumeNew;
