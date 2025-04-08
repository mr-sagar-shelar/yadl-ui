import type { Meta, StoryObj } from "@storybook/react";
import InThought from "../InThought";

const meta: Meta<typeof InThought> = { title: "unDraw/InThought", component: InThought };

export default meta;
type Story = StoryObj<typeof InThought>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
