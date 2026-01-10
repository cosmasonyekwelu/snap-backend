import Planning from "../models/Planning.js";

export const planningService = {
  createPlanning(data) {
    return Planning.create(data);
  },

  getAll(userId) {
    return Planning.find({ owner: userId }).sort({ createdAt: -1 });
  },

  getById(id, userId) {
    return Planning.findOne({ _id: id, owner: userId });
  },

  update(id, userId, payload) {
    return Planning.findOneAndUpdate(
      { _id: id, owner: userId },
      payload,
      { new: true }
    );
  },

  delete(id, userId) {
    return Planning.findOneAndDelete({ _id: id, owner: userId });
  },
};
