export default function Navbar() {
  return (
    <div>
      <div className="flex items-center justify-between w-full h-16 p-4 px-20 font-light text-white bg-green-800">
        <div className="flex items-center justify-between w-1/3">
          <p className="text-2xl font-bold">Reeco</p>
          <p>Store</p>
          <p>Orders</p>
          <p>Analytics</p>
        </div>
        <div className="flex justify-end w-1/3">
          <p className="mr-10">Cart</p>
          <p>Hello, Ruchi Upadhyay ⮟</p>
        </div>
      </div>

      <div className="flex items-center justify-between w-full h-24 px-20 py-3 font-light bg-white shadow-lg">
        <div className="flex flex-col justify-between w-1/3 h-full ">
          <p className="">{`Orders > Order 32457ABC`}</p>
          <p className="text-2xl font-medium">Orders 32457ABC</p>
        </div>
        <div className="flex justify-end w-1/3 mt-auto">
          <div className="p-2 px-6 mr-8 font-semibold text-green-800 border border-green-800 rounded-full cursor-pointer hover:bg-green-800 hover:text-white">Back</div>
          <div className="p-2 px-6 text-white bg-green-800 rounded-full cursor-pointer">Approve order</div>
        </div>
      </div>
    </div>
  )
}
