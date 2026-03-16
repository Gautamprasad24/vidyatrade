import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function Enquiry() {

const [form, setForm] = useState({
  name: "",
  email: "",
  phone: "",
  message: ""
});

const [success,setSuccess] = useState(false);
const [loading,setLoading] = useState(false);

function handleSubmit(e) {

e.preventDefault();

setLoading(true);

emailjs.send(
"service_nako1td",
"template_6p2pkse",
form,
"28u15xndPgXP1Ject"
).then(()=>{

setLoading(false);
setSuccess(true);

setForm({
  name:"",
  email:"",
  phone:"",
  message:""
});

});

}

return (

<section className="py-24 bg-white">

<div className="max-w-3xl mx-auto px-6 text-center">

{/* TITLE */}
<h2 className="text-5xl font-semibold tracking-[10px] text-[var(--gold)] mb-6">
INQUIRY
</h2>

<p className="text-xl text-[var(--primary)] mb-2">
WE WOULD BE HAPPY TO ASSIST YOU
</p>

<p className="text-xl text-[var(--primary)] mb-12">
PLEASE FILL IN THE DETAILS
</p>

{/* SUCCESS MESSAGE */}
{success && (

<motion.div
initial={{opacity:0,y:-10}}
animate={{opacity:1,y:0}}
className="mb-8 p-4 bg-green-100 text-green-700 rounded-lg"
>

✔ Enquiry sent successfully! We will contact you soon.

</motion.div>

)}

{/* FORM */}
<motion.form
onSubmit={handleSubmit}
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
className="flex flex-col gap-6"
>

<input
type="text"
placeholder="Your name"
required
value={form.name}
onChange={(e)=>
setForm({...form,name:e.target.value})
}
className="w-full border border-[var(--primary)]
rounded-lg px-6 py-4 outline-none
focus:ring-2 focus:ring-[var(--gold)]"
/>

<input
type="email"
placeholder="Your email"
required
value={form.email}
onChange={(e)=>
setForm({...form,email:e.target.value})
}
className="w-full border border-[var(--primary)]
rounded-lg px-6 py-4 outline-none
focus:ring-2 focus:ring-[var(--gold)]"
/>

<input
type="tel"
placeholder="Contact number"
required
value={form.phone}
onChange={(e)=>
setForm({...form,phone:e.target.value})
}
className="w-full border border-[var(--primary)]
rounded-lg px-6 py-4 outline-none
focus:ring-2 focus:ring-[var(--gold)]"
/>

{/* MESSAGE FIELD */}
<textarea
placeholder="Your message"
required
rows="5"
value={form.message}
onChange={(e)=>
setForm({...form,message:e.target.value})
}
className="w-full border border-[var(--primary)]
rounded-lg px-6 py-4 outline-none
focus:ring-2 focus:ring-[var(--gold)]"
/>

<button
disabled={loading}
className="border border-[var(--primary)]
text-[var(--primary)]
py-4 rounded-lg font-semibold
hover:bg-[var(--primary)]
hover:text-white transition"
>

{loading ? "Sending..." : "SUBMIT"}

</button>

</motion.form>

</div>

</section>

);

}