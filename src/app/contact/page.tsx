'use client'
import { FC } from 'react';

interface IconWrapperProps {
  Icon: FC; // Icon is a React functional component
  title: string;
  children: React.ReactNode;
}

const IconWrapper: FC<IconWrapperProps> = ({ Icon, title, children }) => (
  <div className="flex items-center space-x-6">
    <div className="h-10 w-10 flex-shrink-0">
      <Icon />
    </div>
    <div>
      <p className="font-bold text-gray-700">{title}</p>
      {children}
    </div>
  </div>
);

const EnvelopeIcon: FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 512"
    className="h-full w-full text-blue-600"
    fill="currentColor"
  >
    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
  </svg>
);

const PhoneIcon: FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 512"
    className="h-full w-full text-blue-600"
    fill="currentColor"
  >
    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
  </svg>
);

const MapPinIcon: FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 512"
    className="h-full w-full text-blue-600"
    fill="currentColor"
  >
    <path d="M16 144a144 144 0 1 1 288 0A144 144 0 1 1 16 144zM160 80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96c0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3 28.7-64 64-64zM128 480l0-162.9c10.4 1.9 21.1 2.9 32 2.9s21.6-1 32-2.9L192 480c0 17.7-14.3 32-32 32s-32-14.3-32-32z"/>
  </svg>
);

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Contact Me
        </h1>

        <div className="flex items-center justify-center">
          <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Get in Touch
            </h2>
            <div className="space-y-8">
              <IconWrapper Icon={EnvelopeIcon} title="Email">
                <a
                  href="mailto:kabogoeric@gmail.com"
                  className="text-gray-600 hover:text-blue-600"
                >
                  kabogoeric@gmail.com
                </a>
              </IconWrapper>
              <IconWrapper Icon={PhoneIcon} title="Phone">
                <a
                  href="tel:+254706003581"
                  className="text-gray-600 hover:text-blue-600"
                >
                  +254 706003581
                </a>
              </IconWrapper>
              <IconWrapper Icon={MapPinIcon} title="Location">
                <p className="text-gray-600">Nairobi, Kenya</p>
              </IconWrapper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
