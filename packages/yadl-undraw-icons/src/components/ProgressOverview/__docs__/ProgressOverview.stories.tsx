import type { Meta, StoryObj } from "@storybook/react";
import ProgressOverview from "../ProgressOverview";

const meta: Meta<typeof ProgressOverview> = { title: "unDraw/ProgressOverview", component: ProgressOverview };

export default meta;
type Story = StoryObj<typeof ProgressOverview>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
