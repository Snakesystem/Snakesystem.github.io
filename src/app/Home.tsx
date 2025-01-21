
const Home = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between lg:justify-center min-h-screen px-6 lg:px-16 py-10">
      {/* Bagian kiri - Tentang kamu */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-5xl lg:text-6xl font-bold mb-4">John Doe</h1> {/* Ganti nama kamu */}
        <p className="text-2xl lg:text-3xl text-gray-300 mb-6">
          Fullstack Developer
        </p>
        <p className="text-lg text-gray-400">
          I am a passionate developer with experience in building web and mobile applications
          using modern technologies. I specialize in both frontend and backend development, 
          creating seamless digital experiences.
        </p>
      </div>
      {/* Bagian kanan - Avatar */}
      <div className="lg:w-1/2 flex justify-center lg:justify-end mb-10 lg:mb-0">
        <img
          src="https://via.placeholder.com/300" // Ganti dengan URL foto kamu
          alt="Avatar"
          className="w-64 h-64 lg:w-80 lg:h-80 rounded-full shadow-xl"
        />
      </div>
    </div>
  );
};

export default Home;
