import type { Meta, StoryObj } from "@storybook/react";
import WorkingFromAnywhere from "../WorkingFromAnywhere";

const meta: Meta<typeof WorkingFromAnywhere> = { title: "unDraw/WorkingFromAnywhere", component: WorkingFromAnywhere };

export default meta;
type Story = StoryObj<typeof WorkingFromAnywhere>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
