import type { Meta, StoryObj } from "@storybook/react";
import EFS from "../EFS";

const meta: Meta<typeof EFS> = { title: "AWS/Storage/EFS", component: EFS };

export default meta;
type Story = StoryObj<typeof EFS>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
