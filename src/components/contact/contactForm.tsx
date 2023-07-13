import { component$, useSignal, type Signal } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";

interface InputProps {
  label: string;
  id: string;
  value: Signal<string>;
  type: string;
}

const InputField = component$(({ label, type, id, value }: InputProps) => {
  return (
    <div class="relative">
      <label for={id} class="leading-7 text-sm text-gray-600">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        value={value.value}
        onChange$={(e) => (value.value = e.target.value)}
        class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        required
      />
    </div>
  );
});

export const ContactForm = component$(() => {
  const name = useSignal("");
  const email = useSignal("");
  const message = useSignal("");

  return (
    <section class="text-gray-600 body-font relative">
      <div class="container px-5 pt-7 mx-auto">
        <div class="lg:w-1/2 md:w-2/3 mx-auto">
          <Form class="flex flex-wrap -m-2">
            <div class="p-2 w-full md:w-1/2">
              <InputField label="Nombre*" type="text" id="name" value={name} />
            </div>
            <div class="p-2 w-full md:w-1/2">
              <InputField label="Email*" type="email" id="email" value={email} />
            </div>
            <div class="p-2 w-full">
              <div class="relative">
                <label for="message" class="leading-7 text-sm text-gray-600">
                  Mensaje*
                </label>
                <textarea
                  id="message"
                  name="message"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  value={message.value}
                  onChange$={(e) => (message.value = e.target.value)}
                  required
                 />
              </div>
            </div>
            <div class="p-2 w-full">
              <button
                type="submit"
                class="flex mx-auto duration-300 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
              >
                Enviar
              </button>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
});
