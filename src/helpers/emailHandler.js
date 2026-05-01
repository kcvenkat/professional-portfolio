import emailjs from "@emailjs/browser";

let lastSent = 0;

function sendEmail(e, setStatus){
    e.preventDefault();
    setStatus("sending");

    const now = Date.now();

    if (now - lastSent < 30000){
        setStatus(`wait-${Math.ceil((30000 - (now - lastSent)) / 1000)}`);
        return;
    }

    if (e.target.company.value) return;

    lastSent = now;

    emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() =>{
        alert("Message sent!");
        setStatus("sent")
    })
    .catch((err) =>{
        console.error(err);
        alert("Failes to send message");
        setStatus("error")
    })
}

export default sendEmail