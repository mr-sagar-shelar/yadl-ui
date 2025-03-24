import type { Meta, StoryObj } from "@storybook/react";
import DataProcessing from "../DataProcessing";

const meta: Meta<typeof DataProcessing> = { title: "unDraw/DataProcessing", component: DataProcessing };

export default meta;
type Story = StoryObj<typeof DataProcessing>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
