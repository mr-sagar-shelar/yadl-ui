import type { Meta, StoryObj } from "@storybook/react";
import PrivateData from "../PrivateData";

const meta: Meta<typeof PrivateData> = { title: "unDraw/PrivateData", component: PrivateData };

export default meta;
type Story = StoryObj<typeof PrivateData>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
