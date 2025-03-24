import type { Meta, StoryObj } from "@storybook/react";
import Bash from "../Bash";

const meta: Meta<typeof Bash> = { title: "SkillSet/Bash", component: Bash };

export default meta;
type Story = StoryObj<typeof Bash>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
