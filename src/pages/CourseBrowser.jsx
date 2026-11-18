import React from 'react'

const courses = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    instructor: "Sarah Chen",
    category: "Technology",
    schedule: "Mon 10 AM, Wed 10 AM, Fri 10 AM",
    price: "$149/mo",
    students: 342,
    rating: 4.9,
    duration: "12 weeks",
    live: true,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=200&fit=crop"
  },
  {
    id: 2,
    title: "Digital Art Fundamentals",
    instructor: "Marcus Rivera",
    category: "Art & Design",
    schedule: "Tue 2 PM, Thu 2 PM",
    price: "$99/mo",
    students: 218,
    rating: 4.7,
    duration: "8 weeks",
    live: false,
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=200&fit=crop"
  },
  {
    id: 3,
    title: "Machine Learning Bootcamp",
    instructor: "Dr. Aisha Patel",
    category: "Technology",
    schedule: "Mon 7 PM, Wed 7 PM, Sat 9 AM",
    price: "$199/mo",
    students: 567,
    rating: 4.8,
    duration: "16 weeks",
    live: true,
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=200&fit=crop"
  },
  {
    id: 4,
    title: "Music Production Masterclass",
    instructor: "DJ Nova",
    category: "Music",
    schedule: "Tue 4 PM, Fri 4 PM",
    price: "$129/mo",
    students: 289,
    rating: 4.9,
    duration: "10 weeks",
    live: false,
    image: "https://images.unsplash.com/photo-1511379938547-c1f694b0e1d4?w=400&h=200&fit=crop"
  },
];

const categories = ["All", "Technology", "Art & Design", "Music", "Writing"];

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredCourses = selectedCategory === "All"
    ? courses
    : courses.filter(course => course.category === selectedCategory);

  return (
    <section id="courses" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Browse Our Courses</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Find the perfect course to advance your skills and career.
          </p>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Course grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredCourses.map(course => (
            <div key={course.id} className="card-hover bg-white rounded-xl border border-gray-200 overflow-hidden">
              {/* Course image */}
              {course.image && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  {course.live && (
                    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      LIVE
                    </span>
                  )}
                </div>
              )}

              {/* Course info */}
              <div className="p-6">
                <div className="text-sm text-purple-600 mb-2">{course.category}</div>
                <h3 className="font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{course.instructor}</p>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <span>⭐ {course.rating}</span>
                  <span>👥 {course.students}</span>
                  <span>⏱️ {course.duration}</span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="font-bold text-purple-600">{course.price}</span>
                  <button className="btn-primary px-5 py-2 text-sm font-semibold">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-16 text-gray-500">
            No courses found for this category.
          </div>
        )}
      </div>
    </section>
  );
}
