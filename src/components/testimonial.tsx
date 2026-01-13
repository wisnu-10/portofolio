import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

interface User {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
  location: {
    city: string;
    country: string;
  };
}

const Testimonial = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  // Predefined testimonials to pair with random users
  const feedbacks = [
    "Wisnu is an exceptional developer who consistently delivers high-quality code. His understanding of fullstack development is impressive.",
    "Working with Wisnu was a pleasure. He is proactive, communicative, and solved complex backend challenges with ease.",
    "I was amazed by the frontend implementation. usage of modern technologies and attention to detail resulted in a sleek, responsive user interface.",
  ];

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=3");
        const data = await response.json();
        setUsers(data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">Loading testimonials...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-surface">
      <div className="container mx-auto">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white animate-fade-in-up">
            Client <span className="text-blue-500">Testimonials</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg animate-fade-in-up delay-100">
            See what others have to say about their experience working with me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {users.map((user, index) => (
            <div
              key={index}
              className="bg-black p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition-all duration-300 relative group"
            >
              <div className="flex flex-col gap-6">
                {/* Stars */}
                <div className="flex gap-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-sm" />
                  ))}
                </div>

                <p className="text-gray-300 leading-relaxed italic">
                  "{feedbacks[index]}"
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-gray-800">
                  <img
                    src={user.picture.large}
                    alt={`${user.name.first} ${user.name.last}`}
                    className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
                  />
                  <div>
                    <h4 className="text-white font-bold text-sm">
                      {user.name.first} {user.name.last}
                    </h4>
                    <p className="text-blue-500 text-xs">
                      {user.location.city}, {user.location.country}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
