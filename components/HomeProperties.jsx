import properties from "@/properties.json";
import Link from "next/link";

const HomeProperties = () => {
  const recentProperties = properties.slice(0, 3);
  return (
    <>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto px-4 py-6">
          <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
            Recent Tasks
          </h2>
          {properties.length === 0 ? (
            <p>No properties found</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentProperties.map((property) => (
                <div key={property._id}>{property.name}</div>
              ))}
            </div>
          )}
        </div>
      </section>
      <section className="m-auto max-w-lg my-6 px-10">
        <div className="flex justify-center items-center">
          <Link
            href="/tasks"
            className="block bg-black text-white text-center py-4 px-4 rounded-lg hover:bg-gray-500"
          >
            View All Tasks
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomeProperties;
