"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black-100 text-gray-900">
      {!user ? (
        <button
          onClick={gitHubSignIn}
          className="bg-gray-800 text-white px-6 py-3 rounded-md shadow-md"
        >
          Login with GitHub
        </button>
      ) : (
        <div className="text-center">
          <p className="text-lg text-white font-bold">Welcome, {user.displayName} ({user.email})</p>
          <button
            onClick={firebaseSignOut}
            className="bg-red-600 text-white px-6 py-3 rounded-md shadow-md mt-4"
          >
            Logout
          </button>
          <div className="mt-4">
            <Link href="/week-9/shopping-list" className="text-blue-600 underline">
              Go to Shopping List
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
