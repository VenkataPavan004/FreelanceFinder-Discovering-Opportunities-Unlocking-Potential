const Project = require("../models/Project");

/* =========================
   CREATE PROJECT (CLIENT)
========================= */
exports.createProject = async (req, res) => {
  try {
    console.log("Creating project for user:", req.user);

    const { title, description, budget, skills } = req.body;

    const project = await Project.create({
      clientId: req.user._id,
      title,
      description,
      budget,
      skills,
      status: "Open"
    });

    console.log("Project created:", project);

    res.status(201).json(project);
  } catch (error) {
    console.error("Create Project Error:", error);
    res.status(500).json({ message: error.message });
  }
};

/* =========================
   GET PROJECTS (CLIENT)
========================= */
exports.getProjects = async (req, res) => {
  try {
    console.log("USER:", req.user);

    let projects;

    if (req.user.userType === "client") {
      console.log("Client requesting projects");
      projects = await Project.find({ clientId: req.user._id });
    }

    if (req.user.userType === "freelancer") {
      console.log("Freelancer requesting projects");
      projects = await Project.find(); // 🔥 temporarily remove filter
    }

    console.log("PROJECTS FOUND:", projects.length);

    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
