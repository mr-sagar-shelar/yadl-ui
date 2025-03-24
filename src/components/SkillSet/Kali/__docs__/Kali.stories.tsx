import type { Meta, StoryObj } from "@storybook/react";
import Kali from "../Kali";

const meta: Meta<typeof Kali> = { title: "SkillSet/Kali", component: Kali };

export default meta;
type Story = StoryObj<typeof Kali>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
