import { useForm } from "react-hook-form";
import "./form.styles.css";

const DiscussForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {};
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-10 mt-10"
    >
      <input
        {...register("firstName")}
        placeholder="First name"
        className="py-5 bg-white"
      />
      <input
        className="py-5 bg-white"
        type="text"
        placeholder="Email"
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        className="py-5 bg-white"
        type="text"
        placeholder="You Project"
        {...register("You Project", { required: true })}
      />

      <input
        type="submit"
        className="flex items-center justify-center px-5 text-3xl bg-blue-500 rounded-full"
      />
    </form>
  );
};

export default DiscussForm;
