import React, { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
  Printer,
  Phone,
  Mail,
  MapPin,
  Calendar,
  User,
  Heart,
  Languages,
  Image as ImageIcon,
} from "lucide-react";
import { motion } from "framer-motion";

/**
 * ⚡ How to use
 * 1) Fill the `PROFILE` object below with your exact details.
 * 2) Replace the placeholder profile photo URL.
 * 3) Click the "Print / Save as PDF" button to export and share.
 * 4) Toggle English/Gujarati with the language button.
 *
 * Notes
 * - Fully responsive (mobile-first).
 * - Clean, elegant typography; large tap targets.
 * - Ready for shadcn/ui + Tailwind projects. (Tailwind required)
 */

// ====== YOUR DATA STARTS HERE ======
const PROFILE = {
  // Basic
  fullName: "Bhavik Panchal", // ← update if needed
  gender: "Male",
  dob: "",
  birthTime: "",
  birthPlace: "",
  height: "",
  weight: "",
  bloodGroup: "",
  maritalStatus: "Never Married",
  motherTongue: "Gujarati",
  caste: "",
  subCaste: "",
  gotra: "",
  manglik: "",

  // Education & Career
  education: "",
  occupation: "",
  employer: "",
  income: "",
  workLocation: "",

  // Family
  fatherName: "",
  fatherOccupation: "",
  motherName: "",
  motherOccupation: "",
  brothers: "",
  sisters: "",
  familyType: "",
  nativePlace: "",
  address: "",

  // Lifestyle / Preferences
  diet: "",
  smoke: "",
  drink: "",
  hobbies: "",
  partnerPreferences: {
    age: "",
    height: "",
    education: "",
    religionCaste: "",
    location: "",
    other: "",
  },

  // Horoscope (Optional)
  horoscope: {
    rashi: "",
    nakshatra: "",
    gotra: "",
    horoscopeMatchRequired: "",
  },

  // Contact
  phone: "",
  email: "",
  whatsapp: "",
  contactPerson: "",

  // Media
  photoUrl:
    "https://images.unsplash.com/photo-1500043357865-c6b8827edf39?q=80&w=1200&auto=format&fit=crop", // replace with your photo
  gallery: [
    // optional more images
  ],
};
// ====== YOUR DATA ENDS HERE ======

const LABELS = {
  en: {
    personal: "Personal Details",
    education: "Education & Career",
    family: "Family Details",
    lifestyle: "Lifestyle & Preferences",
    partner: "Partner Preferences",
    horoscope: "Horoscope",
    contact: "Contact",
    print: "Print / Save as PDF",
    download: "Download Card",
    switch: "ગુજરાતી",
  },
  gu: {
    personal: "વ્યક્તિગત વિગતો",
    education: "શિક્ષણ અને કારકિર્દી",
    family: "પરિવારની માહિતી",
    lifestyle: "જીવનશૈલી અને પસંદગીઓ",
    partner: "જીવનસાથી માટેની પસંદગીઓ",
    horoscope: "કુંડળી",
    contact: "સંપર્ક",
    print: "પ્રિન્ટ / PDF સંગ્રહ કરો",
    download: "કાર્ડ ડાઉનલોડ",
    switch: "English",
  },
};

// A compact line item used across sections
function Line({ icon: Icon, label, value }) {
  if (!value) return null;
  return (
    <div className="flex items-start gap-2 text-sm sm:text-base">
      {Icon && <Icon className="h-4 w-4 mt-1 shrink-0" />}
      <div>
        <span className="font-medium text-muted-foreground mr-1">{label}:</span>
        <span className="text-foreground">{value}</span>
      </div>
    </div>
  );
}

// A pretty divider
const SectionTitle = ({ children }) => (
  <div className="flex items-center gap-3 my-4">
    <div className="h-px flex-1 bg-muted" />
    <h3 className="text-lg sm:text-xl font-semibold tracking-tight">
      {children}
    </h3>
    <div className="h-px flex-1 bg-muted" />
  </div>
);

