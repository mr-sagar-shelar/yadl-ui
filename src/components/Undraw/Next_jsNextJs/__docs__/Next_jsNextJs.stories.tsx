import type { Meta, StoryObj } from "@storybook/react";
import Next_jsNextJs from "../Next_jsNextJs";

const meta: Meta<typeof Next_jsNextJs> = { title: "unDraw/Next_jsNextJs", component: Next_jsNextJs };

export default meta;
type Story = StoryObj<typeof Next_jsNextJs>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
