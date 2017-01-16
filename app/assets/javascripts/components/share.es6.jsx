export default class Share extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showIcons: false
    }
  }

  toggleIcons() {
    this.setState({showIcons: !this.state.showIcons})
  }

  render() {
    return (
      <div className="share" onClick={this.toggleIcons.bind(this)}>
        Share
        {this.state.showIcons
          ? <div className="share__icons">icons</div>
          : null
        }
      </div>
    )
  }
}
