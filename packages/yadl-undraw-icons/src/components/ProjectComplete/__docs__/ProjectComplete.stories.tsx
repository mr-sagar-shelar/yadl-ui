import type { Meta, StoryObj } from "@storybook/react";
import ProjectComplete from "../ProjectComplete";

const meta: Meta<typeof ProjectComplete> = { title: "unDraw/ProjectComplete", component: ProjectComplete };

export default meta;
type Story = StoryObj<typeof ProjectComplete>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
