import type { Meta, StoryObj } from "@storybook/react";
import WorkFromAnywhere from "../WorkFromAnywhere";

const meta: Meta<typeof WorkFromAnywhere> = { title: "unDraw/WorkFromAnywhere", component: WorkFromAnywhere };

export default meta;
type Story = StoryObj<typeof WorkFromAnywhere>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
