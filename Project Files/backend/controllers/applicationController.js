const Application = require("../models/Application");
const Project = require("../models/Project");

// Apply to project
exports.applyToProject = async (req, res) => {
  const { projectId, proposal, bidAmount } = req.body;

  if (req.user.userType !== "freelancer") {
    return res.status(403).json({ message: "Only freelancers can apply" });
  }

  const existingApplication = await Application.findOne({
    projectId,
    freelancerId: req.user._id,
  });

  if (existingApplication) {
    return res.status(400).json({ message: "Already applied" });
  }

  const application = await Application.create({
    projectId,
    freelancerId: req.user._id,
    proposal,
    bidAmount,
  });

  res.status(201).json(application);
};


// ✅ NEW — Get all applications (for dashboard)
exports.getAllApplications = async (req, res) => {
  try {
    const applications = await Application.find()
      .populate("freelancerId", "username email")
      .populate("projectId", "title");

    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get applications for a project (client view)
exports.getApplicationsByProject = async (req, res) => {
  const applications = await Application.find({
    projectId: req.params.projectId
  }).populate("freelancerId", "username email");

  res.json(applications);
};

// Accept application
exports.acceptApplication = async (req, res) => {
  const application = await Application.findById(req.params.id);

  if (!application) {
    return res.status(404).json({ message: "Application not found" });
  }

  application.status = "Accepted";
  await application.save();

  await Project.findByIdAndUpdate(application.projectId, {
    status: "In Progress"
  });

  res.json({ message: "Application accepted" });
};

exports.getMyApplications = async (req, res) => {
  try {
    const applications = await Application.find({
      freelancerId: req.user._id,
    });

    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
