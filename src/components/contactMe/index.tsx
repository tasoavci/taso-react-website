import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import tasoPhoto from "@/assets/taso.jpeg";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactMe = ({ setSelectedPage }: Props) => {
  const inputStyles = `select-none placeholder:opacity-70 text-white mb-5 w-full rounded-lg bg-taso-10 px-5 py-3 placeholder-white`;
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section className="mx-auto w-5/6 pb-32 pt-24" id="contactme">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactMe)}
      >
        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="pt-5 md:w-3/5"
        >
          <h1 className="cursor-default select-none  text-2xl font-bold text-taso-10 md:text-3xl">
            YOU CAN <span className="text-taso-40">CONTACT ME</span> NOW
          </h1>
          <p className="mt-5 cursor-default select-none text-lg">
            You can reach my e-mail by filling out the form correctly!
          </p>
        </motion.div>
        {/* FORM AND IMAGE */}
        <div className="mt-10 justify-between gap-10 md:flex">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 80 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-10 basis-3/5 md:mt-0"
          >
            <form
              action="https://formsubmit.co/tasoavci2002@gmail.com"
              method="POST"
              onSubmit={onSubmit}
              target="_blank"
            >
              <input
                placeholder="NAME"
                type="text"
                className={inputStyles}
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-taso-10">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 char."}
                </p>
              )}
              <input
                placeholder="EMAIL"
                type="text"
                className={inputStyles}
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-taso-10">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "invalid email address."}
                </p>
              )}
              <textarea
                placeholder="MESSAGE"
                rows={4}
                cols={50}
                className={inputStyles}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-taso-10">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </p>
              )}
              <button
                className="mt-5 cursor-pointer select-none rounded-xl bg-taso-10 px-20 py-3 text-lg text-taso-30 transition duration-500 hover:bg-taso-20 hover:text-taso-10"
                type="submit"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 80 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-16 basis-2/5 md:mt-0"
          >
            <div className="w-full">
              <img
                className="w-full select-none rounded-xl drop-shadow-xl"
                src={tasoPhoto}
                alt="tasoavci"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactMe;
