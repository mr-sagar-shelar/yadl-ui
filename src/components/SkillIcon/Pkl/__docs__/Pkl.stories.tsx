import type { Meta, StoryObj } from "@storybook/react";
import Pkl from "../Pkl";

const meta: Meta<typeof Pkl> = { title: "SkillIcon/Pkl", component: Pkl };

export default meta;
type Story = StoryObj<typeof Pkl>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
