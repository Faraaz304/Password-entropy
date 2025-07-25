"use client";
import TakeInput from "./components/takeinput";
import Entropy from "./components/entropy";
import { useState } from "react";

export default function Home() {
  const [bits, setBits] = useState(0);
  const [password, setPassword] = useState("");
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-pink-50">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-4xl flex">
        {/* Left Section */}
        <TakeInput password={password} setPassword={setPassword} setBits={setBits}/>

        {/* Vertical Divider */}
        

        {/* Right Section */}
        <Entropy bits={bits}/>
        
      </div>
    </div>
    </>
  );
}
