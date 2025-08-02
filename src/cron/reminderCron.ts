import cron from "node-cron";
import { sendTaskAssignedEmail } from "../utils/email";

import ProjectModel from "../models/project.model";
import TaskModel from "../models/task.model";
import UserModel from "../models/user.model";
import dayjs from "dayjs";

// Run every day at 8 AM — change to "* * * * *" for every minute while testing
cron.schedule("0 8 * * *", async () => {
  console.log("[CRON] Checking tasks for due date reminders...");

  const tomorrow = dayjs().add(1, "day").startOf("day");
  const dayAfter = tomorrow.endOf("day");

  const tasksDueTomorrow = await TaskModel.find({
    dueDate: {
      $gte: tomorrow.toDate(),
      $lte: dayAfter.toDate(),
    },
  });

  for (const task of tasksDueTomorrow) {
    const assignedUser = await UserModel.findById(task.assignedTo);
    const project = await ProjectModel.findById(task.project);
    const sender = await UserModel.findById(task.createdBy);

    if (
      assignedUser?.email &&
      project?.name &&
      sender?.email &&
      sender?.name &&
      assignedUser.name
    ) {
      await sendTaskAssignedEmail({
        to: assignedUser.email,
        userName: assignedUser.name,
        taskTitle: task.title,
        projectName: project.name,
        dueDate: dayjs(task.dueDate).format("DD MMM YYYY"),
        templateId: 7, // Replace with your actual Brevo template ID
        senderEmail: sender.email,
        senderName: sender.name,
      });

      console.log(`[EMAIL] Reminder sent to ${assignedUser.email}`);
    }
  }
});
