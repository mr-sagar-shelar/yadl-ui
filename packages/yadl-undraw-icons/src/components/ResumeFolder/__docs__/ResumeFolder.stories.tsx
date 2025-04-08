import type { Meta, StoryObj } from "@storybook/react";
import ResumeFolder from "../ResumeFolder";

const meta: Meta<typeof ResumeFolder> = { title: "unDraw/ResumeFolder", component: ResumeFolder };

export default meta;
type Story = StoryObj<typeof ResumeFolder>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
