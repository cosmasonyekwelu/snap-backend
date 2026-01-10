import { planningService } from "../services/planning.service.js";

export const planningController = {
  async create(req, res) {
    const planning = await planningService.createPlanning({
      ...req.body,
      owner: req.user.id,
    });

    res.status(201).json({
      success: true,
      data: planning,
    });
  },

  async getAll(req, res) {
    const plans = await planningService.getAll(req.user.id);

    res.json({
      success: true,
      data: plans,
    });
  },

  async getOne(req, res) {
    const plan = await planningService.getById(
      req.params.id,
      req.user.id
    );

    if (!plan) {
      return res.status(404).json({ message: "Planning not found" });
    }

    res.json({ success: true, data: plan });
  },

  async update(req, res) {
    const plan = await planningService.update(
      req.params.id,
      req.user.id,
      req.body
    );

    if (!plan) {
      return res.status(404).json({ message: "Planning not found" });
    }

    res.json({ success: true, data: plan });
  },

  async remove(req, res) {
    const plan = await planningService.delete(
      req.params.id,
      req.user.id
    );

    if (!plan) {
      return res.status(404).json({ message: "Planning not found" });
    }

    res.json({ success: true, message: "Planning deleted" });
  },
};
