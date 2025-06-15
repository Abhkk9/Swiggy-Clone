import react from "react";

class ClassCompUser extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      age: props.id,
    };
    this.state = {
      count: 0,
      users: [],
    };
    console.log(this.props.name, "child Component Constructor");
  }

  render() {
    const { name, age } = this.props;
    console.log(this.props.name, "child Component Rendered");

    return (
      <div className="user">
        <h1>Class Component User</h1>
        <p>Name: {this.state.users[0]?.name} </p>
        <button
          className="count"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          Increment
        </button>

        <p>count: {this.state.count}</p>
      </div>
    );
  }
  async componentDidMount() {
    console.log(this.props.name, "Child AboutUs Component Mounted");
    let data = await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ users: data });
        this.timer = setInterval(() => {
          console.log("Interval running");
        }, 1000);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(this.props.name, "Child Component Updated");
  }
  componentWillUnmount() {
    console.log(
      this.props.name,
      "Child Component Unmounted  component is changed"
    );
    clearInterval(this.timer);
  }
}
export default ClassCompUser;
