import arrow from "../../assets/arrow.gif";

const About = () => {
  const aboutItems = [
    {
      title: "About us",
      description: "We are super efficient yet humble to serve you !",
    },

    {
      title: "Technology",
      description: "We are proud of our experienced and accomplished team !",
    },
    { title: "Marketing", description: "Can you offer such experience ?" },
  ];

  return (
    <div
      className="grid grid-cols-3 gap-4 p-8 border-b z-50 bg-white fixed w-full
    dark:bg-gray-900  dark:text-white transition duration-500"
    >
      {aboutItems.map((item, index) => (
        <div
          key={index}
          className=" relative  p-6 hover:shadow-lg transition duration-300 bg-pink-50 rounded-lg cursor-pointer dark:bg-gray-800 "
        >
          <h3 className="text-3xl font-extrabold mb-2">{item.title}</h3>
          <p className=" text-lg font-semibold text-gray-600 w-3/4 dark:text-gray-300">
            {item.description}
          </p>
          <img
            className="absolute bottom-0.5 right-2"
            src={arrow}
            alt="right"
          />
        </div>
      ))}
    </div>
  );
};

export default About;
