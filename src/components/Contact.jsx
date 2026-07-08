import { useState } from 'react';
import axios from 'axios';
import { FaTelegram,  FaSquareInstagram, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa6';

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
      Email: ${email}
      Message: ${message}
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
      console.error('Error sending message: ', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="section" data-aos="flip-up">
      <div className="container">
        <div className="glass-card grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">Contact</p>
            <h2 className="headline-2 mt-3">Let’s build something meaningful together.</h2>
            <p className="section-copy mt-4">
              I am always excited to connect with like-minded professionals, clients, or collaborators who are passionate about building meaningful digital experiences. Whether you have a project in mind, a question, or just want to say hello — feel free to reach out.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {[
                { href: 'https://t.me/odilbekdev', icon: <FaTelegram size={20} /> },
                { href: 'https://www.instagram.com/odilbekjondev/', icon: <FaSquareInstagram size={20} /> },
                { href: 'https://www.facebook.com/profile.php?id=100094416551089', icon: <FaFacebook size={20} /> },
                { href: 'https://www.linkedin.com/in/odilbek-safarov/', icon: <FaLinkedin size={20} /> },
                { href: 'https://github.com/odilbekjon', icon: <FaGithub size={20} /> },
              ].map(({ href, icon }) => (
                <a key={href} href={href} target="_blank" rel="noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:-translate-y-0.5 hover:bg-sky-400/10 hover:text-sky-300">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-4 sm:p-6">
            <div className="mb-5 grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="label">Name</label>
                <input className="text-field w-full" type="text" name="name" id="name" autoComplete="name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div>
                <label htmlFor="email" className="label">Email</label>
                <input className="text-field w-full" type="email" name="email" id="email" autoComplete="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
            </div>
            <div className="mb-5">
              <label htmlFor="message" className="label">Message</label>
              <textarea className="text-field h-36 w-full resize-none" name="message" id="message" placeholder="Tell me about your project" value={message} onChange={(e) => setMessage(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-primary w-full md:w-auto">
              Submit message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
