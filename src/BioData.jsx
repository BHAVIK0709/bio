import { motion } from "framer-motion";
import Profile from "./PP.jpg";
import ProfileSit from "./MtPic.jpg";
import Professional from "./Professnioll.jpg";

export default function BiodataProfile() {
  // --- Replace this URL with your actual photo link (any public image URL works)
  const photoUrl =
    "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=600&auto=format&fit=crop";

  const Photos = [Profile, ProfileSit, Professional];

  const personal = {
    Name: "Bhavik  Panchal",
    Gender: "Male",
    "Date Of Birth": "07-09-2000",
    "Place Of Birth": "Ahmedabad",
    Rashi: "Dhanur (Sagittarius)",
    Nakshatra: "Mula",
    Height: "5 feet 9 inches (175 cm)",
    "Marital Status": "Single",
    Religion: "Hindu",
    "Mother Tongue": "Gujarati",
    Caste: "Hindu Luhar",
    Village: "Jakha (Patan)",
    Education: "Bachelor Of Engineering (Computer Engg.)",
    "College Name": "Sal Institute of Engineering",
    "Job/Occupation": "Software Engineer",
    "Organization Name": "Tridhya Tech Limited",
    Hobbies: "Travelling, Cricket, Movies ,Gaming",
  };

  const family = {
    "Father's Name": "Panchal Dineshbhai Virchandas",
    "Father's Occupation": "Vishwakarma Engineering & Fabricators",
    "Mother's Name": "Panchal Kalishaben Dineshbhai",
    "Maternal Village": "Timbachudhi",
    "Mother's Occupation": "Home maker",
    "Little Brother": "Priyank",
    "Sister (Married)": "Vaishaliben ",
  };

  const fade = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06 } },
  };

  const Card = ({ title, children }) => (
    <motion.div
      variants={fade}
      className="rounded-2xl border border-slate-200/70 bg-white/70 backdrop-blur shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="p-5 md:p-6">
        <h3 className="text-lg md:text-xl font-semibold tracking-tight text-slate-800 flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-indigo-500"></span>
          {title}
        </h3>
        <div className="mt-4 space-y-3 text-sm md:text-base text-slate-700">
          {children}
        </div>
      </div>
    </motion.div>
  );

  const Field = ({ label, value }) => (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4">
      <div className="font-medium text-slate-600">{label}</div>
      <div className="sm:col-span-2 text-slate-800">{value}</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-slate-50 to-purple-50">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-12"
        >
          <div className="flex flex-col md:flex-row items-center md:items-end gap-6">
            <div className="relative">
              <motion.img
                src={photoUrl}
                alt="Profile"
                className="h-36 w-36 md:h-44 md:w-44 object-cover rounded-2xl shadow-md ring-2 ring-white"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <span className="absolute -bottom-2 -right-2 rounded-full bg-indigo-600 text-white text-xs px-3 py-1 shadow">
                Software Engineer
              </span>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-slate-900">
                {personal["Name"]}
              </h1>
              {/* <p className="mt-2 text-slate-600 max-w-2xl">
                Detail‑oriented developer with a passion for clean UI and
                performance.
              </p> */}

              {/* Quick chips */}
            </div>
          </div>
        </motion.header>

        {/* Body */}
        <motion.main
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6"
        >
          <div className="lg:col-span-2 space-y-5 md:space-y-6">
            <Card title="Personal Details">
              <div className="space-y-3 text-left">
                {Object.entries(personal).map(
                  ([k, v]) =>
                    k !== "Name" && <Field key={k} label={k} value={v} />
                )}
              </div>
            </Card>

            <Card title="Family Details">
              <div className="space-y-3 text-left">
                {Object.entries(family).map(([k, v]) => (
                  <Field key={k} label={k} value={v} />
                ))}
              </div>
            </Card>
          </div>

          {/* Side card */}
          <div className="space-y-5 md:space-y-6">
            <Card title="At a Glance">
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500"></span>{" "}
                  {personal["Height"]}
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500"></span>{" "}
                  {personal["Rashi"]} • {personal["Nakshatra"]}
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500"></span>{" "}
                  Likes {personal["Hobbies"]}
                </li>
              </ul>
            </Card>
            <Card title="Contact">
              <div className="space-y-3 text-sm text-left">
                <div className="grid grid-cols-3 gap-3">
                  <span className="text-slate-600">Email</span>
                  <span className="col-span-2 break-all">
                    bhavikdpanchal7090@gmail.com
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <span className="text-slate-600">My Phone</span>
                  <span className="col-span-2">+91-8758709628</span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <span className="text-slate-600">Father's Phone</span>
                  <span className="col-span-2">+91-9825786628</span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <span className="text-slate-600">Location</span>
                  <span className="col-span-2">
                    {" "}
                    42-Shree hari bunglows-2 , Vastral , Ahmedabad, Gujarat
                  </span>
                </div>
              </div>
            </Card>
            {Photos.map((m, i) => (
              <img src={m}></img>
            ))}
            ;
          </div>
        </motion.main>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 md:mt-12 text-center text-xs text-slate-500"
        >
          © {new Date().getFullYear()} Bhavik Panchal · Marriage Biodata
        </motion.footer>
      </div>
    </div>
  );
}
