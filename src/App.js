import logo from './logo.svg';
import './App.css';
import { ReactComponent as ArrowDown } from './assets/arrow-down.svg';

function App() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex flex-col w-[400px] h-[400px] ">


        <div className="flex rounded bg-gray-700 text-white justify-center items-center p-[10px]">
          $167 still needed for this project
        </div>

        <div className=" flex h-[20px] mt-[-5px]">
            <div className="mr-[230px] bg-black" />
            <ArrowDown/>
        </div>

        <div className="flex h-[20px] border-[#D7D7D7] border">
          <div className="bg-orange-600 border-[#D7D7D7] w-3/5"></div>
        </div>

        <div className="rounded-b-lg border-[#D7D7D7] border flex-col p-[10px] mb-[20px]">
          
          <div className="flex flex-row mb-[20px]">
            <div className="text-orange-600 mr-[3px] font-bold">Only 3 days left </div>
            <div className="font-bold text-[#858181]">to fund this project</div>
          </div>

          <div className="mb-[20px] font-semibold text-[#858181]">
            Join the 42 other donors who have already supported this project. Every dollar helps
          </div>

          <div className="flex flex-row">
            <div className="flex border-[#D7D7D7] border items-center justify-center mr-[10px] rounded">
              <div className="flex text-3xl">$</div>
              <input className="flex focus:outline-none text-lg"/>
            </div>
            
            <button className="flex bg-green-500 p-[20px] text-white rounded">Give Now</button>
          </div>

        </div>

        <div className="flex h-[50px] justify-center">
          <button className="flex w-full border-[#D7D7D7] border  mr-[20px] justify-center items-center shadow-lg text-gray-600 font-semibold">
            Save for later
          </button>
          <button className="flex w-full  border-[#D7D7D7] border justify-center items-center shadow-lg text-gray-600 font-semibold">
            Tell your friends
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
