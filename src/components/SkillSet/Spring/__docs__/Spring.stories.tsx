import type { Meta, StoryObj } from "@storybook/react";
import Spring from "../Spring";

const meta: Meta<typeof Spring> = { title: "SkillSet/Spring", component: Spring };

export default meta;
type Story = StoryObj<typeof Spring>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
