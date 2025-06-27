import { use } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../AuthContext/AuthContext";
import { useForm } from "react-hook-form";

export default function AddGardener() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { users } = use(AuthContext);

  const onSubmit = async (data) => {
    try {
      const { interests, ...gardener } = data;
      gardener.interests = interests.split(",").map((ins) => ins.trim(" "));

      fetch(
        "https://gardening-community-server-gamma.vercel.app/explore-gardeners",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(gardener),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire("Success", "Gardener added!", "success");
            reset();
          } else {
            Swal.fire("Error", "Something went wrong", "error");
          }
        });
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Failed to add gardener", "error");
    }
  };

  return (
    <div className="m-5 p-6 bg-secondary rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">Add Gardener</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <input
              type="text"
              placeholder="Name"
              {...register("name", { required: true })}
              className="input input-bordered w-full text-black"
            />
            {errors.name?.type === "required" && (
              <p role="alert" className="text-red-500 text-sm">
                Name is required
              </p>
            )}
          </div>
          <div>
            <input
              type="text"
              defaultValue={users.displayName}
              placeholder="Username"
              {...register("username", { required: true })}
              className="input input-bordered w-full text-black"
            />
            {errors.username?.type === "required" && (
              <p role="alert" className="text-red-500 text-sm">
                Username is required
              </p>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Location"
              {...register("location", { required: true })}
              className="input input-bordered w-full text-black"
            />
            {errors.location?.type === "required" && (
              <p role="alert" className="text-red-500 text-sm">
                Location is required
              </p>
            )}
          </div>
          <div>
            <input
              type="url"
              placeholder="Profile Image URL"
              {...register("profileImage", { required: true })}
              className="input input-bordered w-full text-black"
            />{" "}
            {errors.profileImage?.type === "required" && (
              <p role="alert" className="text-red-500 text-sm">
                Profile image is required
              </p>
            )}
          </div>
          <div>
            <textarea
              placeholder="Short Bio"
              {...register("bio")}
              className="textarea textarea-bordered w-full resize-none text-black"
            ></textarea>
            {errors.bio?.type === "required" && (
              <p role="alert" className="text-red-500 text-sm">
                Bio image is required
              </p>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Comma separated interests (e.g. Herbs, Flowers)"
              {...register("interests", { required: true })}
              className="input input-bordered w-full text-black"
            />
            {errors.interests?.type === "required" && (
              <p role="alert" className="text-red-500 text-sm">
                Interests image is required
              </p>
            )}
          </div>
          <div>
            <select
              {...register("level")}
              className="select select-bordered w-full text-black"
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Expert">Expert</option>
            </select>
            {errors.level?.type === "required" && (
              <p role="alert" className="text-red-500 text-sm">
                Level image is required
              </p>
            )}
          </div>
          <div>
            <input
              type="date"
              {...register("joinedDate", { required: true })}
              className="input input-bordered w-full text-black"
            />
            {errors.date?.type === "required" && (
              <p role="alert" className="text-red-500 text-sm">
                Date image is required
              </p>
            )}
          </div>
        </div>
        <button type="submit" className="btn btn-primary w-full mt-4">
          Add Gardener
        </button>
      </form>
    </div>
  );
}
