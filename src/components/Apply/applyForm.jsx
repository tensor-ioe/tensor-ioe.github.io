import { useState } from "react"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../firebase"

export default function ApplyForm() {
  const [form, setForm] = useState({
    fullname: '',
    email: '',
    rollno: '',
    roles: [],
    questionOne: 'Any specific skill set that can be utilized in above selected domain(s)?',
    answerOne: '',
    questionTwo: 'Why do you want to be part of this community?',
    answerTwo: '',
    questionThree: 'How do you plan to contribute to the community as part of the above selected domain?',
    answerThree: '',
    questionFour: 'What do you expect from Tensor?',
    answerFour: '',
    questionFive: 'Any query of feedbacks?',
    answerFive: ''
  })
  const [errors, setErrors] = useState({})
  const [overlay, setOverlay] = useState(false)
  const [success, setSuccess] = useState(false)
  const [failure, setFailure] = useState(false)

  const notValidField = (value) =>
    !value || value.trim() === ""

  const isValidFullName = (name) => {
    const parts = name.trim().split(/\s+/)
    return parts.length >= 2
  }
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)
  }
  const handleChange = async (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }
  const handleRoleChange = (e) => {
    const { name, checked } = e.target
    setForm((prev) => ({
      ...prev,
      roles: checked
        ? [...prev.roles, name]          // add role
        : prev.roles.filter((r) => r !== name), // remove role
    }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    let newErrors = {} // create a newErrors object each time on submission of form 
    // Full Name
    if (notValidField(form.fullname)) { newErrors.fullname = "Please fill out this field" }
    else if (!isValidFullName(form.fullname)) {
      newErrors.fullname = "Please enter atleast first and last name"
    }
    // Email
    if (notValidField(form.email)) { newErrors.email = "Please fill out this field" }
    else if (!isValidEmail(form.email)) {
      newErrors.email = "Please enter a valid email address"
    }
    if (notValidField(form.rollno)) { newErrors.rollno = "Please fill out this field" }
    if (notValidField(form.answerTwo)) { newErrors.answerTwo = "Please fill out this field" }
    if (notValidField(form.answerThree)) { newErrors.answerThree = "Please fill out this field" }
    if (notValidField(form.answerFour)) { newErrors.answerFour = "Please fill out this field" }
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) {// if atleast one invalid field, wont submit the form
      window.scrollTo(0, 0) // and take user to top of the page for rethinking their lifechoices
      return
    }
    // sending data to firebase
    try {
      await addDoc(collection(db, "applications"), {
        fullname: form.fullname,
        email: form.email,
        rollno: form.rollno,
        roles: form.roles,
        responses: [
          {
            question: form.questionOne,
            response: form.answerOne
          },
          {
            question: form.questionTwo,
            response: form.answerTwo
          },
          {
            question: form.questionThree,
            response: form.answerThree
          },
          {
            question: form.questionFour,
            response: form.answerFour
          },
          {
            question: form.questionFive,
            response: form.answerFive
          }
        ],
        createdAt: serverTimestamp()
      })
      setOverlay(true)
      setSuccess(true)
    } catch (error) {
      console.error(error)
      setOverlay(true)
      setFailure(true)
    }
    // clearing the form after submission 
    setForm({
      fullname: '',
      email: '',
      rollno: '',
      roles: [],
      questionOne: 'Any specific skill set that can be utilized in above selected domain(s)?',
      answerOne: '',
      questionTwo: 'Why do you want to be part of this community?',
      answerTwo: '',
      questionThree: 'How do you plan to contribute to the community as part of the above selected domain?',
      answerThree: '',
      questionFour: 'What do you expect from Tensor?',
      answerFour: '',
      questionFive: 'Any query of feedbacks?',
      answerFive: ''
    })
  }
  return (
    <>
      <h1 className='text-3xl sm:text-4xl font-extrabold text-center mt-10 mb-7 relative'>APPLICATION FORM</h1>
      <div className="w-[90%] xl:w-width mx-auto mb-10">
        <form noValidate onSubmit={handleSubmit}
          className="flex flex-col gap-10 bg-white shadow-navbarShadow rounded-lg p-6"
        >
          {/* Personal Details container */}
          <div className="flex flex-col gap-4">
            <h1 className="font-bold uppercase text-lg text-center">Personal Details</h1>
            <div>
              <input
                type="text"
                name="fullname"
                value={form.fullname}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full h-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.fullname && (
                <p className="text-red-500 pt-2 text-sm uppercase">{errors.fullname}</p>
              )}
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && (
                <p className="text-red-500 pt-2 text-sm uppercase">{errors.email}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                name="rollno"
                value={form.rollno}
                onChange={handleChange}
                placeholder="Campus Roll Number"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.rollno && (
                <p className="text-red-500 pt-2 text-sm uppercase">{errors.rollno}</p>
              )}
            </div>
          </div>
          {/* Roles and Skills container */}
          <div className="flex flex-col gap-4">
            <h1 className="font-bold uppercase text-lg text-center">Roles and Skills</h1>
            <span>Which roles are you interested in?</span>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="Web Developer Role"
                name="Web Developer"
                checked={form.roles.includes("Web Developer")}
                onChange={handleRoleChange}
                className="w-5 h-5"
              />
              <label htmlFor="Web Developer Role">Web Developer</label>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="Social Media Manager Role"
                name="Social Media Manager"
                checked={form.roles.includes("Social Media Manager")}
                onChange={handleRoleChange}
                className="w-5 h-5"
              />
              <label htmlFor="Social Media Manager Role">Social Media Manager</label>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="Marketing Associate Role"
                name="Marketing Associate"
                checked={form.roles.includes("Marketing Associate")}
                onChange={handleRoleChange}
                className="w-5 h-5"
              />
              <label htmlFor="Marketing Associate Role">Marketing Associate</label>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="Graphics Designer Role"
                name="Graphics Designer"
                checked={form.roles.includes("Graphics Designer")}
                onChange={handleRoleChange}
                className="w-5 h-5"
              />
              <label htmlFor="Graphics Designer Role">Graphics Designer</label>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="Research Advocate Role"
                name="Research Advocate"
                checked={form.roles.includes("Research Advocate")}
                onChange={handleRoleChange}
                className="w-5 h-5"
              />
              <label htmlFor="Research Advocate Role">Research Advocate</label>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="Software Coordinator Role"
                name="Software Coordinator"
                checked={form.roles.includes("Software Coordinator")}
                onChange={handleRoleChange}
                className="w-5 h-5"
              />
              <label htmlFor="Software Coordinator Role">Software Coordinator</label>
            </div>
            <span>{form.questionOne}</span>
            <textarea
              name="answerOne"
              value={form.answerOne}
              onChange={handleChange}
              className="w-full h-32 px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Personal Expression container */}
          <div className="flex flex-col gap-4">
            <h1 className="font-bold uppercase text-lg text-center">Personal Expression</h1>
            <span>{form.questionTwo}<span className="text-red-500"> *</span></span>
            <div>
              <textarea
                name="answerTwo"
                value={form.answerTwo}
                onChange={handleChange}
                required
                className="w-full h-32 px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.answerTwo && (
                <p className="text-red-500 pt-2 text-sm uppercase">{errors.answerTwo}</p>
              )}
            </div>
            <span>{form.questionThree}<span className="text-red-500"> *</span></span>
            <div>
              <textarea
                name="answerThree"
                value={form.answerThree}
                onChange={handleChange}
                required
                className="w-full h-32 px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.answerThree && (
                <p className="text-red-500 pt-2 text-sm uppercase">{errors.answerThree}</p>
              )}
            </div>
            <span>{form.questionFour}<span className="text-red-500"> *</span></span>
            <div>
              <textarea
                name="answerFour"
                value={form.answerFour}
                onChange={handleChange}
                required
                className="w-full h-32 px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.answerFour && (
                <p className="text-red-500 pt-2 text-sm uppercase">{errors.answerFour}</p>
              )}
            </div>
            <span>{form.questionFive}</span>
            <textarea
              name="answerFive"
              value={form.answerFive}
              onChange={handleChange}
              className="w-full h-32 px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            disabled={form.roles.length === 0}
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors disabled:opacity-50"
          >
            Submit
          </button>
        </form>
      </div>
      <div className={`w-[100vw] h-[100vh] fixed top-0 z-30 bg-[#00000099] ${overlay ? "flex" : "hidden"} justify-center items-center`}>
        {/* For form submission successful  */}
        <div className={`p-4 sm:p-6 bg-white rounded-lg ${success ? "flex" : "hidden"} flex-col justify-center items-center gap-2 sm:gap-5`}>
          <div className="text-xl sm:text-3xl font-bold text-center">Form Submitted ✅</div>
          <div className="text-sm sm:text-base flex flex-col items-center justify-center">
            <span>Your application has been successfully recorded.</span>
            <span>We'll get back to you shortly.</span>
          </div>
          <div
            onClick={() => {
              setOverlay(false)
              setSuccess(false)
            }}
            className="w-full grid place-content-center p-2 cursor-pointer rounded-lg bg-green-400 uppercase hover:bg-green-600">Continue</div>
        </div>
        {/* For form submission failed */}
        <div className={`p-4 sm:p-6 bg-white rounded-lg ${failure ? "flex" : "hidden"} flex-col justify-center items-center gap-3 sm:gap-5`}>
          <div className="text-2xl sm:text-3xl font-bold text-center">Submission Failed❗</div>
          <div className="flex flex-col items-center justify-center">
            <span>Something went wrong.</span>
            <span>Please try again.</span>
          </div>
          <div
            onClick={() => {
              setOverlay(false)
              setFailure(false)
            }}
            className="w-full grid place-content-center p-2 cursor-pointer rounded-lg bg-red-400 uppercase hover:bg-red-600">Retry</div>
        </div>
      </div >
    </>
  )
}