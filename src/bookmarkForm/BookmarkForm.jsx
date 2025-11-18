import { useState } from "react";
import ColorPicker from "./ColorPicker";
import TextInput from "./TextInput";

const BookmarkForm = () => {
  const [formData, setFormData] = useState({
    id: crypto.randomUUID(),
    url: "",
    color: "#ffffff",
    category: "",
    userName: "",
    password: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newData = { ...formData };

    newData[name] = value;
    setFormData(newData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleFormClear = () => {
    setFormData({
      id: crypto.randomUUID(),
      url: "",
      color: "#ffffff",
      category: "",
      userName: "",
      password: "",
    });
  };

  return (
    <>
      <div className="max-w-7xl mx-auto mt-8 px-4">
        <form
          className="mb-10 rounded-2xl border border-neutral-800 bg-linear-to-br from-neutral-900/70 to-neutral-800/40 p-8 shadow-2xl shadow-black/40 backdrop-blur"
          onSubmit={handleSubmit}
        >
          <div className="mb-8 flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
              New bookmark
            </p>
            <h2 className="text-2xl font-semibold">
              Store website credentials safely
            </h2>
            <p className="text-sm text-neutral-400">
              Fill the details below. Your brand color helps us render a
              matching favicon.
            </p>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <TextInput
                label={"Website URL"}
                type={"url"}
                name={"url"}
                placeholder={"https://example.com"}
                helper={"Include https:// for best results."}
                value={formData.url}
                onChange={handleChange}
              />

              <ColorPicker
                onColorChange={handleChange}
                name={"color"}
                value={formData.color}
              />

              <label className="flex flex-col gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 text-sm transition focus-within:border-blue-500 focus-within:bg-neutral-900 focus-within:shadow-lg focus-within:shadow-blue-500/10">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Category
                </span>
                <select
                  className="w-full bg-transparent text-base text-white outline-none"
                  onChange={(e) => handleChange(e)}
                  name="category"
                >
                  <option className="bg-neutral-900 text-white">
                    Select category
                  </option>
                  <option className="bg-neutral-900 text-white">Social</option>
                  <option className="bg-neutral-900 text-white">Video</option>
                  <option className="bg-neutral-900 text-white">Design</option>
                  <option className="bg-neutral-900 text-white">
                    Streaming
                  </option>
                  <option className="bg-neutral-900 text-white">
                    Productivity
                  </option>
                  <option className="bg-neutral-900 text-white">
                    Entertainment
                  </option>
                  <option className="bg-neutral-900 text-white">
                    Shopping
                  </option>
                  <option className="bg-neutral-900 text-white">Music</option>
                </select>
                <span className="text-xs text-neutral-500">
                  Helps you filter quicker later.
                </span>
              </label>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <TextInput
                label={"Username"}
                type={"text"}
                name={"userName"}
                placeholder={"Enter username"}
                helper={"Use workspace or personal handle."}
                value={formData.userName}
                onChange={handleChange}
              />

              <TextInput
                label={"Password"}
                type={"password"}
                name={"password"}
                placeholder={"Enter password"}
                helper={"Choose at least 6 characters."}
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="text-xs text-neutral-500">
              By submitting you confirm the entry is safe to store.
            </div>
            <div className="flex flex-1 justify-end gap-3">
              <button
                type="reset"
                className="w-full rounded-full border border-neutral-700 px-6 py-3 text-sm font-semibold text-neutral-200 transition hover:border-neutral-500 hover:text-white md:w-auto"
                onClick={handleFormClear}
              >
                Clear
              </button>
              <button
                type="submit"
                className="w-full rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 md:w-auto"
              >
                Add Bookmark
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default BookmarkForm;
