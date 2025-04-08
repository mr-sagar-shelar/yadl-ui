import type { Meta, StoryObj } from "@storybook/react";
import Neptune from "../Neptune";

const meta: Meta<typeof Neptune> = { title: "AWS/Database/Neptune", component: Neptune };

export default meta;
type Story = StoryObj<typeof Neptune>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
