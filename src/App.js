import { connect } from "react-redux";
import { ping } from "./redux/actions";

const App = ({ping, pingEpic}) => {
  return (
    <div>
      <h1>is pinging: {ping.toString()}</h1>
    <button onClick={pingEpic}>Start PING</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  ping: state.isPinging,
});

const mapDispatchToProps = (dispatch) => ({
  pingEpic: () => dispatch(ping())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
