export function incrementCounter(args) {
  return function(dispatch, getState) {
    let url = `/counters/${args.id}`

    $.ajax({
      type: 'PUT',
      url: url
    }).
      success((res) => {
        dispatch(counterIncremented(res.count))
      })
  }
}
