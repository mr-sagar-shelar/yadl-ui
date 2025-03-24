import type { Meta, StoryObj } from "@storybook/react";
import Maven from "../Maven";

const meta: Meta<typeof Maven> = { title: "SkillSet/Maven", component: Maven };

export default meta;
type Story = StoryObj<typeof Maven>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
