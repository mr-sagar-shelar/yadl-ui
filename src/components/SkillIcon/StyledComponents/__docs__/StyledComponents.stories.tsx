import type { Meta, StoryObj } from "@storybook/react";
import StyledComponents from "../StyledComponents";

const meta: Meta<typeof StyledComponents> = { title: "SkillIcon/StyledComponents", component: StyledComponents };

export default meta;
type Story = StoryObj<typeof StyledComponents>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
