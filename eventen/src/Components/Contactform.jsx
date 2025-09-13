import React, { useState } from "react";

const Contactform = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  const { name, email, phone, location } = formData;

  if (!name || !email || !phone) {
    setStatus("Please fill in all required fields.");
    return;
  }

   setIsSubmitting(true);

  const formBody = new URLSearchParams();
  formBody.append("name", name);
  formBody.append("email", email);
  formBody.append("phone", phone);
  formBody.append("location", location);

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbzGS_3M-gk2x6BXXBQyIRFOLrHYzYNSxdauvUCznGXUbocYM1QVHtJQLNsnI8qCW4qggQ/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formBody.toString(),
    });

    if (response.ok) {
      setStatus("Registered Successfully!");
      setFormData({ name: "", email: "", phone: "", location: "", subject: "", message: "" });

       setTimeout(() => {
        window.location.href =
          "https://iicsindia.org/workshops/Neeta-Lulla/thank-you.html";
      }, 500);
  //     if (formData.role === "student") {
  //   window.location.href = "https://pages.razorpay.com/pl_R8IzACN6XXMIU0/view";
  // } else if (formData.role === "teacher") {
  //   window.location.href = "https://pages.razorpay.com/pl_R9v8YW5FSCBue6/view";
  // } else {
  //   setStatus("Please select a role.");
  // }
    } else {
      setStatus("Failed to submit. Please try again.");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    setStatus("Something went wrong. Please try again.");
  }
};


  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-lg-6">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="mb-3 form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-lg-6">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="mb-3 form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="row">
      <div className="phone-no col-lg-6">
        <input
          type="tel"
          name="phone"
          placeholder="Phone No."
          className="mb-3 form-control"
          value={formData.phone}
          onChange={handleChange}
          pattern="[0-9]{10,15}"
          title="Please enter a valid phone number"
          required
        />
      </div>
      <div className="role mb-3 col-lg-6">
      <select
    name="location"
    className="form-select rounded p-2"
    value={formData.location}
    onChange={handleChange}
    required
      >
    <option value="">Preferred Location</option>
    <option value="delhi">Delhi</option>
    <option value="bhopal">Bhopal</option>
      </select>
      </div>
      </div>

      {/* <div className="subject">
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="mb-3 form-control"
          value={formData.subject}
          onChange={handleChange}
        />
      </div>
      <div className="message">
        <textarea
          name="message"
          placeholder="Message"
          rows="4"
          className="mb-3 form-control"
          value={formData.message}
          onChange={handleChange}
        />
      </div> */}
      <button
  type="submit"
  className="btn btn-primary"
  disabled={isSubmitting}
>
  {isSubmitting ? (
    <>
      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
      Please wait..
    </>
  ) : (
    <>
      Register Now <i className="fa fa-long-arrow-right ms-3"></i>
    </>
  )}
</button>


      {status && (
        <div className="mt-3 alert alert-info" role="alert">
          {status}
        </div>
      )}
    </form>
  );
};

export default Contactform;
