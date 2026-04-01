import React from "react";

export const Dashboard = () => {
  return (
    <div className="min-h-screen bg-orange-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* header */}
        <div className="bg-white p-4 flex items-center justify-between rounded-xl shadow">
          <div>
            <h1 className="text-2xl font-medium text-gray-700">
              Welcome back, Student!
            </h1>
            <p className="text-gray-600 text-sm">
              her's what happening your course Today!
            </p>
          </div>

          {/* notfification and user */}
          <div className="flex items-center gap-2">
            <img className="w-6 h-6" src="./pell.png" alt="" />
            <p className="bg-gradient-to-br from-purple-500 to-rose-300 text-white w-8 h-8 rounded-full flex items-center justify-center">
              A
            </p>
          </div>
        </div>

        {/* course over view card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-4 gap-4">
          {/* card */}
          <div className="bg-white shadow rounded-xl px-4 py-3 flex gap-4 items-center">
            {/* icon */}
            <div>
              <p className="text-2xl">📊</p>
            </div>
            <div>
              <p className="text-gray-600">Average Grade</p>
              <h2 className="text-2xl font-medium text-gray-700">88%</h2>
            </div>
          </div>
          <div className="bg-white shadow rounded-xl px-4 py-3 flex gap-4 items-center">
            {/* icon */}
            <div>
              <p className="text-2xl">📚</p>
            </div>
            <div>
              <p className="text-gray-600">Courses</p>
              <h2 className="text-2xl font-medium text-gray-700">15+</h2>
            </div>
          </div>
          <div className="bg-white shadow rounded-xl px-4 py-3 flex gap-4 items-center">
            {/* icon */}
            <div>
              <p className="text-2xl">✍️</p>
            </div>
            <div>
              <p className="text-gray-600">Assigments</p>
              <h2 className="text-2xl font-medium text-gray-700">12</h2>
            </div>
          </div>
        </div>

        {/* courses intro */}
        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
          {/* courses progress */}
          <div className="col-span-1 row-span-1 md:col-span-2 md:row-span-2 bg-white py-2 px-4 shadow rounded-xl">
            <h2 className="text-2xl font-medium text-gray-700">
              Courses Progress
            </h2>
            {/* progrss container */}
            <div className="mt-6">
              <div className="flex justify-between items-center">
                <h3 className="text-gray-700 font-medium text-lg">
                  React Fundamentals
                </h3>
                <p className="text-md text-gray-600">75%</p>
              </div>
              {/* progress */}
              <div className="bg-gray-400 w-full h-3 rounded-full relative my-3">
                <div className="bg-green-400 w-4/6 h-3 rounded-full absolute"></div>
              </div>
              {/*  */}
              <div className="flex justify-between items-center mt-1">
                <p className="text-md text-gray-600">
                  Next: Components and Props
                </p>
                <p className="text-md text-gray-600">Mc hamuuda</p>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex justify-between items-center">
                <h3 className="text-gray-700 font-medium text-lg">
                  Javascript Advanced
                </h3>
                <p className="text-md text-gray-600">45%</p>
              </div>
              {/* progress */}
              <div className="bg-gray-400 w-full h-3 rounded-full relative my-3">
                <div className="bg-green-400 w-2/4 h-3 rounded-full absolute"></div>
              </div>
              {/*  */}
              <div className="flex justify-between items-center mt-1">
                <p className="text-md text-gray-600">Next: Async/await</p>
                <p className="text-md text-gray-600">Sharafdin</p>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex justify-between items-center">
                <h3 className="text-gray-700 font-medium text-lg">
                  UI/UX Design
                </h3>
                <p className="text-md text-gray-600">90%</p>
              </div>
              {/* progress */}
              <div className="bg-gray-400 w-full h-3 rounded-full relative my-3">
                <div className="bg-green-400 w-11/12 h-3 rounded-full absolute"></div>
              </div>
              {/*  */}
              <div className="flex justify-between items-center mt-1">
                <p className="text-md text-gray-600">
                  Next: Color Theory
                </p>
                <p className="text-md text-gray-600">Omer Tood</p>
              </div>
            </div>
          </div>
          {/* upcoming assigments */}
          <div className="bg-white shadow rounded-xl py-2 px-4">
            <h2 className="text-2xl font-medium text-gray-700">
              Upcoming Events
            </h2>

            {/* autline events */}
            <div className="my-4">
              <div className="flex justify-between items-center">
                <h3 className="text-gray-700 font-medium text-md">
                  Build To Do App
                </h3>
                <p className="text-sm bg-rose-100 text-rose-600 rounded-full px-1 font-normal">
                  Pending
                </p>
              </div>
              <div className="flex justify-between items-center mt-1">
                <p className="text-sm text-gray-600">React Fundamentals</p>
                <p className="text-sm text-gray-600">Due 2026-04-1</p>
              </div>
            </div>
            <div className="my-4">
              <div className="flex justify-between items-center">
                <h3 className="text-gray-700 font-medium text-md">
                  Api Integration
                </h3>
                <p className="text-sm bg-green-100 text-green-600 rounded-full px-1 font-normal">
                  Completed
                </p>
              </div>
              <div className="flex justify-between items-center mt-1">
                <p className="text-sm text-gray-600">Javascript Advanced</p>
                <p className="text-sm text-gray-600">Due 2026-03-31</p>
              </div>
            </div>
            <div className="my-4">
              <div className="flex justify-between items-center">
                <h3 className="text-gray-700 font-medium text-md">
                  Design Sytems
                </h3>
                <p className="text-sm text-gray-700 bg-yellow-200 rounded-full px-1 font-normal">
                  in-progress
                </p>
              </div>
              <div className="flex justify-between items-center mt-1">
                <p className="text-sm text-gray-600">UI/UX Design</p>
                <p className="text-sm text-gray-600">Due 2026-03-30</p>
              </div>
            </div>
          </div>
          {/* Anouncements */}
          <div className="bg-white shadow rounded-xl py-2 px-4">
            <h2 className="text-2xl font-medium text-gray-700">
             Anouncements
            </h2>

            {/* notice autline */}
            <div className="my-3 flex gap-2 items-center">
              {/* line */}
              <div className="bg-blue-500 h-14 w-1"></div>
              <div>
                <h3 className="text-gray-700 font-medium text-md">
                  New Course Available
                </h3>
                <p className="text-sm text-gray-500">checkout new Typescript course</p>
                <p className="text-sm text-gray-500">2 hrs ago</p>
              </div>
            </div>
            <div className="my-3 flex gap-2 items-center">
              {/* line */}
              <div className="bg-blue-500 h-14 w-1"></div>
              <div>
                <h3 className="text-gray-700 font-medium text-md">
                 Maintenance Notice
                </h3>
                <p className="text-sm text-gray-500">Platform updates schedule tonight</p>
                <p className="text-sm text-gray-500">5 hrs ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
