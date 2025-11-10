import Image from "next/image";
import { Zalando_Sans_Expanded } from "next/font/google";

const zalando = Zalando_Sans_Expanded({
  variable: "--font-zalando-sans-expanded",
  subsets: ["latin"],
  weight: "700",
});

function LoginButton() {
  return (
    <button className="bg-black hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-md w-96">
      Log in
    </button>
  );
}

function SignupButton() {
  return (
    <button className="bg-black hover:bg-red-500 text-white font-bold py-2 px-4 rounded-md w-96">
      Sign up
    </button>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-row ">
      <div className="flex-1 items-center justify-center flex">
        <p className="">Image Placeholder</p>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center">
        <h1 className={`${zalando.className} text-7xl mb-15`}>FitKit</h1>
        <input name="email" type="email" placeholder="Email" className="border border-gray-300 bg-pink-50 rounded-md p-3 mb-6 w-96" />
        <input name="password" type="password" placeholder="Password" className="border border-gray-300 bg-pink-50 rounded-md p-3 mb-6 w-96" />
        <LoginButton />
        <p className="mt-20 mb-3 font-bold">Don't have an account?</p>
        <SignupButton />
      </div>

    </div>
  );
}
