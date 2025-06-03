import { useState } from 'react';
import axios from 'axios';

// images
import { FaTelegram } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const BOT_TOKEN = '5505710574:AAGB_2sw7rL8dSHrrznqkj2Nzbg4cFSLjWA'; 
  const CHAT_ID = '1886251346'; 

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const messageText = `
      Name: ${name}
      Email:${email}
      Message:${message}
    `;

    try {
      await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        chat_id: CHAT_ID,
        text: messageText,
      });

      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error("Error sending message: ", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="section" data-aos="flip-up">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="">
            <h2 className="headline-2 mb-5 ">Contact me for collaboration</h2>
            <p className="mb-5 text-zinc-400 lg:max-w-[45ch]">
              I am always excited to connect with like-minded professionals,
              clients, or collaborators who are passionate about building
              meaningful digital experiences. Whether you have a project in
              mind, a question, or just want to say hello — feel free to reach
              out! I open to freelance opportunities, partnerships, and new
              ideas that challenge and inspire. Let’s build something great
              together.
            </p>
            <div className="flex gap-5 mb-5">
              <a href="https://t.me/odilbekdev" target="_blank">
                <FaTelegram size={25} />
              </a>
              <a
                href="https://www.instagram.com/odilbekjondev/"
                target="_blank"
              >
                <FaSquareInstagram size={25} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100094416551089"
                target="_blank"
              >
                <FaFacebook size={25} />
              </a>
              <a
                href="https://www.linkedin.com/in/odilbek-safarov/"
                target="_blank"
              >
                <FaLinkedin size={25} />
              </a>
              <a href="https://github.com/odilbekjon" target="_blank">
                <FaGithub size={25} />
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="">
            <div className="flex flex-col gap-5 mb-5 md:grid md:grid-cols-2">
              <div className="">
                <label htmlFor="name" className="label">
                  Name
                </label>
                <input
                  className="w-full text-field p-3 rounded-lg bg-transparent border-2 border-solid outline-none mt-2"
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  placeholder="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="">
                <label htmlFor="email" className="label">
                  Email
                </label>
                <input
                  className="w-full text-field p-3 rounded-lg bg-transparent border-2 border-solid outline-none mt-2"
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="">
              <label htmlFor="message" className="label">
                Message
              </label>
              <textarea
                className="text-field w-full h-36 p-3 rounded-lg bg-transparent border-2 border-solid outline-none mt-2 mb-3 resize-none"
                name="message"
                id="message"
                placeholder="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary md:block md:w-full sm:h-auto p-3"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
