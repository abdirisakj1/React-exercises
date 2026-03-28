
import useForm from './UseForm'

function CustomForm() {

  const { values, handleChange } = useForm({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formData:", values);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <div>
          <input 
            type="text" 
            name="name"
            onChange={handleChange}
            value={values.name}
            placeholder='Name'
          />
        </div>

        <div>
          <input 
            type="email" 
            name="email"
            onChange={handleChange}
            value={values.email}
            placeholder='email'
          />
        </div>

        <div>
          <input 
            type="number" 
            name="phone"
            onChange={handleChange}
            value={values.phone}
            placeholder='phone'
          />
        </div>

        <div>
          <input 
            type="text" 
            name="message"
            onChange={handleChange}
            value={values.message}
            placeholder='message'
          />
        </div>

        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default CustomForm;