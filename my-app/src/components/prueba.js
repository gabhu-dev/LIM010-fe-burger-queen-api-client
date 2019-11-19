import React from "react";
import { RotateSpinner } from "react-spinners-kit";
const Loader = ({loading,show}) =>{
  // const loading = useState(true)
    return (
      <div className= {show}>
        <RotateSpinner
            size={30}
            color="#686769"
            loading={loading}
        />
        </div>
    );
}
export default Loader;