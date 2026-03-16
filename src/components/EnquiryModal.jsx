import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

export default function EnquiryModal({ closeModal }) {

const [form, setForm] = useState({
  name:"",
  email:"",
  phone:"",
  message:""
});

const [loading,setLoading] = useState(false);
const [success,setSuccess] = useState(false);

function sendEmail(e){
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

setTimeout(()=>{
closeModal();
},2000)

})
}

return(

<div
className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
onClick={closeModal}
>

<motion.div
initial={{scale:0.8,opacity:0}}
animate={{scale:1,opacity:1}}
transition={{duration:0.3}}
onClick={(e)=>e.stopPropagation()}
className="bg-white p-8 rounded-xl w-[400px] shadow-2xl relative"
>

{/* CLOSE BUTTON */}
<button
onClick={closeModal}
className="absolute top-3 right-4 text-xl font-bold text-gray-500 hover:text-black"
>
✕
</button>

{/* SUCCESS MESSAGE */}
{success ? (

<div className="text-center py-10">

<h2 className="text-2xl font-semibold text-green-600 mb-4">
✔ Enquiry Sent Successfully
</h2>

<p className="text-gray-600">
We will contact you shortly.
</p>

</div>

) : (

<>

<h2 className="text-2xl font-semibold mb-4 text-[var(--primary)]">
Enquiry Form
</h2>

<form onSubmit={sendEmail} className="flex flex-col gap-4">

<input
type="text"
placeholder="Name"
required
onChange={(e)=>setForm({...form,name:e.target.value})}
className="border p-2 rounded"
/>

<input
type="email"
placeholder="Email"
required
onChange={(e)=>setForm({...form,email:e.target.value})}
className="border p-2 rounded"
/>

<input
type="tel"
placeholder="Phone"
required
onChange={(e)=>setForm({...form,phone:e.target.value})}
className="border p-2 rounded"
/>

<textarea
placeholder="Message"
rows="4"
onChange={(e)=>setForm({...form,message:e.target.value})}
className="border p-2 rounded"
/>

<button
disabled={loading}
className="bg-[var(--primary)] hover:bg-[var(--gold)] text-white py-2 rounded-lg shadow-md transition"
>

{loading ? "Sending..." : "Send Enquiry"}

</button>

</form>

</>

)}

</motion.div>

</div>

)
}