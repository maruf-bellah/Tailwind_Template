import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../features/common/headerSlice";
import { Link } from "react-router-dom";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "" }));
  }, []);

  return (
    <div className='hero h-4/5 bg-base-200'>
      <div className='hero-content'>
        <div className='max-w-full text-center'>
          <div>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQLkwiGvr8AVzcZpvYsTnZdmiwefHdw5VFdMjudAlf4QJH5dHolywoDWuFxfhYr1RMA9A&usqp=CAU'
              alt='Dashwind Admin Template'
              className='w-full h-full object-cover'></img>
          </div>
          <Link to='/app/dashboard'>
            <button className='btn btn-sm mt-5  bg-base-100 btn-outline'>
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default InternalPage;
