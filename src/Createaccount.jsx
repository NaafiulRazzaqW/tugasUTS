import { useNavigate } from "react-router-dom";


function Createaccount() {
    const navigate = useNavigate()

    return (
  
      <div>
        <div className="flex justify-start">
          <h3> <b> Create Account-Register</b></h3>
          <br />
          <br />
        </div>
        <div className="flex justify-center ">
          <div className="w-96 h-[510px] bg-auto bg-blue-700 border-2 border-stone-400 flex justify-end text-right px-1">
            Your Name:
            <br />
            E-mail ID:
            <br />
            Alternate E-mail ID:
            <br />
            <br />
            <br />
            Your Phone:
            <br />
            Mobile Phone:
            <br />
            Your Portal Address:
            <br />
            <br />
            <br />
            Country:
            <br />
            Password:
            <br />
            Re-Enter-Password:

          </div>
  
          <div className="w-96 h-[510px] bg-auto border-l-0 b border-2 border-stone-400 ">
            <form>
              <label>
                <input type="text" className="flex justify-end border-2 border-stone-400" />
              </label>
            </form>
            <form>
              <label>
                <input type="text" className="flex justify-end border-2 border-stone-400" />
              </label>
            </form>
            <form>
              <label>
                <input type="text" className="flex justify-end border-2 border-stone-400" />
              </label>
            </form>
            Country Code------
            <div className="flex row">
            <form>
              <label>
                <input type="text" className="flex justify-end border-2 border-stone-400 w-[130px]" />
              </label>
            </form>
            <form>
              <label>
                <input type="text" className="flex justify-end border-2 border-stone-400 ml-1 w-[130px]" />
              </label>
            </form>
            <form>
              <label>
                <input type="text" className="flex justify-end border-2 border-stone-400 ml-1 w-[110px]" />
              </label>
            </form>
            </div>
            
            <label className="flex justify-start">
              <input type="checkbox" />
              Save my email and password
            </label>
            <div className="flex justify-start ml-2">
            <button onClick = {() => navigate('/Createaccount')} className="bg-slate-200 w-[130px] rounded-md">
              Continue
            </button>
            <button className="bg-slate-200 w-[130px] rounded-md ml-3">
              Reset
            </button>
            </div>
            
  
          </div>
  
        </div>
      </div>
  
    );
  }
  
  export default Createaccount;