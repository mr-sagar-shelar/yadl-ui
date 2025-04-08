import type { Meta, StoryObj } from "@storybook/react";
import EKSDistro from "../EKSDistro";

const meta: Meta<typeof EKSDistro> = { title: "AWS/Containers/EKSDistro", component: EKSDistro };

export default meta;
type Story = StoryObj<typeof EKSDistro>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
