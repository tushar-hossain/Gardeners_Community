import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    Swal.fire("Message Sent", "Thank you for contacting us!", "success");
    reset();
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4 text-center text-black">Contact Us</h2>
      <p className="text-gray-600 text-center mb-8">
        Have questions or suggestions? Send us a message below.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          type="text"
          {...register("name", { required: true })}
          placeholder="Your Name"
          className="input input-bordered w-full"
        />
        {errors.name?.type === "required" && (
          <p role="alert" className="text-red-500 text-sm">
            Name is required
          </p>
        )}
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="Your Email"
          className="input input-bordered w-full"
        />{" "}
        {errors.email?.type === "required" && (
          <p role="alert" className="text-red-500 text-sm">
            Name is required
          </p>
        )}
        <textarea
          {...register("message", { required: true })}
          placeholder="Your Message"
          className="textarea textarea-bordered w-full h-32"
        ></textarea>
        {errors.message?.type === "required" && (
          <p role="alert" className="text-red-500 text-sm">
            Name is required
          </p>
        )}
        <button type="submit" className="btn btn-primary w-full">
          Send Message
        </button>
      </form>
    </div>
  );
}
