import { useForm } from "react-hook-form";

export const FormHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert(`registered Succesfully!
    ${JSON.stringify(data, null, 2)}`);
  };

  return (
    <div className="bg-gray-300 min-h-screen p-4">
      <form
        className="mx-auto w-full md:w-1/2 lg:w-1/3 bg-white p-4 flex flex-col gap-4 shadow rounded-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-center text-gray-700 font-medium text-2xl my-4">
          Student Registration
        </h2>
        <div className="flex flex-col gap-1">
          <label className="text-gray-600 font-medium">Student Name</label>
          <input
            className="border p-1  border-gray-500 rounded-sm focus:border-blue-500 outline-none transition"
            type="text"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters",
              },
            })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>
        {/* email */}
        <div className="flex flex-col gap-1">
          <label className="text-gray-600 font-medium">Email</label>
          <input
            className="border p-1  border-gray-500 rounded-sm focus:border-blue-500 outline-none transition"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email adress",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* grade */}
        <div className="flex flex-col gap-1">
          <label className="text-gray-600 font-medium">Grade Level</label>
          <select
            {...register("grade", { required: "please select grade" })}
            className="border p-1 border-gray-500 rounded-sm focus:border-blue-500 outline-none transition"
          >
            <option value="">Select Grade</option>
            <option value="grade9">Grade 9</option>
            <option value="grade10">Grade 10</option>
            <option value="grade11">Grade 11</option>
            <option value="grade12">Grade 12</option>
          </select>
          {errors.grade && (
            <p className="text-red-500">{errors.grade.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-gray-600 font-medium">Subjects interest</label>

          <div className="flex items-center  gap-2 my-2">
            <input
              className="w-4 h-4 cursor-pointer"
              {...register("subjects")}
              value={"science"}
              type="checkbox"
            />
            <p>science</p>
          </div>
          <div className="flex items-center gap-2">
            <input
              className="w-4 h-4 cursor-pointer"
              {...register("subjects")}
              value={"english"}
              type="checkbox"
            />
            <p>English</p>
          </div>
          <div className="flex items-center gap-2">
            <input
              className="w-4 h-4 cursor-pointer"
              {...register("subjects", {
                required: "please select at least one subject",
              })}
              value={"mathematics"}
              type="checkbox"
            />
            <p>mathematics</p>
          </div>

          {errors.subjects && (
            <p className="text-red-500">{errors.subjects.message}</p>
          )}
        </div>

        <button
          className="bg-red-500 py-2 rounded-sm text-white font-medium cursor-pointer"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};
