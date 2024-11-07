// "use client";
// import {
//   useRouter,
//   useParams,
//   useSearchParams,
//   usePathname,
// } from "next/navigation";

const taskpage = ({ params }) => {
  //   const router = useRouter();
  //   const params = useParams();
  //   const searchParams = useSearchParams();
  //   const pathname = usePathname();
  return (
    <div>
      {
        /* <h1 className="text-3xl">Task {params.id} Page</h1>
      <h1 className="text-3xl">Task {searchParams.get("name")} Page</h1>
      <h1 className="text-3xl">Task {pathname} Page</h1>
      <button onClick={() => router.replace("/")}>Go Home</button> */
        <h1 className="text-3xl">Task {params.id} Page</h1>
      }
    </div>
  );
};

export default taskpage;
