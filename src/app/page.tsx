import { User, X, Mic, Smile, Camera, Images } from "lucide-react";

export default function Home() {
  return (
    <main className=" bg-gray-400  flex justify-center items-center h-screen">
      <section className="  min-w-[600px] bg-white text-black shadow-2xl rounded-md">
        <div className="p-10 flex flex-col">
          <div className="flex justify-between">
            <div className="flex justify-center items-center gap-4 ">
              <div className=" border-2  flex items-center justify-center border-solid border-red-500 shadow-neon rounded-full h-16 w-16 bg-gray-400">
                <User />
              </div>
              <div className="">
                <h1 className="font-medium text-xl">sherif ashraf</h1>
                <p className="text-gray-400 text-sm ">@shex</p>
              </div>
            </div>
            <div className="">
              <button>
                <X className=" h-5 w-5 text-gray-400" />
              </button>
            </div>
          </div>
          <div className="mt-12 flex flex-col">
            <div className="flex">
              <input
                type="text"
                className="w-full focus:outline-none"
                placeholder="Whats on Your Mind?"
              />
              <Mic className="h-4 w-4 text-gray-400" />
            </div>
            <div className="w-full border-0 border-b border-gray-300"></div>
            <div className="mt-4 flex justify-between">
              <div className="flex justify-between gap-4 ">
                <button>
                  <Camera className=" h-5 w-5 text-red-600" />
                </button>
                <button>
                  <Smile className=" h-5 w-5 text-red-600" />
                </button>
                <button>
                  <Images className=" h-5 w-5 text-red-600" />
                </button>
              </div>
              <button className="text-white shadow-md text-md px-7 py-1 mt-1 bg-red-600 rounded-md">
                Post
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
