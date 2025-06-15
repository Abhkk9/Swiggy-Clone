import ClassCompUser from "./ClassCompUser"
import react from "react";
class AboutUs extends react.Component {
  constructor(props) {
    super(props);
  console.log("Parent Constructor");}
    render() {
      console.log("Parent rendered");
    return (
      <div>
       About Us Page
       <ClassCompUser name="First child" age={30} />
       <ClassCompUser name="Second child" age={30} />
     </div>
    )
    }
    componentDidMount(){
      console.log("Parent AboutUs Component Mounted");
    }
    componentDidUpdate(prevProps, prevState) {
      console.log(this.props.name,"Parent Component Updated");
    }
  }

export default AboutUs
// const AboutUs = () => {
//   return (
//     <div>
//       About Us Page
//       <ClassCompUser name="John Doe" age={30} />
//     </div>
//   )
// }