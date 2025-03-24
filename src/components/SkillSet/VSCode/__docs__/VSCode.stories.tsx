import type { Meta, StoryObj } from "@storybook/react";
import VSCode from "../VSCode";

const meta: Meta<typeof VSCode> = { title: "SkillSet/VSCode", component: VSCode };

export default meta;
type Story = StoryObj<typeof VSCode>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
