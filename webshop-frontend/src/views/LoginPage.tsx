import LoginForm from "@/components/LoginForm.tsx";

const LoginPage = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-300 min-h-screen">
      {/* Left side with centered text and background image */}
      <div
        className="flex-1 md:h-screen h-1/4 bg-cover bg-center text-white flex items-center justify-center p-8"
        style={{ backgroundImage: 'url("/login-bg.avif")' }}
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Reliable Internet, Anytime, Anywhere
          </h1>
          <p className="text-lg mb-4">
            Experience fast and stable internet with our top-tier service.
            Perfect for streaming, gaming, and working from home.
          </p>
          <p className="text-sm">
            Join us today for seamless connectivity and exceptional support.
          </p>
        </div>
      </div>

      {/* Right side with login form */}
      <LoginForm />
    </div>
  );
};

export default LoginPage;
