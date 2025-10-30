"use client";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
export default function Header() {
  const auth = useAuth();
  return (
    <header className="bg-white shadow sticky top-0 z-40">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-3xl font-extrabold text-emerald-600">
          YourAgency
        </div>
        <nav className="space-x-6 hidden md:flex">
          <a href="#services" className="hover:text-emerald-800 transition">
            Services
          </a>
          <a href="#work" className="hover:text-emerald-800 transition">
            Work
          </a>
          <a href="#about" className="hover:text-emerald-800 transition">
            About
          </a>
          <a href="#contact" className="hover:text-emerald-800 transition">
            Contact
          </a>
        </nav>
        {auth.isSignedIn ? (
          <Link
            href="/dashboard"
            className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition"
          >
            Dashboard
          </Link>
        ) : (
          <Link
            className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition"
            href="/sign-in"
          >
            Create an Account
          </Link>
        )}
      </div>
    </header>
  );
}
