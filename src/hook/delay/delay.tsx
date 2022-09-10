import { Component } from "react";
import { Link, Navigate } from "react-router-dom";
class DelayedLink extends Component {
  declare props: any;

  state = {
    delay: 1430,
    t: false,
  };

  handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    window.setTimeout(() => this.setState({ t: true }), this.state.delay);
  };

  render() {
    const { delay, t } = this.state;
    const { to, label } = this.props;
    return t ? (
      <Navigate to={to} />
    ) : (
      <Link onClick={this.handleClick} to={to}>
        {this.props.label}
      </Link>
    );
  }
}

export default DelayedLink;
