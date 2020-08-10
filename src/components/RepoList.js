import React, { useState } from "react";

export default function RepoList() {
  const [sortBy, setSortBy] = useState("stars");

  return (
    <section className="bg-gray-300">
      <div className="mx-auto w-90">
        <h2 className='flex items-center'>
          Sort Repositories by{" "}
          <div className="">
            <select>
              <option value="">stars</option>
              <option value="">forks</option>
              <option value="">size</option>
            </select>
          </div>
        </h2>

        <div className="grid grid-cols-3">

        </div>
      </div>
    </section>
  );
}
