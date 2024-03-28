import CardUserComponent from "@/components/cards/CardUserComponent";
import { UserType } from "@/types/users";
import { Suspense } from "react";
import LoadingComponent from "./loading";

async function fetchUser() {
  const user = await fetch("https://dummyjson.com/users?limit=20", {
    cache: "no-store"
  });
  const res = await user.json();
  return res.users;
}

export default async function Home() {
  const user = await fetchUser();

  return (
    <>
       <div className=" mt-4 ">
       <h2 className="font-bold text-center text-large">This is font Poppins</h2>
      ​​ <h2 className="font-bold text-center text-large">ប្រភេទ font កន្ទុយរុយប្រូ</h2>
        
       </div>
      <div className="mt-10 flex justify-center flex-wrap gap-5">
        <Suspense fallback={<LoadingComponent/>} >
        {user?.map((user: UserType) => (
          <CardUserComponent
            image={user.image}
            firstName={user.firstName}
            key={user.id}
          />
        ))}
        </Suspense>
      </div>
    </>
  );
}

