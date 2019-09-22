import React from "react"
import { connect } from "react-redux"

let Loading = ({ loading }) => loading && <div>loading</div>

const mapStateToProps = state => ({
  loading: state.todo.loading
})

Loading = connect(
  mapStateToProps,
  null
)(Loading)

export default Loading
