"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoveForm() {
  const router = useRouter();

  const [yourDob, setYourDob] = useState("");
  const [partnerDob, setPartnerDob] = useState("");
  const [relationship, setRelationship] = useState("dating");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/result?you=${yourDob}&partner=${partnerDob}&type=${relationship}`
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Your Date of Birth</label>
        <input
          type="date"
          required
          value={yourDob}
          onChange={(e) => setYourDob(e.target.value)}
          className="w-full mt-1 border rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">
          Partner&apos;s Date of Birth
        </label>
        <input
          type="date"
          required
          value={partnerDob}
          onChange={(e) => setPartnerDob(e.target.value)}
          className="w-full mt-1 border rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Relationship Type</label>
        <select
          value={relationship}
          onChange={(e) => setRelationship(e.target.value)}
          className="w-full mt-1 border rounded px-3 py-2"
        >
          <option value="crush">Crush</option>
          <option value="dating">Dating</option>
          <option value="married">Married</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
      >
        Reveal Our Compatibility
      </button>
    </form>
  );
}
