import type { Meta, StoryObj } from "@storybook/react";
import Ansible from "../Ansible";

const meta: Meta<typeof Ansible> = { title: "SkillSet/Ansible", component: Ansible };

export default meta;
type Story = StoryObj<typeof Ansible>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
