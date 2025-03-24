import type { Meta, StoryObj } from "@storybook/react";
import Chime from "../Chime";

const meta: Meta<typeof Chime> = { title: "AWS/BusinessApplications/Chime", component: Chime };

export default meta;
type Story = StoryObj<typeof Chime>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
