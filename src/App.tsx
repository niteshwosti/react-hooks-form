import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./App.css";

type Profile = {
  firstname: string;
  lastname: string;
  age: number;
};

function App() {
  const validationSchema = yup.object().shape({
    firstname: yup
      .string()
      .required("This field is required.")
      .max(20, "Only 20 characters max."),
    lastname: yup
      .string()
      .required("This field is required.")
      .max(20, "Only 20 characters max."),
    age: yup.string().required("This field is required."),
  });
  const resolver = yupResolver(validationSchema);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Profile>({ resolver });

  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data));
  });

  return (
    <main>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="firstname">First Name</label>
          <input
            {...register("firstname", { required: true })}
            id="firstname"
            name="firstname"
            type="text"
          />
          {/* {errors.firstname && <div className="error">Enter your name</div>} */}
          <p>{errors.firstname?.message}</p>
        </div>
        <div>
          <label htmlFor="lastname">Last Name</label>
          <input
            {...register("lastname", { required: true })}
            id="lastname"
            name="lastname"
            type="text"
          />
          {/* {errors.lastname && <div className="error">Enter your last name</div>} */}
          <p>{errors.lastname?.message}</p>
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            {...register("age", { required: true })}
            id="age"
            name="age"
            type="text"
          />
          {/* {errors.age && <div className="error">Enter your age</div>} */}
          <p>{errors.age?.message}</p>
        </div>
        <button type="submit">Save</button>
      </form>
    </main>
  );
}

export default App;
