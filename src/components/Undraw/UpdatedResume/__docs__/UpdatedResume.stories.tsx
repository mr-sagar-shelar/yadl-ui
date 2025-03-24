import type { Meta, StoryObj } from "@storybook/react";
import UpdatedResume from "../UpdatedResume";

const meta: Meta<typeof UpdatedResume> = { title: "unDraw/UpdatedResume", component: UpdatedResume };

export default meta;
type Story = StoryObj<typeof UpdatedResume>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
