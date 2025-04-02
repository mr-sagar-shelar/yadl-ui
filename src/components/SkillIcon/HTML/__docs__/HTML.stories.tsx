import type { Meta, StoryObj } from "@storybook/react";
import HTML from "../HTML";

const meta: Meta<typeof HTML> = { title: "SkillIcon/HTML", component: HTML };

export default meta;
type Story = StoryObj<typeof HTML>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
