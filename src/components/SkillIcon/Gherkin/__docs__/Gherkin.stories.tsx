import type { Meta, StoryObj } from "@storybook/react";
import Gherkin from "../Gherkin";

const meta: Meta<typeof Gherkin> = { title: "SkillIcon/Gherkin", component: Gherkin };

export default meta;
type Story = StoryObj<typeof Gherkin>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
