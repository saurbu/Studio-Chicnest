import React from 'react'

const Contact = () => {
  return (
    <div>
        <form
      action="https://api.web3forms.com/submit"
      method="POST"
      className="space-y-5"
    >
      <input
        type="hidden"
        name="access_key"
        value="89ff3379-8ca9-41e2-a6f1-bb1b0bfb20bb"
      />
      <input
        type="hidden"
        name="subject"
        value="Contact Request Studio Chicnest"
      />

      <input
        type="hidden"
        name="from_name"
        value="STUDIO CHICNEST"
      />
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="border p-3 rounded w-full"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="border p-3 rounded w-full"
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        className="border p-3 rounded w-full"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        rows="5"
        required
        className="border p-3 rounded w-full"
      />

      <button
        type="submit"
        className="bg-black text-white px-6 py-3 rounded"
      >
        Send Message
      </button>
    </form>
    </div>
  )
}

export default Contact
