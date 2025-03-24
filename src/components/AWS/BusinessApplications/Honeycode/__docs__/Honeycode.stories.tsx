import type { Meta, StoryObj } from "@storybook/react";
import Honeycode from "../Honeycode";

const meta: Meta<typeof Honeycode> = { title: "AWS/BusinessApplications/Honeycode", component: Honeycode };

export default meta;
type Story = StoryObj<typeof Honeycode>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