export default function MarriageBioData() {
  const [lang, setLang] = useState("en");
  const t = useMemo(() => LABELS[lang], [lang]);

  const printPDF = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Canvas width container */}
      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between gap-4 mb-4 sm:mb-6"
        >
          <div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              {PROFILE.fullName}
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base">
              {PROFILE.occupation || ""}{" "}
              {PROFILE.employer ? `@ ${PROFILE.employer}` : ""}
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              onClick={() => setLang(lang === "en" ? "gu" : "en")}
              variant="secondary"
              className="rounded-2xl"
            >
              <Languages className="h-4 w-4 mr-2" /> {t.switch}
            </Button>
            <Button onClick={printPDF} className="rounded-2xl">
              <Printer className="h-4 w-4 mr-2" /> {t.print}
            </Button>
          </div>
        </motion.header>

        {/* Hero Card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="overflow-hidden border-0 shadow-xl rounded-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-[180px,1fr]">
              {/* Photo */}
              <div className="relative aspect-[4/5] sm:aspect-auto">
                {PROFILE.photoUrl ? (
                  <img
                    src={PROFILE.photoUrl}
                    alt={PROFILE.fullName}
                    className="object-cover h-full w-full"
                  />
                ) : (
                  <div className="h-full w-full grid place-items-center bg-muted">
                    <ImageIcon className="h-8 w-8" />
                  </div>
                )}
              </div>

              {/* Summary */}
              <CardContent className="p-4 sm:p-6">
                <div className="grid gap-2 text-sm sm:text-base">
                  <Line
                    icon={User}
                    label={lang === "en" ? "Gender" : "લિંગ"}
                    value={PROFILE.gender}
                  />
                  <Line
                    icon={Calendar}
                    label={lang === "en" ? "Date of Birth" : "જન્મ તારીખ"}
                    value={PROFILE.dob}
                  />
                  <Line
                    icon={MapPin}
                    label={lang === "en" ? "Birth Place" : "જન્મ સ્થળ"}
                    value={PROFILE.birthPlace}
                  />
                  <Line
                    icon={MapPin}
                    label={lang === "en" ? "Current City" : "હાલનું શહેર"}
                    value={PROFILE.workLocation}
                  />
                  <Line
                    icon={Heart}
                    label={lang === "en" ? "Marital Status" : "વૈવાહિક સ્થિતિ"}
                    value={PROFILE.maritalStatus}
                  />
                </div>

                {/* Contact quick row */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {PROFILE.phone && (
                    <a href={`tel:${PROFILE.phone}`}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-2xl"
                      >
                        <Phone className="h-4 w-4 mr-2" /> {PROFILE.phone}
                      </Button>
                    </a>
                  )}
                  {PROFILE.email && (
                    <a href={`mailto:${PROFILE.email}`}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-2xl"
                      >
                        <Mail className="h-4 w-4 mr-2" /> {PROFILE.email}
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </div>
          </Card>
        </motion.div>

        {/* Sections */}
        <div className="mt-6 grid gap-6">
          {/* Personal */}
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>{t.personal}</CardTitle>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 gap-3">
              <Line
                label={lang === "en" ? "Height" : "ઊંચાઈ"}
                value={PROFILE.height}
              />
              <Line
                label={lang === "en" ? "Weight" : "વજન"}
                value={PROFILE.weight}
              />
              <Line
                label={lang === "en" ? "Blood Group" : "બ્લડ ગ્રૂપ"}
                value={PROFILE.bloodGroup}
              />
              <Line
                label={lang === "en" ? "Mother Tongue" : "માતૃભાષા"}
                value={PROFILE.motherTongue}
              />
              <Line
                label={lang === "en" ? "Caste" : "જાતિ"}
                value={PROFILE.caste}
              />
              <Line
                label={lang === "en" ? "Sub Caste" : "ઉપ-જાતિ"}
                value={PROFILE.subCaste}
              />
              <Line
                label={lang === "en" ? "Gotra" : "ગોત્ર"}
                value={PROFILE.gotra}
              />
              <Line
                label={lang === "en" ? "Manglik" : "માંગલિક"}
                value={PROFILE.manglik}
              />
            </CardContent>
          </Card>

          {/* Education & Career */}
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>{t.education}</CardTitle>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 gap-3">
              <Line
                label={lang === "en" ? "Education" : "શિક્ષણ"}
                value={PROFILE.education}
              />
              <Line
                label={lang === "en" ? "Occupation" : "વ્યવસાય"}
                value={PROFILE.occupation}
              />
              <Line
                label={lang === "en" ? "Employer" : "નોકરીસ્થળ"}
                value={PROFILE.employer}
              />
              <Line
                label={lang === "en" ? "Income" : "આવક"}
                value={PROFILE.income}
              />
              <Line
                label={lang === "en" ? "Work Location" : "કામનું સ્થળ"}
                value={PROFILE.workLocation}
              />
            </CardContent>
          </Card>

          {/* Family */}
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>{t.family}</CardTitle>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 gap-3">
              <Line
                label={lang === "en" ? "Father's Name" : "પિતાજીનું નામ"}
                value={PROFILE.fatherName}
              />
              <Line
                label={
                  lang === "en" ? "Father's Occupation" : "પિતાની નોકરી/ધંધો"
                }
                value={PROFILE.fatherOccupation}
              />
              <Line
                label={lang === "en" ? "Mother's Name" : "માતા શી નામ"}
                value={PROFILE.motherName}
              />
              <Line
                label={
                  lang === "en" ? "Mother's Occupation" : "માતા નો વ્યવસાય"
                }
                value={PROFILE.motherOccupation}
              />
              <Line
                label={lang === "en" ? "Brothers" : "ભાઈ"}
                value={PROFILE.brothers}
              />
              <Line
                label={lang === "en" ? "Sisters" : "બહેનો"}
                value={PROFILE.sisters}
              />
              <Line
                label={lang === "en" ? "Family Type" : "પરિવારનો પ્રકાર"}
                value={PROFILE.familyType}
              />
              <Line
                label={lang === "en" ? "Native Place" : "મૂળ ગામ"}
                value={PROFILE.nativePlace}
              />
              <Line
                icon={MapPin}
                label={lang === "en" ? "Address" : "સરનામું"}
                value={PROFILE.address}
              />
            </CardContent>
          </Card>

          {/* Lifestyle / Preferences */}
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>{t.lifestyle}</CardTitle>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 gap-3">
              <Line
                label={lang === "en" ? "Diet" : "આહાર"}
                value={PROFILE.diet}
              />
              <Line
                label={lang === "en" ? "Smoking" : "ધુમ્રપાન"}
                value={PROFILE.smoke}
              />
              <Line
                label={lang === "en" ? "Alcohol" : "મદિરાપાન"}
                value={PROFILE.drink}
              />
              <Line
                label={lang === "en" ? "Hobbies" : "શોખ"}
                value={PROFILE.hobbies}
              />
            </CardContent>
          </Card>

          {/* Partner Preferences */}
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>{t.partner}</CardTitle>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 gap-3">
              <Line
                label={lang === "en" ? "Age" : "ઉંમર"}
                value={PROFILE.partnerPreferences.age}
              />
              <Line
                label={lang === "en" ? "Height" : "ઊંચાઈ"}
                value={PROFILE.partnerPreferences.height}
              />
              <Line
                label={lang === "en" ? "Education" : "શિક્ષણ"}
                value={PROFILE.partnerPreferences.education}
              />
              <Line
                label={lang === "en" ? "Religion/Caste" : "ધર્મ/જાતિ"}
                value={PROFILE.partnerPreferences.religionCaste}
              />
              <Line
                label={lang === "en" ? "Location" : "સ્થળ"}
                value={PROFILE.partnerPreferences.location}
              />
              <Line
                label={lang === "en" ? "Other" : "અન્ય"}
                value={PROFILE.partnerPreferences.other}
              />
            </CardContent>
          </Card>

          {/* Horoscope (optional block will hide if empty) */}
          {(PROFILE.horoscope?.rashi ||
            PROFILE.horoscope?.nakshatra ||
            PROFILE.horoscope?.horoscopeMatchRequired) && (
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>{t.horoscope}</CardTitle>
              </CardHeader>
              <CardContent className="grid sm:grid-cols-2 gap-3">
                <Line
                  label={lang === "en" ? "Rashi" : "રાશિ"}
                  value={PROFILE.horoscope?.rashi}
                />
                <Line
                  label={lang === "en" ? "Nakshatra" : "નક્ષત્ર"}
                  value={PROFILE.horoscope?.nakshatra}
                />
                <Line
                  label={lang === "en" ? "Gotra" : "ગોત્ર"}
                  value={PROFILE.horoscope?.gotra}
                />
                <Line
                  label={
                    lang === "en" ? "Match Required" : "માત્ર કુંડળી મેળાપ"
                  }
                  value={PROFILE.horoscope?.horoscopeMatchRequired}
                />
              </CardContent>
            </Card>
          )}

          {/* Contact */}
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>{t.contact}</CardTitle>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 gap-3">
              <Line
                icon={Phone}
                label={lang === "en" ? "Phone" : "ફોન"}
                value={PROFILE.phone}
              />
              <Line
                icon={Mail}
                label={lang === "en" ? "Email" : "ઇમેઇલ"}
                value={PROFILE.email}
              />
              <Line
                icon={User}
                label={lang === "en" ? "Contact Person" : "સંપર્ક વ્યક્તિ"}
                value={PROFILE.contactPerson}
              />
              <Line
                icon={Phone}
                label={lang === "en" ? "WhatsApp" : "વોટ્સએપ"}
                value={PROFILE.whatsapp}
              />
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <footer className="py-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {PROFILE.fullName} · Marriage Biodata
        </footer>
      </div>

      {/* Print styles */}
      <style>{`
        @media print {
          button, a, .no-print { display: none !important; }
          .shadow-xl { box-shadow: none !important; }
          body { background: white !important; }
        }
      `}</style>
    </div>
  );
}
