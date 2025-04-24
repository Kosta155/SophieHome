import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        number: "",
        message: ""
    });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        if (id === "number" && !/^\d*$/.test(value)) return;

        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    const validator = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = "Please enter your name";
        if (!formData.email) newErrors.email = "Please enter a valid email";
        if (!formData.number || formData.number.length !== 10) newErrors.number = "Please enter a 10-digit phone number";
        if (!formData.message) newErrors.message = "Please enter a short message";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validator()) {
            try {
                const response = await fetch('/api/sendemail', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: formData.email,
                        name: formData.name,
                        number: formData.number,
                        message: formData.message ,
                    }),
                });

                if (response.ok) {
                    console.log('Email sent successfully!');
                    setSuccess(true);
                    setFormData({
                        name: "",
                        email: "",
                        number: "",
                        message: ""
                    });
                    setTimeout(() => {
                        setSuccess(false);
                    }, 2000);
                } else {
                    console.error('Failed to send email:', response.statusText);
                }
            } catch (error) {
                console.error('Error sending email:', error);
            }
            setErrors({});
        }
    };

    const renderTextField = (id, label, type = "text", multiline = false, rows = 1) => (
        <>
            <TextField
                id={id}
                label={label}
                variant="standard"
                color="warning"
                type={type}
                multiline={multiline}
                rows={rows}
                value={formData[id]}
                onChange={handleChange}
            />
            {errors[id] && (
                <Alert variant="filled" severity="warning" className="mt-2">
                    {errors[id]}
                </Alert>
            )}
        </>
    );

    return (
        <div id="Contact" className="bg-stone-800 text-white grid justify-center mt-0 py-20 uppercase scroll-mt-44 ">
            <div className="justify-self-center w-11/12 md:w-10/12 lg:grid grid-cols-2 lg:w-11/12 gap-x-3 xl:w-10/12 xl:gap-3">
                <div className="space-y-10">
                    <div className="font-bold space-y-2">
                        <h3 className="text-lg md:text-xl">SophAri Care</h3>
                        <h1 className="text-3xl md:text-5xl lg:text-3xl xl:text-4xl">Get in Touch</h1>
                    </div>
                    <div className="grid gap-5 md:grid-cols-2 lg:gap-3">
                        <div className="default-contact-text">
                            <span className="material-icons" style={{ color: "#d84315" }}>email</span>
                            <div className="space-y-1">
                                <h4 className="font-bold text-md md:text-xl">OUR EMAIL</h4>
                                <p className="md:text-lg lowercase">info@sophari.com.au</p>
                            </div>
                        </div>
                        
                        <div className="default-contact-text">
                            <span className="material-icons" style={{ color: "#d84315" }}>phone</span>
                            <div className="space-y-1">
                                <h4 className="font-bold text-md md:text-xl">Phone Number</h4>
                                <p className="md:text-lg lowercase">0414087185</p>
                                <p className="md:text-lg lowercase">0469757202</p>
                            </div>
                        </div>
                        <span className="material-icons w-64" style={{ color: "#d84315" }}>facebook</span>
                    </div>
                </div>
                <div className="bg-stone-800 Contact-Form mt-20 border border-solid border-white p-2 lg:mt-0 lg:-translate-y-1/4">
                    <form onSubmit={handleSubmit} name="message-form" className="bg-white grid gap-y-4 py-10 px-5 text-xl lg:gap-y-7">
                        <h1 className="text-stone-800 font-bold lg:text-3xl">SEND A MESSAGE</h1>
                        {renderTextField("name", "YOUR NAME")}
                        {renderTextField("email", "EMAIL", "email")}
                        {renderTextField("number", "PHONE NUMBER")}
                        {renderTextField("message", "ENTER YOUR MESSAGE", "text", true, 5)}
                        {success && (
                            <Alert variant="filled" severity="success" className="mt-2">Message Successfully Sent</Alert>
                        )}
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                height: { xs: "60px", sm: "75px", md: "90px" },
                                width: { xs: "150px", sm: "180px", md: "220px" },
                                borderRadius: "5px",
                                backgroundColor: "#A8A29E",
                                color: "white",
                                fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "22px" },
                                fontWeight: 700,
                                cursor: "pointer",
                                transition: "background-color 0.4s ease",
                                justifySelf: "center",
                                "&:hover": { backgroundColor: "rgba(221, 44, 0, 0.6)" }
                            }}
                        >
                            SUBMIT
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
