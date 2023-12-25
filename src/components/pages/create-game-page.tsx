import { ErrorMessage, Field, Form, Formik } from "formik";
import { userSchema } from "./schemas";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../../stores";

export type User = yup.InferType<typeof userSchema>;

export const CreateGamePage = () => {
  const navigate = useNavigate();
  //const setGame = useAppStore((state) => state.setGameConfig);
  return (
    <section className="text-white justify-center flex flex-col">
      <h1 className="text-6xl font-bold">Create Game</h1>

      <Formik
        initialValues={{
          name: "",
          secretCode: "",
        }}
        onSubmit={(values, errors) => {
          //setGame(values?.name, values?.secretCode);
          console.log("Submitting:", values, errors);
          navigate("/game/play");
        }}
        validationSchema={userSchema}
      >
        {({ values, handleSubmit }) => (
          <Form
            className="flex flex-col gap-4 w-full lg:w-[40%] justify-center place-self-center bg-[#1ECD8D] p-5 rounded-lg shadow-lg bg-opacity-25"
            onSubmit={handleSubmit}
          >
            <h1 className="text-lg font-semibold">Let's create your game</h1>
            {/*  <label htmlFor="name">Your Name</label> */}
            <Field
              className="border px-2 border-lime-400 rounded-xl text- bg-transparent text-white placeholder:text-xs"
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              value={values.name}
            />
            <ErrorMessage
              name="name"
              component="div"
              render={(msg) => (
                <div className="text-red-500 text-xs">{msg}</div>
              )}
            />

            {/*   <label htmlFor="secretCode">Secret Code</label> */}
            <Field
              className="border px-2 border-lime-400 rounded-xl text- bg-transparent text-white placeholder:text-xs"
              type="password"
              name="secretCode"
              placeholder="Enter a secret code"
              id="secretCode"
              value={values.secretCode}
              /* onChange={handleChange} */
            />
            <ErrorMessage
              name="secretCode"
              component="div"
              render={(msg) => (
                <div className="text-red-500 text-xs">{msg}</div>
              )}
            />
            <button
              type="submit"
              className="border border-lime-400 rounded-xl font-semibold"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};
