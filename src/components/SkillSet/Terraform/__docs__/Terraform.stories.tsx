import type { Meta, StoryObj } from "@storybook/react";
import Terraform from "../Terraform";

const meta: Meta<typeof Terraform> = { title: "SkillSet/Terraform", component: Terraform };

export default meta;
type Story = StoryObj<typeof Terraform>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
