// import * as Brevo from "@getbrevo/brevo"; // use `* as` syntax

// const apiInstance = new Brevo.TransactionalEmailsApi();

// // Set API Key
// apiInstance.setApiKey(
//   Brevo.TransactionalEmailsApiApiKeys.apiKey,
//   process.env.BREVO_API_KEY!
// );

// export const sendTaskAssignedEmail = async ({
//   to,
//   taskTitle,
//   projectName,
//   dueDate,
// }: {
//   to: string;
//   taskTitle: string;
//   projectName: string;
//   dueDate?: string;
// }) => {
//   await apiInstance.sendTransacEmail({
//     subject: `You've been assigned a new task: ${taskTitle}`,
//     sender: { name: "Efficio Team", email: "no-reply@efficio.app" }, // must be verified in Brevo
//     to: [{ email: to }],
//     htmlContent: `<p>Hello,</p>
//       <p>You have been assigned a new task in project <strong>${projectName}</strong>.</p>
//       <p><strong>Task:</strong> ${taskTitle}</p>
//       <p><strong>Due Date:</strong> ${dueDate ?? "Not specified"}</p>`,
//   });
// };

import * as Brevo from "@getbrevo/brevo";
import { TransactionalEmailsApi } from "@getbrevo/brevo";

const apiInstance = new TransactionalEmailsApi();

apiInstance.setApiKey(
  Brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY!
);

export const sendTaskAssignedEmail = async ({
  to,
  userName,
  taskTitle,
  projectName,
  dueDate,
  templateId,
  senderEmail,
  senderName,
}: {
  to: string;
  userName: string;
  taskTitle: string;
  projectName: string;
  dueDate?: string;
  templateId: number;
  senderEmail: string;
  senderName: string;
}) => {
  await apiInstance.sendTransacEmail({
    templateId,
    sender: { name: senderName, email: senderEmail },
    to: [{ email: to, name: userName }],
    params: {
      USER_NAME: userName,
      PROJECT_NAME: projectName,
      TASK_TITLE: taskTitle,
      DUE_DATE: dueDate ?? "Not specified",
      SENDER_NAME: senderName,
      APP_LINK: "https://localhost:5174", // 🔁 Replace with production URL later
    },
  });
};
