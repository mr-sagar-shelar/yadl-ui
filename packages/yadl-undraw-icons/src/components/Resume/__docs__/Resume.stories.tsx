import type { Meta, StoryObj } from "@storybook/react";
import Resume from "../Resume";

const meta: Meta<typeof Resume> = { title: "unDraw/Resume", component: Resume };

export default meta;
type Story = StoryObj<typeof Resume>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
