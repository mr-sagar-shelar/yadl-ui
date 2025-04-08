import type { Meta, StoryObj } from "@storybook/react";
import WorkMail from "../WorkMail";

const meta: Meta<typeof WorkMail> = { title: "AWS/BusinessApplications/WorkMail", component: WorkMail };

export default meta;
type Story = StoryObj<typeof WorkMail>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
