exports.onCreateBabelConfig = ({ actions, reporter }) => {
  actions.setBabelPlugin({
    name: require.resolve("@babel/plugin-proposal-optional-chaining")
  })
  reporter.success("Optional chaining available")
}
