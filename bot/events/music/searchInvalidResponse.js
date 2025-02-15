module.exports = {
  name: "searchInvalidResponse",
  run: async (message, query, tracks, content, collector) => {
    if (content === "cancel") {
      collector.stop();
      return await message.channel.sendSuccesss(
        message,
        "Selection Cancelled.",
        `The selection has successfully been cancelled.`
      );
    } else
      message.channel.sendError(
        message,
        "Please Choose a Valid Number.",
        `Please choose a valid number between **1** and **${tracks.length}**.`
      );
  },
};
