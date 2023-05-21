import axios from 'axios';

const RegisterPage = () => {
  const handleRegistration = async () => {
    try {
      const response = await axios.post('/api/creatures', { /* creature data */ });
      console.log(response.data); // Handle the response
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {/* Registration form */}
      <button onClick={handleRegistration}>Register</button>
    </div>
  );
};

export default RegisterPage;
